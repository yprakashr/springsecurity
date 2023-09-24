/* eslint-disable import/newline-after-import */
/* eslint-disable object-shorthand */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const { create } = require("../dao/common.dao");
const { handleSuccessResponse } = require("../utility/handleResponse");

const postContactUs = async (req, res, next) => {
  try {
    const { name, phoneNumber, email, message } = req.body;
    const postContactUsPayload = {
      name,
      phoneNumber,
      email,
      message,
    };
    await create("contactUs", postContactUsPayload);
    return handleSuccessResponse(
      res,
      {},
      "Thanks for contact us. Please check your email. Admin will reach out you"
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { postContactUs };
