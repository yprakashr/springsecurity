const { handleSuccessResponse } = require("../utility/handleResponse");
const {
  create,
  deleteById,
  updateByCondition,
  findByCondition,
  updatById,
} = require("../dao/common.dao");

const addAddress = async (req, res, next) => {
  try {
    const getAddress = await findByCondition("address", {
      retailerId: req.userInfo.retailer.id,
    });
    if (!getAddress) {
      const { storeName, address, city, state, zipcode, phoneNumber } =
        req.body;
      const addressPayload = {
        storeName: storeName,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        phoneNumber: phoneNumber,
        retailerId: req.userInfo.retailer.id,
      };
      await create("address", addressPayload);
      return handleSuccessResponse(res, {}, "Address added successfully");
    } else {
      const { storeName, address, city, state, zipcode, phoneNumber } =
        req.body;
      const addressPayload = {
        storeName: storeName,
        address: address,
        city: city,
        state: state,
        zipcode: zipcode,
        phoneNumber: phoneNumber,
        retailerId: req.userInfo.retailer.id,
      };
      await updatById("address", getAddress.dataValues.id, addressPayload);
      return handleSuccessResponse(res, {}, "Address added successfully");
    }
  } catch (error) {
    next(error);
  }
};

const getAddress = async (req, res, next) => {
  try {
    const getAddress = await findByCondition("address", {
      retailerId: req.userInfo.retailer.id,
    });
    return handleSuccessResponse(res, getAddress, "Address details");
  } catch (error) {
    next(error);
  }
};

const updateAddress = async (req, res, next) => {
  try {
    const getId = await findByCondition("address", {
      retailerId: req.userInfo.retailer.id,
    });
    await updatById("address", getId.dataValues.id, req.body);
    return handleSuccessResponse(res, "", "Address updated successfully");
  } catch (error) {
    next(error);
  }
};

const makeAddressAsDefault = async (req, res, next) => {
  try {
    await updateByCondition(
      "address",
      { userId: req.query.userId },
      { default_address: false }
    );
    const setDefaultAddress = await updateByCondition(
      "address",
      { id: req.query.id },
      { default_address: true }
    );
    return handleSuccessResponse(
      res,
      setDefaultAddress,
      "Default address updated"
    );
  } catch (error) {
    next(error);
  }
};

const deleteAddress = async (req, res, next) => {
  try {
    const { id } = req.query;
    await deleteById(id, "address");
    return handleSuccessResponse(res, "", "Address deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress,
  makeAddressAsDefault,
};
