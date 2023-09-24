/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { RETURN_MODEL_NAME } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const returnProducts = sequelize.define(
    RETURN_MODEL_NAME,
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
      reason: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      supportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      returnStatus: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "Return Requested",
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
  returnProducts.associate = (model) => {
    returnProducts.belongsTo(model.retailer);
    returnProducts.belongsTo(model.user);
    returnProducts.belongsTo(model.invoice);
    returnProducts.hasMany(model.return_item);
    returnProducts.hasMany(model.return_item_image);
    returnProducts.belongsTo(model.orderAddress);
  };
  return returnProducts;
};
