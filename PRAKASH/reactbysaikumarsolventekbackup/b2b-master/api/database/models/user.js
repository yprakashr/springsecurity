const { USER_MODEL_NAME } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    USER_MODEL_NAME,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      email: {
        unique: "email",
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userType: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      mobileNo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      otp: {
        allowNull: true,
        type: DataTypes.STRING(4),
      },
      otpExpiry: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      otpVerified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      oneSignalId: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        default: true,
        defaultValue: 1,
      },
      isLoggedIn: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      getterMethods: {
        email() {
          return encryption.decryptData(this.getDataValue("email"));
        },
        mobileNo() {
          return encryption.decryptData(this.getDataValue("mobileNo"));
        },
        password() {
          return encryption.decryptData(this.getDataValue("password"));
        },
        confirmPassword() {
          return encryption.decryptData(this.getDataValue("confirmPassword"));
        },
        userType() {
          return encryption.decryptData(this.getDataValue("userType"));
        },
      },
      setterMethods: {
        email(value) {
          this.setDataValue("email", encryption.encryptData(value));
        },
        mobileNo(value) {
          this.setDataValue("mobileNo", encryption.encryptData(value));
        },
        password(value) {
          this.setDataValue("password", encryption.encryptData(value));
        },
        confirmPassword(value) {
          this.setDataValue("confirmPassword", encryption.encryptData(value));
        },
        userType(value) {
          this.setDataValue("userType", encryption.encryptData(value));
        },
      },
    },
    {
      paranoid: true,
    }
  );

  user.associate = (model) => {
    user.hasOne(model.retailer);
    user.hasOne(model.wholesaler);
    user.hasOne(model.cart);
    user.hasOne(model.order);
    user.hasOne(model.return);
  };
  return user;
};
