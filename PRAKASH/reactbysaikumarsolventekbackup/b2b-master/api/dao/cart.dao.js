/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */

const db = require("../database/db");
const { Op } = require("sequelize");
const { findByCondition, create } = require("./common.dao");

const cartAddressSortSearchPaginationCount = async (pageInfo, sort, option) => {
  return db["cart"].findAndCountAll({
    where: option,
    include: [
      // {
      //   model: db["address"],
      //   as: "address",
      // },
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

const cartItems = async (condition) =>
  db.cart.findOne({
    where: condition,
    include: [
      {
        model: db.user,
        as: "user",
        attributes: {
          exclude: [
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
        as: "retailer",
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
      { model: db.cart_item, include: [db.wholesalerInventory] },
    ],
  });

const cartItem = async (condition) =>
  db.cart_item.findOne({
    where: condition,
    include: { model: db.wholesalerInventory },
  });

const updateCartItems = (cartId, item) => {
  return new Promise(async (resolve, reject) => {
    try {
      const cartItem = await findByCondition("cart_item", {
        wholesalerInventoryId: item.wholesalerInventoryId,
        cartId,
      });
      if (cartItem) {
        cartItem.quantity = cartItem.quantity + item.quantity;
        const updatedCartItem = await cartItem.save();
        resolve(updatedCartItem);
      } else {
        const newCartItemInserted = await create("cart_item", {
          ...item,
          cartId,
        });
        resolve(newCartItemInserted);
      }
    } catch (error) {
      reject(error);
    }
  });
};
const incCartItemQty = async (inc) =>
  db.cart_item.increment(["quantity"], { by: inc });
const createCartRow = async (data) => db.cart.create(data);
const createCartItemRow = async (data) => db.cart_item.create(data);
module.exports = {
  cartAddressSortSearchPaginationCount,
  cartItems,
  cartItem,
  createCartRow,
  createCartItemRow,
  incCartItemQty,
  updateCartItems,
};
