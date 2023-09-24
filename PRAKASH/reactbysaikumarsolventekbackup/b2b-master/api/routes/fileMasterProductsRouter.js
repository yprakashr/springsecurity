const express = require("express");
const app = express();
const router = express.Router();
const formidable = require("express-formidable");
const formidableParser = formidable({ encoding: "utf-8", limit: "200mb" });
// const { masterProductsValidator } = require('../validations/masterProducts.validator');

const {
  uploadCsv,
  exportMasterProducts,
  createMasterProducts,
  getMasterProducts,
  getOneMasterProducts,
  updateMasterProducts,
  deleteMasterProduct,
} = require("../controllers/fileMasterProducts.controller");

router.get("/masterproduct", getMasterProducts);
router.post("/upload", formidableParser, uploadCsv);
router.get("/exportmasterproducts", exportMasterProducts);
router.post("/masterproduct", createMasterProducts);
router.post("/upload", formidableParser, uploadCsv);
router.post("/masterproduct", createMasterProducts);
router.get("/masterproduct-by-id", getOneMasterProducts);
router.patch("/masterproduct", updateMasterProducts);
router.delete("/masterproduct", deleteMasterProduct);

module.exports = router;
