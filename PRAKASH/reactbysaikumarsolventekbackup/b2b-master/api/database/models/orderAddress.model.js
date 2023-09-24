/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { ORDER_ADDRESS } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const order_address = sequelize.define(
    ORDER_ADDRESS,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      storeName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      zipcode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      defaultAddress: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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

  order_address.associate = (model) => {
    order_address.belongsTo(model.order);
    order_address.hasMany(model.invoice);
    order_address.hasMany(model.return);
  };
  return order_address;
};
