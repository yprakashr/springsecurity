const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOneOrderDetails,
  getOrderWithFilter,
  invoiceDetailsByInvoiceId,
  getOrderDetails,
  getInvoiceDetails,
  fetchApprovedOrders,
  fetchDeliveredOrders,
  fetchProcessedOrders,
  fetchShippedOrders,
} = require("../controllers/orders.controller");

const { getVerifyToken } = require("../middleware/auth");

router.post("/add-to-order", getVerifyToken, createOrder);
router.get("/orderDetails", getVerifyToken, getOrderDetails);
router.get("/getByOrderId", getVerifyToken, getOneOrderDetails);
router.get("/order/filter", getVerifyToken, getOrderWithFilter);
router.get("/fetch-approved-orderById", getVerifyToken, fetchApprovedOrders);
router.get("/fetch-processed-orderById", getVerifyToken, fetchProcessedOrders);
router.get("/fetch-shipped-orderById", getVerifyToken, fetchShippedOrders);
router.get("/fetch-delivered-orderById", getVerifyToken, fetchDeliveredOrders);
router.get("/getInvoiceDetails", getVerifyToken, getInvoiceDetails);
router.get(
  "/getInvoiceDetailsByInvoiceId",
  getVerifyToken,
  invoiceDetailsByInvoiceId
);

module.exports = router;
