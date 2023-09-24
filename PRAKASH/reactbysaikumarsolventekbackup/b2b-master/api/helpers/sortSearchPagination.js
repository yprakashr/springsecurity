/* eslint-disable default-case */
/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/order */
/* eslint-disable no-restricted-syntax */

const { searchColumn } = require("../constant/searchColumn");
const { Op } = require("sequelize");
const Sequelize = require("sequelize");
// eslint-disable-next-line dot-notation
const db = require("../database/db");

const makePageObject = (query) => {
  const pageObject = { skip: 0, limit: 10 };
  if (query.pageNo && query.pageSize) {
    const pageNo = parseInt(query.pageNo, 10);
    const pageSize = parseInt(query.pageSize, 10);
    if (isFinite(pageNo) && isFinite(pageSize)) {
      const skip = (pageNo - 1) * pageSize;
      const limit = pageSize;
      pageObject.skip = skip;
      pageObject.limit = limit;
      return pageObject;
    }
  }
  return pageObject;
};
const getAssociateSortArr = (sortBy, order) => {
  const splitArray = sortBy.split(".");
  let tableName = splitArray[0];
  let sortArr;
  switch (sortBy) {
    case "renter.name":
    case "rentee.name":
      tableName = "user";
      sortArr = [
        { model: db[tableName], as: splitArray[0] },
        splitArray[1],
        order,
      ];
      break;
    case "orderSummary.renter.name":
    case "orderSummary.rentee.name":
      sortArr = [
        db["orderSummary"],
        { model: db["user"], as: splitArray[1] },
        splitArray[2],
        order,
      ];
      break;
    case "orderSummary.product.name":
      sortArr = [db["orderSummary"], db["product"], splitArray[2], order];
      break;
    default:
      sortArr = [db[tableName], splitArray[1], order];
  }
  return sortArr;
};
const getSort = (query, module) => {
  if (module == "fileMasterProduct") {
    return ["drug__name", "ASC"];
  }
  const { sortBy, order } = query;
  let sortArr = ["updatedAt", "DESC"];
  if (sortBy && order) {
    sortArr = [sortBy, order];
    switch (sortBy) {
      case "name":
        sortArr = [
          // eslint-disable-next-line prefer-template
          Sequelize.fn("lower", Sequelize.col(module + ".name")),
          order,
        ];
        break;
      case "productCount":
        sortArr = [Sequelize.literal(`"productCount"`), order];
        break;
    }
    if (sortBy.includes(".")) {
      sortArr = getAssociateSortArr(sortBy, order);
    }
  }
  return sortArr;
};

const getSortSearchDrugs = (query, module) => {
  if (module == "fileMasterProduct") {
    return ["drug__name", "ASC"];
  }
  const { sortBy, order } = query;
  let sortArr = ["unit__cost", "ASC"];
  if (sortBy && order) {
    sortArr = [sortBy, order];
    switch (sortBy) {
      case "name":
        sortArr = [
          // eslint-disable-next-line prefer-template
          Sequelize.fn("lower", Sequelize.col(module + ".name")),
          order,
        ];
        break;
      case "productCount":
        sortArr = [Sequelize.literal(`"productCount"`), order];
        break;
    }
    if (sortBy.includes(".")) {
      sortArr = getAssociateSortArr(sortBy, order);
    }
  }
  return sortArr;
};

const searchAllColumn = (search, module, status) => {
  let searchArr = [];
  const obj = {};
  if (!search) {
    return obj;
  }
  if (search) {
    const searchField = [...searchColumn[module]];
    for (const element of searchField) {
      let searchObj = {};
      const field = element;
      if (field === "search_tag") {
        const arrContain = [search];
        searchObj = {
          // eslint-disable-next-line no-useless-computed-key
          ["search_tag"]: {
            [Op.contains]: arrContain,
          },
        };
      } else {
        searchObj = {
          [field]: {
            [Op.like]: `%${search}%`,
          },
        };
      }
      searchArr.push(searchObj);
    }
    obj[Op.or] = searchArr;
  }
  if (status) {
    searchArr = [];
    const searchObj = {
      // eslint-disable-next-line no-useless-computed-key
      ["status"]: {
        [Op.like]: status,
      },
    };
    searchArr.push(searchObj);
    obj[Op.and] = searchArr;
  }
  return obj;
};

module.exports = {
  makePageObject,
  getSort,
  searchAllColumn,
  getSortSearchDrugs,
};
