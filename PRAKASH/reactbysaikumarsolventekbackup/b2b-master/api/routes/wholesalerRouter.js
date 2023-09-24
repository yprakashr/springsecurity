// eslint-disable-next-line import/newline-after-import
const express = require("express");
const router = express.Router();

const {
  invoiceReqValidation,
  invoiceQtyValidation,
  stockValidation,
} = require("../validations/wholesaler.validator");
const { getVerifyToken } = require("../middleware/auth");
const {
  getOneWholesaler,
  orderDateByFilter,
  generateInvoice,
  getGeneratedInvoices,
  getInvoiceDetails,
  invoiceStatusUpdate,
  searchDashboard,
  wholesalerDashboardCount,
  addWholesalerAddress,
  getWholesalerDetails,
  updateWholesalerSettings,
  updateWholesalerAddress,
} = require("../controllers/wholesaler.controller");
const { addressValidator } = require("../validations/address.validator");
const {
  updateProfileDetailsValidation,
} = require("../validations/auth.validator");

router.get("/orderslist-filter-by-date", getVerifyToken, orderDateByFilter);
router.get("/wholesaler-by-id", getVerifyToken, getOneWholesaler);
router.post(
  "/generate-invoice",
  invoiceReqValidation,
  getVerifyToken,
  invoiceQtyValidation,
  stockValidation,
  generateInvoice
);
router.get("/get-all-invoice-details", getVerifyToken, getGeneratedInvoices);
router.get("/get-invoice-details", getVerifyToken, getInvoiceDetails);
router.patch("/invoice-status-update", getVerifyToken, invoiceStatusUpdate);
router.get("/search-sales-order", getVerifyToken, searchDashboard);
router.get("/wholesaler-count", getVerifyToken, wholesalerDashboardCount);
router.post(
  "/add-wholesaler-address",
  getVerifyToken,
  addressValidator,
  addWholesalerAddress
);
router.patch(
  "/update-wholesaler-address",
  getVerifyToken,
  addressValidator,
  updateWholesalerAddress
);
router.get("/fetch-wholesaler-settings", getVerifyToken, getWholesalerDetails);
router.patch(
  "/update-profile-settings",
  getVerifyToken,
  updateProfileDetailsValidation,
  updateWholesalerSettings
);

module.exports = router;
