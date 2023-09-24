const INITIAL_STATE = {
  cart_items: [],
  totalQuantity: 0,
  totalPrice: 0,
  finalPrice: 0,
  discountPrice: 0,
  user1: {},
  retailer: {},
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CART":
      return {
        cart_items: action?.payload.cart_items
          ? action?.payload.cart_items
          : [],
        totalQuantity: action?.payload.totalQuantity,
        totalPrice: action?.payload.totalPrice,
        finalPrice: action?.payload.finalPrice,
        discountPrice: action?.payload.discountPrice,
        user1: action?.payload.user,
        retailer: action?.payload.retailer,
      };
    case "CART_ITEM_QTY_UPDATE":
      const updatedCart = state.cart_items.map((item) => {
        if (
          action.payload.updAction === "inc" &&
          action.payload.cartItem.id === item.id
        ) {
          item.quantity = item.quantity + 1;
          item.item_total = item.item_total + item.wholesalerInventory.unit__cost
          item.discounted_item_total = item.discounted_item_total + (item.wholesalerInventory.unit__cost - (item.wholesalerInventory.unit__cost * item.wholesalerInventory.discount_percentage / 100))
          state.totalPrice =
            state.totalPrice + item.wholesalerInventory.unit__cost;
          state.finalPrice = state.finalPrice + (item.wholesalerInventory.unit__cost - (item.wholesalerInventory.unit__cost * item.wholesalerInventory.discount_percentage / 100))
          state.discountPrice = state.totalPrice - state.finalPrice;
        }
        if (
          action.payload.updAction === "dec" &&
          action.payload.cartItem.id === item.id &&
          item.quantity > 1
        ) {
          item.quantity = item.quantity - 1;
          item.item_total = item.item_total - item.wholesalerInventory.unit__cost
          item.discounted_item_total = item.discounted_item_total - (item.wholesalerInventory.unit__cost - (item.wholesalerInventory.unit__cost * item.wholesalerInventory.discount_percentage / 100))
          state.totalPrice =
            state.totalPrice - item.wholesalerInventory.unit__cost;
          state.finalPrice = state.finalPrice - (item.wholesalerInventory.unit__cost - (item.wholesalerInventory.unit__cost * item.wholesalerInventory.discount_percentage / 100))
          state.discountPrice = state.totalPrice - state.finalPrice;
        }
        return item;
      });
      return {
        ...state,
        cart_items: updatedCart,
      };

    case "CART_ITEM_REMOVE":
      const itemRemovedCart = state.cart_items.filter(
        (item) => item.id !== action.payload.id
      );
      const totalPrice =
        state.totalPrice -
        action.payload.wholesalerInventory.unit__cost * action.payload.quantity;
      const finalPrice = totalPrice - (totalPrice * 10) / 100;
      return {
        ...state,
        totalQuantity: state.totalQuantity - 1,
        totalPrice,
        finalPrice,
        discountPrice: totalPrice - finalPrice,
        cart_items: itemRemovedCart,
        totalQuantity: state.totalQuantity - 1,
      };

    default:
      return state;
  }
};
