const sxTextField = {
  width: "100%",
  // mt: 0,
  marginTop: "1px",
  bgcolor: "#FFFFFF",
  borderRadius: "4px",
  input: { ml: "6px" },
};
const sxInputLabel = {
  width: "100%",
  mt: 1,
  color: "#FFFFFF",
  // font: "normal normal 600 13px/23px Montserrat",
  letterSpacing: "0.13px",
  fontSize: "12px",
  fontFamily: "Montserrat-Medium",
};
const sxTypography = {
  fontSize: 28,
  textAlign: "left",
  font: " normal normal 600 24px/29px Montserrat",
  letterSpacing: "0.24px",
  color: "#FFFFFF",
  opacity: 1,
  my: 2,
};
const sxBox = {
  margin: {
    xs: "3px 20px",
    md: "16px 160px 16px 160px",
    lg: "8px 160px 16px 160px",
    xl: "16px 160px 16px 160px",
  },
  display: "flex",
  flexDirection: "column",
};
const sxRadioButtons = {
  // font: "normal normal normal 500 13px/25px Montserrat",
  fontSize: "13px",
  fontFamily: "Montserrat-Medium",
  color: "#FFFFFF",
};
const sxRegisterButton = {
  mt: 0,
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
  "&:disabled": {
    background: "#3A63F3!important",
    color: "#FFFFFF",
    opacity: "0.4",

    // color: "black",
  },
};
const sxFormControlLabel = {
  width: "100%",
  font: "normal normal medium 138px/11px Montserrat",
  letterSpacing: " 0.13px",
  color: "#303779",
  mt: -1,
};
const sxCheckBoxLabel = {
  font: "normal normal 500 13px/16px Montserrat",
  letterSpacing: "0.13px",
  color: "#FFFFFF",
};
const sxLink = {
  mt: 1,
  // font: " normal normal 500 13px/21px Montserrat",
  fontSize: "11px",
  fontFamily: "Mont-Light",
  letterSpacing: "0.35px",
  color: "#FFFFFF",
  marginLeft: "10px",
};
const validationText = {
  fontSize: "10px",
  fontFamily: "Mont-Light",
  // left: "3px",
  // width: "300px",
  color: "#E8534E",
  textAlign: "right",
  // marginTop:"-1px"
};
module.exports = {
  sxTextField,
  sxLink,
  sxBox,
  sxFormControlLabel,
  sxInputLabel,
  sxRadioButtons,
  sxRegisterButton,
  sxTypography,
  sxCheckBoxLabel,
  validationText,
};
