const {
  FILE_MASTER_PRODUCT_MODEL_NAME,
} = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
  const masterProducts = sequelize.define(FILE_MASTER_PRODUCT_MODEL_NAME, {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    drug__name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    dosage__form: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // strength: {
    // 	type: DataTypes.STRING,
    // 	allowNull: true,
    // },
    strength__unit_of__measure: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    generic__product__identifier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    new__drug__descriptor__identifier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    n_d_c__u_p_c__h_r_i: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drug__descriptor__identifier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // descriptor: {
    // 	type: DataTypes.STRING,
    // 	allowNull: true,
    // },
    // manufacture: {
    // 	type: DataTypes.STRING,
    // 	allowNull: true,
    // },
    unit__cost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    medi__span__labeler__identifier: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    generic__product__packaging__code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  //   masterProducts.associate = (model) => {
  //     masterProducts.belongsTo(model.wishlist, { as: "wishlist" });
  //   };

  return masterProducts;
};
