const { create, findAll } = require("../dao/common.dao");
const { handleSuccessResponse } = require("../utility/handleResponse");

const postTermsAndConditions = async (req, res, next) => {
  try {
    const { headers, body } = req.body;
    const postData = {
      headers: headers,
      body: body,
    };
    const uploadedData = await create("termsAndConditions", postData);
    return handleSuccessResponse(res, uploadedData, "terms and conditions");
  } catch (error) {
    next(error);
  }
};

const getTermsAndConditions = async (req, res, next) => {
  try {
    const getData = await findAll("termsAndConditions");
    return handleSuccessResponse(res, getData, "terms and conditions");
  } catch (error) {
    next(error);
  }
};

module.exports = { postTermsAndConditions, getTermsAndConditions };
