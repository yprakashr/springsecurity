/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const {
  WHOLESALER_INVENTORY_MODEL_NAME,
} = require("../../constant/dbModelName");
// const encryption = require('../../helpers/Encryption');

module.exports = (sequelize, Datatypes) => {
  const schema = {
    id: {
      type: Datatypes.UUID,
      primaryKey: true,
      defaultValue: Datatypes.UUIDV4,
      allowNull: true,
    },
    ndc: {
      allowNull: true,
      type: Datatypes.STRING,
    },
    stock: {
      allowNull: true,
      type: Datatypes.INTEGER,
    },
    weighted_average_cost: {
      allowNull: true,
      type: Datatypes.FLOAT,
    },
    Drug_Name: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    Dosage_Form: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    Strength: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
    Strength_Unit_of_Measure: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
    Generic_Product_Identifier: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    New_Drug_Descriptor_Identifier: {
      type: Datatypes.TEXT("long"),
      allowNull: true,
    },
    unit__cost: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
    discount_percentage: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
    Package_Code: {
      type: Datatypes.INTEGER,
      allowNull: true,
    },
    NDC_UPC_HRI: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    manufacturer: {
      type: Datatypes.STRING,
      allowNull: true,
    },
    status: {
      allowNull: false,
      type: Datatypes.BOOLEAN,
      default: true,
      defaultValue: 1,
    },
  };
  const wholesalerInventory = sequelize.define(
    WHOLESALER_INVENTORY_MODEL_NAME,
    schema,
    {
      paranoid: true,
    }
  );
  wholesalerInventory.associate = (model) => {
    wholesalerInventory.belongsTo(model.wholesaler, { as: "wholesaler" });
    wholesalerInventory.hasMany(model.cart_item);
    wholesalerInventory.hasMany(model.ordered_item);
    wholesalerInventory.hasMany(model.backorder_item);
    wholesalerInventory.hasMany(model.invoiced_item);
    wholesalerInventory.hasMany(model.return_item);
  };
  return wholesalerInventory;
};
