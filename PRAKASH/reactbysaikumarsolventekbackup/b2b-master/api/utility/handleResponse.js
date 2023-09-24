/* eslint-disable arrow-body-style */

const Logger = require("../middleware/logger");

// Handle and Send the Error Response to Client
const handleErrorResponse = (res, message) => {
  let msg = "";
  if (message.message) {
    msg = message.message;
  } else {
    msg = message;
  }
  Logger.error(`Logger error==>. - ${msg}.`);
  return res.send({
    status: 400,
    error: true,
    message: msg,
  });
};

// Handle and Send the Success Response to Client
const handleSuccessResponse = (res, data, message, metaData) => {
  return res.send({
    status: 200,
    error: false,
    data,
    metaData,
    message,
  });
};

// Handle and Send the Success Response to Client
const handleSuccessOrderResponse = (res, count, data, message, metaData) => {
  return res.send({
    status: 200,
    error: false,
    count: count,
    data,
    metaData,
    message,
  });
};

// Handle and Send the Success Response to Client
const handleSuccessUploadResponse = (res, data, message, metaData, errMsg) => {
  return res.send({
    status: 200,
    error: false,
    action: "added",
    data,
    metaData,
    message,
    errMsg,
  });
};

module.exports = {
  handleErrorResponse,
  handleSuccessResponse,
  handleSuccessUploadResponse,
  handleSuccessOrderResponse,
};
