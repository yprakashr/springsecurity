const { BACKORDER_MODEL_NAME } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const backOrderModel = sequelize.define(
    BACKORDER_MODEL_NAME,
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
  backOrderModel.associate = (model) => {
    backOrderModel.belongsTo(model.retailer, { as: "retailer" });
    backOrderModel.hasMany(model.backorder_item);
  };
  return backOrderModel;
};
