"use strict";
const { create, deleteById, bulkCreate } = require("../dao/common.dao");
const {
  handleSuccessResponse,
  handleErrorResponse,
  handleSuccessOrderResponse,
} = require("../utility/handleResponse");
const { makePageObject, getSort } = require("../helpers/sortSearchPagination");
const {
  orderByFilterWithPagination,
  cartItems,
  orderDetails,
  getByOrderId,
  getByApprovedOrderId,
  getByDeliveredOrderId,
  fetchProcessedOrdersQuery,
  fetchShippedOrdersQuery,
  fetchApprovedOrdersQuery,
  fetchDeliveredOrdersQuery,
  getByProcessedOrderId,
  getByShippedOrderId,
} = require("../dao/order.dao");
const { searchAllColumn } = require("../helpers/sortSearchPagination");
const { getInvoicedItems, getInvoiceDetail } = require("../dao/wholesaler.dao");
const { fetchReturnItems } = require("../dao/return.dao");
require("dotenv").config();

const createOrder = async (req, res, next) => {
  try {
    const cart = await cartItems({
      retailerId: req.userInfo.retailer.id,
    });
    let addressId;
    cart.retailer.dataValues.addresses.forEach((addressColumn) => {
      addressId = addressColumn.dataValues.id;
    });
    if (cart.retailer.dataValues.addresses.length == 0) {
      return handleErrorResponse(res, "Please add address");
    }
    var orderUnique = (function () {
      var guid = parseInt(Math.random() * 36);
      return function newGuid() {
        return (
          (guid++ % 36).toString(36).toUpperCase() +
          Math.random().toString(36).slice(2, 8).toUpperCase()
        );
      };
    })();
    orderUnique = "MEDLI-" + orderUnique();
    const orderPayload = {
      shippingMethod: 1,
      shippingPrice: 110,
      totalQuantity: cart.dataValues.totalQuantity,
      totalPrice: cart.dataValues.totalPrice,
      finalPrice: cart.dataValues.finalPrice,
      discountPrice: cart.dataValues.discountPrice,
      status: cart.dataValues.status,
      paymentStatus: 1,
      deliveryStatus: 1,
      orderUnique: orderUnique,
      retailerId: cart.dataValues.retailerId,
      userId: cart.dataValues.userId,
    };
    let createOrder = await create("order", orderPayload);
    let storeOrderId = createOrder.dataValues.id;
    cart.retailer.dataValues.addresses.forEach(async (addressColumn) => {
      let obj = {
        storeName: addressColumn.dataValues.storeName,
        address: addressColumn.dataValues.address,
        city: addressColumn.dataValues.city,
        state: addressColumn.dataValues.state,
        zipcode: addressColumn.dataValues.zipcode,
        phoneNumber: addressColumn.dataValues.phoneNumber,
        orderId: storeOrderId,
      };
      await create("orderAddress", obj);
    });
    let bulkCreateCartItems = [];
    cart.cart_items.forEach((cartItems) => {
      let orderItemTotal;
      orderItemTotal =
        cartItems.dataValues.wholesalerInventory.dataValues.unit__cost *
        cartItems.quantity;
      let cartItemObj = {
        quantity: cartItems.quantity,
        wholesalerInventoryId: cartItems.wholesalerInventoryId,
        orderId: createOrder.dataValues.id,
        orderItemTotal: orderItemTotal,
      };
      bulkCreateCartItems.push(cartItemObj);
    });
    await bulkCreate("ordered_item", bulkCreateCartItems);
    const cartId = cart.dataValues.id;
    await deleteById(cartId, "cart");
    return handleSuccessResponse(res, "", "Order created successfully");
  } catch (error) {
    next(error);
  }
};

const getOrderDetails = async (req, res, next) => {
  try {
    const { id } = req.userInfo;
    const { query } = req;
    const pageInfo = makePageObject(query);
    const sort = getSort(query, "order");
    const { search } = query;
    const option = searchAllColumn(search, "order");
    option.userId = id;
    const order = await orderDetails(
      {
        retailerId: req.userInfo.retailer.id,
      },
      pageInfo,
      sort
    );
    const orders = [];
    order.rows.forEach((orderItem) => {
      let itemSum = 0;
      orderItem.ordered_items.forEach((qtn) => {
        itemSum += qtn.quantity;
      });
      const orderPayload = {
        id: orderItem.dataValues.id,
        finalPrice: orderItem.dataValues.finalPrice,
        orderStatus: orderItem.dataValues.orderStatus,
        orderUnique: orderItem.dataValues.orderUnique,
        itemQuantity: orderItem.dataValues.ordered_items.length,
        sumQuantity: itemSum,
        status: orderItem.dataValues.status,
        createdAt: orderItem.dataValues.createdAt,
        updatedAt: orderItem.dataValues.updatedAt,
      };
      orders.push(orderPayload);
      itemSum = 0;
    });

    return handleSuccessOrderResponse(
      res,
      order.count,
      orders,
      "order fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const getOneOrderDetails = async (req, res, next) => {
  try {
    const { id } = req.query;
    const order = await getByOrderId("order", id);
    order.dataValues.items = order.dataValues.ordered_items;
    delete order.dataValues.ordered_items;
    return handleSuccessResponse(res, order, "Order details");
  } catch (error) {
    next(error);
  }
};

const getOrderWithFilter = async (req, res, next) => {
  try {
    const { id } = req.userInfo;
    let sort, status;
    if (req.query.sort == "desc") {
      sort = '"createdAt" DESC';
    } else {
      sort = '"createdAt" ASC';
    }
    if (req.query.status == "delivered") {
      status = "delivered";
    } else if (req.query.status == "OrderPlaced") {
      status = "OrderPlaced";
    } else if (req.query.status == "approved") {
      status = "approved";
    } else if (req.query.status == "processed") {
      status = "processed";
    } else if (req.query.status == "shipped") {
      status = "shipped";
    } else if (req.query.status == "cancelled") {
      status = "cancelled";
    } else if (req.query.status == "returns") {
      status = "returns";
    } else if (req.query.status == "Delivered") {
      status = "Delivered";
    } else {
      status = "cancelled" || "delivered";
    }
    if (status == "OrderPlaced") {
      let orders;
      const { query } = req;
      const pageInfo = makePageObject(query);
      sort = getSort(query, "order");
      const { search } = query;
      const option = searchAllColumn(search, "order");
      const whereClause = { order_status: status, userId: id };
      orders = await orderByFilterWithPagination(
        pageInfo,
        sort,
        option,
        whereClause
      );
      const ordersArr = [];
      orders.rows.forEach((orderItem) => {
        let itemSum = 0;
        orderItem.ordered_items.forEach((qtn) => {
          itemSum += qtn.quantity;
        });
        const orderPayload = {
          id: orderItem.dataValues.id,
          finalPrice: orderItem.dataValues.finalPrice,
          orderStatus: orderItem.dataValues.orderStatus,
          orderUnique: orderItem.dataValues.orderUnique,
          itemQuantity: orderItem.dataValues.ordered_items.length,
          sumQuantity: itemSum,
          status: orderItem.dataValues.status,
          createdAt: orderItem.dataValues.createdAt,
          updatedAt: orderItem.dataValues.updatedAt,
        };
        ordersArr.push(orderPayload);
        itemSum = 0;
      });
      return handleSuccessOrderResponse(
        res,
        orders.count,
        ordersArr,
        "Orders fetched successfully."
      );
    }
    if (status == "approved") {
      const { query } = req;
      const pageInfo = makePageObject(query);
      const getApprovedItems = await fetchApprovedOrdersQuery(
        "invoice",
        req.userInfo.retailer.id,
        pageInfo,
        sort,
        "Approved"
      );
      const ApprovedOrders = [];
      getApprovedItems.rows.forEach((ApprovedItem) => {
        let itemSum = 0;
        ApprovedItem.invoiced_items.forEach((qtn) => {
          itemSum += qtn.quantity;
        });
        const ApprovedOrderPayload = {
          id: ApprovedItem.dataValues.id,
          finalPrice: ApprovedItem.dataValues.finalPrice,
          orderStatus: ApprovedItem.dataValues.orderStatus,
          orderUnique: ApprovedItem.dataValues.order.orderUnique,
          itemQuantity: ApprovedItem.dataValues.invoiced_items.length,
          sumQuantity: itemSum,
          status: ApprovedItem.dataValues.status,
          createdAt: ApprovedItem.dataValues.createdAt,
          updatedAt: ApprovedItem.dataValues.updatedAt,
        };
        ApprovedOrders.push(ApprovedOrderPayload);
        itemSum = 0;
      });
      return handleSuccessOrderResponse(
        res,
        getApprovedItems.count,
        ApprovedOrders,
        "Approved items feteched successfully"
      );
    }
    if (status == "processed") {
      const { query } = req;
      const pageInfo = makePageObject(query);
      const getProcessedItems = await fetchProcessedOrdersQuery(
        "invoice",
        req.userInfo.retailer.id,
        pageInfo,
        sort,
        "Processed"
      );
      const processedOrders = [];
      getProcessedItems.rows.forEach((processedItem) => {
        let itemSum = 0;
        processedItem.invoiced_items.forEach((qtn) => {
          itemSum += qtn.quantity;
        });
        const processedOrderPayload = {
          id: processedItem.dataValues.id,
          finalPrice: processedItem.dataValues.finalPrice,
          orderStatus: processedItem.dataValues.orderStatus,
          orderUnique: processedItem.dataValues.order.orderUnique,
          itemQuantity: processedItem.dataValues.invoiced_items.length,
          sumQuantity: itemSum,
          status: processedItem.dataValues.status,
          createdAt: processedItem.dataValues.createdAt,
          updatedAt: processedItem.dataValues.updatedAt,
        };
        processedOrders.push(processedOrderPayload);
        itemSum = 0;
      });
      return handleSuccessOrderResponse(
        res,
        getProcessedItems.count,
        processedOrders,
        "Processed items feteched successfully"
      );
    }
    if (status == "shipped") {
      const { query } = req;
      const pageInfo = makePageObject(query);
      const getShippedItems = await fetchShippedOrdersQuery(
        "invoice",
        req.userInfo.retailer.id,
        pageInfo,
        sort,
        "Shipped"
      );
      const shippedOrders = [];
      getShippedItems.rows.forEach((shippedItem) => {
        let itemSum = 0;
        shippedItem.invoiced_items.forEach((qtn) => {
          itemSum += qtn.quantity;
        });
        const shippedOrderPayload = {
          id: shippedItem.dataValues.id,
          finalPrice: shippedItem.dataValues.finalPrice,
          orderStatus: shippedItem.dataValues.orderStatus,
          orderUnique: shippedItem.dataValues.order.orderUnique,
          itemQuantity: shippedItem.dataValues.invoiced_items.length,
          sumQuantity: itemSum,
          status: shippedItem.dataValues.status,
          createdAt: shippedItem.dataValues.createdAt,
          updatedAt: shippedItem.dataValues.updatedAt,
        };
        shippedOrders.push(shippedOrderPayload);
        itemSum = 0;
      });
      return handleSuccessOrderResponse(
        res,
        getShippedItems.count,
        shippedOrders,
        "shipped items feteched successfully"
      );
    }
    if (status == "returns") {
      const { query } = req;
      const pageInfo = makePageObject(query);
      const getReturnItems = await fetchReturnItems(
        "return",
        req.userInfo.retailer.id,
        pageInfo,
        sort
      );
      const returnOrders = [];
      getReturnItems.rows.forEach((returnItem) => {
        let itemSum = 0;
        returnItem.return_items.forEach((qtn) => {
          itemSum += qtn.quantity;
        });
        const returnOrderPayload = {
          id: returnItem.dataValues.id,
          finalPrice: returnItem.dataValues.finalPrice,
          supportId: returnItem.dataValues.supportId,
          returnStatus: returnItem.dataValues.returnStatus,
          createdAt: returnItem.dataValues.createdAt,
          userId: returnItem.dataValues.userId,
          itemQuantity: returnItem.dataValues.return_items.length,
          sumQuantity: itemSum,
        };
        returnOrders.push(returnOrderPayload);
        itemSum = 0;
      });
      return handleSuccessOrderResponse(
        res,
        getReturnItems.count,
        returnOrders,
        "Return items feteched successfully"
      );
    }
    if (status == "Delivered") {
      const { query } = req;
      const pageInfo = makePageObject(query);
      const getDeliveredItems = await fetchDeliveredOrdersQuery(
        "invoice",
        req.userInfo.retailer.id,
        pageInfo,
        sort,
        "Delivered"
      );
      const deliveredOrders = [];
      getDeliveredItems.rows.forEach((deliveredItem) => {
        let itemSum = 0;
        deliveredItem.dataValues.invoiced_items.forEach((qtn) => {
          itemSum += qtn.quantity;
        });
        const deliveredOrderPayload = {
          id: deliveredItem.dataValues.id,
          finalPrice: deliveredItem.dataValues.finalPrice,
          orderStatus: deliveredItem.dataValues.orderStatus,
          orderUnique: deliveredItem.dataValues.order.orderUnique,
          itemQuantity: deliveredItem.dataValues.invoiced_items.length,
          sumQuantity: itemSum,
          status: deliveredItem.dataValues.status,
          createdAt: deliveredItem.dataValues.createdAt,
          updatedAt: deliveredItem.dataValues.updatedAt,
        };
        deliveredOrders.push(deliveredOrderPayload);
        itemSum = 0;
      });
      return handleSuccessOrderResponse(
        res,
        getDeliveredItems.count,
        deliveredOrders,
        "Delivered items feteched successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

const fetchApprovedOrders = async (req, res, next) => {
  try {
    const { id } = req.query;
    const getApprovedOrders = await getByApprovedOrderId("invoice", id);
    getApprovedOrders.dataValues.items =
      getApprovedOrders.dataValues.invoiced_items;
    delete getApprovedOrders.dataValues.invoiced_items;
    return handleSuccessResponse(res, getApprovedOrders, "Approved details");
  } catch (error) {
    next(error);
  }
};

const fetchProcessedOrders = async (req, res, next) => {
  try {
    const { id } = req.query;
    const getProcessedOrders = await getByProcessedOrderId("invoice", id);
    getProcessedOrders.dataValues.items =
      getProcessedOrders.dataValues.invoiced_items;
    delete getProcessedOrders.dataValues.invoiced_items;
    return handleSuccessResponse(res, getProcessedOrders, "Processed details");
  } catch (error) {
    next(error);
  }
};

const fetchShippedOrders = async (req, res, next) => {
  try {
    const { id } = req.query;
    const getShippedOrders = await getByShippedOrderId("invoice", id);
    getShippedOrders.dataValues.items =
      getShippedOrders.dataValues.invoiced_items;
    delete getShippedOrders.dataValues.invoiced_items;
    return handleSuccessResponse(res, getShippedOrders, "Shipped details");
  } catch (error) {
    next(error);
  }
};

const fetchDeliveredOrders = async (req, res, next) => {
  try {
    const { id } = req.query;
    const getDeliveredOrders = await getByDeliveredOrderId("invoice", id);
    getDeliveredOrders.dataValues.items =
      getDeliveredOrders.dataValues.invoiced_items;
    delete getDeliveredOrders.dataValues.invoiced_items;
    return handleSuccessResponse(res, getDeliveredOrders, "Delivered details");
  } catch (error) {
    next(error);
  }
};

const getInvoiceDetails = async (req, res, next) => {
  try {
    const { orderId } = req.query;
    const whereClause = { order_id: orderId };
    const invoice_details = await getInvoicedItems("invoice", whereClause);
    return handleSuccessResponse(
      res,
      invoice_details,
      "Invoice id's fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const invoiceDetailsByInvoiceId = async (req, res, next) => {
  try {
    const { invoiceUnique } = req.query;
    const condition = {
      invoice_unique: invoiceUnique,
    };
    const invoiceData = await getInvoiceDetail("invoice", condition);
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

// const cancelOrder = async (req, res, next) => {
//   try {
//     const { id } = req.body;
//     const order = await findById("order", id);
//     if (
//       order.order_status === "shipped" ||
//       order.order_status === "delivered"
//     ) {
//       return handleSuccessResponse(
//         res,
//         {},
//         "Sorry,You cannot cancel the order which is already " +
//           order.order_status +
//           "."
//       );
//     } else {
//       await updatById("order", id, req.body.order_status);
//       return handleSuccessResponse(res, order, "Order cancelled successfully");
//     }
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  createOrder,
  getOrderDetails,
  getOneOrderDetails,
  getOrderWithFilter,
  invoiceDetailsByInvoiceId,
  getInvoiceDetails,
  fetchApprovedOrders,
  fetchDeliveredOrders,
  fetchProcessedOrders,
  fetchShippedOrders,
};
