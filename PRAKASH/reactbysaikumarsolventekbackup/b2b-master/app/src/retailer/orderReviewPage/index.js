import React from "react";
import { useSelector } from "react-redux";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import backArrow from "../../assets/images/backArrow.svg";
import { Link } from "react-router-dom";
import CartItems from "../cartItems/index";
import PaymentDetails from "../paymentDetails/index";

export default function Orderreviewpage() {
  const { user1, retailer } = useSelector((state) => state.cartReducer);

  return (
    <>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={8}>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Montserrat-Bold",
              letterSpacing: "0.16px",
              color: "#303030",
              opacity: 1,
              marginBottom: "7px",
              // lineHeight:"40px"
            }}
          >
            <Link
              to="/dashboard/cartpage"
              sx={{ textDecoration: "none", color: "red" }}
            >
              <img src={backArrow} style={{ width: "20px" }} alt="" />
            </Link>{" "}
            Order Review
          </Typography>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 160,
              marginBottom: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "2px solid #F3F3FF",
              }}
            >
              <Typography
                sx={{
                  letterSpacing: "0.28px",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Bold",
                  opacity: 1,
                  color: "#303030",
                }}
              >
                Shipping Address
              </Typography>
              <Typography
                sx={{
                  letterSpacing: "0.28px",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Bold",
                  opacity: 1,
                  color: "#303030",
                }}
              ></Typography>
            </Box>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Bold",
                mt: 1,
              }}
            >
              Name:&nbsp;&nbsp; &nbsp;
              <Typography
                component="span"
                sx={{
                  color: "#303030",
                  fontSize: "11px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {retailer?.fullName}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Bold",
                mt: 1,
              }}
            >
              Address: &nbsp; &nbsp;
              <Typography
                component="span"
                sx={{
                  color: "#303030",
                  fontSize: "11px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {retailer?.addresses[0]?.storeName},&nbsp;
                {retailer?.addresses[0]?.address},&nbsp;
                {retailer?.addresses[0]?.city},&nbsp;
                {retailer?.addresses[0]?.state},&nbsp;
                {retailer?.addresses[0]?.zipcode}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Bold",
                mt: 1,
              }}
            >
              Phone: &nbsp; &nbsp;
              <Typography
                component="span"
                sx={{
                  color: "#303030",
                  fontSize: "11px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {user1?.mobileNo}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Bold",
                mt: 1,
              }}
            >
              Email: &nbsp; &nbsp;
              <Typography
                component="span"
                sx={{
                  color: "#303030",
                  fontSize: "11px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {user1?.email}
              </Typography>
            </Typography>
          </Paper>
          <CartItems />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <PaymentDetails />
        </Grid>
      </Grid>
    </>
  );
}
