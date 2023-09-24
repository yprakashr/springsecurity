const joi = require("joi");
const ApiError = require("../utility/ApiError");

const contactUsValidator = (req, _res, next) => {
  const schema = joi.object({
    name: joi
      .string()
      .required()
      .messages({ "string.empty": "Name is required" }),
    phoneNumber: joi
      .number()
      .required()
      .messages({ "number.empty": "Phone Number is required" }),
    email: joi
      .string()
      .required()
      .messages({ "string.empty": "Email is required" }),
    message: joi
      .string()
      .required()
      .messages({ "string.empty": "Message is required" }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

module.exports = {
  contactUsValidator,
};
