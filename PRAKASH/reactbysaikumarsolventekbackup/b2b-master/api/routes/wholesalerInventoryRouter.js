/* eslint-disable import/newline-after-import */
// eslint-disable-next-line import/newline-after-import

const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
const formidableParser = formidable({ encoding: "utf-8", limit: "200mb" });
const { getVerifyToken } = require("../middleware/auth");
const {
  wholesalerInventoryValidation,
  importWholesalerInventoryValidation,
  wholesalerInventoryUpdateValidation,
} = require("../validations/wholesalerInventory.validator");
const {
  createWholesalerInventory,
  getWholesalerInventory,
  getOneWholesalerInventory,
  updateWholesalerInventory,
  deletewholesalerInventory,
  importWholesalerInventory,
  searchInventory,
} = require("../controllers/wholesalerInventory.controller");

// routes
router.post(
  "/wholesalerimport",
  formidableParser,
  getVerifyToken,
  importWholesalerInventoryValidation,
  importWholesalerInventory
);
router.post(
  "/wholesalerinventory",
  getVerifyToken,
  wholesalerInventoryValidation,
  createWholesalerInventory
);
router.get("/wholesalerinventory", getVerifyToken, getWholesalerInventory);
router.get(
  "/wholesalerinventory-by-id",
  getVerifyToken,
  getOneWholesalerInventory
);
router.patch(
  "/wholesalerinventory",
  getVerifyToken,
  wholesalerInventoryUpdateValidation,
  updateWholesalerInventory
);
router.delete(
  "/wholesalerinventory",
  getVerifyToken,
  deletewholesalerInventory
);
router.get("/search-wholesaler-inventory", getVerifyToken, searchInventory);

module.exports = router;
