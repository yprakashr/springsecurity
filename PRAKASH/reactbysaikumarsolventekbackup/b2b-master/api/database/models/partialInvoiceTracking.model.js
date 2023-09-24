const { PARTIAL_INVOICE_TRACKING } = require("../../constant/dbModelName");

module.exports = (sequelize, DataTypes) => {
    const partialInvoiceTracking = sequelize.define(
        PARTIAL_INVOICE_TRACKING,
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            invoiceGeneratedQty: {
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
    partialInvoiceTracking.associate = (model) => {
        partialInvoiceTracking.belongsTo(model.ordered_item);
    };
    return partialInvoiceTracking;
};
