const INIT_STATE = [];

export const backOrderReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "SET_BACKORDER":
      return action.payload;
    case "ADD_BACKORDER":
      return [...state, action.payload];
    case "REMOVE_BACKORDER":
      const newState = state.filter(
        (item) => item.wholesalerInventoryId !== action.payload
      );
      return newState;
    default:
      return state;
  }
};

