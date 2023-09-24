import React, { useContext, useEffect, useState } from "react";
import {
  Button,
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
import backArrow from "../assets/images/backArrow.svg";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { apiCall } from "../services/apis";
import { API_URL } from "../constant";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "../redux/actions/cart.action";
import { toast } from "react-toastify";

export default function Orderdetails() {
  const [orderDetails, setOrderDetails] = useState({});
  const [idInvoices, setInvoiceIds] = useState([]);
  const [dd, setD] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { token, user } = useSelector((state) => state.userReducer);
  useEffect(() => {
    invoiceIdsApi();
  }, [orderDetails]);
  useEffect(() => {
    const id = localStorage.getItem("orderId");

    Orders(id);
  }, []);

  useEffect(() => { }, []);

  const Orders = (orderId) => {
    apiCall(`/getByOrderId?id=${orderId}`, 'GET', token)
      .then((res) => {
        setOrderDetails(res.data);
      })
      .catch((er) => {
        console.log("error");
      });
  };
  const reOrder = async () => {
    try {
      console.log("ord", orderDetails)

      const addToCartArr = [];
      orderDetails.ordered_items.forEach((item) => {
        addToCartArr.push({
          wholesalerInventoryId: item.wholesalerInventory.id,
          quantity: item.quantity,
        });
      });
      const { message } = await apiCall(
        `/cart`,
        "PATCH",
        token,
        { itemsToCart: addToCartArr }
      );
      const updatedCartData = await apiCall(`/cart`, 'GET', token);
      dispatch(SET_CART(updatedCartData));
      toast.success(message, { autoClose: 750 });
      setTimeout(() => {
        navigate("/dashboard/cartpage");
      }, 800);
    } catch (error) {
      toast.error(error.message);
    }
  }

  let state;
  let storeName;
  let address;
  let city;
  let zipcode;
  orderDetails?.orderAddresses?.forEach((element) => {
    state = element?.state;
    storeName = element?.storeName;
    address = element?.address;
    city = element?.city;
    zipcode = element?.zipcode;
  });

  const invoicePage = (id) => {
    localStorage.setItem("invoiceUnique", id);

    navigate("/dashboard/invoice");
  };
  const invoiceIdsApi = () => {
    apiCall(`/getInvoiceDetails?orderId=${orderDetails?.id}`, 'GET', token)
      .then((res) => {
        // setOrderData(res.data.rows);
        setInvoiceIds(res.data);
      })
      .catch((er) => {
        console.log("error");
      });
  };

  const invoicePdf = () => {
    fetch(`${API_URL}/generateInvoice`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((response) => response.arrayBuffer())
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
            <img src={backArrow} style={{ width: "20px" }} />
          </Link>
          &nbsp;Order Details
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
              padding: "15px",
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
                  {orderDetails?.orderUnique}
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
                {/* {orderDetails?.createdAt.slice(0, 10)} */}
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
                {orderDetails?.orderStatus}
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
                {orderDetails?.ordered_items?.map((rs, index) => {
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

                {/* <TableRow>
                  <TableCell align="right" colSpan={6}>
                    <Typography sx={{ paddingRight: "40px" }}>
                      Order Value
                    </Typography>
                    <Typography
                      sx={{ paddingTop: "20px", paddingRight: "60px" }}
                    >
                      Discount
                    </Typography>
                    <Typography sx={{ paddingTop: "20px" }}>
                      Delivery Charges
                    </Typography>
                  </TableCell>
                  <TableCell align="center" colSpan={6}>
                    <Typography >
                      $ 1835.8298978866666666666666666666
                    </Typography>
                    <Typography sx={{ paddingTop: "20px" }}>
                      - $ 123.82
                    </Typography>
                    <Typography sx={{ paddingTop: "20px" }}>FREE</Typography>
                  </TableCell>
                </TableRow> */}
                <TableRow>
                  {/* <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>

                  <TableCell></TableCell> */}
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
                      $ {orderDetails?.totalPrice}
                    </Typography>
                  </TableCell>
                  {/* <TableCell align="center" >
                    <Typography>Order Value:088909988888888</Typography>
                  </TableCell> */}
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
                      - $ {orderDetails?.discountPrice}
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
                      $ {orderDetails?.finalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                // border:"#E6EDFF",
                //  borderTopWidth: "thin"
                // borderBottom: "red",
              }}
            >
              <Box sx={{ display: "flex" }}>
                {/* <Link
                  to="/dashboard/invoice"
                  style={{ textDecoration: "none" }}
                > */}
                {idInvoices.map((rs) => {
                  return (
                    <>
                      <Button
                        sx={{
                          color: "#303779",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Bold",
                          border: "1px solid #303779",
                          borderRadius: "4px",
                        }}
                        onClick={() => invoicePage(rs?.invoiceUnique)}
                      >
                        Invoice ID: {rs?.invoiceUnique}
                      </Button>{" "}
                      &nbsp;
                    </>
                  );
                })}
                {/* </Link> */}
              </Box>
              <Box>
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
                  //   size="small"
                  onClick={invoicePdf}
                >
                  Download Receipt
                </Button>
                <Button
                  onClick={reOrder}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    bgcolor: "#303779",
                    fontSize: "10px",
                    fontFamily: "Montserrat-Medium",
                    color: "#FFFFFF",
                    marginRight: "30px",
                  }}
                  size="small"
                >
                  Re-Order
                </Button>
              </Box>
            </Box>
          </TableContainer>

          {/* <Table>
            <TableBody>
              <TableRow>
                <TableCell>jj</TableCell>
                <TableCell>jj</TableCell>
              </TableRow>
            </TableBody>
          </Table> */}
        </Paper>

        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 160,
            marginBottom: "30px",
            marginTop: "30px",
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
              {orderDetails?.retailer?.fullName}
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
              {orderDetails?.orderAddress?.storeName},&nbsp;
              {orderDetails?.orderAddress?.address},&nbsp;
              {orderDetails?.orderAddress?.city},&nbsp;
              {orderDetails?.orderAddress?.zipcode}
              ,&nbsp;{orderDetails?.orderAddress?.state}
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
              {orderDetails?.user?.mobileNo}
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
              {orderDetails?.user?.email}
            </Typography>
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
