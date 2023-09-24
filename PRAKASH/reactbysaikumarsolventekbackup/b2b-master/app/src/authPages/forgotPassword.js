import {
  Grid,
  ImageList,
  InputBase,
  Button,
  Box,
  InputLabel,
  Typography,
} from "@mui/material";
import React from "react";
import Group from "../assets/images/Group 16850 (1).svg";
import { Link } from "react-router-dom";
import {
  sxForgot,
  sxSignTitle,
  sxSigninBox,
  sxSigninButton,
  sxSigninGrid,
  sxSigninImg,
  sxSigninInput,
} from "../assets/images/css/authStyles/signinStyle";

export default function Forgetpassword() {
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
            <Typography sx={sxSignTitle}>Forget Password</Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <InputLabel sx={sxSigninInput}>Email Address:</InputLabel>
              <InputBase
                variant="outlined"
                size="medium"
                id="email"
                name="email"
                inputProps={{ style: inputStyle }}
                autoComplete="email"
                required
                fullWidth
                sx={{
                  width: "100%",
                  mt: 1,
                  bgcolor: "#FFFFFF",
                  borderRadius: "4px",
                  input: { ml: "6px" },
                }}
              />
              <Button type="submit" variant="text" sx={sxSigninButton}>
                Confirm
              </Button>
              <Typography sx={sxForgot}>
                <Link
                  to="/"
                  style={{
                    font: "normal normal 600 12px/21px Montserrat",
                    color: "#FEF393",
                    textDecoration: "none",
                  }}
                  href="#"
                >
                  Back.
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
          <ImageList sx={{ mt: 0 }}>
            <Box
              component="img"
              src={Group}
              sx={{
                mt: 11,
                width: {
                  lg: 590,
                  md: 850,
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
