const db = require("../database/db");

const findUserById = async (id) =>
  db.user.findOne({
    where: { id },
    include: [{ model: db.wholesaler }, { model: db.retailer }],
  });

const findUserByRetailer = async (id) =>
  db.user.findOne({
    where: { id },
    include: [{ model: db.retailer }],
  });

const userProfileDetails = async (id) =>
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
        model: db.retailer,
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

const userSortSearchPaginationCount = async (pageInfo, sort, option) => {
  return db.user.findAndCountAll({
    where: option,
    include: [
      {
        model: db["retailer"],
        as: "retailer",
      },
    ],
    distinct: true,
    limit: pageInfo.limit,
    offset: pageInfo.skip,
    order: [sort],
  });
};

module.exports = {
  findUserById,
  findUserByRetailer,
  userProfileDetails,
  userSortSearchPaginationCount,
};
