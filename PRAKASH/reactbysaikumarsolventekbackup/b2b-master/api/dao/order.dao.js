/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */

const db = require("../database/db");
const { Op } = require("sequelize");

const cartItems = async (condition) =>
  db.cart.findOne({
    where: condition,
    include: [
      {
        model: db.retailer,
        as: "retailer",
        attributes: {
          exclude: ["id", "status", "createdAt", "updatedAt", "userId"],
        },
        include: [
          {
            model: db.address,
            attributes: {
              exclude: [
                "createdAt",
                "updatedAt",
                "deletedAt",
                "retailerId",
                "defaultAddress",
                "status",
              ],
            },
          },
        ],
      },
      {
        model: db.cart_item,
        include: [
          {
            model: db.wholesalerInventory,
            as: "wholesalerInventory",
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
                "wholesalerId",
              ],
            },
          },
        ],
      },
    ],
  });

const orderDetails = async (condition, pageInfo, sort) =>
  db.order.findAndCountAll({
    attributes: {
      exclude: [
        "shippingMethod",
        "shippingPrice",
        "totalQuantity",
        "totalPrice",
        "deletedAt",
        "retailerId",
        "userId",
        "addressId",
        "discountPrice",
        // "updatedAt",
        "paymentStatus",
        "deliveryStatus",
      ],
    },
    include: [
      {
        model: db.ordered_item,
      },
    ],
    where: condition,
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });

const getByOrderId = async (model, id) =>
  db[model].findOne({
    where: { id },
    attributes: {
      exclude: ["deletedAt", "retailerId", "userId", "updatedAt"],
    },
    include: [
      {
        model: db.ordered_item,
        attributes: {
          exclude: ["status", "createdAt", "updatedAt", "deletedAt", "orderId"],
        },
        include: [
          {
            model: db.wholesalerInventory,
            as: "wholesalerInventory",
            attributes: {
              exclude: [
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
      {
        model: db.retailer,
        as: "retailer",
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
          },
        ],
      },
      {
        model: db.orderAddress,
        attributes: {
          exclude: ["createdAt", "defaultAddress", "deletedAt", "updatedAt"],
        },
      },
    ],
  });

const orderSortSearchPaginationCount = async (pageInfo, sort, option) => {
  return db["order"].findAndCountAll({
    where: option,
    include: [
      {
        model: db["retailer"],
        as: "retailer",
      },
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

const findUserByOrder = async (model, id) =>
  db[model].findOne({
    where: { id },
    include: [
      { model: db.retailer, as: "retailer" },
      { model: db.user, as: "user" },
    ],
  });

const findWholesalerInventoryById = async (model, wholesalerId) =>
  db[model].findAll({
    where: { wholesalerId },
  });

const findWholesalerInventoryByDrugName = async (model, Drug_Name) =>
  db[model].findAll({
    where: { Drug_Name },
  });

const findUserOrderByInvoice = async (model, invoiceUnique) =>
  db[model].findOne({
    where: { invoiceUnique },
    // include: [
    //   { model: db.retailer, as: "retailer" },
    //   { model: db.user, as: "user" },
    // ],
  });

const orderByFilterWithPagination = async (
  pageInfo,
  sort,
  option,
  whereClause
) => {
  return db["order"].findAndCountAll({
    where: whereClause,
    attributes: {
      exclude: [
        "shippingMethod",
        "shippingPrice",
        "totalQuantity",
        "totalPrice",
        "deletedAt",
        "retailerId",
        "userId",
        "discountPrice",
        // "updatedAt",
        "paymentStatus",
        "deliveryStatus",
      ],
    },
    include: [
      {
        model: db.ordered_item,
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });
};

const orderItemWithPartialInvTracking = (id) =>
  db.ordered_item.findOne({
    where: { id },
    include: [
      { model: db.partialInvoiceTracking },
      { model: db.wholesalerInventory },
    ],
  });

const orderItemsWithInvoiceTracking = (orderId, wholesalerId) =>
  db.order.findOne({
    where: { id: orderId },
    include: [
      {
        model: db.ordered_item,
        include: [
          { model: db.partialInvoiceTracking },
          { model: db.wholesalerInventory, where: { wholesalerId } },
        ],
      },
    ],
  });

const orderWithAddress = (orderId) =>
  db.order.findOne({
    where: { id: orderId },
    include: [{ model: db.orderAddress }],
  });

const getByApprovedOrderId = async (model, id) => {
  return db[model].findOne({
    where: { id: id },
    attributes: {
      exclude: ["deletedAt", "retailerId", "userId", "updatedAt"],
    },
    include: [
      {
        model: db.invoiced_item,
        attributes: {
          exclude: ["status", "createdAt", "updatedAt", "deletedAt", "orderId"],
        },
        include: [
          {
            model: db.wholesalerInventory,
            as: "wholesalerInventory",
            attributes: {
              exclude: [
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
      {
        model: db.retailer,
        as: "retailer",
        attributes: {
          exclude: ["id", "status", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.user,
            as: "user",
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
          },
        ],
      },
      {
        model: db.orderAddress,
        attributes: {
          exclude: ["createdAt", "defaultAddress", "deletedAt", "updatedAt"],
        },
      },
    ],
  });
};

const getByProcessedOrderId = async (model, id) => {
  return db[model].findOne({
    where: { id: id },
    attributes: {
      exclude: ["deletedAt", "retailerId", "userId", "updatedAt"],
    },
    include: [
      {
        model: db.invoiced_item,
        attributes: {
          exclude: ["status", "createdAt", "updatedAt", "deletedAt", "orderId"],
        },
        include: [
          {
            model: db.wholesalerInventory,
            as: "wholesalerInventory",
            attributes: {
              exclude: [
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
      {
        model: db.retailer,
        as: "retailer",
        attributes: {
          exclude: ["id", "status", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.user,
            as: "user",
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
          },
        ],
      },
      {
        model: db.orderAddress,
        attributes: {
          exclude: ["createdAt", "defaultAddress", "deletedAt", "updatedAt"],
        },
      },
    ],
  });
};

const getByShippedOrderId = async (model, id) => {
  return db[model].findOne({
    where: { id: id },
    attributes: {
      exclude: ["deletedAt", "retailerId", "userId", "updatedAt"],
    },
    include: [
      {
        model: db.invoiced_item,
        attributes: {
          exclude: ["status", "createdAt", "updatedAt", "deletedAt", "orderId"],
        },
        include: [
          {
            model: db.wholesalerInventory,
            as: "wholesalerInventory",
            attributes: {
              exclude: [
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
      {
        model: db.retailer,
        as: "retailer",
        attributes: {
          exclude: ["id", "status", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.user,
            as: "user",
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
          },
        ],
      },
      {
        model: db.orderAddress,
        attributes: {
          exclude: ["createdAt", "defaultAddress", "deletedAt", "updatedAt"],
        },
      },
    ],
  });
};

const getByDeliveredOrderId = async (model, id) => {
  return db[model].findOne({
    where: { id: id },
    attributes: {
      exclude: ["deletedAt", "retailerId", "userId", "updatedAt"],
    },
    include: [
      {
        model: db.invoiced_item,
        attributes: {
          exclude: ["status", "createdAt", "updatedAt", "deletedAt", "orderId"],
        },
        include: [
          {
            model: db.wholesalerInventory,
            as: "wholesalerInventory",
            attributes: {
              exclude: [
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
      {
        model: db.retailer,
        as: "retailer",
        attributes: {
          exclude: ["id", "status", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: db.user,
            as: "user",
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
          },
        ],
      },
      {
        model: db.orderAddress,
        attributes: {
          exclude: ["createdAt", "defaultAddress", "deletedAt", "updatedAt"],
        },
      },
    ],
  });
};

const fetchApprovedOrdersQuery = async (
  model,
  retailerId,
  pageInfo,
  sort,
  orderStatus
) => {
  return db[model].findAndCountAll({
    where: { retailer_id: retailerId, order_status: orderStatus },
    attributes: {
      exclude: [
        "totalQuantity",
        "totalPrice",
        "discountPrice",
        "reason",
        "image",
        "status",
        "updatedAt",
        "deletedAt",
        "retailerId",
        "invoiceId",
      ],
    },
    include: [
      {
        model: db.invoiced_item,
      },
      {
        model: db.order,
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    return: [sort],
  });
};

const fetchProcessedOrdersQuery = async (
  model,
  retailerId,
  pageInfo,
  sort,
  orderStatus
) => {
  return db[model].findAndCountAll({
    where: { retailer_id: retailerId, order_status: orderStatus },
    attributes: {
      exclude: [
        "totalQuantity",
        "totalPrice",
        "discountPrice",
        "reason",
        "image",
        "status",
        "updatedAt",
        "deletedAt",
        "retailerId",
        "invoiceId",
      ],
    },
    include: [
      {
        model: db.invoiced_item,
      },
      {
        model: db.order,
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    return: [sort],
  });
};

const fetchShippedOrdersQuery = async (
  model,
  retailerId,
  pageInfo,
  sort,
  orderStatus
) => {
  return db[model].findAndCountAll({
    where: { retailer_id: retailerId, order_status: orderStatus },
    attributes: {
      exclude: [
        "totalQuantity",
        "totalPrice",
        "discountPrice",
        "reason",
        "image",
        "status",
        "updatedAt",
        "deletedAt",
        "retailerId",
        "invoiceId",
      ],
    },
    include: [
      {
        model: db.invoiced_item,
      },
      {
        model: db.order,
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    return: [sort],
  });
};

const fetchDeliveredOrdersQuery = async (
  model,
  retailerId,
  pageInfo,
  sort,
  orderStatus
) => {
  return db[model].findAndCountAll({
    where: { retailer_id: retailerId, order_status: orderStatus },
    attributes: {
      exclude: [
        "totalQuantity",
        "totalPrice",
        "discountPrice",
        "reason",
        "image",
        "status",
        "updatedAt",
        "deletedAt",
        "retailerId",
        "invoiceId",
      ],
    },
    include: [
      {
        model: db.invoiced_item,
      },
      {
        model: db.order,
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    return: [sort],
  });
};

module.exports = {
  cartItems,
  orderDetails,
  orderSortSearchPaginationCount,
  findUserByOrder,
  orderByFilterWithPagination,
  findUserOrderByInvoice,
  findWholesalerInventoryById,
  findWholesalerInventoryByDrugName,
  getByOrderId,
  orderItemWithPartialInvTracking,
  orderItemsWithInvoiceTracking,
  orderWithAddress,
  getByApprovedOrderId,
  getByDeliveredOrderId,
  fetchProcessedOrdersQuery,
  fetchShippedOrdersQuery,
  fetchApprovedOrdersQuery,
  fetchDeliveredOrdersQuery,
  getByProcessedOrderId,
  getByShippedOrderId,
};
