import React from "react";
import useCustomInvoiceid from "./util";
import {
  Button,
  Paper,
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
import { Link } from "react-router-dom";

import backArrow from "../../assets/images/backArrow.svg";

import { Box, Container } from "@mui/system";
import useCustomInvoiceDetails from "./util";
import { useEffect } from "react";
const steps = [" Placed", " Approved", " Processed", " Shipped", "Delivered"];
export default function InvoiceDetails() {
  const { invoicePdf, invoiceOrderDetails, orderStatus } =
    useCustomInvoiceDetails();
  useEffect(() => {
    console.log("invoiceOrderDetails", invoiceOrderDetails);
  }, [invoiceOrderDetails]);
  return (
    <>
      <Container>
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
            to="/dashboard/orderdetails"
            sx={{ textDecoration: "none", color: "red" }}
          >
            <img src={backArrow} style={{ width: "20px" }} />
          </Link>
          &nbsp; Invoice ID:{" "}
          <Typography
            component="span"
            sx={{
              color: "#303030",
              fontSize: "14px",
              fontFamily: "Montserrat-Bold  ",
            }}
          >
            {invoiceOrderDetails?.invoiceUnique}{" "}
          </Typography>
        </Typography>

        <Paper
          sx={{
            bgcolor: "#FFFFFF",
            marginTop: "10px",
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: " 2px solid #E6EDFF",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#303030",
                  fontSize: "14px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                Order Id:{" "}
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
                  fontSize: "14px",
                  fontFamily: "Montserrat-Medium",
                  opacity: "0.7",
                  marginLeft: "25px",
                }}
              >
                June 24, 2022 | 10: 30 AM
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                // justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#303030",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                Status:
              </Typography>
              &nbsp;
              <Typography
                sx={{
                  padding: "1px",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  bgcolor: "#E6EDFF",
                  color: "#54C885",
                  border: "1px solid #E6EDFF",
                  borderRadius: "2px",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {invoiceOrderDetails?.orderStatus}
              </Typography>
            </Box>
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
            component={Paper}
            sx={{ paddingTop: "0px", borderBottom: "none", marginTop: "20px" }}
          >
            <Table
              sx={{
                minWidth: 650,
                "&.MuiTable-root": {
                  borderBottom: "none",
                },
              }}
              aria-label="simple table"
            >
              <TableHead
                sx={{
                  "& .MuiTableCell-head": {
                    bgcolor: "#E6EDFF",

                    // width: "3px",
                    // lineHeight: "5px",
                    padding: "5px",
                    // overflowX: "auto"
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                    }}
                  >
                    S.No
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                    }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Manufacture
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Vendor
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Discount (%)
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Cost
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Total Amount
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
                          {rs?.wholesalerInventory?.manufacturer}
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
                          {rs?.wholesalerInventory?.manufacturer}
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
                          {rs?.wholesalerInventory?.discount_percentage} %
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
                    colSpan={6}
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
                    colSpan={2}
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
                    colSpan={6}
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
                    colSpan={2}
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
                  <TableCell align="right" colSpan={6}>
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
                  <TableCell align="center" colSpan={2}>
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
                  <TableCell align="right" colSpan={6}>
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
                  <TableCell align="center" colSpan={2}>
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                p: 2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Button disabled={!invoiceOrderDetails.isReturn}>
                  <Link
                    to="/dashboard/return"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "13px",
                        fontFamily: "Montserrat-Medium",
                        marginRight: "60px",
                        paddingTop: "6px",
                      }}
                    >
                      Return
                    </Typography>
                  </Link>
                </Button>

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
          </TableContainer>
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
    </>
  );
}
