
export const SET_CART = (cartData) => {
  return {
    type: "SET_CART",
    payload: cartData,
  };
};

export const CART_ITEM_QTY_UPDATE = (actionPayload) => {
  return {
    type: "CART_ITEM_QTY_UPDATE",
    payload: actionPayload,
  };
};

export const CART_ITEM_REMOVE = (cartItem) => {
  return {
    type: "CART_ITEM_REMOVE",
    payload: cartItem,
  };
};

export const UPDATE = (
  productDetails,
  method,
  discountPrice,
  finalPrice,
  totalPrice,
  totalQuantity
) => {
  return {
    type: "UPDATE_CART",
    payload: {
      productDetails,
      method,
      discountPrice,
      finalPrice,
      totalPrice,
      totalQuantity,
    },
  };
};
// remove iteams
export const DLT = (record) => {
  return {
    type: "RMV_CART",
    payload: {
      record: record,
    },
  };
};

// remove individual iteam

export const REMOVE = (productDetails) => {
  return {
    type: "RMV_ONE",
    payload: {
      productDetails: productDetails,
    },
  };
};
export const SET_METHOD = (method) => {
  return {
    type: "SET_METHOD",
    payload: { method },
  };
};

export const SET_TOTAL_QUANTITY = ({ totalQuantity }) => {
  return {
    type: "SET_TOTAL_QUANTITY",
    payload: { totalQuantity },
  };
};
