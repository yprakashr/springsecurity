/* eslint-disable func-names */
/* eslint-disable object-shorthand */
const { TERMS_AND_CONDITIONS } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const termsAndConditions = sequelize.define(
    TERMS_AND_CONDITIONS,
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      headers: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      paranoid: true,
    }
  );

  return termsAndConditions;
};
