import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import search from "../../assets/images/wholesalerImages/search icon.svg";
import { apiCall } from "../../services/apis";
import Daterangepicker from "./dateRangePicker";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Salesorder() {
  const navigate = useNavigate();
  const inputStyle = { WebkitBoxShadow: "0 0 0 100px white inset" };

  const { token } = useSelector((state) => state.userReducer);

  const [wholesalerOrders, setWholesalerOrders] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const [filterData, setFilterData] = useState([]);
  const [dateTrue, setDateTrue] = useState(true);
  const [pageno, setPageNo] = useState(1);
  const [totalCount, setCount] = useState(0);
  let arrayToMap = wholesalerOrders;
  dateTrue ? (arrayToMap = filterData) : (arrayToMap = wholesalerOrders?.data);
  const getdet = (data2) => {
    setFilterData(data2);
    // setDateTrue();
  };
  const handleClick = (id) => {
    localStorage.setItem("wholesalerOrderId", id);
    navigate("/layout/vieworderdetails");
  };
  const getdet6 = (data3) => {
    setDateTrue(data3);
  };

  const getWholesalerOrders = () => {
    apiCall(
      `/orderslist-filter-by-date?pageNo=${pageno}&pageSize=${10}`,
      "GET",
      token
    )
      .then((res) => { 
        setWholesalerOrders(res);
        setDateTrue(false);
        if (res?.data?.length === 1) {
          setCount(0);
          return;
        }

        setCount(res?.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeSalesOrders = (event, value) => {
    setPageNo(value);
  };

  const searchHandle = async () => {
    try {
      let response;
      if (searchInput.slice(0, 5) === "MEDLI") {
        response = await apiCall(
          `/search-sales-order?orderId=${searchInput}`,
          "GET",
          token
        );
      } else {
        response = await apiCall(
          `/search-sales-order?orderStatus=${searchInput}`,
          "GET",
          token
        );
      }
      if (response.status !== 200) {
        setWholesalerOrders([]);
        return toast.error(response.message);
      }
      setWholesalerOrders(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!searchInput.length) {
      getWholesalerOrders();
    }
  }, [searchInput, pageno]);

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
            New Orders &nbsp;
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
            Dashboard {`>`} Sales Order
          </Typography>
        </Box>
        <Paper
          sx={{
            bgcolor: "#FFFFFF",
            marginTop: "10px",
            padding: "23px",
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
              bgcolor: "#E6EDFF",
            }}
          >
            <Daterangepicker getdet={getdet} getdet6={getdet6} />
            <Box
              sx={{
                display: "flex",
                // justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <TextField
                // id="outlined-basic"
                id="margin-none"
                placeholder="Search by Order Id and Status"
                // label="Outlined"
                // variant="outlined"
                onChange={(e) => {
                  setSearchInput(e.target.value);
                }}
                sx={{
                  fontSize: "200px",
                  "&.MuiTextField-root": {
                    bgcolor: "#FFFFFF",
                  },
                }}
                // inputProps={{ style: inputStyle }}
                InputProps={{
                  sx: {
                    width: "320px",
                    height: "40px",
                    padding: "0px",
                    // background: " #FFFFFF 0% 0% no-repeat padding-box",
                    // bgcolor:"red",
                    border: "1px solid #E6EDFF",
                    borderRadius: "4px",
                    opacity: 1,
                    input: {
                      "&::placeholder": {
                        color: "#BBBBBB",
                        opacity: "0.7",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                      },
                    },
                  },
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        disableRipple
                        sx={{
                          boxShadow: "none",
                          bgcolor: "#3A63F3",
                          borderRadius: "0px 3px 3px 0px",
                          width: "849x",
                          height: "37px",
                          margin: "-1px",
                          color: "#FFFFFF",
                          // "&.hover": { bgcolor: "none"}
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "none",
                          },
                          // paddingRight:"70px"
                        }}
                        onClick={() => searchHandle()}
                      >
                        <img src={search} style={{ color: "red" }} alt="" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {/* <Typography
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
                Delivered
              </Typography> */}
            </Box>
          </Box>

          <TableContainer
            // component={Paper}
            sx={{ marginTop: "20px" }}
          >
            <Table
              sx={{
                minWidth: 650,
                "&.MuiTable-root": {
                  border: "1px solid #DCDCDC",
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
                    padding: "3px",
                    // overflowX: "auto"
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    S.No
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    Order Id
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    No of items
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    No of Quantity
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Order Date
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Total Amount
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Status Actions
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
                {arrayToMap?.map((ks, i) => {
                  return (
                    <>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                          cursor: "pointer",
                        }}
                        onClick={() => handleClick(ks?.id)}
                        key={i}
                      >
                        <TableCell component="th" scope="row">
                          {i + 1}
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
                          {ks?.orderUnique}
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
                          {ks?.itemQuantity}
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
                          {ks?.sumQuantity}
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
                          {ks?.orderDate.slice(0, 10)}
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
                          $ {ks?.totalAmount}
                        </TableCell>

                        <TableCell>
                          <Button
                            // variant="contained"
                            sx={{
                              textTransform: "none",
                              bgcolor: "#F3F3FF",
                              fontSize: "11px",
                              fontFamily: "Montserrat-Medium",
                              color: "#54C885",
                              // borderRadius: "2px",
                            }}
                            size="small"
                          >
                            {ks?.orderStatus}
                          </Button>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {wholesalerOrders?.data?.length ? (
            <Pagination
              rowsperpage={10}
              count={parseInt(
                wholesalerOrders?.count % 10 >= 1
                  ? wholesalerOrders?.count / 10 + 1
                  : wholesalerOrders?.count / 10
              )}
              // count={3}

              sx={{
                justifyContent: "center",
                display: "flex",
                bottom: "0",
                marginTop: "10px",
              }}
              color="primary"
              page={pageno}
              onChange={handleChangeSalesOrders}
            />
          ) : null}
        </Paper>
      </Container>
    </>
  );
}
