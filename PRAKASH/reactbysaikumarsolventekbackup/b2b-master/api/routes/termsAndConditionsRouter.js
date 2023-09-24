const express = require("express");
const router = express();

const {
  postTermsAndConditions,
  getTermsAndConditions,
} = require("../controllers/termsAndConditions.controller");

const { getVerifyToken } = require("../middleware/auth");

router.post("/terms-and-conditions", getVerifyToken, postTermsAndConditions);
router.get("/get-terms-and-conditions", getVerifyToken, getTermsAndConditions);

module.exports = router;
