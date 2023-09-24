// eslint-disable-next-line import/newline-after-import
const express = require("express");
const router = express();
const { postContactUs } = require("../controllers/contact.controller");
const { getVerifyToken } = require("../middleware/auth");
const { contactUsValidator } = require("../validations/contact.validator");

router.post(
  "/post-contact-us",
  getVerifyToken,
  contactUsValidator,
  postContactUs
);

module.exports = router;
