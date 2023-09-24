import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Chartline from "./chartline";
import { apiCall } from "../../../services/apis";
import { useSelector } from "react-redux";

export default function WholeSalerDashboard() {
  const { token } = useSelector((state) => state.userReducer);

  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {}, [dashboardData]);
  const Sales_Order = [
    {
      numbers: dashboardData?.salesOrders?.newOrders,
      title: "New Orders",
      icon: require("../../../assets/images/wholesalerImages/New Orders icon.svg")
        .default,
      bgcolor: "#FE744B",
    },
    {
      numbers: dashboardData?.salesOrders?.processed,
      title: "Processed",
      icon: require("../../../assets/images/wholesalerImages/Processed icon.svg")
        .default,
      bgcolor: "#353F5E",
    },
    {
      numbers: dashboardData?.salesOrders?.shipped,
      title: "Shipped",
      icon: require("../../../assets/images/wholesalerImages/Dispatched icon.svg")
        .default,
      bgcolor: "#2983FE",
    },
    {
      numbers: dashboardData?.salesOrders?.delivered,
      title: "Delivered",
      icon: require("../../../assets/images/wholesalerImages/Delivered icon.svg")
        .default,
      bgcolor: "#54C885",
    },
  ];
  const SalesOrder2 = [
    {
      numbers: dashboardData?.salesOrders?.cancelled,
      title: "Cancelled",
      icon: require("../../../assets/images/wholesalerImages/Cancelled icon.svg")
        .default,
      bgcolor: "#E8534E",
    },
    {
      numbers: dashboardData?.salesOrders?.returns,
      title: "Returns",
      icon: require("../../../assets/images/wholesalerImages/Returns icon.svg")
        .default,
      bgcolor: "#9263EE",
    },
    {
      numbers: "",
      title: "",
      icon: "",
      bgcolor: "",
    },
    {
      numbers: "",
      title: "",
      icon: "",
      bgcolor: "",
    },
  ];
  const invoices = [
    {
      numbers: dashboardData?.invoices?.invoicesProcessed,
      title: "Invoices Processed",
      icon: require("../../../assets/images/wholesalerImages/Invoice processed.svg")
        .default,
      bgcolor: "#FEB64B",
    },
    {
      numbers: dashboardData?.invoices?.invoicesShipped,
      title: "Invoices Shipped",
      icon: require("../../../assets/images/wholesalerImages/shipped.svg")
        .default,
      bgcolor: "#2AB8AE",
    },
    {
      numbers: dashboardData?.invoices?.pickUpTaskCreated,
      title: "Pick-up Task Created",
      icon: require("../../../assets/images/wholesalerImages/pickup.svg")
        .default,
      bgcolor: "#6F54B8",
    },
    {
      numbers: 0,
      title: "Delivery-Boy Assigned",
      icon: require("../../../assets/images/wholesalerImages/deliveryboy_assigned.svg")
        .default,
      bgcolor: "#8AC854",
    },
  ];
  const invoices2 = [
    {
      numbers: dashboardData?.invoices?.invoicesDelived,
      title: "Invoices Delivered",
      icon: require("../../../assets/images/wholesalerImages/delivered.svg")
        .default,
      bgcolor: "#D846AC",
    },
    {
      numbers: dashboardData?.invoices?.invoicesReturned,
      title: "Invoices Returned",
      icon: require("../../../assets/images/wholesalerImages/invoice returned.svg")
        .default,
      bgcolor: "#D2B335",
    },
    {
      numbers: "",
      title: "",
      icon: "",
      bgcolor: "",
    },
    {
      numbers: "",
      title: "",
      icon: "",
      bgcolor: "",
    },
  ];
  const Retailers = [
    {
      numbers: dashboardData?.retailers?.totalRegisteredRetailers,
      title: "Total Registered Retailers",
      icon: require("../../../assets/images/wholesalerImages/Retailers.svg")
        .default,
      bgcolor: "#FFBD5D",
    },
    {
      numbers: dashboardData?.retailers?.activeRetailers,
      title: "Active Retailers",
      icon: require("../../../assets/images/wholesalerImages/active_retailer.svg")
        .default,
      bgcolor: "#FF727C",
    },
    {
      numbers: dashboardData?.retailers?.earlyAccountRetailers,
      title: "Early Account Retailer",
      icon: require("../../../assets/images/wholesalerImages/early retailer.svg")
        .default,
      bgcolor: "#88C855",
    },
    {
      numbers: dashboardData?.retailers?.keyAccountRetailers,
      title: "Key Account Retailers",
      icon: require("../../../assets/images/wholesalerImages/key.svg").default,
      bgcolor: "#9E9CFE",
    },
  ];
  const Retailers2 = [
    {
      numbers: dashboardData?.retailers?.verifyKYC,
      title: "Verify KYC",
      icon: require("../../../assets/images/wholesalerImages/kyc.svg").default,
      bgcolor: "#35DC95",
    },
    {
      numbers: dashboardData?.retailers?.reverifyKYC,
      title: "Reverify KYC",
      icon: require("../../../assets/images/wholesalerImages/Reverify.svg")
        .default,
      bgcolor: "#35616B",
    },
    {
      numbers: dashboardData?.retailers?.otpList,
      title: "OTP List",
      icon: require("../../../assets/images/wholesalerImages/otp.svg").default,
      bgcolor: "#A3A818",
    },
    {
      numbers: "",
      title: "",
      icon: "",
      bgcolor: "",
    },
  ];

  useEffect(() => {
    fetchSalesOrderDetails();
  }, []);
  const fetchSalesOrderDetails = async () => {
    try {
      const response = await apiCall(`/wholesaler-count`, "GET", token);
      setDashboardData(response.data);
    } catch {
      console.log();
    }
  };

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat-Bold",
              letterSpacing: "0.16px",
              color: "#303030",
              opacity: 1,

              // lineHeight:"40px"
            }}
          >
            Dashboard &nbsp;
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Montserrat-Medium",
              letterSpacing: "0.16px",
              color: "#8A8A8A",
              opacity: 1,

              // lineHeight:"40px"
            }}
          ></Typography>
        </Box>
        <Paper
          sx={{
            bgcolor: "FFFFFF",
            marginTop: "10px",
            padding: "10px",
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
            width: "100%",
            height: "auto",
          }}
        >
          <Typography
            sx={{
              color: "#303030",
              borderBottom: "2px solid #F3F3FF",
              fontSize: "16px",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Sales Order
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", pt: 2 }}>
            {Sales_Order.map((rs) => {
              return (
                <>
                  <Card
                    sx={{
                      width: "210px",
                      height: "121px",
                      p: 1,
                      bgcolor: rs.bgcolor,
                      boxShadow: "0px 0px 6px #00000029",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontSize: "18px",
                          fontFamily: "Montserrat-Bold",

                          color: "#FFFFFF",
                          opacity: 1,
                        }}
                      >
                        {rs.numbers}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        {/* <div
                          style={{
                            bgcolor: "red",
                            padding: "20px",
                            border: "1px solid white",
                          }}
                        > */}
                        <img src={rs.icon} alt="" />
                        {/* </div> */}
                      </Typography>
                      <Typography
                        sx={{
                          letterSpacing: "0.13px",
                          textAlign: "left",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",

                          color: "#FFFFFF",
                          paddingBottom: "90px",
                        }}
                      >
                        {rs.title}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </>
              );
            })}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around", pt: 2 }}>
            {SalesOrder2?.map((rs) => {
              return (
                <>
                  <Card
                    sx={{
                      width: "210px",
                      height: "121px",
                      p: 1,
                      bgcolor: rs.bgcolor,
                      boxShadow: "0px 0px 6px #00000029",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontSize: "18px",
                          fontFamily: "Montserrat-Bold",

                          color: "#FFFFFF",
                          opacity: 1,
                        }}
                      >
                        {rs.numbers}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <img src={rs.icon} alt="" />
                      </Typography>
                      <Typography
                        sx={{
                          letterSpacing: "0.13px",
                          textAlign: "left",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",

                          color: "#FFFFFF",
                          paddingBottom: "90px",
                        }}
                      >
                        {rs.title}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </>
              );
            })}
          </Box>
          <Typography
            sx={{
              color: "#303030",
              borderBottom: "2px solid #F3F3FF",
              fontSize: "16px",
              fontFamily: "Montserrat-Bold",
              paddingTop: "25px",
            }}
          >
            Invoices
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", pt: 2 }}>
            {invoices.map((rs) => {
              return (
                <>
                  <Card
                    sx={{
                      width: "210px",
                      height: "121px",
                      p: 1,
                      bgcolor: rs.bgcolor,
                      boxShadow: "0px 0px 6px #00000029",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontSize: "18px",
                          fontFamily: "Montserrat-Bold",

                          color: "#FFFFFF",
                          opacity: 1,
                        }}
                      >
                        {rs.numbers}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <img src={rs.icon} alt="" />
                      </Typography>
                      <Typography
                        sx={{
                          letterSpacing: "0.13px",
                          textAlign: "left",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",

                          color: "#FFFFFF",
                          paddingBottom: "90px",
                        }}
                      >
                        {rs.title}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", pt: 2, justifyContent: "space-around" }}>
            {invoices2.map((rs) => {
              return (
                <>
                  <Card
                    sx={{
                      width: "210px",
                      height: "121px",
                      p: 1,
                      bgcolor: rs.bgcolor,
                      boxShadow: "0px 0px 6px #00000029",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontSize: "18px",
                          fontFamily: "Montserrat-Bold",

                          color: "#FFFFFF",
                          opacity: 1,
                        }}
                      >
                        {rs.numbers}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <img src={rs.icon} alt="" />
                      </Typography>
                      <Typography
                        sx={{
                          letterSpacing: "0.13px",
                          textAlign: "left",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",

                          color: "#FFFFFF",
                          paddingBottom: "90px",
                        }}
                      >
                        {rs.title}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </>
              );
            })}
          </Box>
          <Typography
            sx={{
              color: "#303030",
              borderBottom: "2px solid #F3F3FF",
              fontSize: "16px",
              fontFamily: "Montserrat-Bold",
              paddingTop: "25px",
            }}
          >
            Retailers
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", pt: 2 }}>
            {Retailers.map((rs) => {
              return (
                <>
                  <Card
                    sx={{
                      width: "210px",
                      height: "121px",
                      p: 1,
                      bgcolor: rs.bgcolor,
                      boxShadow: "0px 0px 6px #00000029",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontSize: "18px",
                          fontFamily: "Montserrat-Bold",

                          color: "#FFFFFF",
                          opacity: 1,
                        }}
                      >
                        {rs.numbers}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <img src={rs.icon} alt="" />
                      </Typography>
                      <Typography
                        sx={{
                          letterSpacing: "0.13px",
                          textAlign: "left",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",

                          color: "#FFFFFF",
                          paddingBottom: "90px",
                        }}
                      >
                        {rs.title}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </>
              );
            })}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around", pt: 2 }}>
            {Retailers2.map((rs) => {
              return (
                <>
                  <Card
                    sx={{
                      width: "210px",
                      height: "121px",
                      p: 1,
                      bgcolor: rs.bgcolor,
                      boxShadow: "0px 0px 6px #00000029",
                      borderRadius: "12px",
                      opacity: 1,
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{
                          textAlign: "left",
                          fontSize: "18px",
                          fontFamily: "Montserrat-Bold",

                          color: "#FFFFFF",
                          opacity: 1,
                        }}
                      >
                        {rs.numbers}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <img src={rs.icon} alt="" />
                      </Typography>
                      <Typography
                        sx={{
                          letterSpacing: "0.13px",
                          textAlign: "left",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",

                          color: "#FFFFFF",
                          paddingBottom: "90px",
                        }}
                      >
                        {rs.title}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </>
              );
            })}
          </Box>
          <Chartline
            setDashboardData={setDashboardData}
            dashboardData={dashboardData}
          />
        </Paper>
      </Container>
    </>
  );
}
