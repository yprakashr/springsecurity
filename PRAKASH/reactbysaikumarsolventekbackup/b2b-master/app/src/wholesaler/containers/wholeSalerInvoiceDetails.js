import React, { useEffect, useState } from "react";
// import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import backArrow from "../../assets/images/backArrow.svg";
import * as moment from "moment";

import { Link, useLocation } from "react-router-dom";
import { apiCall } from "../../services/apis";
import { useSelector } from "react-redux";
import { API_URL } from "../../constant";
const steps = ["Placed", "Approved", "Processed", "Shipped", "Delivered"];

export default function WholeSalerInvoiceDetails() {
  const [orderStatus, setOrderStatus] = useState("");
  const [statusSelect, setStatusSelect] = useState("");
  const location = useLocation();
  const { token } = useSelector((state) => state.userReducer);
  const [invoiceOrderDetails, setInvoiceOrderDetails] = useState({});
  const [saveActive, setSaveActive] = useState(false);
  const invoiceUnique = location?.state?.id;

  const statusObj = {
    OrderPlaced: 1,
    Approved: 2,
    Processed: 3,
    Shipped: 4,
    Delivered: 5,
  };
  const handleStatus = (event) => {
    setStatusSelect(event.target.value);
  };
  const enableDisableSaveBtn = () => {
    if (statusObj[invoiceOrderDetails.orderStatus] + 1 === statusSelect) {
      setSaveActive(true);
    } else {
      setSaveActive(false);
    }
  };
  //invoice download
  const invoicePdf = async (invoice_id) => {
    fetch(`${API_URL}/download-invoice?invoice_id=${invoice_id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((response) => {
        return response.arrayBuffer();
      })
      .then((response) => {
        const file = new Blob([response], { type: "application/pdf" });

        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "download" + ".pdf";
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const statusUpdate = async () => {
    const { data } = await apiCall(
      `/invoice-status-update?invoice_id=${invoiceOrderDetails.id}`,
      "PATCH",
      token
    );
    if (data.orderStatus === "OrderPlaced") {
      setOrderStatus(1);
      setInvoiceOrderDetails((state) => ({
        ...state,
        orderStatus: data.orderStatus,
      }));
    } else if (data.orderStatus === "Approved") {
      setOrderStatus(2);
      setInvoiceOrderDetails((state) => ({
        ...state,
        orderStatus: data.orderStatus,
      }));
    } else if (data.orderStatus === "Processed") {
      setOrderStatus(3);
      setInvoiceOrderDetails((state) => ({
        ...state,
        orderStatus: data.orderStatus,
      }));
    } else if (data.orderStatus === "Shipped") {
      setOrderStatus(4);
      setInvoiceOrderDetails((state) => ({
        ...state,
        orderStatus: data.orderStatus,
      }));
    } else if (data.orderStatus === "Delivered") {
      setOrderStatus(5);
      setInvoiceOrderDetails((state) => ({
        ...state,
        orderStatus: data.orderStatus,
      }));
    }
  };
  const uiProgressBarUpdate = () => {
    if (invoiceOrderDetails.orderStatus === "OrderPlaced") {
      setStatusSelect(1);
      setOrderStatus(1);
    } else if (invoiceOrderDetails.orderStatus === "Approved") {
      setStatusSelect(2);
      setOrderStatus(2);
    } else if (invoiceOrderDetails.orderStatus === "Processed") {
      setStatusSelect(3);
      setOrderStatus(3);
    } else if (invoiceOrderDetails.orderStatus === "Shipped") {
      setStatusSelect(4);
      setOrderStatus(4);
    } else if (invoiceOrderDetails.orderStatus === "Delivered") {
      setStatusSelect(5);
      setOrderStatus(5);
    }
  };
  const getAllInvoiceDetails = () => {
    apiCall(`/get-invoice-details?invoiceUnique=${invoiceUnique}`, "GET", token)
      .then((res) => {
        setInvoiceOrderDetails(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  //side effects
  useEffect(() => {
    getAllInvoiceDetails();
  }, []);
  useEffect(() => {
    uiProgressBarUpdate();
  }, [invoiceOrderDetails.orderStatus]);

  useEffect(() => {
    enableDisableSaveBtn();
  }, [invoiceOrderDetails.orderStatus, statusSelect]);
  const invoiceOrderCreationDateData = invoiceOrderDetails?.createdAt;

  const invoiceOrderCreationDate = moment(invoiceOrderCreationDateData).format(
    "  MMMM DD  YYYY"
  );

  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Montserrat-Bold",
            letterSpacing: "0.16px",
            color: "#303030",
            opacity: 1,

            // lineHeight:"40px"
          }}
        >
          <Link
            to="/layout/vieworderdetails"
            sx={{ textDecoration: "none", color: "red" }}
          >
            <img src={backArrow} style={{ width: "20px" }} alt="" />
          </Link>
          &nbsp; Invoice Details
          <Typography
            component="span"
            sx={{
              color: "#303030",
              fontSize: "14px",
              fontFamily: "Montserrat-Bold  ",
            }}
          ></Typography>
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
        >
          Dashboard {`>`} Sales Order {`>`} Order Details {`>`} Invoice Details
        </Typography>
      </Box>
      <Paper
        sx={{
          bgcolor: "#FFFFFF",
          padding: "23px",
          // border: "1px solid #DCDCDC",
          marginTop: "10px",
          "&.MuiPaper-root": {
            boxShadow: "none",
            //   borderRadius: "4px solid red",
          },
        }}
      >
        <Paper
          sx={{
            bgcolor: "#FFFFFF",
            // padding: "23px",
            border: "1px solid #DCDCDC",
            // marginTop: "10px",
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "5px",
              borderBottom: " 2px solid #DCDCDC",
            }}
          >
            <Typography
              sx={{
                color: "#303030",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Invoice ID:{" "}
              <Typography
                component="span"
                sx={{
                  color: "#303030",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {invoiceOrderDetails?.invoiceUnique}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Order ID:{" "}
              <Typography
                component="span"
                sx={{
                  color: "#303030",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {invoiceOrderDetails?.order?.orderUnique}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
                opacity: "0.7",
                // marginLeft: "25px",
              }}
            >
              {/* {invoiceOrderDetails?.}{returnCreationDate} | */}
              {invoiceOrderCreationDate} |
              {invoiceOrderDetails?.createdAt?.slice(11, 16)} AM
            </Typography>

            <Typography
              sx={{
                color: "#BBBBBB",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
                //   textAlign: "center",
                // marginLeft: "20px",
              }}
            >
              Invoice Status:
            </Typography>
            <FormControl sx={{}}>
              <Select
                value={statusSelect}
                onChange={(e) => {
                  handleStatus(e);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                MenuProps={{ disableScrollLock: true }}
                sx={{
                  "&.MuiInputBase-root": {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "12px",
                    width: "auto",
                    height: "27px",
                    border: "none",
                  },
                }}
              >
                <MenuItem
                  value=""
                  sx={{ fontFamily: "Montserrat-Medium", fontSize: "12px" }}
                >
                  Select
                </MenuItem>
                <MenuItem
                  sx={{ fontFamily: "Montserrat-Medium", fontSize: "12px" }}
                  value={1}
                >
                  Order Placed
                </MenuItem>

                <MenuItem
                  sx={{ fontFamily: "Montserrat-Medium", fontSize: "12px" }}
                  value={2}
                >
                  Approved
                </MenuItem>
                <MenuItem
                  sx={{ fontFamily: "Montserrat-Medium", fontSize: "12px" }}
                  value={3}
                >
                  Processed
                </MenuItem>
                <MenuItem
                  sx={{ fontFamily: "Montserrat-Medium", fontSize: "12px" }}
                  value={4}
                >
                  Shipped
                </MenuItem>
                <MenuItem
                  sx={{ fontFamily: "Montserrat-Medium", fontSize: "12px" }}
                  value={5}
                >
                  Delivered
                </MenuItem>
              </Select>
            </FormControl>
            <Button
              onClick={statusUpdate}
              sx={{
                textTransform: "none",
                bgcolor: "#3A63F3",
                width: "40px",
                // height: "36px",

                background: "#3A63F3 0% 0% no-repeat padding-box",
                borderRadius: "4px",
                opacity: 1,
                color: "#FFFFFF",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
                // marginLeft: "10px",
                "&:hover": {
                  background: "#3A63F3",
                },
              }}
              size="small"
              disabled={!saveActive}
            >
              Save
            </Button>
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Stepper
              activeStep={orderStatus}
              alternativeLabel
              sx={{
                "& .MuiSvgIcon-root.Mui-completed": {
                  color: "#54C885",
                  //   fontSize: "18px",
                  width: "17px",
                  // marginRight: "40px",
                },

                "& .MuiStepConnector-line": {
                  //   minWidth: "188px",
                  //   borderWidth: "3px",
                  //   borderRadius: "50%",
                  //   height: 1,
                  //   border: 4,
                  //   backgroundColor: "red",
                },
                "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line":
                  {},
                "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line":
                  {
                    height: 2,
                    border: 1,
                    lineHeight: "20px",
                    // backgroundColor: "red",
                    borderColor: "#54C885",
                    position: "relative",
                    // top: "2px",
                    left: "-12px",
                    marginRight: "-24px",
                    // left: "10px",
                    // right:"500px"

                    // borderRadius: 4444,
                    // borderColor: "#54C885",
                    // lineHeight: "30px",
                  },
              }}
            >
              {steps.map((label) => (
                <Step key={label} sx={{}}>
                  <StepLabel
                    sx={{
                      "& .MuiStepLabel-label.Mui-completed": {
                        color: "#54C885",
                        // marginTop:"80px"
                      },
                      "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel ": {
                        marginTop: "3px",
                        fontSize: "13px",
                        fontFamily: "Montserrat-Medium",
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <TableContainer
            sx={{ paddingTop: "30px" }}
            // component={Paper}
            // sx={{ paddingTop: "0px", borderBottom: "none", marginTop: "20px" }}
          >
            <Table
              sx={{
                minWidth: 650,

                "&.MuiTable-root": {
                  //   borderBottom: "none",
                },
              }}
              aria-label="simple table"
            >
              <TableHead
                sx={{
                  "& .MuiTableCell-head": {
                    bgcolor: "#303779",

                    // width: "3px",
                    // lineHeight: "5px",
                    padding: "6px",
                    // overflowX: "auto"
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      letterSpacing: "0.12px",
                      color: "#FFFFFF",
                      fontSize: " 13px",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    S.No
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 13px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 13px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Discount (%)
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 13px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    MRP
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      fontSize: " 13px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      fontSize: " 13px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  "& .MuiTableCell-body": {
                    padding: "6px",
                  },
                }}
              >
                {invoiceOrderDetails?.invoiced_items?.map((rs, index) => {
                  return (
                    <>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        key={index}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#303030",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          {rs?.wholesalerInventory?.Drug_Name}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#303030",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          {/* {rs?.manufacturer} */}
                          {rs?.wholesalerInventory?.discount_percentage}%
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#303030",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          $ {rs?.wholesalerInventory?.unit__cost}
                        </TableCell>

                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#303030",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          {rs?.quantity}
                        </TableCell>

                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#303030",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          $ {rs?.orderItemTotal}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}

                <TableRow>
                  <TableCell
                    align="right"
                    colSpan={5}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "38px",
                      }}
                    >
                      Order Value
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      $ {invoiceOrderDetails?.totalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="right"
                    colSpan={5}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "56px",
                      }}
                    >
                      Discount
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={1}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      - $ {invoiceOrderDetails?.discountPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "4px",
                      }}
                    >
                      Delivery Charges
                    </Typography>
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      FREE
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={5}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "82px",
                      }}
                    >
                      Total
                    </Typography>
                  </TableCell>
                  <TableCell align="center" colSpan={1}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      $ {invoiceOrderDetails?.finalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Box sx={{ display: "flex" }}>
              {/* <Paper
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  height: 160,
                  //   marginBottom: "30px",
                  //   marginTop: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // borderBottom: "2px solid #F3F3FF",
                  }}
                >
                  <Typography
                    sx={{
                      letterSpacing: "0.28px",
                      fontSize: "15px",
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
                    {invoiceOrderDetails?.retailer?.fullName}
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
                    {invoiceOrderDetails?.order?.orderAddress?.storeName},&nbsp;
                    {invoiceOrderDetails?.order?.orderAddress?.address},&nbsp;
                    {invoiceOrderDetails?.order?.orderAddress?.city},&nbsp;
                    {invoiceOrderDetails?.order?.orderAddress?.zipcode},&nbsp;
                    {invoiceOrderDetails?.order?.orderAddress?.state},&nbsp;
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
                    {invoiceOrderDetails?.retailer?.user?.mobileNo}
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
                    {invoiceOrderDetails?.retailer?.user?.email}
                  </Typography>
                </Typography>

              </Paper> */}
            </Box>
          </TableContainer>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  fontSize: "10px",
                  fontFamily: "Montserrat-Medium",
                  color: "#F3F3F3",
                  marginRight: "30px",
                }}
                onClick={() => {
                  invoicePdf(invoiceOrderDetails.id);
                }}
                //   size="small"
              >
                Download Invoice
              </Button>
            </Box>
          </Box>
        </Paper>
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 160,
          marginBottom: "30px",
          marginTop: "20px",
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
            {invoiceOrderDetails?.retailer?.fullName}
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
            {/* {invoiceOrderDetails?.storeName},&nbsp; */}
            {invoiceOrderDetails?.order?.orderAddress?.storeName},&nbsp;
            {invoiceOrderDetails?.order?.orderAddress?.address},&nbsp;
            {invoiceOrderDetails?.order?.orderAddress?.city},&nbsp;
            {invoiceOrderDetails?.order?.orderAddress?.zipcode},&nbsp;
            {invoiceOrderDetails?.order?.orderAddress?.state},&nbsp;
            {/* {invoiceOrderDetails?.storeAddress},&nbsp;
              {invoiceOrderDetails?.storeCity}&nbsp;
              {invoiceOrderDetails?.storeState},&nbsp; */}
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
            {invoiceOrderDetails?.retailer?.user?.mobileNo}
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
            {invoiceOrderDetails?.retailer?.user?.email}
          </Typography>
        </Typography>
      </Paper>
    </Container>
  );
}
