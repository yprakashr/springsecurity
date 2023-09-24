/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { RETAILER_MODEL_NAME } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");

module.exports = (sequelize, Datatypes) => {
  const schema = {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
      defaultValue: Datatypes.UUIDV4,
      allowNull: false,
    },
    fullName: {
      allowNull: true,
      type: Datatypes.STRING,
    },
    status: {
      allowNull: false,
      type: Datatypes.BOOLEAN,
      default: true,
      defaultValue: 1,
    },
  };
  const retailer = sequelize.define(
    RETAILER_MODEL_NAME,
    schema,
    {
      getterMethods: {
        fullName: function () {
          return encryption.decryptData(this.getDataValue("fullName"));
        },
      },
      setterMethods: {
        fullName: function (value) {
          this.setDataValue("fullName", encryption.encryptData(value));
        },
      },
    },
    { paranoid: true }
  );
  retailer.associate = (model) => {
    retailer.hasMany(model.cart);
    retailer.hasMany(model.order);
    retailer.hasMany(model.return);
    retailer.belongsTo(model.user, { as: "user" });
    retailer.hasMany(model.invoice);
    retailer.hasMany(model.address);
    retailer.hasMany(model.backOrder);
    retailer.hasMany(model.backorder_item);
  };
  return retailer;
};
