const express = require("express");
const router = express();
const {
  addAddress,
  updateAddress,
  getAddress,
  deleteAddress,
  makeAddressAsDefault,
} = require("../controllers/address.controller");
const { getVerifyToken } = require("../middleware/auth");
const { addressValidator } = require("../validations/address.validator");

router.post("/add-address", getVerifyToken, addressValidator, addAddress);
router.get("/address", getVerifyToken, getAddress);
router.patch(
  "/update-address",
  getVerifyToken,
  addressValidator,
  updateAddress
);
router.delete("/delete-address", getVerifyToken, deleteAddress);
router.put("/default-address", makeAddressAsDefault);

module.exports = router;
