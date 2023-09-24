// eslint-disable-next-line import/newline-after-import
const express = require("express");
const router = express.Router();

const { retailerValidation } = require("../validations/retailer.validator");

const {
  createRetailer,
  getRetailer,
  getOneRetailer,
  updateRetailer,
  deleteRetailer,
  getInvoices,
  downloadInvoice,
} = require("../controllers/retailer.controller");

const { getVerifyToken } = require("../middleware/auth");

router.post("/retailer", retailerValidation, getVerifyToken, createRetailer);
router.get("/retailer", getRetailer);
router.get("/retailer-by-id", getOneRetailer);
router.patch("/retailer", updateRetailer);
router.delete("/retailer", deleteRetailer);
router.get("/invoices", getVerifyToken, getInvoices)
router.get("/download-invoice", getVerifyToken, downloadInvoice)

module.exports = router;
