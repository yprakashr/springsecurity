const sxSigninBox = {
  display: "flex",
  flexDirection: "column",
  margin: {
    xs: "10px 40px",
    md: "136px 160px 136px 160px",
    lg: "126px 160px 106px 160px",
    xl: "236px 236px 236px 236px",
  },
};
const sxSignTitle = {
  fontSize: 28,
  font: " normal normal 600 24px/29px Montserrat",
  letterSpacing: "0.24px",
  color: "#FFFFFF",
  opacity: 1,
  my: 2,
};
const sxSigninInput = {
  font: "normal normal 600 13px/23px Montserrat",
  letterSpacing: "0.13px",
  color: "#FFFFFF",
};
const sxSignPassword = {
  mt: 4,
  font: "normal normal 600 13px Montserrat",
  letterSpacing: "0.13px",
  color: "#FFFFFF",
};
const sxSigninButton = {
  mt: 3,
  mb: 2,
  width: "150px",
  textTransform: "none",
  height: "44px",
  /* UI Properties */
  background: "#3A63F3",
  hover: "#3A63F3",
  borderRadius: "4px",
  font: " 13px Montserrat",
  letterSpacing: "0.28px",
  color: "#FFFFFF",
  "&:hover": {
    background: "#3A63F3",
  },
};
const sxSigninImg = {
  mt:11,
  width: {
    lg: 590,
    md: 850,
    sm: 700,
    xs: 316,
    xl: 1000,
  },
};
const sxForgot = {
  font: "normal normal 500 13px/21px Montserrat",
  letterSpacing: "0.33px",
  color: "#FEF393",
  opacity: "0.87",
};
const sxNewUser = {
  mt: 4,
  font: " normal normal normal 12px/21px Montserrat",
  letterSpacing: "0.35px",
  color: "#FFFFFF",
};
const sxSigninGrid = {
  height: "100vh",
  maxHeight: "100%",
};
const sxLink = {
  font: " normal normal normal 12px/21px Montserrat",
  color: "#FEF393",
};
module.exports = {
  sxForgot,
  sxNewUser,
  sxLink,
  sxSignPassword,
  sxSignTitle,
  sxSigninBox,
  sxSigninButton,
  sxSigninGrid,
  sxSigninImg,
  sxSigninInput,
};
