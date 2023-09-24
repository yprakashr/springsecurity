/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable eqeqeq */
import {
  Grid,
  ImageList,
  Button,
  Box,
  InputBase,
  FormControlLabel,
  Checkbox,
  InputLabel,
  Typography,
  RadioGroup,
  Radio,
  ListItem,
  ListItemText,
  ImageListItem,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import register from "../../src/assets/images/register.svg";
import checkmark from "../assets/images/checkmark-icon.svg";
import warning from "../assets/images/warning-icon.svg";

import {
  sxBox,
  sxCheckBoxLabel,
  sxFormControlLabel,
  sxInputLabel,
  sxLink,
  sxRadioButtons,
  sxRegisterButton,
  sxTextField,
  sxTypography,
  validationText,
} from "../assets/images/css/authStyles/registerStyle";
import { toast } from "react-toastify";
import { API_URL } from "../constant";
toast.configure();

export default function Register() {
  const navigate = useNavigate();
  const intialValues = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "",
    mobileNo: "",
  };

  const [formValues, setFormValues] = useState(intialValues);
  const [agree, setAgree] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [style, setStyle] = useState({});
  const [style1, setStyle1] = useState({});
  const [style2, setStyle2] = useState({});
  const [style3, setStyle3] = useState({});
  const [style4, setStyle4] = useState({});
  const [icon, seticon] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [icon3, seticon3] = useState(null);
  const [icon4, seticon4] = useState(null);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    const errors = validate(formValues)
    setFormErrors(errors);
    if (errors.fullName || errors.mobileNo || errors.email || errors.password || errors.confirmPassword) {
      return
    }
    fetch(`${API_URL}/signup`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fullName: formValues.fullName,
        email: formValues.email,
        password: formValues.password,
        userType: formValues.userType,
        mobileNo: formValues.mobileNo,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.status == 401) {
          toast.error(json.message);
        } else if (json.status == 200) {
          toast.success(json.message);
          return navigate("/");
        }
        else {
          toast.error(json.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const passwordregex = (^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$)
    const passwordregex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const mobileValidation = /^[0]?[56789]\d{9}$/
    const fullNameRegex = /^[A-Za-z ]+$/;
    if (!values.fullName) {
      errors.fullName = "Name is required!";
      setStyle({ border: "2px solid #E8534E" });
      seticon(warning);
    } else if (!fullNameRegex.test(values.fullName)) {
      errors.fullName = "Valid name required";
      setStyle({ border: "2px solid #E8534E" });
      seticon(warning);
    } else {
      setStyle({ border: "2px solid #54C885" });
      seticon(checkmark);
    }
    if (!values.mobileNo) {
      errors.mobileNo = "Number is required!";
      setStyle1({ border: "2px solid #E8534E" });
      seticon1(warning);
    } else if (!mobileValidation.test(values.mobileNo)) {
      errors.mobileNo = "Valid mobile number required";
      setStyle1({ border: "2px solid #E8534E" });
      seticon1(warning);
    } else if (mobileValidation.test(values.mobileNo)) {
      setStyle1({ border: "2px solid #54C885" });
      seticon1(checkmark);
    }
    if (!values.email) {
      errors.email = "Email is required!";
      setStyle2({ border: "2px solid #E8534E" });
      seticon2(warning);
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
      setStyle2({ border: "2px solid #E8534E" });
      seticon2(warning);
    } else if (regex.test(values.email)) {
      setStyle2({ border: "2px solid #54C885" });
      seticon2(checkmark);
    }
    if (!values.password) {
      errors.password = "Password is required";
      setStyle3({ border: "2px solid #E8534E" });
      seticon3(warning);
    } else if (!passwordregex.test(values.password)) {
      errors.password =
        "Password must be 1 Caps,1 small,1 Numeric,1 Speical and 8 chars at least";

      setStyle3({ border: "2px solid #E8534E" });
      seticon3(warning);
    }
    else {
      setStyle3({ border: "2px solid #54C885" });
      seticon3(checkmark);
    }
    //  else if (!values.password.length <= 9) {
    //   setStyle3({ border: "2px solid #54C885" });
    //   seticon3(checkmark);
    // }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
      setStyle4({ border: "2px solid #E8534E" });
      seticon4(warning);
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password not match";
      setStyle4({ border: "2px solid #E8534E" });
      seticon4(warning);
    } else {
      setStyle4({ border: "2px solid #54C885" });
      seticon4(checkmark);
    }
    return errors;
  };

  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };

  return (
    <>
      <Grid
        container
        sx={{
          maxHeight: "100%",
          height: "100vh",
          overflow: {
            lg: "hidden",
            md: "visible",
            sm: "visible",
            xs: "visible",
            xl: "visible",
          },
        }}
      >
        <Grid item xs={12} md={12} lg={6} xl={6} sx={{ bgcolor: "#1F255E" }}>
          <Box sx={sxBox}>
            <Typography sx={sxTypography}>Create Account</Typography>
            <Box component="form" sx={{ mt: -1 }}>
              <form onSubmit={handleSubmit} noValidate>
                <InputLabel sx={sxInputLabel}>Full Name:</InputLabel>
                <InputBase
                  variant="outlined"
                  InputProps={{ sx: { height: 35 } }}
                  id="outlined-required"
                  autoFocus
                  sx={sxTextField}
                  style={style}
                  name="fullName"
                  inputProps={{ style: inputStyle }}
                  value={formValues.fullName}
                  onChange={handleChange}
                  endAdornment={
                    <img src={icon} style={{ marginRight: "8px" }} />
                  }
                  className={formErrors.fullName && "input-error"}
                />
                <Typography sx={validationText}>
                  {formErrors.fullName}
                </Typography>
                <InputLabel sx={sxInputLabel}> Mobile No:</InputLabel>
                <InputBase
                  variant="outlined"
                  InputProps={{ sx: { height: 35 } }}
                  fullWidth
                  sx={sxTextField}
                  style={style1}
                  inputProps={{ style: inputStyle }}
                  endAdornment={
                    <img src={icon1} style={{ marginRight: "8px" }} />
                  }
                  name="mobileNo"
                  value={formValues.mobileNo}
                  onChange={handleChange}
                  type="numeric"
                  id="numeric"
                />
                <Typography sx={validationText}>
                  {formErrors.mobileNo}
                </Typography>

                <InputLabel sx={sxInputLabel}>Email Address:</InputLabel>
                <InputBase
                  variant="outlined"
                  InputProps={{ sx: { height: 35 } }}
                  id="email"
                  name="email"
                  value={formValues.email}
                  style={style2}
                  inputProps={{ style: inputStyle }}
                  onChange={handleChange}
                  // className={formErrors.email && "input-error"}
                  autoComplete="email"
                  endAdornment={
                    <img src={icon2} style={{}} />
                  }
                  autoFocus
                  sx={sxTextField}
                />
                <Typography sx={validationText}>{formErrors.email}</Typography>

                <InputLabel sx={sxInputLabel}>Password:</InputLabel>
                <InputBase
                  variant="outlined"
                  InputProps={{ sx: { height: 35 } }}
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  inputProps={{ style: inputStyle }}
                  type="password"
                  id="password"
                  endAdornment={
                    <img src={icon3} style={{ marginRight: "8px" }} />
                  }
                  style={style3}
                  autoComplete="current-password"
                  sx={sxTextField}
                // className={formErrors.password && "input-error"}
                />
                <Typography sx={validationText}>
                  {formErrors.password}
                </Typography>

                <InputLabel sx={sxInputLabel}>Confirm Password:</InputLabel>
                <InputBase
                  variant="outlined"
                  InputProps={{ sx: { height: 35 } }}
                  endAdornment={
                    <img src={icon4} style={{ marginRight: "8px" }} />
                  }
                  type="password"
                  id="confirmPassword"
                  style={style4}
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  inputProps={{ style: inputStyle }}
                  sx={sxTextField}
                />
                <Typography sx={validationText}>
                  {formErrors.confirmPassword}
                </Typography>

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    name="userType"
                    value="wholesaler"
                    onChange={handleChange}
                    control={<Radio size="small" sx={{ color: "#FFFFFF" }} />}
                    label={
                      <Typography sx={sxRadioButtons}>Wholesaler</Typography>
                    }
                    className={formErrors.userType && "input-error"}
                  />
                  <FormControlLabel
                    name="userType"
                    value="retailer"
                    onChange={handleChange}
                    control={<Radio size="small" sx={{ color: "#FFFFFF" }} />}
                    label={
                      <Typography sx={sxRadioButtons}>Retailer</Typography>
                    }
                  />
                </RadioGroup>
                {formErrors.userType && (
                  <ListItem sx={validationText}>
                    <ListItemText className="error" />
                    <span className="error">{formErrors.userType}</span>
                  </ListItem>
                )}
                <FormControlLabel
                  sx={sxFormControlLabel}
                  control={
                    <Checkbox
                      value="remember"
                      onChange={checkboxHandler}
                      sx={{ color: "#FFFFFF" }}
                    />
                  }
                  label={
                    <Typography variant="body2" sx={sxCheckBoxLabel}>
                      I agree to the
                      <Typography
                        component="span"
                        sx={{
                          color: "#FEF393",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",
                          opacity: 1,
                        }}
                      >
                        {" "}
                        Terms & Conditions
                      </Typography>
                    </Typography>
                  }
                />
                <Box sx={{ display: "flex" }}>
                  <Button
                    type="submit"
                    onClick={handleSubmit}
                    variant="text"
                    disabled={!agree}
                    sx={sxRegisterButton}
                  >
                    Register
                  </Button>
                  <Typography sx={sxLink}>
                    Already have an account!{" "}
                    <Link
                      to="/"
                      style={{
                        color: "#FEF393",
                        fontSize: "10px",
                        fontFamily: "Mont-Light",
                      }}
                    >
                      Sign In.
                    </Link>
                  </Typography>
                </Box>
              </form>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          xl={6}
          sx={{
            bgcolor: "#F3F3FF",
            alignItems: "center",
          }}
        >
          <ImageList sx={{}}>
            <Box
              component="img"
              src={register}
              sx={{
                mt: 11,
                width: {
                  lg: 590,
                  md: 830,
                  sm: 700,
                  xs: 316,
                  xl: 1000,
                },
              }}
            />
          </ImageList>
        </Grid>
      </Grid>
    </>
  );
}
