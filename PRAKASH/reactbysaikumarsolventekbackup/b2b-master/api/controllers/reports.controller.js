/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const { fetchReportsQuery } = require("../dao/reports.dao");
const { REPORTS_SUCCESS_MESSAGE } = require("../constant/sucessMessage");
const { handleSuccessOrderResponse } = require("../utility/handleResponse");
const { makePageObject } = require("../helpers/sortSearchPagination");

const fetchReports = async (req, res, next) => {
  try {
    const { query } = req;
    const pageInfo = makePageObject(query);
    const getReports = await fetchReportsQuery(
      "invoice",
      {
        wholesaler_id: req.userInfo.wholesaler.id,
      },
      pageInfo
    );
    let reports = [];
    getReports.rows.flatMap((segregateReports) => {
      const reportsPayload = {
        orderId: segregateReports.order.dataValues.orderUnique,
        orderDate: segregateReports.dataValues.createdAt,
        pharmacy: "Medex Pharma United",
        noOfItems: segregateReports.dataValues.totalQuantity,
        amount: segregateReports.dataValues.finalPrice,
        grossProfit: "200",
        profit: "20",
        status: segregateReports.dataValues.orderStatus,
      };
      reports.push(reportsPayload);
    });
    return handleSuccessOrderResponse(
      res,
      getReports.count,
      reports,
      REPORTS_SUCCESS_MESSAGE
    );
  } catch (error) {
    next(error);
  }
};

module.exports = { fetchReports };
