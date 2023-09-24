/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { RETURN_ITEMS_IMAGES } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const returnItemImages = sequelize.define(
    RETURN_ITEMS_IMAGES,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
    }
  );
  returnItemImages.associate = (model) => {
    returnItemImages.belongsTo(model.return);
  };
  return returnItemImages;
};
