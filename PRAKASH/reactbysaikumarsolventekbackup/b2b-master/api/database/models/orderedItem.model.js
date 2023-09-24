const { ORDERED_ITEMS } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");

module.exports = (sequelize, DataTypes) => {
  const orderedItems = sequelize.define(
    ORDERED_ITEMS,
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
  orderedItems.associate = (model) => {
    orderedItems.belongsTo(model.wholesalerInventory);
    orderedItems.belongsTo(model.order);
    orderedItems.hasOne(model.partialInvoiceTracking)
    // orderedItems.belongsTo(model.masterOrder, { as: "masterOrder" });
  };
  return orderedItems;
};
