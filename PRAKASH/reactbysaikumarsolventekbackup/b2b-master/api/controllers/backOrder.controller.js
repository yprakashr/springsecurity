const {
  handleSuccessResponse
} = require("../utility/handleResponse");
const {
  create,
  findByCondition,
  deleteById
} = require("../dao/common.dao");
const {
  backOrderItems
} = require("../dao/backOrder.dao");

const addbackOrderProducts = async (req, res, next) => {
  try {
    const { wholesalerInventoryId } = req.body;
    let backOrder = await findByCondition("backOrder", { retailer_id: req.userInfo.retailer.id })
    if (!backOrder) {
      const data = {
        retailerId: req.userInfo.retailer.id
      }
      backOrder = await create("backOrder", data)
    }
    const condition = {
      retailer_id: req.userInfo.retailer.id,
      wholesaler_inventory_id: wholesalerInventoryId
    }
    const backOrderItem = await findByCondition("backorder_item", condition)
    if (backOrderItem) {
      const data = await findByCondition("backorder_item", { id: backOrderItem.id })
      data.dataValues.action = "removed"
      await deleteById(backOrderItem.id, "backorder_item")
      return handleSuccessResponse(res, data, "Back order item removed successfully")
    }
    if (!backOrderItem) {
      const data = {
        backOrderId: backOrder.id,
        wholesalerInventoryId,
        retailerId: req.userInfo.retailer.id
      }
      const backOrderItem = await create("backorder_item", data)
      backOrderItem.dataValues.action = "added"
      return handleSuccessResponse(res, backOrderItem, "Back order item added successfully")
    }
  } catch (error) {
    next(error);
  }
};

const getAllbackOrderDetails = async (req, res, next) => {
  try {
    const backOrder = await backOrderItems(req.userInfo.retailer.id);
    return handleSuccessResponse(
      res,
      backOrder,
      "backOrder products fetched successfully"
    );
  } catch (error) {
    next(error);
  }
};

const deleteBackOrderDetails = async (req, res, next) => {
  try {
    const { id } = req.query;
    await deleteById(id, "backorder_item");
    return handleSuccessResponse(res, {}, "backOrder deleted successfully");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addbackOrderProducts,
  getAllbackOrderDetails,
  deleteBackOrderDetails,
};
