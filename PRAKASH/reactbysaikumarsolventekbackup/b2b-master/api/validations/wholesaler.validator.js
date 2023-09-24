const joi = require("joi");
const ApiError = require("../utility/ApiError");
const { orderItemsWithInvoiceTracking, orderItemWithPartialInvTracking } = require("../dao/order.dao");

const invoiceReqValidation = (req, res, next) => {
  const schema = joi.object({
    orderId: joi.string().required(),
    itemsToInvoice: joi.array().items(
      joi.object({
        orderedItemId: joi.string().required(),
        qtyToGenerateInv: joi
          .number()
          .min(1)
          .required()
          .messages({ "number.empty": "Must be minimum one" }),
      })
    ),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

const invoiceQtyValidation = async (req, res, next) => {
  try {
    const { itemsToInvoice, orderId } = req.body;
    const orderData = await orderItemsWithInvoiceTracking(
      orderId,
      req.userInfo.wholesaler.id
    );

    itemsToInvoice.forEach((itemRq) => {
      orderData?.ordered_items?.forEach((itemDb) => {
        if (itemRq.orderedItemId === itemDb.id) {
          const invoiceGeneratedQty = itemDb.partialInvoiceTracking
            ? itemDb.partialInvoiceTracking.invoiceGeneratedQty
            : 0;
          console.log("invoicegenqty", invoiceGeneratedQty);
          if (itemRq.qtyToGenerateInv > itemDb.quantity - invoiceGeneratedQty) {
            throw ApiError.badRequest(
              "Enter proper quantity to generate invoice"
            );
          }
        }
      });
    });
    next();
  } catch (error) {
    next(error);
  }
};

const stockValidation = async (req, res, next) => {
  try {

    const { itemsToInvoice } = req.body
    const dbRows = itemsToInvoice.map(item => {
      return orderItemWithPartialInvTracking(item.orderedItemId)
    })
    const dbData = await Promise.all(dbRows)
    dbData.forEach(dbItem => {
      itemsToInvoice.forEach(item => {
        if (dbItem.id === item.orderedItemId) {
          if (dbItem.wholesalerInventory.stock < item.qtyToGenerateInv) {
            throw ApiError.notFound(`${dbItem.wholesalerInventory.Drug_Name} has no enough quantity. Fill the stock to proceed!`)
          }
        }
      })
    })
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  invoiceReqValidation,
  invoiceQtyValidation,
  stockValidation
};
