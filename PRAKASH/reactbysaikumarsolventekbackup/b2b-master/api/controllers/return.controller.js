const {
  create,
  findByOrderId,
  bulkCreate,
  findAll,
  updatById,
} = require("../dao/common.dao");
const path = require("path");
const fs = require("fs");
const {
  getInvoices,
  getReturnItemDetails,
  checkReturnItem,
  fetchReturnItems,
  downloadReceiptQuery,
  fetchOrderAddress,
} = require("../dao/return.dao");
const ApiError = require("../utility/ApiError");

const {
  handleSuccessResponse,
  handleErrorResponse,
} = require("../utility/handleResponse");
const { RETURN_ERROR_MESSAGE } = require("../constant/sucessMessage");

require("dotenv").config();

const returnProducts = async (req, res, next) => {
  try {
    let { invoiceId, reason } = req.body;
    if (typeof invoiceId !== "object") {
      invoiceId = JSON.parse(invoiceId);
    }
    for (const iterator of invoiceId) {
      const getInvoice = await checkReturnItem("return_item", iterator.id);
      if (getInvoice == null) {
        let sumValue;
        let invoiceIds;
        let quantity;
        let wholesalerId;
        let finalSumValue = [];
        let discountSumValue = [];
        let totalPrice;
        let fetchOrderAddressId;
        for (const iterator of invoiceId) {
          const getInvoice = await getInvoices("invoiced_item", iterator.id);
          fetchOrderAddressId = await fetchOrderAddress(
            "invoice",
            getInvoice.dataValues.invoiceId
          );
          totalPrice = getInvoice.dataValues.amount;
          quantity = getInvoice.dataValues.quantity;
          invoiceIds = getInvoice.dataValues.invoiceId;
          wholesalerId =
            getInvoice.dataValues.wholesalerInventory.dataValues.id;
          sumValue =
            getInvoice.dataValues.wholesalerInventory.dataValues.unit__cost *
            getInvoice.dataValues.quantity;
          let discountValue =
            (sumValue / 100) *
            getInvoice.dataValues.wholesalerInventory.dataValues
              .discount_percentage;
          discountSumValue.push(discountValue);
          finalSumValue.push(sumValue);
        }
        const totalOrderValue = finalSumValue.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        const discount = discountSumValue.reduce(
          (partialSum, a) => partialSum + a,
          0
        );
        const orderSumValue = totalOrderValue - discount;
        // generate support ID
        let supportId;
        supportId = (function () {
          var guid = parseInt(Math.random() * 36);
          return function newGuid() {
            return (
              (guid++ % 36).toString(36).toUpperCase() +
              Math.random().toString(36).slice(2, 15).toUpperCase()
            );
          };
        })();
        supportId = supportId();

        const returnProductPayload = {
          totalQuantity: quantity,
          totalPrice: totalOrderValue,
          finalPrice: orderSumValue,
          discountPrice: discount,
          reason: reason,
          supportId: supportId,
          retailerId: req.userInfo.retailer.id,
          userId: req.userInfo.id,
          invoiceId: invoiceIds,
          orderAddressId: fetchOrderAddressId.dataValues.orderAddressId,
        };
        const storeReturnPayload = await create("return", returnProductPayload);
        const bulkImages = [];

        // Check if file is empty
        if (req.files.length === 0) {
          // Handle empty file
          return res
            .status(400)
            .send({ statusCode: 400, message: "File is empty." });
        }
        req.files.forEach((image) => {
          const returnImagePayload = {
            image: image.filename,
            returnId: storeReturnPayload.dataValues.id,
          };
          bulkImages.push(returnImagePayload);
        });
        await bulkCreate("return_item_image", bulkImages);

        let bulkReturnItems = [];
        for (const iterator of invoiceId) {
          const returnItems = await getInvoices("invoiced_item", iterator.id);
          const returnItemsPayload = {
            wholesalerInventoryId: returnItems.dataValues.wholesalerInventoryId,
            quantity: returnItems.dataValues.quantity,
            orderItemTotal: returnItems.dataValues.orderItemTotal,
            returnId: storeReturnPayload.dataValues.id,
            invoicedItemId: returnItems.dataValues.id,
          };
          bulkReturnItems.push(returnItemsPayload);
        }
        await bulkCreate("return_item", bulkReturnItems);
        const responsePayload = {
          timeStamp: storeReturnPayload.dataValues.createdAt,
          supportId: supportId,
        };
        return handleSuccessResponse(
          res,
          responsePayload,
          "return product successfully"
        );
      } else if (getInvoice.dataValues.id) {
        throw ApiError.badRequest(RETURN_ERROR_MESSAGE);
      }
    }
  } catch (error) {
    next(error);
  }
};

const getReturnOrderDetails = async (req, res, next) => {
  try {
    const { return_id } = req.query;
    const getReturnOrderDetails = await getReturnItemDetails(
      "return",
      return_id
    );
    if (getReturnOrderDetails === null) {
      return handleErrorResponse(res, "This Return item is not available");
    } else {
      const imagePaths = getReturnOrderDetails.return_item_images.map(
        (imageData) => {
          return imageData.image;
        }
      );

      const images = imagePaths.map((imagePath) => {
        const image = fs.readFileSync(
          path.join(__basedir, `public/uploads/images/${imagePath}`)
        );
        return Buffer.from(image).toString("base64");
      });
      getReturnOrderDetails.dataValues.items =
        getReturnOrderDetails.dataValues.return_items;
      delete getReturnOrderDetails.dataValues.return_items;
      getReturnOrderDetails.dataValues.images = images;
      handleSuccessResponse(
        res,
        getReturnOrderDetails,
        "Data with images fetched successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

const returnDownloadReceipt = async (req, res, next) => {
  try {
    const { return_id } = req.query;
    const getReturnItems = await await downloadReceiptQuery(
      "return",
      return_id
    );
    console.log(getReturnItems);
    return handleSuccessResponse(
      res,
      getReturnItems,
      "Return items feteched successfully"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  returnProducts,
  getReturnOrderDetails,
  returnDownloadReceipt,
};
