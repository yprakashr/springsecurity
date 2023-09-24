/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const {
  create,
  updatById,
  findById,
  deleteById,
  findByCondition,
} = require("../dao/common.dao");
const { handleSuccessResponse } = require("../utility/handleResponse");
const {
  makePageObject,
  getSort,
  searchAllColumn,
} = require("../helpers/sortSearchPagination");
const { retailerSortSearchPaginationCount } = require("../dao/retailer.dao");
const { findUserByRetailer } = require("../dao/user.dao");
const { invoicesWithOrder } = require("../dao/invoice.dao");

const createRetailer = async (req, res, next) => {
  try {
    const userId = req.userInfo.id;
    let retailerId = await findUserByRetailer(userId);
    const existRetID = await findByCondition("retailer", {
      id: retailerId.dataValues.retailer.dataValues.id,
    });

    if (existRetID) {
      const {
        user_id,
        fullName,
        storeName,
        representativeName,
        storeAddress,
        storeCity,
        storeState,
        storeZip,
        latitude,
        longitude,
        storePhone,
      } = req.body;
      const data = {
        user_id,
        fullName,
        storeName,
        representativeName,
        storeAddress,
        storeCity,
        storeState,
        storeZip,
        latitude,
        longitude,
        storePhone,
      };
      await updatById("retailer", existRetID.dataValues.id, data);
      return handleSuccessResponse(res, data, "Retailer updated successfully");
    } else {
      const {
        user_id,
        fullName,
        storeName,
        representativeName,
        storeAddress,
        storeCity,
        storeState,
        storeZip,
        latitude,
        longitude,
        storePhone,
      } = req.body;
      const data = {
        user_id,
        fullName,
        storeName,
        representativeName,
        storeAddress,
        storeCity,
        storeState,
        storeZip,
        latitude,
        longitude,
        storePhone,
      };
      await create("retailer", data);
      return handleSuccessResponse(res, data, "Retailer created successfully");
    }
  } catch (error) {
    next(error);
  }
};

const getRetailer = async (req, res, next) => {
  try {
    const { query } = req;
    const pageInfo = makePageObject(query);
    const sort = getSort(query, "retailer");
    const { search } = query;
    const option = searchAllColumn(search, "retailer");
    const retailer = await retailerSortSearchPaginationCount(
      pageInfo,
      sort,
      option
    );
    return handleSuccessResponse(
      res,
      retailer,
      "Retailer fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const getOneRetailer = async (req, res, next) => {
  try {
    const { id } = req.query;
    const getRetailerData = await findById("retailer", id);
    return handleSuccessResponse(res, getRetailerData, "Retailer details");
  } catch (error) {
    next(error);
  }
};

const updateRetailer = async (req, res, next) => {
  try {
    const { id } = req.body;
    delete req.body.id;
    await updatById("retailer", id, req.body);
    return handleSuccessResponse(res, {}, "Retailer updated successfully");
  } catch (error) {
    next(error);
  }
};

const deleteRetailer = async (req, res, next) => {
  try {
    const { id } = req.query;
    await deleteById(id, "retailer");
    return handleSuccessResponse(res, {}, "Record deleted successfully");
  } catch (error) {
    next(error);
  }
};
const getInvoices = async (req, res, next) => {
  try {
    const invoices = await invoicesWithOrder(req.userInfo.retailer.id);
    handleSuccessResponse(res, invoices, "Invoices fetched successfully");
  } catch (error) {
    next(error);
  }
};

const downloadInvoice = async (req, res, next) => {
  try {
    const { invoice_id } = req.query;
    const invoice = await findByCondition("invoice", { id: invoice_id });
    console.log(invoice.pdfPath);
    // const data = await fs.readFileSync(invoice.pdfPath);
    // res.contentType("application/pdf");
    // res.send(data);
    const filePath = invoice.pdfPath;
    const fileName = filePath.slice(17, 34);
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.log(err);
        res.status(404).send("File not found");
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createRetailer,
  getRetailer,
  getOneRetailer,
  updateRetailer,
  deleteRetailer,
  getInvoices,
  downloadInvoice,
};
