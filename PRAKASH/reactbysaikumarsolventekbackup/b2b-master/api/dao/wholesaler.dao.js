/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */

const db = require("../database/db");
const { Op } = require("sequelize");

const wholesalerSortSearchPaginationCount = async (pageInfo, sort, option) => {
  return db["wholesaler"].findAndCountAll({
    where: option,
    include: [
      {
        model: db["user"],
        as: "user",
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });
};

const salesOrdersQuery = async (wholesaler_id) =>
  db.wholesalerInventory.findAll({
    where: wholesaler_id,
    include: [
      {
        model: db.ordered_item,
        include: [
          {
            model: db.wholesalerInventory,
          },
          {
            model: db.order,
            include: [
              { model: db.retailer, as: "retailer" },
              { model: db.user, as: "user" },
            ],
          },
        ],
        required: true,
      },
    ],
    // logging: true,
  });

const wholesalerOrders = async (wholesaler_id, pageInfo, sort) =>
  db.order.findAndCountAll({
    include: [
      {
        model: db.ordered_item,
        include: [
          {
            model: db.wholesalerInventory,
            where: { wholesaler_id: wholesaler_id },
          },
        ],
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });

const filterByDate = async (
  model,
  newDate,
  oldDate,
  wholesaler_id,
  pageInfo,
  sort
) => {
  return db[model].findAndCountAll({
    include: [
      {
        model: db.ordered_item,
        include: [
          {
            model: db.wholesalerInventory,
            where: { wholesaler_id: wholesaler_id },
          },
        ],
      },
    ],
    where: {
      [Op.and]: [
        {
          createdAt: { [Op.between]: [newDate, oldDate] },
        },
      ],
    },
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });
};

const orderById = async (condition, wholesaler_id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cartItems = await db.order.findOne({
        where: condition,
        include: [
          {
            model: db.retailer,
            as: "retailer",
            attributes: {
              exclude: [
                "id",
                "storeName",
                "representativeName",
                "storeAddress",
                "storeCity",
                "storeState",
                "storeZip",
                "storePhone",
                "latitude",
                "deletedAt",
                "retailerId",
                "userId",
                "longitude",
                "status",
                "createdAt",
                "updatedAt",
              ],
            },
          },
          {
            model: db.user,
            as: "user",
            attributes: {
              exclude: [
                "id",
                "email",
                "password",
                "userType",
                "otp",
                "otpExpiry",
                "otpVerified",
                "status",
                "isLoggedIn",
                "createdAt",
                "updatedAt",
              ],
            },
          },
          {
            model: db.ordered_item,
            include: [
              {
                model: db.wholesalerInventory,
                where: { wholesaler_id: wholesaler_id },
              },
              { model: db.partialInvoiceTracking },
            ],
          },
          {
            model: db.orderAddress,
            attributes: {
              exclude: [
                "createdAt",
                "defaultAddress",
                "deletedAt",
                "updatedAt",
              ],
            },
          },
        ],
      });
      resolve(cartItems);
    } catch (error) {
      reject(error);
    }
  });
};

const invoicedItems = async (condition) =>
  db.invoice.findOne({
    where: condition,
    include: [
      { model: db.invoiced_item, include: [db.wholesalerInventory] },
      { model: db.retailer },
      { model: db.orderAddress },
    ],
  });

const getInvoicedItems = async (model, condition) =>
  db[model].findAll({
    where: condition,
    attributes: {
      exclude: [
        "totalQuantity",
        "totalPrice",
        "finalPrice",
        "discountPrice",
        "orderStatus",
        "pdfPath",
        "createdAt",
        "updatedAt",
        "deletedAt",
        "orderId",
        "retailerId",
        "addressId",
        "wholesalerId",
        "orderAddressId",
      ],
    },
  });

const getInvoiceDetail = async (model, condition) =>
  db[model].findOne({
    where: condition,
    include: [
      {
        model: db.order,
        attributes: {
          exclude: [
            "id",
            "shippingMethod",
            "shippingPrice",
            "totalQuantity",
            "totalPrice",
            "finalPrice",
            "discountPrice",
            "orderStatus",
            "paymentStatus",
            "deliveryStatus",
            "createdAt",
            "updatedAt",
            "retailerId",
            "userId",
            "deletedAt",
            "addressId",
          ],
        },
        include: [
          {
            model: db.orderAddress,
            attributes: {
              exclude: [
                "createdAt",
                "defaultAddress",
                "deletedAt",
                "updatedAt",
              ],
            },
          },
        ],
      },
      {
        model: db.retailer,
        attributes: {
          exclude: ["id", "status", "createdAt", "updatedAt", "userId"],
        },
        include: [
          {
            model: db.user,
            as: "user",
            attributes: {
              exclude: [
                "id",
                "status",
                "createdAt",
                "updatedAt",
                "password",
                "otp",
                "otpExpiry",
                "otpVerified",
                "oneSignalId",
                "isLoggedIn",
              ],
            },
          },
        ],
      },
      {
        model: db.invoiced_item,
        include: [
          {
            model: db.wholesalerInventory,
            attributes: {
              exclude: [
                "id",
                "Dosage_Form",
                "Strength",
                "Generic_Product_Identifier",
                "ndc",
                "status",
                "createdAt",
                "updatedAt",
                "deletedAt",
              ],
            },
          },
        ],
      },
    ],
  });

const searchOrdersQuery = async (model, condition) =>
  db[model].findAll({
    where: condition,
    include: [
      {
        model: db.ordered_item,
        include: [
          {
            model: db.wholesalerInventory,
          },
          {
            model: db.order,
            include: [
              { model: db.retailer, as: "retailer" },
              { model: db.user, as: "user" },
            ],
          },
        ],
        required: true,
      },
    ],
  });

const fetchCountWholesalers = async (model, wholesalerId) => {
  return db[model].findAll({
    include: [
      {
        model: db.ordered_item,
        include: [
          {
            model: db.wholesalerInventory,
            where: { wholesaler_id: wholesalerId },
          },
        ],
      },
    ],
  });
};

const fetchCountReturn = async (model, wholesalerId) => {
  return db[model].findAll({
    include: [
      {
        model: db.return_item,
        include: [
          {
            model: db.wholesalerInventory,
            where: { wholesaler_id: wholesalerId },
          },
        ],
      },
    ],
  });
};

const fetchInvoiceLength = async (model, wholesalerId) => {
  return db[model].findAll({
    include: [
      {
        model: db.invoiced_item,
        include: [
          {
            model: db.wholesalerInventory,
            where: { wholesaler_id: wholesalerId },
          },
        ],
      },
    ],
  });
};

const retailersCount = async (model) => {
  return db[model].findAll();
};

const wholesalerProfileDetails = async (id) =>
  db.user.findOne({
    attributes: {
      exclude: [
        "id",
        "deletedAt",
        "password",
        "userType",
        "retailerId",
        "otp",
        "otpExpiry",
        "otpVerified",
        "status",
        "isLoggedIn",
        "createdAt",
        "updatedAt",
        "userId",
      ],
    },
    where: { id },
    include: [
      {
        model: db.wholesaler,
        attributes: {
          exclude: ["id", "status", "createdAt", "updatedAt", "userId"],
        },
        include: [
          {
            model: db.address,
            attributes: {
              exclude: [
                "id",
                "createdAt",
                "updatedAt",
                "deletedAt",
                "retailerId",
              ],
            },
          },
        ],
      },
    ],
  });

module.exports = {
  wholesalerSortSearchPaginationCount,
  salesOrdersQuery,
  orderById,
  invoicedItems,
  wholesalerOrders,
  getInvoicedItems,
  getInvoiceDetail,
  filterByDate,
  searchOrdersQuery,
  fetchCountWholesalers,
  fetchCountReturn,
  fetchInvoiceLength,
  retailersCount,
  wholesalerProfileDetails,
};
