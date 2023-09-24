class userProfile {
  static user = {};
  static setUserData(user) {
    this.user = user;
    window.localStorage.setItem("userData", JSON.stringify(user));
  }
  static getUserData = () => {
    try {
      return this.user?.id
        ? this.user
        : JSON.parse(window.localStorage.getItem("userData"));
    } catch (err) {}
  };
}

const INITIAL_STATE = {
  user: {},
  isLogin: false,
  token: "",
};

const userReducer = (
  state = localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData"))
    : INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case "LOGIN":
      const userData = {
        ...state,
        user: action.payload,
        isLogin: true,
        token: action.payload.token,
      };
      userProfile.setUserData(userData);
      return userData;
    case "LOGOUT":
      userProfile.setUserData(null);
      return {
        ...state,
        user: null,
        isLogin: false,
        token: null,
      };
    case "UPDATE_USER_NAME":
      const updatedData = {
        ...state,
        user: {
          ...state.user,
          retailer: { ...state.user.retailer, fullName: action.payload },
          wholesaler: {
            ...state.user.wholesaler,
            fullName: action.payload,
          },
        },
      };
      userProfile.setUserData(updatedData);
      return updatedData;
    default:
      return state;
  }
};

export default userReducer;
