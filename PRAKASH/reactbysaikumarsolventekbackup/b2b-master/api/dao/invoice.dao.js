const db = require("../database/db");
const { Op } = require("sequelize");

const invoicesWithOrder = async (retailerId) =>
    db.invoice.findAll({
        where: { retailer_id: retailerId },
        include: [
            {
                model: db.order,
            },
        ],
    });
module.exports = {
    invoicesWithOrder
}