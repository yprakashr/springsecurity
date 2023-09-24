const joi = require("joi");
const ApiError = require("../utility/ApiError");

const addressValidator = (req, _res, next) => {
  const schema = joi.object({
    storeName: joi
      .string()
      .regex(/^[a-zA-Z ]+$/, "Must be names only taken")
      .required()
      .messages({ "string.empty": "Must be a valid store name" }),
    address: joi
      .string()
      .required()
      .messages({ "string.empty": "Must be a valid address" }),
    city: joi
      .string()
      .regex(/^[a-zA-Z]+$/, "Must be names only taken")
      .required()
      .messages({ "string.empty": "Must be a valid city" }),
    state: joi
      .string()
      .regex(/^[a-zA-Z]+$/, "Must be names only taken")
      .required()
      .messages({ "string.empty": "Must be a valid state" }),
    zipcode: joi
      .string()
      .pattern(/^[0-9]{6}$/, "Zip code must be 6 digits")
      .required()
      .messages({ "string.empty": "Must be a valid zipcode" }),
    phoneNumber: joi
      .string()
      .pattern(/^[0-9]{10}$/, "Mobile number must be a valid phone number")
      .required()
      .messages({ "string.empty": "Must be a valid phone number" }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

module.exports = {
  addressValidator,
};
