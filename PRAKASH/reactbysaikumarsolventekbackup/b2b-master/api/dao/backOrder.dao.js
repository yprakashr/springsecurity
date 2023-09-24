/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable arrow-body-style */
/* eslint-disable dot-notation */

const db = require("../database/db");
const { Op } = require("sequelize");

const backOrderItems = async (retailer_id) =>
  db.backOrder.findOne({
    attributes: { exclude: ["status", "createdAt", "deletedAt"] },
    where: {
      retailer_id: retailer_id
    },
    include: [
      {
        model: db.backorder_item,
        attributes: {
          exclude: ["id", "status", "createdAt", "deletedAt", "updatedAt"],
        },
        include: [
          {
            model: db.wholesalerInventory,
            attributes: {
              exclude: [
                "id",
                "Dosage_Form",
                "Strength",
                "Generic_Product_Identifier",
                "ndc",
                "status",
                "createdAt",
                "updatedAt",
                "deletedAt",
                // "wholesalerId",
              ],
            },
          },
        ],
      },
    ],
  });

const findByBackorderId = async (model, id) =>
  db[model].findOne({
    attributes: { exclude: ["status", "createdAt", "deletedAt"] },
    where: { id },
    include: [
      {
        model: db.wholesalerInventory,
        attributes: {
          exclude: [
            "id",
            "Dosage_Form",
            "Strength",
            "Generic_Product_Identifier",
            "ndc",
            "status",
            "createdAt",
            "updatedAt",
            "deletedAt",
            // "wholesalerId",
          ],
        },
      },
    ],
  });

const findByBackorderIdRemoved = async (model, id) =>
  db[model].findOne({
    paranoid: false,
    attributes: { exclude: ["status", "createdAt", "deletedAt"] },
    where: { id, deletedAt: { [Op.not]: null } },
    include: [
      {
        model: db.wholesalerInventory,
        attributes: {
          exclude: [
            "id",
            "Dosage_Form",
            "Strength",
            "Generic_Product_Identifier",
            "ndc",
            "status",
            "createdAt",
            "updatedAt",
            "deletedAt",
            // "wholesalerId",
          ],
        },
      },
    ],
  });


module.exports = {
  backOrderItems
};
