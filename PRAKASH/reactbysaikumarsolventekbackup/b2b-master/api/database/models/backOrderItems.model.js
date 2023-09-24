const { BACKORDER_ITEMS } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const backOrderItems = sequelize.define(
    BACKORDER_ITEMS,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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
  backOrderItems.associate = (model) => {
    backOrderItems.belongsTo(model.wholesalerInventory);
    backOrderItems.belongsTo(model.backOrder);
    backOrderItems.belongsTo(model.retailer, { as: "retailer" });
  };
  return backOrderItems;
};
