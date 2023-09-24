/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { CART_ITEMS } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const cartItem = sequelize.define(
    CART_ITEMS,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      quantity: {
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
  cartItem.associate = (model) => {
    cartItem.belongsTo(model.wholesalerInventory);
    cartItem.belongsTo(model.cart);
  };
  return cartItem;
};
