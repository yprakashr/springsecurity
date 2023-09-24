import React, { useEffect, useState } from "react";
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
import * as moment from "moment";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import backArrow from "../../assets/images/backArrow.svg";
import { apiCall } from "../../services/apis";
import { useSelector } from "react-redux";

export default function ViewReturnDetails() {
  const [returnReviewDetails, setReturnReviewDetails] = useState({});
  const { token } = useSelector((state) => state.userReducer);

  useEffect(() => {
    returnReviewDetailsApi();
  }, []);
  const returnId = localStorage.getItem("returnId");

  const returnReviewDetailsApi = () => {
    apiCall(`/get-return-products?return_id=${returnId}`, "GET", token)
      .then((res) => {
        setReturnReviewDetails(res?.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const base64EncodedImages = returnReviewDetails?.images;

  const imageDataUrl = `data:image/png;base64,${base64EncodedImages}`;

  const y = returnReviewDetails?.createdAt;

  const returnCreationDate = moment(y).format("  MMMM DD  YYYY");

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
            to="/dashboard/myorders"
            sx={{ textDecoration: "none", color: "red" }}
          >
            <img src={backArrow} style={{ width: "20px" }} alt="" />
          </Link>
          &nbsp;Return Review
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
                Return Requested on {returnCreationDate} |
                {returnReviewDetails?.createdAt?.slice(11, 16)} AM
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
                  color: "#303779",
                  border: "1px solid #E6EDFF",
                  borderRadius: "2px",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                {returnReviewDetails?.returnStatus}
              </Typography>
            </Box>
          </Box>
          <TableContainer
            component={Paper}
            sx={{ paddingTop: "0px", borderBottom: "none" }}
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
                {returnReviewDetails?.items?.map((rs, index) => {
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
                          ${rs?.wholesalerInventory?.unit__cost}
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
                          $ {rs?.returnItemTotal}
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
                      $ {returnReviewDetails?.totalPrice}
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
                      - ${returnReviewDetails?.discountPrice}
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
                        fontSize: "13px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      $ {returnReviewDetails?.finalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ p: 3 }}>
                <Paper
                  sx={{
                    bgcolor: "#F9F9F9",
                    width: "350px",
                    paddingBottom: "40px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: "14px",
                      fontFamily: "Montserrat-Bold",
                      borderBottom: "2px solid #ECECEC",
                      paddingTop: "15px",
                      paddingLeft: "16px",
                    }}
                  >
                    Selected reason for the return
                  </Typography>
                  <Typography
                    sx={{
                      color: "#69747F",
                      fontSize: "13px",
                      fontFamily: "Montserrat-Medium",

                      paddingTop: "10px",
                      paddingLeft: "16px",
                      paddingBottom: "20px",
                    }}
                  >
                    Received expired product
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ p: 3 }}>
                <Paper
                  sx={{
                    bgcolor: "#F9F9F9",
                    width: "350px",
                    paddingBottom: "40px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: "14px",
                      fontFamily: "Montserrat-Bold",
                      borderBottom: "2px solid #ECECEC",
                      paddingTop: "10px",
                      paddingLeft: "16px",
                    }}
                  >
                    Uploaded Images
                  </Typography>
                  {base64EncodedImages?.map((rs) => (
                    <img
                      src={`data:image/png;base64,${rs}`}
                      style={{
                        width: "30%",
                        // backgroundColor: "#303030",
                        // color: "#303030",
                        marginLeft: "20px",
                        paddingTop: "10px",
                      }}
                      alt="image"
                    />
                  ))}
                </Paper>
              </Box>
            </Box>
            <Box sx={{ m: 3, display: "flex" }}>
              <Button
                sx={{
                  textTransform: "none",
                  color: "#303779",
                  fontSize: "11px",
                  fontFamily: "Montserrat-Bold",
                  border: "1px solid #303779",
                  borderRadius: "4px",
                  // marginLeft: "25px",
                }}
              >
                Support ID: {returnReviewDetails?.supportId}
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  fontSize: "10px",
                  fontFamily: "Montserrat-Medium",
                  color: "#F3F3F3",
                  marginLeft: "30px",
                }}
                //   size="small"
              >
                Download Receipt
              </Button>
            </Box>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 160,
                marginBottom: "30px",
                marginTop: "0px",
                bgcolor: "#F9F9F9",
                marginLeft: "20px",
                marginRight: "20px",
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
                  Pickup Address
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
                  {returnReviewDetails?.retailer?.fullName}
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
                  {returnReviewDetails?.orderAddress?.storeName}
                  ,&nbsp;
                  {returnReviewDetails?.orderAddress?.address}
                  ,&nbsp;
                  {returnReviewDetails?.orderAddress?.city}
                  ,&nbsp;
                  {returnReviewDetails?.orderAddress?.state}
                  ,&nbsp;
                  {returnReviewDetails?.orderAddress?.zipcode}
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
                  {returnReviewDetails?.retailer?.user?.mobileNo}
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
                  {returnReviewDetails?.retailer?.user?.email}
                </Typography>
              </Typography>
            </Paper>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}
