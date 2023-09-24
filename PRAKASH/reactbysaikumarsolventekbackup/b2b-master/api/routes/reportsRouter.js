// eslint-disable-next-line import/newline-after-import
const express = require("express");
const router = express.Router();
const { fetchReports } = require("../controllers/reports.controller");
const { getVerifyToken } = require("../middleware/auth");

// routes
router.get("/fetch-reports", getVerifyToken, fetchReports);

module.exports = router;
