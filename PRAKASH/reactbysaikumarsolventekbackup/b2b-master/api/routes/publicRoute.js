// eslint-disable-next-line import/newline-after-import
const express = require("express");
const route = express.Router();

const {
  changePasswordValidator,
  emailRequiredValidator,
  loginValidator,
  signupValidator,
  validateOtpValidator,
  updateProfileDetailsValidation,
} = require("../validations/auth.validator");
const {
  login,
  signup,
  changePassword,
  resendOTP,
  verifyOTP,
  getUserDetails,
  updateUser,
  deleteUser,
  checkEmail,
  forgotPassword,
  logout,
} = require("../controllers/auth.controller");

const { getVerifyToken } = require("../middleware/auth");

route.post("/signup", signupValidator, signup);
route.delete("/logout", getVerifyToken, logout);
route.post("/login", loginValidator, login);
route.get("/authuser-by-id", getVerifyToken, getUserDetails);
route.patch(
  "/authuser",
  getVerifyToken,
  updateProfileDetailsValidation,
  updateUser
);
route.patch(
  "/change-password",
  getVerifyToken,
  changePasswordValidator,
  changePassword
);

// not implemented API's
route.post("/forgotPassword", forgotPassword);
route.post("/checkEmail", emailRequiredValidator, checkEmail);
route.patch("/resend-otp", validateOtpValidator, resendOTP);
route.patch("/verify-otp", verifyOTP);
route.delete("/authuser", deleteUser);

module.exports = route;
