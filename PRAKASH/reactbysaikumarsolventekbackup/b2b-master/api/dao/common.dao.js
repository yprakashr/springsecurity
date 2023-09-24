/* eslint-disable radix */
/* eslint-disable no-param-reassign */
const { Op } = require("sequelize");
const db = require("../database/db");

const create = async (model, data) => db[model].create(data);

const bulkCreate = async (model, data) =>
  db[model].bulkCreate(data, { returning: true });

const createOrUpdate = async (data, model, whereClause) => {
  const resp = await db[model].findOne({ where: whereClause });
  if (resp) {
    return db[model].update(data, { where: whereClause });
  }
  return create(model, data);
};
const createOrUpdateInventory = async (data, model, whereClause) => {
  const resp = await db[model].findOne({ where: whereClause });
  if (resp) {
    data.stock = parseInt(resp.stock) + parseInt(data.stock);
    return db[model].update(data, { where: whereClause });
  }
  return create(model, data);
};

const findByNameInCaseSensitive = async (name, model) =>
  db[model].findOne({
    where: {
      name: {
        [Op.iLike]: name,
      },
    },
  });
const findSortSearchPaginationCount = async (pageInfo, sort, option, model) =>
  db[model].findAndCountAll({
    where: option,
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });

const findById = async (model, retailerId) =>
  db[model].findOne({ where: { retailerId } });

const findByOrderId = async (model, id) => db[model].findOne({ where: { id } });

const findAll = async (model, condition) =>
  db[model].findAll({ where: condition });

const findByCondition = async (model, condition) =>
  db[model].findOne({ where: condition });

const findByEmailId = async (email, model) =>
  db[model].findOne({ where: { email } });

const updatById = async (model, id, updatedData) =>
  db[model].update(updatedData, { where: { id } });

const updateByCondition = async (model, condition, updatedData) =>
  db[model].update(updatedData, { where: condition });

const count = async (model) => db[model].count();

const countWithWhereClause = async (model, option) =>
  db[model].count({
    where: option,
  });

const deleteById = async (id, model) => db[model].destroy({ where: { id } });

const deleteByCondition = async (model, condition) =>
  db[model].destroy({ where: condition });

module.exports = {
  create,
  bulkCreate,
  createOrUpdate,
  findSortSearchPaginationCount,
  findById,
  findByOrderId,
  findAll,
  findByEmailId,
  updatById,
  deleteById,
  count,
  countWithWhereClause,
  findByNameInCaseSensitive,
  findByCondition,
  createOrUpdateInventory,
  updateByCondition,
  deleteByCondition
};
