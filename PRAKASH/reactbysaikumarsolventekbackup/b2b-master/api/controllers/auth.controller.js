/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eqeqeq */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable dot-notation */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
const passport = require("passport");
require("../config/passport")(passport);
const { encryptData, decryptData } = require("../helpers/Encryption");
const {
  countWithWhereClause,
  create,
  findByCondition,
  updatById,
  findById,
  deleteById,
} = require("../dao/common.dao");
const APIError = require("../utility/ApiError");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const {
  handleSuccessResponse,
  handleErrorResponse,
} = require("../utility/handleResponse");
const ApiError = require("../utility/ApiError");
const { findUserById, userProfileDetails } = require("../dao/user.dao");

const login = async (req, res, next) => {
  try {
    let { email, password, platform, oneSignalId } = req.body;
    email = encryptData(email);
    password = encryptData(password);
    const count = await countWithWhereClause("user", {
      email,
    });
    if (!count) {
      throw APIError.unauthorized("Please sign-up !!");
    }
    if (platform == "web") {
      passport.authenticate("local", function (err, user) {
        if (err) {
          throw APIError.badRequest();
        }
        req.logIn(user, async function (error) {

          if (error) {
            console.log(error);
            return res.json({
              Error: APIError.badRequest(),
              message: "password is not matching please re-login",
            });
            // throw new Error(error);
          } else {
            await updatById("user", user.id, { isLoggedIn: true });
            let usersData = await findUserById(user.id);
            usersData = usersData.toJSON();
            usersData.isLoggedIn = true;
            const token = jwt.sign({ usersData }, JWT_SECRET);
            usersData["token"] = token;
            return handleSuccessResponse(res, usersData, "Logged in.");
          }
        });
      })(req, res);
    }
    if (platform == "mobile") {
      passport.authenticate("local", function (err, user) {
        if (err) {
          throw APIError.badRequest();
        }
        req.logIn(user, async function (error) {
          if (error) {
            console.log(error);
            return res.json({
              Error: APIError.badRequest(),
              message: "password is not matching please re-login",
            });
            // throw new Error(error);
          } else {
            await updatById("user", user.id, { isLoggedIn: true });
            let usersData = await findUserById(user.id);
            usersData = usersData.toJSON();
            usersData.isLoggedIn = true;
            const token = jwt.sign({ usersData }, JWT_SECRET);
            usersData["token"] = token;
            if (usersData) {
              await updatById("user", usersData.id, {
                oneSignalId: oneSignalId,
              });
            }
            return handleSuccessResponse(res, usersData, "Logged in.");
          }
        });
      })(req, res);
    }
  } catch (err) {
    next(err);
  }
};

const checkEmail = async (req, res, next) => {
  try {
    let { email } = req.body;
    email = email.toLowerCase();
    email = encryptData(email);
    const userEmail = await findByCondition("user", { email });
    if (userEmail) {
      return handleSuccessResponse(res, {}, "User Exists.");
    } else {
      return handleErrorResponse(res, "User not registered yet.");
    }
  } catch (err) {
    next(err);
  }
};

const generateOTPExpiry = () => {
  const otp = Math.floor(1000 + Math.random() * 9000);
  const dt = new Date();
  const otpExpiry = dt.setMinutes(dt.getMinutes() + 10);
  return {
    otp,
    otpExpiry,
  };
};

const signup = async (req, res, next) => {
  try {
    let { email, password, userType, mobileNo, fullName } = req.body;
    email = email.toLowerCase();
    const user = await findByCondition("user", { email });
    if (user) {
      throw APIError.unauthorized(
        "Your account is already registerd, please login\nIf you forgot your password, click on forget password !!"
      );
    }
    const otpResult = generateOTPExpiry();
    const data = {
      email,
      password,
      userType,
      mobileNo,
      otp: otpResult.otp,
      otpExpiry: otpResult.otpExpiry,
    };
    const userData = await create("user", data);
    await create(userType, { userId: userData.id, fullName });
    return handleSuccessResponse(res, {}, "User registered");
  } catch (err) {
    next(err);
  }
};

const getUserDetails = async (req, res, next) => {
  try {
    const id = req.userInfo.id;
    const getUserDetails = await userProfileDetails(id);
    let storeName, address, city, state, country, zipcode, phoneNumber;
    getUserDetails.dataValues.retailer.addresses.forEach((ele) => {
      storeName = ele.dataValues.storeName;
      address = ele.dataValues.address;
      city = ele.dataValues.city;
      state = ele.dataValues.state;
      country = ele.dataValues.country;
      zipcode = ele.dataValues.zipcode;
      phoneNumber = ele.dataValues.phoneNumber;
    });
    const retailerPayloadDetails = {
      email: decryptData(getUserDetails.dataValues.email),
      mobileNo: decryptData(getUserDetails.dataValues.mobileNo),
      fullName: decryptData(getUserDetails.retailer.dataValues.fullName),
      storeName: storeName,
      address: address,
      city: city,
      state: state,
      country: country,
      zipcode: zipcode,
      phoneNumber: phoneNumber,
    };
    return handleSuccessResponse(
      res,
      retailerPayloadDetails,
      "profile details fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { fullName, mobileNo } = req.body;
    if (fullName && mobileNo) {
      const getRetailerId = await findByCondition("retailer", {
        id: req.userInfo.retailer.id,
      });
      await updatById("retailer", getRetailerId.dataValues.id, { fullName });
      const getUserId = await findByCondition("user", {
        id: req.userInfo.id,
      });
      await updatById("user", getUserId.dataValues.id, {
        mobileNo,
      });
      return handleSuccessResponse(
        res,
        {},
        "User details updated successfully"
      );
    }
    if (fullName) {
      const getRetailerId = await findByCondition("retailer", {
        id: req.userInfo.retailer.id,
      });
      await updatById("retailer", getRetailerId.dataValues.id, {
        fullName,
      });
      return handleSuccessResponse(
        res,
        {},
        "User details updated successfully"
      );
    }
    if (mobileNo) {
      const getUserId = await findByCondition("user", {
        id: req.userInfo.id,
      });
      await updatById("user", getUserId.dataValues.id, {
        mobileNo,
      });
      return handleSuccessResponse(
        res,
        {},
        "User details updated successfully"
      );
    }
  } catch (error) {
    next(error);
  }
};

const changePassword = async (req, res, next) => {
  try {
    let { oldPassword, newPassword, confirmPassword } = req.body;
    if (newPassword !== confirmPassword) {
      return handleErrorResponse(
        res,
        "Please same as new password and confirm password"
      );
    }
    let email = req.userInfo.email;
    email = encryptData(email.toLowerCase());
    oldPassword = encryptData(oldPassword);

    const condition = {
      email,
      password: oldPassword,
      status: 1,
    };
    const data = await findByCondition("user", condition);
    if (!data) {
      throw APIError.badRequest("Incorrect email id and password");
    }
    await updatById("user", data.id, {
      password: newPassword,
    });
    return handleSuccessResponse(res, {}, "password updated successfully");
  } catch (err) {
    next(err);
  }
};

const forgotPassword = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.query;
    await deleteById(id, "user");
    return handleSuccessResponse(res, {}, "Record deleted successfully");
  } catch (error) {
    next(error);
  }
};

const resendOTP = async (req, res, next) => {
  try {
    const { id } = req.body;
    const otpResult = generateOTPExpiry();
    const user = await findById("user", id);
    if (!user) {
      throw ApiError.notFound("User not found");
    }
    const { email, fullName } = user;
    // sendOTPEmail(email, fullName, otpResult.otp);
    await updatById("users_tbl", id, {
      otp: otpResult.otp,
      otpExpiry: otpResult.otpExpiry,
    });
    return handleSuccessResponse(res, {}, "OTP sent");
  } catch (err) {
    next(err);
  }
};

const verifyOTP = async (req, res, next) => {
  try {
    const { otp, id } = req.body;
    const user = await findById("user", id);
    if (!user) {
      throw ApiError.notFound("User not found");
    }
    const { otp: otpUser } = user;
    if (otpUser != otp) {
      throw ApiError.unauthorized("Incorrect OTP");
    }
    await updatById("users_tbl", id, {
      otpVerified: 1,
    });
    return handleSuccessResponse(res, {}, "OTP verified");
  } catch (err) {
    next(err);
  }
};

const logout = async (req, res, next) => {
  try {
    await updatById("user", req.userInfo.id, { isLoggedIn: false })
    handleSuccessResponse(res, {}, "Logged out successfully")
  } catch (error) {
    next(error)
  }
}

module.exports = {
  login,
  checkEmail,
  signup,
  changePassword,
  resendOTP,
  verifyOTP,
  getUserDetails,
  updateUser,
  deleteUser,
  forgotPassword,
  logout
};
