/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */

const db = require("../database/db");

const checkReturnItem = async (model, id) =>
  await db[model].findOne({ where: { invoiced_item_id: id } });

const getInvoices = async (model, id) =>
  db[model].findOne({
    where: { id: id },
    include: [
      {
        model: db.wholesalerInventory,
      },
    ],
  });

const fetchOrderAddress = async (model, id) =>
  db[model].findOne({
    where: { id: id },
  });

const getReturnItemDetails = async (model, id) =>
  db[model].findOne({
    where: { id: id },
    include: [
      // {
      //   model: db.user,
      //   as: "user",
      //   attributes: {
      //     exclude: [
      //       "mobileNo",
      //       "password",
      //       "userType",
      //       "id",
      //       "otp",
      //       "otpExpiry",
      //       "otpVerified",
      //       "status",
      //       "isLoggedIn",
      //       "createdAt",
      //       "updatedAt",
      //     ],
      //   },
      // },
      {
        model: db.retailer,
        attributes: {
          exclude: [
            "id",
            "storeName",
            "representativeName",
            "storeAddress",
            "storeCity",
            "storeState",
            "storePhone",
            "storeZip",
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
        model: db.invoice,
        attributes: {
          exclude: [
            "id",
            "totalQuantity",
            "totalPrice",
            "finalPrice",
            "discountPrice",
            "orderStatus",
            "isReturn",
            "invoiceUnique",
            "pdfPath",
            "status",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "orderId",
            "retailerId",
            "addressId",
            "wholesalerId",
          ],
        },
        // include: [
        //   {
        //     model: db.orderAddress,
        //     attributes: {
        //       exclude: [
        //         "id",
        //         "createdAt",
        //         "updatedAt",
        //         "deletedAt",
        //         "retailerId",
        //         "defaultAddress",
        //         "status",
        //       ],
        //     },
        //   },
        // ],
      },
      {
        model: db.orderAddress,
        attributes: {
          exclude: [
            "id",
            "createdAt",
            "updatedAt",
            "deletedAt",
            "retailerId",
            "defaultAddress",
            "status",
          ],
        },
      },
      {
        model: db.return_item,
        include: [
          {
            model: db.wholesalerInventory,
          },
        ],
      },
      {
        model: db.return_item_image,
      },
    ],
  });

const fetchReturnItems = async (model, retailerId, pageInfo, sort) =>
  db[model].findAndCountAll({
    where: { retailer_id: retailerId },
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
        model: db.return_item,
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    return: [sort],
  });

const downloadReceiptQuery = async (model, id) =>
  await db[model].findOne({
    where: { id: id },
    include: [
      {
        model: db.user,
        as: "user",
        attributes: {
          exclude: [
            "mobileNo",
            "password",
            "userType",
            "id",
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
        model: db.retailer,
        attributes: {
          exclude: [
            "id",
            "storeName",
            "representativeName",
            "storeAddress",
            "storeCity",
            "storeState",
            "storePhone",
            "storeZip",
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
                "defaultAddress",
                "status",
              ],
            },
          },
        ],
      },
      {
        model: db.return_item,
        include: [
          {
            model: db.wholesalerInventory,
          },
        ],
      },
      {
        model: db.return_item_image,
      },
    ],
  });

module.exports = {
  checkReturnItem,
  getInvoices,
  getReturnItemDetails,
  fetchReturnItems,
  downloadReceiptQuery,
  fetchOrderAddress,
};
