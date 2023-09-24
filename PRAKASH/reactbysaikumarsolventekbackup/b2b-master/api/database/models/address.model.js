/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { ADDRESS } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");

module.exports = (sequelize, DataTypes) => {
  const addressSchema = sequelize.define(
    ADDRESS,
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

  addressSchema.associate = (model) => {
    addressSchema.belongsTo(model.retailer, { as: "retailer" });
    addressSchema.belongsTo(model.wholesaler, { as: "wholesaler" });
  };
  return addressSchema;
};
