const express = require("express");
const router = express.Router();

const {
  returnProducts,
  getReturnOrderDetails,
  returnDownloadReceipt,
} = require("../controllers/return.controller");
const { upload } = require("../middleware/upload");

const { getVerifyToken } = require("../middleware/auth");
const { returnValidator } = require("../validations/return.validator");

router.post(
  "/return-product",
  getVerifyToken,
  upload.array("file", 4),
  returnValidator,
  returnProducts
);

router.get("/get-return-products", getVerifyToken, getReturnOrderDetails);

router.get("/download-return-receipt", getVerifyToken, returnDownloadReceipt);

module.exports = router;
