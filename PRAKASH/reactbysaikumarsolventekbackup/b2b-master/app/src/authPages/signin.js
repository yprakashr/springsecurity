import {
  Grid,
  ImageList,
  InputBase,
  Button,
  Box,
  InputLabel,
  Typography,
  TextField,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useContext, useEffect, useState } from "react";
import Group from "../assets/images/Group 16850 (1).svg";
import { Link, useNavigate } from "react-router-dom";
import {
  sxForgot,
  sxNewUser,
  sxSignPassword,
  sxSignTitle,
  sxSigninBox,
  sxSigninButton,
  sxSigninGrid,
  sxSigninImg,
  sxSigninInput,
} from "../assets/images/css/authStyles/signinStyle";
import { API_URL } from "../constant";
import warning from "../assets/images/warning-icon.svg";
import checkmark from "../assets/images/checkmark-icon.svg";
import { validationText } from "../assets/images/css/authStyles/registerStyle";
import axios from "axios";
import { useDispatch } from "react-redux";
import { LOGIN } from "../redux/actions/user.action";
toast.configure();

export default function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [style, setStyle] = useState({});
  const [style1, setStyle1] = useState({});
  const [icon, seticon] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    if (formValues.email === "") {
      toast.error("Cannot empty email");
    } else if (formValues.password === "") {
      toast.error("Cannot empty password");
    }
    e.preventDefault();

    formValues.platform = "web"
    formValues.oneSignalId = ""

    axios
      .post(`${API_URL}/login`, formValues)
      .then((response) => {
        if (response?.data?.Error?.code === 400) {
          toast.error(response.data.message);
          return;
        }
        if (response && response.status === 200) {
          const { userType } = response.data.data;
          dispatch(LOGIN(response.data?.data));

          if (userType == "retailer") {
            toast.success(response.data.message);
            navigate("/dashboard/homepage", { replace: true });
          } else if ((userType == "wholesaler", { replace: true })) {
            toast.success(response.data.message);
            navigate("/layout/WholeSalerDashboardPart", { replace: true });
          }
        } else {
          const message = response.data.message
            ? response.data.message
            : response.message;
          toast.error(message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setFormErrors(validate(formValues));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passwordregex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!values.email) {
      errors.email = "Email is required!";
      setStyle({ border: "2px solid #E8534E" });
      seticon(warning);
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
      setStyle({ border: "2px solid #E8534E" });
      seticon(warning);
    } else if (regex.test(values.email)) {
      setStyle({ border: "2px solid #54C885" });
      seticon(checkmark);
    }
    if (!values.password) {
      errors.password = "Password is required";
      setStyle1({ border: "2px solid #E8534E" });
      seticon1(warning);
    } else if (!passwordregex.test(values.password)) {
      errors.password =
        "Password must be 1 Caps,1 small,1 Numeric,1 Speical and 8 chars at least";
      setStyle1({ border: "2px solid #E8534E" });
      seticon1(warning);
    } else {
      setStyle1({ border: "2px solid #54C885" });
      seticon1(checkmark);
    }
    return errors;
  };
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };

  return (
    <>
      <Grid container sx={sxSigninGrid}>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          xl={6}
          sx={{ alignItems: "center", bgcolor: "#1F255E" }}
        >
          <Box sx={sxSigninBox}>
            <Typography sx={sxSignTitle}>Sign In</Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <form onSubmit={handleSubmit} noValidate>
                <InputLabel sx={sxSigninInput}>Email Address:</InputLabel>
                <InputBase
                  variant="outlined"
                  size="medium"
                  id="email"
                  name="email"
                  autoComplete="email"
                  fullWidth
                  margin="dense"
                  inputProps={{ style: inputStyle }}
                  value={formValues.email}
                  style={style}
                  onChange={handleChange}
                  endAdornment={
                    <img src={icon} style={{ marginRight: "8px" }} />
                  }
                  required
                  sx={{
                    width: "100%",
                    mt: 1,
                    bgcolor: "#FFFFFF",
                    borderRadius: "4px",
                    input: { ml: "6px" },
                    marginTop: "-1px",
                  }}
                />

                <Typography sx={validationText}>{formErrors.email}</Typography>
                <InputLabel sx={sxSignPassword}> Password:</InputLabel>
                <InputBase
                  animated={false}
                  variant="outlined"
                  size="medium"
                  fullWidth
                  value={formValues.password}
                  inputProps={{ style: inputStyle }}
                  onChange={handleChange}
                  endAdornment={
                    <img src={icon1} style={{ marginRight: "8px" }} />
                  }
                  sx={{
                    width: "100%",
                    mt: 1,
                    bgcolor: "#FFFFFF",
                    borderRadius: "4px",
                    input: { ml: "6px" },
                    marginTop: "2px",
                  }}
                  InputProps={{ sx: { height: 45 } }}
                  name="password"
                  type="password"
                  id="password"
                  style={style1}
                  autoComplete="current-password"
                  required
                />
                <Typography sx={validationText}>
                  {formErrors.password}
                </Typography>

                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="text"
                  sx={sxSigninButton}
                >
                  Sign In
                </Button>
              </form>
              <Typography sx={sxForgot}>
                <Link
                  to="/Forgetpassword"
                  style={{
                    fontSize: "12px",
                    fontFamily: "Montserrat-Medium",
                    color: "#FEF393",
                    textDecoration: "none",
                  }}
                >
                  Forget Password?
                </Link>
              </Typography>
              <Typography sx={sxNewUser}>
                New User!{" "}
                <Link
                  to="/register"
                  style={{
                    font: "normal normal 600 12px/21px Montserrat",
                    color: "#FEF393",
                  }}
                >
                  Create Account.
                </Link>
              </Typography>
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
            <Box component="img" src={Group} sx={sxSigninImg} />
          </ImageList>
        </Grid>
      </Grid>
    </>
  );
}
