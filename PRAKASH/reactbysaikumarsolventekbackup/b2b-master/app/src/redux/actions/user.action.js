export const LOGIN = (user) => {
    return {
        type: "LOGIN",
        payload: user,
    };
};

export const LOGOUT = () => {
    return {
        type: "LOGOUT",
    };
};

export const UPDATE_USER_NAME = (fullName) => {
    return {
        type: "UPDATE_USER_NAME",
        payload: fullName
    };
};