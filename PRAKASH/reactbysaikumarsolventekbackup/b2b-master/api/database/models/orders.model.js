const { ORDER_MODEL_NAME } = require("../../constant/dbModelName");
const encryption = require("../../helpers/Encryption");
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    ORDER_MODEL_NAME,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      shippingMethod: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shippingPrice: {
        allowNull: false,
        type: DataTypes.FLOAT,
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      orderStatus: {
        allowNull: true,
        type: DataTypes.STRING,
        defaultValue: "OrderPlaced",
      },
      paymentStatus: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      deliveryStatus: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      orderUnique: {
        allowNull: false,
        type: DataTypes.STRING,
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

  order.associate = (model) => {
    order.belongsTo(model.retailer, { as: "retailer" });
    order.belongsTo(model.user, {
      as: "user",
    });
    order.hasMany(model.ordered_item);
    order.hasMany(model.invoice);
    order.hasOne(model.orderAddress);
  };
  return order;
};
