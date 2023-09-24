const joi = require("joi");
const { checkReturnItem } = require("../dao/return.dao");
const ApiError = require("../utility/ApiError");

const fetchReturnItemsValidation = async (req, res, next) => {
  try {
    const { invoiceId, reason } = req.body;
    for (const iterator of invoiceId) {
      console.log("iterator", iterator);
      const getInvoice = await checkReturnItem("return_item", iterator.id);
      console.log("getInvoice", getInvoice);
      if (getInvoice == null) {
        next();
      } else if (getInvoice.dataValues.id) {
        throw ApiError.badRequest(
          "This item already returned. Please check administration"
        );
      }
    }
  } catch (error) {
    // next(error);
    console.log(error);
  }
};

const returnValidator = (req, res, next) => {
  if (typeof req.body.invoiceId !== "object") {
    req.body.invoiceId = JSON.parse(req.body.invoiceId);
  }
  const schema = joi.object({
    invoiceId: joi.array().items(
      joi.object({
        id: joi
          .string()
          .required()
          .messages({ "string.empty": "Invoice Item is required" }),
      })
    ),
    reason: joi
      .string()
      .required()
      .messages({ "string.empty": "Reason is required for return items" }),
    // file: joi
    //   .string()
    //   .required()
    //   .messages({ "string.empty": "file is required" }),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

module.exports = {
  returnValidator,
  fetchReturnItemsValidation,
};
