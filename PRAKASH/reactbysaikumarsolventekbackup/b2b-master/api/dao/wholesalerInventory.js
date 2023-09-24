/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */

const db = require("../database/db");

const wholesalerfindSortSearchPaginationCount = async (pageInfo, sort, option, model) =>
  db[model].findAndCountAll({
    where: option,
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });

const inventorySortSearchPaginationCount = async (pageInfo, sort, option) => {
  return db["wholesalerInventory"].findAndCountAll({
    where: option,
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });
};

const bulkDeleteInvontory = async (model, condition) => {
  await db[model].destroy({
    where: condition,
  });
};

const fetchInventory = async (
  model,
  drugName,
  wholesalerId,
  pageInfo,
  sort
) => {
  return db[model].findAndCountAll({
    where: { drug__name: drugName, wholesaler_id: wholesalerId },
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    wholesalerInventory: [sort],
  });
};

module.exports = {
  inventorySortSearchPaginationCount,
  bulkDeleteInvontory,
  fetchInventory,
  wholesalerfindSortSearchPaginationCount,
};
