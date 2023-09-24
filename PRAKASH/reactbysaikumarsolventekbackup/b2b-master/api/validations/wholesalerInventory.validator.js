const joi = require("joi");
const csv = require("csvtojson");
const ApiError = require("../utility/ApiError");

const wholesalerInventoryValidation = (req, _res, next) => {
  const schema = joi.object({
    ndc: joi
      .string()
      .required()
      .messages({ "string.empty": "Ndc is required" }),
    stock: joi.number().integer().min(1).required().messages({
      "string.empty": "stock is required",
    }),
    weighted_average_cost: joi
      .number()
      .integer()
      .required()
      .messages({ "number.empty": "weighted average cost is required" }),
    Drug_Name: joi
      .string()
      .regex(/^[a-zA-Z]+$/, "Must be names only taken")
      .required()
      .messages({ "string.empty": "Drug name is required" }),
    Dosage_Form: joi
      .string()
      .regex(/^[a-zA-Z]+$/, "Must be names only taken")
      .required()
      .messages({ "string.empty": "Dosage form is required" }),
    Strength: joi
      .number()
      .integer()
      .min(1)
      .required()
      .messages({ "number.empty": "Strength is required" }),
    Generic_Product_Identifier: joi
      .string()
      .required()
      .messages({ "string.empty": "Generic product identifier is required" }),
    New_Drug_Descriptor_Identifier: joi.string().required().messages({
      "string.empty": "Description is required",
    }),
    unit__cost: joi
      .number()
      .integer()
      .min(1)
      .required()
      .messages({ "number.empty": "unit cost is required" }),
    Package_Code: joi
      .number()
      .integer()
      .required()
      .messages({ "number.empty": "Package code is required" }),
    manufacturer: joi
      .string()
      .regex(/^[a-zA-Z]+$/, "Must be names only taken")
      .required()
      .messages({ "string.empty": "manufacturer is required" }),
    discount_percentage: joi
      .number()
      .integer()
      .min(0)
      .required()
      .messages({ "number.empty": "Discount Percentage is required" }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

const importWholesalerInventoryValidation = async (req, res, next) => {
  try {
    const { path } = req.files.files;
    const jsonArray = await csv().fromFile(path);
    const schema = joi.array().items(
      joi.object({
        ndc: joi
          .string()
          .required()
          .messages({ "string.empty": "Ndc is required" }),
        stock: joi
          .string()
          .required()
          .messages({ "string.empty": "stock is required" }),
        weighted_average_cost: joi
          .string()
          .required()
          .messages({ "string.empty": "weighted average cost is required" }),
        Drug_Name: joi
          .string()
          .required()
          .messages({ "string.empty": "Drug name is required" }),
        Dosage_Form: joi
          .string()
          .required()
          .messages({ "string.empty": "Dosage form is required" }),
        Strength: joi
          .string()
          .required()
          .messages({ "string.empty": "Strength is required" }),
        // Strength_Unit_of_Measure: joi
        //   .string()
        //   .required()
        //   .messages({ "string.empty": "Strength unit of measure is required" }),
        Generic_Product_Identifier: joi.string().required().messages({
          "string.empty": "Generic product identifier is required",
        }),
        New_Drug_Descriptor_Identifier: joi.string().required().messages({
          "string.empty": "New drug descriptor identifier is required",
        }),
        unit__cost: joi
          .string()
          .required()
          .messages({ "string.empty": "unit cost is required" }),
        Package_Code: joi
          .string()
          .required()
          .messages({ "string.empty": "Package code is required" }),
        // NDC_UPC_HRI: joi
        //   .string()
        //   .required()
        //   .messages({ "string.empty": "Ndc is required" }),
        manufacturer: joi
          .string()
          .required()
          .messages({ "string.empty": "manufacturer is required" }),
        discount_percentage: joi
          .string()
          .required()
          .messages({ "string.empty": "Discount Percentage is required" }),
      })
    );
    const { error } = schema.validate(jsonArray);
    if (error) {
      throw ApiError.badRequest(error.details[0].message);
    }
    next();
  } catch (error) {
    next(error);
  }
};

const wholesalerInventoryUpdateValidation = (req, _res, next) => {
  const schema = joi.object({
    id: joi.string().optional(),
    stock: joi.number().integer().min(1).required().messages({
      "string.empty": "stock is required",
    }),
    Drug_Name: joi
      .string()
      .regex(/^[a-zA-Z]+$/, "Must be names only taken")
      .required()
      .messages({ "string.empty": "Drug name is required" }),
    Strength_Unit_of_Measure: joi
      .number()
      .integer()
      .min(1)
      .required()
      .messages({ "number.empty": "Strength is required" }),
    discount_percentage: joi
      .number()
      .integer()
      .min(0)
      .required()
      .messages({ "number.empty": "Discount Percentage is required" }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    throw ApiError.badRequest(error.details[0].message);
  }
  next();
};

module.exports = {
  wholesalerInventoryValidation,
  importWholesalerInventoryValidation,
  wholesalerInventoryUpdateValidation,
};
