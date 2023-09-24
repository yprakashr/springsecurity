const { INVOICED_ITEMS } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");

module.exports = (sequelize, DataTypes) => {
  const invoiceItems = sequelize.define(
    INVOICED_ITEMS,
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
      orderItemTotal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
  invoiceItems.associate = (model) => {
    invoiceItems.belongsTo(model.invoice);
    invoiceItems.belongsTo(model.wholesalerInventory);
    invoiceItems.hasOne(model.return_item);
  };
  return invoiceItems;
};
