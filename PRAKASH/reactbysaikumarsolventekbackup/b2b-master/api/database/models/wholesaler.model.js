/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { WHOLESALER_MODEL_NAME } = require("../../constant/dbModelName");
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
  const wholeSeller = sequelize.define(
    WHOLESALER_MODEL_NAME,
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
  wholeSeller.associate = (model) => {
    wholeSeller.belongsTo(model.user, { as: "user" });
    wholeSeller.hasMany(model.invoice);
    wholeSeller.hasMany(model.address);
  };
  return wholeSeller;
};
