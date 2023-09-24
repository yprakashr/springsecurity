/* eslint-disable import/newline-after-import */
// eslint-disable-next-line import/newline-after-import
const express = require("express");
const router = express.Router();
const formidable = require("express-formidable");
const formidableParser = formidable({ encoding: "utf-8", limit: "200mb" });
// const {  } = require('../config/');
const {
  updateCart,
  csvToCart,
  getCart,
  qtyUpdate,
  removeCartItem,
  deleteCart,
} = require("../controllers/cart.controller");

const { getVerifyToken } = require("../middleware/auth");

const { cartValidator } = require("../validations/cart.validator");

// router.post('/cart', cartValidator, , createCart);

router.post("/csv-to-cart", formidableParser, csvToCart);

router.patch("/cart", getVerifyToken, cartValidator, updateCart);
router.patch("/cart-item-qty", getVerifyToken, qtyUpdate)
router.get("/cart", getVerifyToken, getCart);
router.delete("/cart/:cartItemId", getVerifyToken, removeCartItem);
router.delete("/cart", getVerifyToken, deleteCart);

module.exports = router;
