/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { INVOICE_MODEL_NAME } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const invoice = sequelize.define(
    INVOICE_MODEL_NAME,
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
      orderStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isReturn: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      invoiceUnique: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderUnique: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pdfPath: {
        type: DataTypes.STRING,
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
  invoice.associate = (model) => {
    invoice.belongsTo(model.order);
    invoice.belongsTo(model.retailer);
    invoice.belongsTo(model.address);
    invoice.belongsTo(model.wholesaler);
    invoice.hasMany(model.invoiced_item);
    invoice.belongsTo(model.orderAddress);
    invoice.hasMany(model.return);
    invoice.belongsTo(model.user, {
      as: "user",
    });
  };
  return invoice;
};
