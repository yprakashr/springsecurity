export const actions = {
  SET_BACKORDER: "SET_BACKORDER",
  ADD_BACKORDER: "ADD_BACKORDER",
  UPDATE_BACKORDER: "Back_UPDATE_CART",
  REMOVE_BACKORDER: "REMOVE_BACKORDER",
};
export const ADD_BACKORDER = (item) => {
  return {
    type: "ADD_BACKORDER",
    payload: item,
  };
};
export const REMOVE_BACKORDER = (wholesalerInventoryId) => {
  return {
    type: "REMOVE_BACKORDER",
    payload: wholesalerInventoryId,
  };
};

export const SET_BACKORDER = (backOrders) => {
  return {
    type: "SET_BACKORDER",
    payload: backOrders,
  };
};

export const REMOVE = (backOrderProductDetails) => {
  return {
    type: actions.REMOVE_BACKORDER,
    payload: {
      backOrderProductDetails: backOrderProductDetails,
    },
  };
};

export const UPDATE = (
  backOrderProductDetails,
  backOrdermethod,
  backOrderDiscountPrice,
  backOrderFinalPrice,
  backOrderTotalPrice,
  backOrderTotalQuantity
) => {
  return {
    type: actions.UPDATE_BACKORDER,
    payload: {
      backOrderProductDetails,
      backOrdermethod,
      backOrderDiscountPrice,
      backOrderFinalPrice,
      backOrderTotalPrice,
      backOrderTotalQuantity,
    },
  };
};

// export const DLT = (records) => {
//   return {
//     type: "Back_RMV_CART",
//     payload: {
//       records: records,
//     },
//   };
// };

// export const REMOVE = (backOrderProductDetails) => {
//   return {
//     type: "Back_RMV_ONE",
//     payload: {
//        backOrderProductDetails:  backOrderProductDetails
//     },
//   };
// };

// export const SET_METHOD = (backOrdermethod) => {
//   return {
//     type: "Back_SET_METHOD",
//     payload: { backOrdermethod },
//   };
// };

// export const SET_TOTAL_QUANTITY = ({backOrderTotalQuantity}) => {
//   return {
//     type: "Back_SET_TOTAL_QUANTITY",
//     payload: { backOrderTotalQuantity },
//   };
// };
