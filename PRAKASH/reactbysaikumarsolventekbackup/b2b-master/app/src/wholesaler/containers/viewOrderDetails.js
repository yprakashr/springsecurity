import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  InputBase,
  Paper,
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
import { Link } from "react-router-dom";
import { apiCall } from "../../services/apis";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as moment from "moment";

import arrowForward from "../../assets/images/wholesalerImages/arrow-forward.svg";

export default function ViewOrderDetails() {
  const [updated, setUpdated] = useState(false);
  const { token } = useSelector((state) => state.userReducer);
  const [wholeSalerOrderDetails, setWholeSalerOrderDetails] = useState({});
  const [invoiceDetails, setInvoiceDetails] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const navigate = useNavigate();
  const wholesalerOrderId = localStorage.getItem("wholesalerOrderId");

  const [generateInvoiceEnable, setGenerateInvoiceEnable] = useState(false);
  const checking = (actionChecked) => {
    const ordered_items = wholeSalerOrderDetails.ordered_items.map((item) => {
      if (actionChecked) {
        item.checked = true;
        item.quantityToGenerate = 1;
      }
      if (!actionChecked) {
        item.checked = false;
        item.quantityToGenerate = 0;
      }
      return item;
    });
    setWholeSalerOrderDetails((prev) => ({ ...prev, ordered_items }));
  };
  
  useEffect(() => {
    if (allChecked && updated) {
      checking(true);
    }
    if (!allChecked && updated) {
      checking(false);
    }
  }, [allChecked]);
  useEffect(() => {
    let enable = false;
    wholeSalerOrderDetails?.ordered_items?.forEach((item) => {
      if (item.checked) {
        enable = true;
      }
    });
    setGenerateInvoiceEnable(enable);
  }, [wholeSalerOrderDetails]);

  useEffect(() => {
    wholeSalerOrders(wholesalerOrderId);
  }, []);
  useEffect(() => {
    getAllInvoiceDetails();
  }, [wholeSalerOrderDetails]);

  const wholeSalerOrders = (wholesalerOrderId) => {
    apiCall(`/wholesaler-by-id?id=${wholesalerOrderId}`, "GET", token)
      .then((res) => {
        res.data.ordered_items.forEach((item) => {
          item.checked = false;
          item.quantityToGenerate = 0;
        });
        setUpdated(true);
        setWholeSalerOrderDetails(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const getAllInvoiceDetails = () => {
    apiCall(
      `/get-all-invoice-details?order_id=${wholeSalerOrderDetails?.id}`,
      "GET",
      token
    )
      .then((res) => {
        setInvoiceDetails(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const handleCheckbox = (e, id) => {
    if (e.target.checked) {
      wholeSalerOrderDetails?.ordered_items?.forEach((item) => {
        if (item.id === id) {
          item.checked = true;
          item.quantityToGenerate = 1;
        }
      });
    }
    if (!e.target.checked) {
      wholeSalerOrderDetails?.ordered_items?.forEach((item) => {
        if (item.id === id) {
          item.checked = false;
          item.quantityToGenerate = 0;
        }
      });
    }
    setWholeSalerOrderDetails({ ...wholeSalerOrderDetails });
  };
  const handleInput = (e, id) => {
    wholeSalerOrderDetails?.ordered_items?.forEach((item) => {
      if (item.id === id) {
        item.checked = true;
        item.quantityToGenerate = parseInt(
          e.target.value === "" ? 0 : e.target.value
        );
      }
    });
    setWholeSalerOrderDetails({ ...wholeSalerOrderDetails });
  };

  const generateInvoice = async () => {
    const payload = {
      orderId: wholeSalerOrderDetails?.id,
      itemsToInvoice: [],
    };
    wholeSalerOrderDetails?.ordered_items?.forEach((item) => {
      if (item.checked) {
        payload.itemsToInvoice?.push({
          qtyToGenerateInv: item?.quantityToGenerate,
          orderedItemId: item?.id,
        });
      }
    });
    if (payload.itemsToInvoice.length === 0) {
      return;
    }
    const response = await apiCall("/generate-invoice", "POST", token, payload);
    if (response.statusCode === 400 || response.statusCode === 404) {
      return toast.error(response.message);
    }
    toast.success(response.message);
    wholeSalerOrders(wholesalerOrderId);
    getAllInvoiceDetails();
  };
  const invoiceDetailsPage = (id) => {
    navigate("/layout/wholeSalerInvoiceDetails", {
      state: { id: id },
    });
  };
  const creationOf = wholeSalerOrders?.createdAt;

  const orderCreationDate = moment(creationOf).format("  MMMM DD  YYYY");

  return (
    <>
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
              to="/layout/salesorder"
              sx={{ textDecoration: "none", color: "red" }}
            >
              <img src={backArrow} style={{ width: "20px" }} alt="" />
            </Link>
            &nbsp;Order Details
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
            Dashboard {`>`} Sales Order {`>`} Order Details
          </Typography>
        </Box>
        {wholeSalerOrderDetails.length == null ? (
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
                paddingBottom: "15px",
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
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "12px",
                  paddingBottom: "13px",
                  //   padding: "15px",
                }}
              >
                <Typography
                  sx={{
                    color: "#303030",
                    fontSize: "14px",
                    fontFamily: "Montserrat-Medium",
                    ml: 2,
                  }}
                >
                  Order Id:{"  "}
                  <Typography
                    component="span"
                    sx={{
                      color: "#303030",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    {wholeSalerOrderDetails?.orderUnique}
                  </Typography>
                </Typography>

                <Typography
                  sx={{
                    color: "#303030",
                    fontSize: "14px",
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  Order placed on: &nbsp;
                  <Typography
                    component="span"
                    sx={{
                      color: "#303030",
                      fontSize: "14px",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    {orderCreationDate} |
                    {wholeSalerOrderDetails?.createdAt?.slice(11, 16)} AM
                  </Typography>
                </Typography>
                <Typography
                  sx={{
                    color: "#303030",
                    fontSize: "14px",
                    fontFamily: "Montserrat-Medium",
                    mr: 2,
                  }}
                >
                  Order Status : &nbsp;
                  <Typography
                    component="span"
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
                    {wholeSalerOrderDetails?.orderStatus}
                  </Typography>
                </Typography>
              </Box>

              <TableContainer
              // component={Paper}
              // sx={{ p: 4 }}
              >
                <Table
                  sx={{
                    minWidth: 650,
                    "&.MuiTable-root": {
                      // border: "1px solid #DCDCDC",
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
                        padding: "1px",
                        // overflowX: "auto"
                      },
                    }}
                  >
                    <TableRow>
                      <TableCell>
                        <input
                          type="checkbox"
                          style={{
                            width: "15px",
                            height: "30px",
                            paddingTop: "300px",

                            backgroundClolor: "#FFFFFF",
                            borderRadius: "4px",
                            opacity: 1,
                          }}
                          onChange={(e) => {
                            setAllChecked(e.target.checked);
                          }}
                          checked={allChecked}
                        />
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
                        S.No
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
                          color: "#FFFFFF",
                          fontFamily: "Montserrat-Medium",
                          fontSize: " 13px",

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
                    {wholeSalerOrderDetails?.ordered_items?.map((rs, index) => {
                      return (
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          key={rs.id}
                          disabled={true}
                        >
                          <TableCell component="th" scope="row">
                            <input
                              type="checkbox"
                              checked={rs.checked}
                              onChange={(e) => {
                                handleCheckbox(e, rs.id);
                              }}
                              style={{
                                width: "15px",
                                height: "30px",
                                paddingTop: "300px",

                                backgroundClolor: "#FFFFFF",
                                borderRadius: "4px",
                                opacity: 1,
                              }}
                            />
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
                            {rs?.Drug_Name}
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
                            {rs?.discount_percentage}
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
                            $ {rs?.unit__cost}
                          </TableCell>

                          <TableCell align="left">
                            <Typography
                              sx={{
                                letterSpacing: "0.12px",
                                fontSize: " 12px",
                                color: "#303030",
                                fontFamily: "Montserrat-Medium",
                              }}
                            >
                              {rs?.fullfilledInvoiceQty?.invoiceGeneratedQty
                                ? rs?.fullfilledInvoiceQty?.invoiceGeneratedQty
                                : 0}
                              &nbsp;/ {rs?.quantity} &nbsp;&nbsp;
                              <Typography
                                component="span"
                                sx={{
                                  width: "auto",
                                  padding: "2px",
                                  borderRadius: "3px",
                                  border: "1px solid  #BBBBBB",
                                  letterSpacing: "0.12px",
                                  fontSize: " 12px",
                                  color: "#303030",
                                  fontFamily: "Montserrat-Medium",
                                }}
                              >
                                {" "}
                                <InputBase
                                  name={rs?.Drug_Name}
                                  value={rs.quantityToGenerate}
                                  onChange={(e) => {
                                    handleInput(e, rs.id);
                                  }}
                                  size="small"
                                  inputProps={{
                                    sx: {
                                      width: "20px",
                                      letterSpacing: "0.12px",
                                      fontSize: " 12px",
                                      color: "#303030",
                                      fontFamily: "Montserrat-Medium",
                                    },
                                  }}
                                />
                              </Typography>
                            </Typography>
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
                      );
                    })}

                    <TableRow disabled={true}>
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
                          $ {wholeSalerOrderDetails?.totalPrice}
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
                          - $ {wholeSalerOrderDetails?.discountPrice}
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
                          $ {wholeSalerOrderDetails?.finalPrice}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <Box sx={{ display: "flex" }}>
                  <Paper
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
                        {wholeSalerOrderDetails?.fullName}
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
                        {wholeSalerOrderDetails?.address?.[0].storeName},&nbsp;
                        {wholeSalerOrderDetails?.address?.[0].address} ,&nbsp;
                        {wholeSalerOrderDetails?.address?.[0].city},&nbsp;
                        {wholeSalerOrderDetails?.address?.[0].zipcode},&nbsp;
                        ,&nbsp;{wholeSalerOrderDetails?.address?.[0].state}
                        ,&nbsp;
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
                        {wholeSalerOrderDetails?.mobileNo}
                      </Typography>
                    </Typography>
                  </Paper>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    //   padding: "3px",
                    //   borderBottom: " 2px solid #E6EDFF",
                    bgcolor: "#F3F3FF",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    //   pb:2
                  }}
                >
                  <Box>
                    <Button
                      onClick={generateInvoice}
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        bgcolor: "#303779",
                        fontSize: "10px",
                        fontFamily: "Montserrat-Medium",
                        color: "#F3F3F3",
                        textAlign: "right",
                        marginRight: "30px",
                      }}
                      disabled={!generateInvoiceEnable}
                    >
                      Generate Invoice
                    </Button>
                  </Box>
                </Box>

                {/* <Typography
                  sx={{
                    color: "#303030",
                    fontSize: "12px",
                    fontFamily: "Montserrat-Medium",
                    ml: 2,
                    paddingTop: "10px",
                  }}
                >
                  Invoice created on 28/06/2022
                </Typography> */}

                {invoiceDetails?.map((invoice) => {
                  return (
                    <>
                      <Button
                        sx={{
                          color: "#FFFFFF",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                          border: "1px solid #303779",
                          borderRadius: "4px",
                          bgcolor: "#303779",
                          ml: 2,
                          mt: 1,
                          "&:hover": {
                            background: "#303779",
                          },
                        }}
                        onClick={() =>
                          invoiceDetailsPage(invoice?.invoiceUnique)
                        }
                      >
                        Invoice ID: {invoice?.invoiceUnique}
                        <IconButton>
                          <img
                            src={arrowForward}
                            alt=""
                            style={{ width: "20px", color: "#FFFFFF" }}
                          />
                        </IconButton>
                      </Button>
                    </>
                  );
                })}
              </TableContainer>
            </Paper>
          </Paper>
        ) : (
          <Typography
            sx={{
              color: "#303779",
              textAlign: "center",
              fontSize: "30px",
              fontFamily: "Montserrat-Bold",
              lineHeight: "380px",
            }}
          >
            This order is not associated to this wholesaler
          </Typography>
        )}
      </Container>
    </>
  );
}
