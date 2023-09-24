/* eslint-disable object-shorthand */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const moment = require("moment");
const {
  create,
  findByCondition,
  updateByCondition,
  updatById,
  findAll,
  deleteById,
} = require("../dao/common.dao");
const {
  orderItemWithPartialInvTracking,
  orderWithAddress,
} = require("../dao/order.dao");
const {
  handleSuccessResponse,
  handleErrorResponse,
  handleSuccessOrderResponse,
} = require("../utility/handleResponse");
const {
  orderById,
  invoicedItems,
  wholesalerOrders,
  getInvoicedItems,
  getInvoiceDetail,
  filterByDate,
  searchOrdersQuery,
  fetchCountWholesalers,
  fetchCountReturn,
  fetchInvoiceLength,
  retailersCount,
  wholesalerProfileDetails,
} = require("../dao/wholesaler.dao");
const prescriptionPDF = require("html-pdf");
const { decryptData } = require("../helpers/Encryption");
const { SUCCESS_UPDATE } = require("../constant/sucessMessage");
const ApiError = require("../utility/ApiError");
const { makePageObject, getSort } = require("../helpers/sortSearchPagination");
const {
  SALES_ORDER_ERROR_MESSAGE,
  SALES_ORDER_DATE,
  WHOLESALER_DASHBOARD,
  SEARCH_ORDER,
} = require("../constant/sucessMessage");

const orderDateByFilter = async (req, res, next) => {
  try {
    let { startDate, endDate } = req.query;
    if (startDate || endDate) {
      var CurrentDate = new Date();
      startDate = new Date(startDate);
      endDate = new Date(endDate);
      if (startDate > CurrentDate || endDate > CurrentDate) {
        throw ApiError.badRequest(SALES_ORDER_DATE);
      }
      const newDate = moment(startDate, "DD/MM/YYYY").format("YYYY-MM-DD");
      const oldDate = moment(endDate, "DD/MM/YYYY").format("YYYY-MM-DD");
      const timeValue = moment().format("HH:mm:ss");
      const { query } = req;
      const pageInfo = makePageObject(query);
      const sort = getSort(query, "order");
      const wholesalerOrdersList = await filterByDate(
        "order",
        newDate + " " + timeValue,
        oldDate + " " + "23:59:00",
        req.userInfo.wholesaler.id,
        pageInfo,
        sort
      );
      const orderData = [];
      wholesalerOrdersList.rows.forEach((order) => {
        let orderSum = 0;
        let itemSum = 0;
        order.ordered_items.forEach((orderItem) => {
          orderSum += orderItem.orderItemTotal;
          itemSum += orderItem.quantity;
        });
        orderData.push({
          id: order.id,
          orderUnique: order.orderUnique,
          itemQuantity: order.dataValues.ordered_items.length,
          orderDate: order.createdAt,
          totalAmount: orderSum,
          sumQuantity: itemSum,
          orderStatus: order.orderStatus,
        });
        orderSum = 0;
        itemSum = 0;
      });
      if (orderData == 0) {
        throw ApiError.badRequest("This Date range has no longer orders");
      }
      return handleSuccessOrderResponse(
        res,
        wholesalerOrdersList.count,
        orderData,
        "Sales Order details fetched successfully"
      );
    } else {
      const { query } = req;
      const pageInfo = makePageObject(query);
      const sort = getSort(query, "order");
      const retailerOrderItems = await wholesalerOrders(
        req.userInfo.wholesaler.id,
        pageInfo,
        sort
      );
      const orderData = [];
      retailerOrderItems.rows.forEach((order) => {
        let orderSum = 0;
        let itemSum = 0;
        order.ordered_items.forEach((orderItem) => {
          orderSum += orderItem.orderItemTotal;
          itemSum += orderItem.quantity;
        });
        orderData.push({
          id: order.id,
          orderUnique: order.orderUnique,
          itemQuantity: order.dataValues.ordered_items.length,
          orderDate: order.createdAt,
          totalAmount: orderSum,
          sumQuantity: itemSum,
          orderStatus: order.orderStatus,
        });
        orderSum = 0;
        itemSum = 0;
      });

      return handleSuccessOrderResponse(
        res,
        retailerOrderItems.count,
        orderData,
        "Sales Order details fetched successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

const getOneWholesaler = async (req, res, next) => {
  try {
    const getFilteredRetailerOrderDetails = await orderById(
      req.query,
      req.userInfo.wholesaler.id
    );
    // Ordered Items
    const orderedItemsArray = [];
    const itemsTotal = [];
    const discount = [];
    getFilteredRetailerOrderDetails.dataValues.ordered_items.forEach(
      (orderedItem) => {
        const obj = {
          id: orderedItem.id,
          Drug_Name:
            orderedItem.dataValues.wholesalerInventory.dataValues.Drug_Name,
          quantity: orderedItem.dataValues.quantity,
          unit__cost:
            orderedItem.dataValues.wholesalerInventory.dataValues.unit__cost,
          orderItemTotal: orderedItem.dataValues.orderItemTotal,
          fullfilledInvoiceQty: orderedItem.partialInvoiceTracking
            ? orderedItem.partialInvoiceTracking
            : 0,
          discount_percentage:
            orderedItem.dataValues.wholesalerInventory.dataValues
              .discount_percentage,
        };
        orderedItemsArray.push(obj);
        itemsTotal.push(orderedItem.dataValues.orderItemTotal);
        const discountedValue =
          (orderedItem.dataValues.orderItemTotal / 100) *
          orderedItem.dataValues.wholesalerInventory.dataValues
            .discount_percentage;
        discount.push(discountedValue);
      }
    );
    const orderValue = itemsTotal.reduce((partialSum, a) => partialSum + a, 0);
    const discountValue = discount.reduce((partialSum, a) => partialSum + a, 0);
    const finalValue = orderValue - discountValue;
    let add = [];

    let obj = {
      storeName: getFilteredRetailerOrderDetails.dataValues.orderAddress
        .dataValues.storeName
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .storeName
        : "null",
      address: getFilteredRetailerOrderDetails.dataValues.orderAddress
        .dataValues.address
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .address
        : "null",
      city: getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
        .city
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .city
        : "null",
      state: getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
        .state
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .state
        : "null",
      zipcode: getFilteredRetailerOrderDetails.dataValues.orderAddress
        .dataValues.zipcode
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .zipcode
        : "null",
      phoneNumber: getFilteredRetailerOrderDetails.dataValues.orderAddress
        .dataValues.phoneNumber
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .phoneNumber
        : "null",
      status: getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
        .status
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .status
        : "null",
      orderId: getFilteredRetailerOrderDetails.dataValues.orderAddress
        .dataValues.orderId
        ? getFilteredRetailerOrderDetails.dataValues.orderAddress.dataValues
            .orderId
        : "null",
    };
    add.push(obj);

    // final response
    const retailerOrderedItemsPayloadResponse = {
      id: getFilteredRetailerOrderDetails.dataValues.id,
      shippingMethod: getFilteredRetailerOrderDetails.dataValues.shippingMethod,
      shippingPrice: getFilteredRetailerOrderDetails.dataValues.shippingPrice,
      totalQuantity: getFilteredRetailerOrderDetails.dataValues.totalQuantity,
      totalPrice: orderValue,
      finalPrice: finalValue,
      discountPrice: discountValue,
      orderStatus: getFilteredRetailerOrderDetails.dataValues.orderStatus,
      paymentStatus: getFilteredRetailerOrderDetails.dataValues.paymentStatus,
      deliveryStatus: getFilteredRetailerOrderDetails.dataValues.deliveryStatus,
      orderUnique: getFilteredRetailerOrderDetails.dataValues.orderUnique,
      status: getFilteredRetailerOrderDetails.dataValues.status,
      createdAt: getFilteredRetailerOrderDetails.dataValues.createdAt,
      fullName: decryptData(
        getFilteredRetailerOrderDetails.retailer.dataValues.fullName
      ),
      address: add,
      mobileNo: decryptData(
        getFilteredRetailerOrderDetails.user.dataValues.mobileNo
      ),
      ordered_items: orderedItemsArray,
    };

    return handleSuccessResponse(
      res,
      retailerOrderedItemsPayloadResponse,
      "Retailer order detail fetched successfully"
    );
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const generateInvoice = async (req, res, next) => {
  try {
    //Random Integer for Invoice
    const getRandomId = (min = 0, max = 500000) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      const num = Math.floor(Math.random() * (max - min + 1)) + min;
      return num.toString().padStart(8, "0");
    };
    // Random String for Invoice
    const makeid = (length) => {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    };
    let invoiceUnique = makeid(5) + getRandomId();
    let pdfPath = "./public/uploads/" + invoiceUnique + ".pdf";
    const { orderId, itemsToInvoice } = req.body;

    const orderDetails = await orderWithAddress(orderId);

    const newInvoice = await create("invoice", {
      totalQuantity: 0,
      totalPrice: 0,
      finalPrice: 0,
      discountPrice: 0,
      orderStatus: "OrderPlaced",
      invoiceUnique,
      wholesalerId: req.userInfo.wholesaler.id,
      retailerId: orderDetails.retailerId,
      orderId: orderDetails.id,
      orderAddressId: orderDetails?.orderAddress?.id,
      pdfPath,
      userId: req.userInfo.id,
      orderUnique: orderDetails.orderUnique,
    });
    //invoiced item promise
    const createInvoicedItem = async (
      orderedItemId,
      qtyToGenerate,
      invoiceId
    ) => {
      //getting order item with partial invoice tracking
      const orderedItemData = await orderItemWithPartialInvTracking(
        orderedItemId
      );
      //creating invoice for item
      await create("invoiced_item", {
        quantity: qtyToGenerate,
        invoiceId,
        wholesalerInventoryId: orderedItemData.wholesalerInventoryId,
        orderItemTotal:
          orderedItemData.wholesalerInventory.unit__cost * qtyToGenerate,
      });

      //creating or updating partial invoice tracking table
      if (!orderedItemData.partialInvoiceTracking) {
        await create("partialInvoiceTracking", {
          invoiceGeneratedQty: qtyToGenerate,
          orderedItemId,
        });
      }
      if (orderedItemData.partialInvoiceTracking) {
        await updateByCondition(
          "partialInvoiceTracking",
          { id: orderedItemData.partialInvoiceTracking.id },
          {
            invoiceGeneratedQty:
              orderedItemData.partialInvoiceTracking.invoiceGeneratedQty +
              qtyToGenerate,
          }
        );
      }

      //updating wholesaler inventory table
      const inventoryData = await findByCondition("wholesalerInventory", {
        id: orderedItemData.wholesalerInventoryId,
      });
      inventoryData.stock -= qtyToGenerate;
      await inventoryData.save();
    };
    //end

    //executing item invoice creation function
    const createInvoicedItemPromises = itemsToInvoice.map((item) => {
      return createInvoicedItem(
        item.orderedItemId,
        item.qtyToGenerateInv,
        newInvoice.id
      );
    });
    await Promise.all(createInvoicedItemPromises);

    //invoiced item datas
    const invoicedItemsData = await invoicedItems({ id: newInvoice.id });

    //updating main invoice table
    const totalQuantity = invoicedItemsData.invoiced_items.length;
    let totalPrice = 0;
    invoicedItemsData.invoiced_items.forEach((item) => {
      totalPrice += item.quantity * item.wholesalerInventory.unit__cost;
    });
    const finalPrice = totalPrice - (totalPrice * 10) / 100;
    const discountPrice = (totalPrice * 10) / 100;
    //data db updates
    invoicedItemsData.totalQuantity = totalQuantity;
    invoicedItemsData.totalPrice = totalPrice;
    invoicedItemsData.finalPrice = finalPrice;
    invoicedItemsData.discountPrice = discountPrice;
    const updatedInvoice = await invoicedItemsData.save();

    const invoicedDate = new Date();
    const finalDate = invoicedDate.toString();
    const orderedDate = finalDate.slice(4, 15);

    let pdfgeneratehtml = "";
    let rowData = "";
    pdfgeneratehtml += `<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="2" ><h1 style="text-align:center;color:#1F255E;">Medex pharma</h1></td>
  </tr>
  <tr>
    <td width="49%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td><table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;">Payment Receipt</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Invoice Number: ${invoiceUnique}</td>
          </tr>
          <tr>
            <td> </td>
          </tr>
          <tr>
            <td> </td>
          </tr>
          </table></td>
      </tr>
    </table></td>
    <td width="51%" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right"></td>
      </tr>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;"  align="right"> </td>
      </tr>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;"  align="right">Receipt Date : ${orderedDate}</td>
      </tr>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;" align="right">Retailer</td>
      </tr>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${
          invoicedItemsData.orderAddress.storeName
        }</td>
      </tr>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${
          updatedInvoice.retailer.fullName
        }</td>
      </tr>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${
          invoicedItemsData.orderAddress.address
        }</td>
      </tr>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${
          invoicedItemsData.orderAddress.city
        }</td>
      </tr>
       <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" align="right">${
          invoicedItemsData.orderAddress.zipcode
        }</td>
      </tr>
    </table></td>
  </tr>
  <tr>
    <td colspan="2"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">S.No</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">Products</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">Manufacture</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;"  align="center">Vendor</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;"  align="center"> Discount</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;"  align="center">Price</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;"  align="center">Quantity</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;  border-right:1px solid #333;"  align="center">Amount</td>
      </tr>
      ${
        updatedInvoice.invoiced_items
          ? updatedInvoice.invoiced_items.map((item, index) => {
              rowData += `<tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" align="center">${
            index + 1
          }</td>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">${
            item.wholesalerInventory.Drug_Name
          }</td>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">${
            item.wholesalerInventory.manufacturer
          }</td>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">${
            item.wholesalerInventory.manufacturer
          }</td>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">10%</td>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">${
            item.wholesalerInventory.unit__cost
          }</td>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">${
            item.quantity
          }</td>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;"  align="center">${
            item.orderItemTotal
          }</td>
          </tr>`;
            })
          : ""
      }
      ${(pdfgeneratehtml += rowData)}
      <tr>
        <td  colspan="7"  style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; padding-right: 33px; padding-top:10px;"  align="right">Order Value: </td>
        <td  colspan="8"  style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; padding-right: 33px;  padding-top: 10px;"  align="right"><span style="font-weight:300; font-size:13px;">${
          updatedInvoice.totalPrice
        }</span></td>
       <tr>
        <td  colspan="7"  style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;  padding-right: 54px; padding-top:10px;"  align="right">Discount:</td>
        <td  colspan="8"  style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; padding-right: 33px; padding-top:10px;"  align="right"> <span style="font-weight:300; font-size:13px;padding-top:10px;  padding-top: 20px;">${
          updatedInvoice.discountPrice
        }</span></td>
      </tr>
      <tr>
        <td  colspan="7"  style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;padding-top:10px;"  align="right">Delivery Charges </td>
        <td  colspan="8"  style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; padding-right: 33px; padding-top: 10px;"  align="right"><span style="font-weight:300; font-size:13px; ">FREE</span></td>
      </tr>
      <tr>
        <td  colspan="7"  style="font-family:Verdana, Geneva, sans-serif; font-weight:900; font-size:14px;padding-top:10px;padding-right: 79px;"  align="right">Total: </td>
        <td  colspan="8"  style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; padding-right: 33px; padding-top: 10px;"  align="right"><span style="font-weight:600; font-size:13px; ">${
          updatedInvoice.finalPrice
        }</span></td>
      </tr>
</tr>
    </table></td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
     <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">DECLARATION:</td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Kindly pay your invoice within 15 days</td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2" align="center">(This is computer generated receipt and does not require physical signature.)  <br />Thank you<br />  
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
    </table>`;

    let pdfName = "";
    pdfPath = "";
    var options = { format: "Letter" };

    pdfName = invoiceUnique + ".pdf";

    // Working Code Starts
    prescriptionPDF
      .create(pdfgeneratehtml, options)
      .toFile("./public/uploads/" + pdfName, async function (err, result) {
        if (err) return console.log(err);
        return handleSuccessResponse(res, {}, "Invoice generated successfully");
      });
  } catch (error) {
    next(error);
  }
};

const getGeneratedInvoices = async (req, res, next) => {
  try {
    const order_id = req.query;
    order_id.wholesaler_id = req.userInfo.wholesaler.id;
    const getAllInvoiceDetails = await getInvoicedItems("invoice", order_id);
    return handleSuccessResponse(
      res,
      getAllInvoiceDetails,
      "Invoice details fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const getInvoiceDetails = async (req, res, next) => {
  try {
    const { invoiceUnique } = req.query;
    const invoiceData = await getInvoiceDetail("invoice", {
      invoice_unique: invoiceUnique,
    });
    const sum = [];
    invoiceData.invoiced_items.forEach((ele) => {
      let sumValue =
        ele.dataValues.wholesalerInventory.dataValues.unit__cost *
        ele.dataValues.quantity;
      let discountValue =
        (sumValue / 100) *
        ele.dataValues.wholesalerInventory.dataValues.discount_percentage;
      sum.push(discountValue);
    });
    const discountPrice = sum.reduce((partialSum, a) => partialSum + a, 0);
    const orderSumValue = invoiceData.dataValues.totalPrice - discountPrice;
    invoiceData.discountPrice = discountPrice;
    invoiceData.finalPrice = orderSumValue;
    return handleSuccessResponse(
      res,
      invoiceData,
      "Invoice details fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const invoiceStatusUpdate = async (req, res, next) => {
  try {
    const { invoice_id } = req.query;
    const invoice = await findByCondition("invoice", { id: invoice_id });
    if (invoice.orderStatus === "OrderPlaced") {
      invoice.orderStatus = "Approved";
    } else if (invoice.orderStatus === "Approved") {
      invoice.orderStatus = "Processed";
    } else if (invoice.orderStatus === "Processed") {
      invoice.orderStatus = "Shipped";
    } else if (invoice.orderStatus === "Shipped") {
      invoice.orderStatus = "Delivered";
      await updatById("invoice", invoice_id, {
        isReturn: true,
      });
    } else {
      throw ApiError.badRequest("Updation complete");
    }
    await invoice.save();
    handleSuccessResponse(
      res,
      { orderStatus: invoice.orderStatus },
      SUCCESS_UPDATE("Invoice")
    );
  } catch (error) {
    next(error);
  }
};

const searchDashboard = async (req, res, next) => {
  try {
    const { orderId, orderStatus } = req.query;
    if (orderId) {
      const getSalesOrdersDetails = await searchOrdersQuery("order", {
        order_unique: orderId,
      });
      if (getSalesOrdersDetails.length === 0) {
        throw ApiError.badRequest(SEARCH_ORDER);
      }
      const orderData = [];
      getSalesOrdersDetails.forEach((order) => {
        let orderSum = 0;
        let itemSum = 0;
        order.ordered_items.forEach((orderItem) => {
          orderSum += orderItem.orderItemTotal;
          itemSum += orderItem.quantity;
        });
        orderData.push({
          id: order.id,
          orderUnique: order.orderUnique,
          itemQuantity: order.dataValues.ordered_items.length,
          orderDate: order.createdAt,
          totalAmount: orderSum,
          sumQuantity: itemSum,
          orderStatus: order.orderStatus,
        });
        orderSum = 0;
        itemSum = 0;
      });
      return handleSuccessResponse(
        res,
        orderData,
        "sales orders fetched successfully"
      );
    }
    if (orderStatus) {
      const getSalesOrdersDetails = await searchOrdersQuery("order", {
        order_status: orderStatus,
      });
      if (getSalesOrdersDetails.length === 0) {
        throw ApiError.badRequest(SEARCH_ORDER);
      }
      const orderData = [];
      getSalesOrdersDetails.forEach((order) => {
        let orderSum = 0;
        let itemSum = 0;
        order.ordered_items.forEach((orderItem) => {
          orderSum += orderItem.orderItemTotal;
          itemSum += orderItem.quantity;
        });
        orderData.push({
          id: order.id,
          orderUnique: order.orderUnique,
          itemQuantity: order.dataValues.ordered_items.length,
          orderDate: order.createdAt,
          totalAmount: orderSum,
          sumQuantity: itemSum,
          orderStatus: order.orderStatus,
        });
        orderSum = 0;
        itemSum = 0;
      });
      return handleSuccessResponse(
        res,
        orderData,
        "sales orders fetched successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

const wholesalerDashboardCount = async (req, res, next) => {
  try {
    const fetchCountWholesalerDashboard = await fetchCountWholesalers(
      "order",
      req.userInfo.wholesaler.id
    );
    const Monday = [],
      Tuesday = [],
      Wednesday = [],
      Thursday = [],
      Friday = [],
      Saturday = [],
      Sunday = [];
    fetchCountWholesalerDashboard.flatMap((fetchOrders) => {
      const timestamp = fetchOrders.dataValues.createdAt;
      const date = new Date(timestamp);
      const weekday = date.toLocaleString("default", { weekday: "long" });
      switch (weekday) {
        case "Monday":
          Monday.push(weekday);
          break;
        case "Tuesday":
          Tuesday.push(weekday);
          break;
        case "Wednesday":
          Wednesday.push(weekday);
          break;
        case "Thursday":
          Thursday.push(weekday);
          break;
        case "Friday":
          Friday.push(weekday);
          break;
        case "Saturday":
          Saturday.push(weekday);
          break;
        case "Sunday":
          Sunday.push(weekday);
          break;
        default:
          console.log("Invalid day");
      }
    });
    const fetchReturnItems = await fetchCountReturn(
      "return",
      req.userInfo.wholesaler.id
    );
    const invoiceItemsLength = await fetchInvoiceLength(
      "invoice",
      req.userInfo.wholesaler.id
    );
    let invoiceItemCount;
    let deliveredItemCount = [];
    let approvedItemCount = [];
    let shippedItemCount = [];
    let cancelledItemCount = [];
    invoiceItemsLength.flatMap((invoiceItemsCount) => {
      if (invoiceItemsCount.dataValues.orderStatus == "Delivered") {
        deliveredItemCount.push(invoiceItemsCount.dataValues.orderStatus);
      }
      if (invoiceItemsCount.dataValues.orderStatus == "Approved") {
        approvedItemCount.push(invoiceItemsCount.dataValues.orderStatus);
      }
      if (invoiceItemsCount.dataValues.orderStatus == "Shipped") {
        shippedItemCount.push(invoiceItemsCount.dataValues.orderStatus);
      }
      if (invoiceItemsCount.dataValues.orderStatus == "Cancelled") {
        cancelledItemCount.push(invoiceItemsCount.dataValues.orderStatus);
      }
      invoiceItemCount = invoiceItemsCount.invoiced_items.length;
    });
    const activeRetailersCount = await retailersCount("retailer");
    const wholesalerPayloadCount = {
      salesOrders: {
        newOrders: fetchCountWholesalerDashboard.length
          ? fetchCountWholesalerDashboard.length
          : "0",
        processed: approvedItemCount.length ? approvedItemCount.length : "0",
        shipped: shippedItemCount.length ? shippedItemCount.length : "0",
        delivered: deliveredItemCount.length ? deliveredItemCount.length : "0",
        cancelled: cancelledItemCount.length ? cancelledItemCount.length : "0",
        returns: fetchReturnItems.length ? fetchReturnItems.length : "0",
      },
      invoices: {
        invoicesProcessed: approvedItemCount.length
          ? approvedItemCount.length
          : "0",
        invoicesShipped: shippedItemCount.length
          ? shippedItemCount.length
          : "0",
        pickUpTaskCreated: 0,
        invoicesDelived: invoiceItemsLength.length
          ? invoiceItemsLength.length
          : "0",
        invoicesReturned: invoiceItemCount,
      },
      retailers: {
        totalRegisteredRetailers: activeRetailersCount.length
          ? activeRetailersCount.length
          : "0",
        activeRetailers: activeRetailersCount.length
          ? activeRetailersCount.length
          : "0",
        earlyAccountRetailers: activeRetailersCount.length
          ? activeRetailersCount.length
          : "0",
        keyAccountRetailers: activeRetailersCount.length
          ? activeRetailersCount.length
          : "0",
        verifyKYC: 0,
        reverifyKYC: 0,
        otpList: 0,
      },
      cashFlowOrders: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        data: [65, 59, 80, 81, 56],
      },
      ordersThisWeek: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        // data: [500, 300, 400, 800, 790],
        data: [
          Monday.length,
          Tuesday.length,
          Wednesday.length,
          Thursday.length,
          Friday.length,
          Saturday.length,
          Sunday.length,
        ],
      },
    };
    return handleSuccessResponse(
      res,
      wholesalerPayloadCount,
      WHOLESALER_DASHBOARD
    );
  } catch (error) {
    next(error);
  }
};

const addWholesalerAddress = async (req, res, next) => {
  try {
    const getAddress = await findByCondition("address", {
      wholesalerId: req.userInfo.wholesaler.id,
    });
    if (!getAddress) {
      const { storeName, address, city, state, zipcode, phoneNumber } =
        req.body;
      const addressPayload = {
        storeName: storeName,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        phoneNumber: phoneNumber,
        wholesalerId: req.userInfo.wholesaler.id,
      };
      await create("address", addressPayload);
      return handleSuccessResponse(res, {}, "Address added successfully");
    } else {
      const { storeName, address, city, state, zipcode, phoneNumber } =
        req.body;
      const addressPayload = {
        storeName: storeName,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        phoneNumber: phoneNumber,
        wholesalerId: req.userInfo.wholesaler.id,
      };
      await updatById("address", getAddress.dataValues.id, addressPayload);
      return handleSuccessResponse(res, {}, "Address updated successfully");
    }
  } catch (error) {
    next(error);
  }
};

const updateWholesalerAddress = async (req, res, next) => {
  try {
    const getId = await findByCondition("address", {
      wholesalerId: req.userInfo.wholesaler.id,
    });
    await updatById("address", getId.dataValues.id, req.body);
    return handleSuccessResponse(res, "", "Address updated successfully");
  } catch (error) {
    next(error);
  }
};

const getWholesalerDetails = async (req, res, next) => {
  try {
    const id = req.userInfo.id;
    const wholesalerDetails = await wholesalerProfileDetails(id);
    let storeName, address, city, state, country, zipcode, phoneNumber;
    wholesalerDetails.dataValues.wholesaler.addresses.forEach((ele) => {
      storeName = ele.dataValues.storeName;
      address = ele.dataValues.address;
      city = ele.dataValues.city;
      state = ele.dataValues.state;
      country = ele.dataValues.country;
      zipcode = ele.dataValues.zipcode;
      phoneNumber = ele.dataValues.phoneNumber;
    });
    const wholesalerPayloadDetails = {
      email: decryptData(wholesalerDetails.dataValues.email),
      mobileNo: decryptData(wholesalerDetails.dataValues.mobileNo),
      fullName: decryptData(wholesalerDetails.wholesaler.dataValues.fullName),
      storeName: storeName,
      address: address,
      city: city,
      state: state,
      country: country,
      zipcode: zipcode,
      phoneNumber: phoneNumber,
    };
    return handleSuccessResponse(
      res,
      wholesalerPayloadDetails,
      "Wholesaler profile details fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const updateWholesalerSettings = async (req, res, next) => {
  try {
    const { fullName, mobileNo } = req.body;
    if (fullName && mobileNo) {
      const getRetailerId = await findByCondition("wholesaler", {
        id: req.userInfo.wholesaler.id,
      });
      await updatById("wholesaler", getRetailerId.dataValues.id, { fullName });
      const getUserId = await findByCondition("user", {
        id: req.userInfo.id,
      });
      await updatById("user", getUserId.dataValues.id, {
        mobileNo,
      });
      return handleSuccessResponse(
        res,
        {},
        "wholesaler details updated successfully"
      );
    }
    if (fullName) {
      const getRetailerId = await findByCondition("wholesaler", {
        id: req.userInfo.wholesaler.id,
      });
      await updatById("wholesaler", getRetailerId.dataValues.id, {
        fullName,
      });
      return handleSuccessResponse(
        res,
        {},
        "wholesaler details updated successfully"
      );
    }
    if (mobileNo) {
      const getUserId = await findByCondition("user", {
        id: req.userInfo.id,
      });
      await updatById("user", getUserId.dataValues.id, {
        mobileNo,
      });
      return handleSuccessResponse(
        res,
        {},
        "wholesaler details updated successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOneWholesaler,
  orderDateByFilter,
  generateInvoice,
  getGeneratedInvoices,
  getInvoiceDetails,
  invoiceStatusUpdate,
  searchDashboard,
  wholesalerDashboardCount,
  addWholesalerAddress,
  updateWholesalerAddress,
  getWholesalerDetails,
  updateWholesalerSettings,
};
