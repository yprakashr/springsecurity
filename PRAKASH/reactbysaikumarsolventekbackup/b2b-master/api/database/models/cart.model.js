/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { CART_MODEL_NAME } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define(
    CART_MODEL_NAME,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      totalQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      finalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discountPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        default: true,
        defaultValue: 1,
      },
    },
    {
      paranoid: true,
    }
  );
  cart.associate = (model) => {
    cart.belongsTo(model.retailer, { as: "retailer" });
    cart.belongsTo(model.user, {
      as: "user",
    });
    cart.hasMany(model.cart_item);
  };
  return cart;
};
