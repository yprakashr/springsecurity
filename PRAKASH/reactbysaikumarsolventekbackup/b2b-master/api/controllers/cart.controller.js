/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

const {
  create,
  deleteById,
  findByCondition,
  bulkCreate,
  deleteByCondition,
} = require("../dao/common.dao");
const {
  cartItems,
  createCartRow,
  updateCartItems,
  cartItem,
} = require("../dao/cart.dao");
const csv = require("csvtojson");
const APIError = require("../utility/ApiError");
const { handleSuccessResponse } = require("../utility/handleResponse");
const { makePageObject, getSort } = require("../helpers/sortSearchPagination");
const { cartAddressSortSearchPaginationCount } = require("../dao/cart.dao");

const { searchAllColumn } = require("../helpers/sortSearchPagination");

//add to cart update cart new cart creation
const updateCart = async (req, res, next) => {
  try {
    const { itemsToCart } = req.body;
    //response data
    let data;
    //cart
    const cart = await cartItems({
      retailerId: req.userInfo.retailer.id,
    });

    if (cart && cart.cart_items) {
      //cart items update
      const itemsUpdatePromises = itemsToCart.map((item) => {
        return updateCartItems(cart.id, item);
      });
      data = await Promise.all(itemsUpdatePromises);
    } else {
      //creating cart for the initial time
      const newCartData = {
        retailerId: req.userInfo.retailer.id,
        userId: req.userInfo.id,
        totalQuantity: 0,
        totalPrice: 0,
        finalPrice: 0,
        discountPrice: 0,
      };
      const newCart = await createCartRow(newCartData);
      itemsToCart.forEach((item) => {
        item.cartId = newCart.dataValues.id;
      });
      //creating multiple cart items
      data = await bulkCreate("cart_item", itemsToCart);
    }
    const updatedCart = await cartItems({
      retailerId: req.userInfo.retailer.id,
    });
    //total quantity
    updatedCart.totalQuantity = updatedCart.cart_items.length;

    //total price
    let totalPrice = 0;
    let finalPrice = 0;
    updatedCart.cart_items.forEach((item) => {
      let itemPrice = item.quantity * item.wholesalerInventory.unit__cost;
      totalPrice += itemPrice;
      finalPrice +=
        itemPrice -
        (itemPrice * item.wholesalerInventory.discount_percentage) / 100;
    });
    updatedCart.totalPrice = totalPrice;
    //final price
    updatedCart.finalPrice = finalPrice;
    //discount price
    updatedCart.discountPrice = totalPrice - finalPrice;
    await updatedCart.save();
    return handleSuccessResponse(res, data, "added to cart successfully");
  } catch (error) {
    next(error);
  }
};

//qty increment or decrement by one
const qtyUpdate = async (req, res, next) => {
  try {
    const { updateOp, cartItemId } = req.body;
    const cart = await cartItems({
      retailerId: req.userInfo.retailer.id,
    });
    const cartItemData = await cartItem({ id: cartItemId });
    if (!cartItemData) {
      throw APIError.notFound("Data not found in database");
    }

    if (updateOp === "inc") {
      cartItemData.quantity = cartItemData.quantity + 1;
      await cartItemData.save();
      cart.totalPrice =
        cart.totalPrice + cartItemData.wholesalerInventory.unit__cost;
      cart.finalPrice =
        cart.finalPrice +
        (cartItemData.wholesalerInventory.unit__cost -
          (cartItemData.wholesalerInventory.unit__cost *
            cartItemData.wholesalerInventory.discount_percentage) /
          100);
      cart.discountPrice = cart.totalPrice - cart.finalPrice;
      await cart.save();
      return handleSuccessResponse(res, {}, "quantity increased by one");
    }
    if (updateOp === "dec") {
      cartItemData.quantity = cartItemData.quantity - 1;
      await cartItemData.save();
      cart.totalPrice =
        cart.totalPrice - cartItemData.wholesalerInventory.unit__cost;
      cart.finalPrice =
        cart.finalPrice -
        (cartItemData.wholesalerInventory.unit__cost -
          (cartItemData.wholesalerInventory.unit__cost *
            cartItemData.wholesalerInventory.discount_percentage) /
          100);
      cart.discountPrice = cart.totalPrice - cart.finalPrice;
      await cart.save();
      return handleSuccessResponse(res, {}, "quantity decreased by one");
    }
  } catch (error) {
    next(error);
  }
};

//getting cart items with inventory datas
const getCart = async (req, res, next) => {
  try {
    const cart = await cartItems({
      retailerId: req.userInfo.retailer.id,
    });
    if (cart == null) {
      return handleSuccessResponse(res, {}, "cart items is empty");
    }
    const updatedCartItems = [];
    cart?.cart_items.forEach((item) => {
      item.dataValues["discounted_item_total"] =
        item.quantity * item?.wholesalerInventory?.unit__cost -
        (item.quantity *
          item?.wholesalerInventory?.unit__cost *
          item?.wholesalerInventory?.discount_percentage) /
        100;
      item.dataValues["item_total"] =
        item.quantity * item?.wholesalerInventory?.unit__cost;
      updatedCartItems.push(item);
    });
    cart.cart_items = updatedCartItems;
    return handleSuccessResponse(res, cart, "cart fetched successfully");
  } catch (error) {
    next(error);
  }
};

const removeCartItem = async (req, res, next) => {
  try {
    const { cartItemId } = req.params;
    const cart = await cartItems({
      retailerId: req.userInfo.retailer.id,
    });
    const cartItemData = await cartItem({ id: cartItemId });
    cart.totalQuantity = cart.totalQuantity - 1;
    cart.totalPrice =
      cart.totalPrice -
      cartItemData.quantity * cartItemData.wholesalerInventory.unit__cost;
    cart.finalPrice = cart.totalPrice - (cart.totalPrice * 10) / 100;
    cart.discountPrice = (cart.totalPrice * 10) / 100;
    await cart.save();
    await deleteById(cartItemId, "cart_item");
    return handleSuccessResponse(res, {}, "Item removed successfully");
  } catch (error) {
    next(error);
  }
};

const csvToCart = async (req, res, next) => {
  try {
    const { path } = req.files.files;
    const jsonArray = await csv().fromFile(path);
    const cartDetails = {
      productDetails: [],
      retailerId: req.userInfo.retailer.id,
      totalQuantity: 0,
      totalPrice: 0,
    };
    for (const keys of jsonArray) {
      const drugs = await findByCondition("file_master_products", {
        n_d_c__u_p_c__h_r_i: keys.ndc,
      });
      const data = {
        drugName: drugs.drug__name,
        ndcNumber: keys.ndc,
        quantity: Math.floor(keys.quantity),
        totalPrice: drugs.unit__cost,
      };
      cartDetails.productDetails.push(data);
    }
    cartDetails.productDetails.forEach((ele2) => {
      // eslint-disable-next-line prefer-destructuring, no-var
      var floor = Math.floor;
      const x = floor(ele2.quantity);
      // eslint-disable-next-line operator-assignment
      cartDetails.totalQuantity = cartDetails.totalQuantity + x;
      // eslint-disable-next-line operator-assignment
      cartDetails.totalPrice =
        cartDetails.totalPrice + ele2.quantity * ele2.totalPrice;
    });
    await create("cart", cartDetails);
    return handleSuccessResponse(res, cartDetails, "cart added successfully");
  } catch (error) {
    next(error);
  }
};
//unused controllers
const getOneCartDetails = async (req, res, next) => {
  try {
    // const { retailerId } = req.query;
    // const getCartDetail = await findById("cart", retailerId);
    const { id } = req.userInfo;
    const { query } = req;
    const pageInfo = makePageObject(query);
    const sort = getSort(query, "cart");
    const { search } = query;
    const option = searchAllColumn(search, "cart");
    option.userId = id;
    const cart = await cartAddressSortSearchPaginationCount(
      pageInfo,
      sort,
      option
    );
    let cartItemLength;
    cart.rows.forEach((cartVal) => {
      const existData =
        typeof cartVal.dataValues.productDetails === "string"
          ? JSON.parse(cartVal.dataValues.productDetails)
          : cartVal.dataValues.productDetails;
      cartItemLength = existData.length;
    });
    cart.cartItemLength = cartItemLength;
    return handleSuccessResponse(res, cart, "cart details");
  } catch (error) {
    next(error);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    await deleteByCondition("cart", { retailerId: req?.userInfo?.retailer?.id })
    handleSuccessResponse(res, {}, "Cart cleared successfully")
  } catch (error) {
    next(error)
  }
}

module.exports = {
  updateCart,
  csvToCart,
  getCart,
  getOneCartDetails,
  removeCartItem,
  qtyUpdate,
  deleteCart
};
