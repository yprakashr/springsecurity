const joi = require("joi");
const ApiError = require("../utility/ApiError");

const signupValidator = (req, _res, next) => {
  const schema = joi.object({
    email: joi
      .string()
      .required()
      .email()
      .message("Must be a valid email address"),
    password: joi
      .string()
      .min(8)
      .required()
      .regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .messages({ "any.only": "Password is required!" }),
    // confirmPassword: joi
    //   .string()
    //   .required()
    //   .valid(joi.ref("password"))
    //   .messages({ "any.only": "Password not match" }),
    userType: joi.string().required(),
    mobileNo: joi
      .string()
      .regex(/^[0-9]{10}$/)
      .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
      .required(),
    fullName: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

const loginValidator = (req, _res, next) => {
  const schema = joi.object({
    email: joi
      .string()
      .required()
      .email()
      .message("Must be a valid email address"),
    password: joi
      .string()
      .min(8)
      .required()
      .regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
      .messages({ "any.only": "Password is required!" }),
    oneSignalId: joi.string().optional().allow(""),
    platform: joi.string().optional().allow(""),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

const resetPasswordValidator = (req, _res, next) => {
  const schema = joi.object({
    oobCode: joi.string().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};
const validateOtpValidator = (req, _res, next) => {
  const schema = joi.object({
    email: joi.string().required(),
    otp: joi.string().required(),
    password: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};
const emailRequiredValidator = (req, _res, next) => {
  const schema = joi.object({
    email: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};
const changePasswordValidator = (req, _res, next) => {
  const schema = joi.object({
    oldPassword: joi
      .string()
      .required()
      .messages({ "string.empty": "must valid old password" }),
    newPassword: joi
      .string()
      .required()
      .messages({ "string.empty": "must valid new password" }),
    confirmPassword: joi
      .string()
      .required()
      .messages({ "string.empty": "must valid confirm password" }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

const updateProfileDetailsValidation = (req, res, next) => {
  try {
    const schema = joi.object({
      fullName: joi
        .string()
        .regex(/^[a-zA-Z ]+$/, "Must be names only taken")
        .required()
        .messages({ "string.empty": "Full Name is required" }),
      mobileNo: joi
        .string()
        .pattern(/^[0-9]{10}$/, "'Mobile number must be a valid phone number'")
        .required()
        .messages({ "number.empty": "Mobile Number is required" }),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      throw ApiError.badRequest(error.details[0].message);
    }
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = {
  signupValidator,
  loginValidator,
  resetPasswordValidator,
  validateOtpValidator,
  emailRequiredValidator,
  changePasswordValidator,
  updateProfileDetailsValidation,
};
