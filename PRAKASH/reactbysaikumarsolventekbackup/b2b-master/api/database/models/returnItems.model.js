const { RETURN_ITEMS } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");

module.exports = (sequelize, DataTypes) => {
  const returnItems = sequelize.define(
    RETURN_ITEMS,
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
  returnItems.associate = (model) => {
    returnItems.belongsTo(model.wholesalerInventory);
    returnItems.belongsTo(model.return);
    returnItems.belongsTo(model.invoiced_item);
  };
  return returnItems;
};
