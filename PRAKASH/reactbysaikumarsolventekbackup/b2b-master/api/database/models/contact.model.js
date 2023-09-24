/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { CONTACT } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");

module.exports = (sequelize, DataTypes) => {
  const contactUs = sequelize.define(
    CONTACT,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      email: {
        unique: "email",
        allowNull: false,
        type: DataTypes.STRING,
      },
      message: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        default: true,
        defaultValue: 1,
      },
    },
    {
      getterMethods: {
        name() {
          return encryption.decryptData(this.getDataValue("name"));
        },
        phoneNumber() {
          return encryption.decryptData(this.getDataValue("phoneNumber"));
        },
        email() {
          return encryption.decryptData(this.getDataValue("email"));
        },
        message() {
          return encryption.decryptData(this.getDataValue("message"));
        },
      },
      setterMethods: {
        name(value) {
          this.setDataValue("name", encryption.encryptData(value));
        },
        phoneNumber(value) {
          this.setDataValue("phoneNumber", encryption.encryptData(value));
        },
        email(value) {
          this.setDataValue("email", encryption.encryptData(value));
        },
        message(value) {
          this.setDataValue("message", encryption.encryptData(value));
        },
      },
    },
    {
      paranoid: true,
    }
  );

  return contactUs;
};
