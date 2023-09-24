import React, { useEffect, useState } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  Pagination,
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
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { apiCall } from "../../services/apis";
import { useSelector } from "react-redux";

export default function Reports() {
  const { token } = useSelector((state) => state.userReducer);
  const [reports, setReports] = useState([]);
  const [pageno, setPageNo] = useState(1);
  const [totalCount, setCount] = useState(0);
  useEffect(() => {
    getReports();
  }, [pageno]);

  const getReports = () => {
    apiCall(`/fetch-reports?pageNo=${pageno}&pageSize=${10}`, "GET", token)
      .then((res) => {
        setReports(res);
        if (res?.data?.length === 1) {
          setCount(0);
          return;
        }
        setCount(res?.count);
      })
      .catch((er) => {
        console.log("error");
      });
  };
  const handleChangeReports = (event, value) => {
    setPageNo(value);
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
            Reports &nbsp;
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
            Dashboard &nbsp; Reports
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
                    Pharmacy
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
                    No of items
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
                    Amount
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
                    Gross Profit
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
                    Profit %
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
                    Status
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
                {reports?.data?.map((repor, index) => {
                  const {
                    orderId,
                    orderDate,
                    pharmacy,
                    noOfItems,
                    amount,
                    grossProfit,
                    profit,
                    status,
                  } = repor;
                  return (
                    <>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                          {orderId}
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
                          {orderDate.slice(0, 10)}
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
                          {pharmacy}
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
                          {noOfItems}
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
                          ${amount}
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
                          ${grossProfit}
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
                          {profit}%
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
                            {status}
                          </Button>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          {reports?.data?.length ? (
            <Pagination
              rowsperpage={10}
              count={parseInt(
                reports?.count % 10 >= 1
                  ? reports?.count / 10 + 1
                  : reports?.count / 10
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
              onChange={handleChangeReports}
            />
          ) : null}
          {/* <Table>
            <TableBody>
              <TableRow>
                <TableCell>jj</TableCell>
                <TableCell>jj</TableCell>
              </TableRow>
            </TableBody>
          </Table> */}
        </Paper>
      </Container>
    </>
  );
}
