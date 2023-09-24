const express = require("express");
const router = express();
const {
  addbackOrderProducts,
  deleteBackOrderDetails,
  getAllbackOrderDetails,
} = require("../controllers/backOrder.controller");
const { getVerifyToken } = require("../middleware/auth");

router.post("/add-backorder-product", getVerifyToken, addbackOrderProducts);
router.get("/all-backorder-details", getVerifyToken, getAllbackOrderDetails);
router.delete("/delete-backorder-item", getVerifyToken, deleteBackOrderDetails);

module.exports = router;
