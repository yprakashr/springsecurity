import React from "react";
import useCustomMyorders from "./util";
import { Paper, Tab, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Container } from "@mui/system";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Pagination from "@mui/material/Pagination";
import Mytable from "./mytable";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: "0px",
      marginTop: "29px",
    },
    btnn: {
      color: "#303779",
      fontSize: "12px",
      fontFamily: "Montserrat-Bold",
      letterSpacing: "0.28px",
      textTransform: "none",
    },
  })
);
export default function Myorders() {
  const classes = useStyles({});
  const {
    handleClick,
    handleChange,
    orderData,
    statusData,
    value,
    dataTrue,
    viewOrders,
    OrderPlacedPage,
    handleValueOrderPlaced,
    allOrdersPageNo,
    handleChangeOrders,
    returnsTrue,
    handleClickReturn,
  } = useCustomMyorders();
  return (
    <>
      <Container>
        <Paper sx={{ bgcolor: "#FFFFFF" }}>
          <Box sx={{ typography: "body1" }}>
            <TabContext
              value={value}
              sx={{
                "& .MuiTabPanel-root": {
                  padding: "24px",
                  color: "blue",
                },
              }}
            >
              <Box
                sx={{ borderBottom: "2px solid #F3F3FF", paddingTop: "8px" }}
              >
                <TabList
                  onChange={handleChange}
                  indicatorColor="primary"
                  aria-label="lab API tabs example"
                  sx={{
                    "& .PrivateTabIndicator-colorSecondary-5": {
                      bgcolor: "blue",
                      padding: "200px",
                      borderBottom: "100px",
                    },
                  }}
                >
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    className="Butto"
                    label="All Orders"
                    value="a"
                  />
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    label="Order Placed"
                    value="OrderPlaced"
                    name="OrderPlaced"
                  />
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    label="Approved"
                    value="c"
                    name="approved"
                  />
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    label="Processed"
                    value="processed"
                    name="processed"
                  />
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    label="Shipped"
                    value="shipped"
                    name="shipped"
                  />
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    label=" Delivered"
                    value="f"
                    name="Delivered"
                  />
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    label="Cancelled"
                    value="g"
                    name="CANCELLED"
                  />
                  <Tab
                    sx={{
                      color: "#303779",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.28px",
                      textTransform: "none",
                    }}
                    label="Returns"
                    value="h"
                    name="returns"
                  />
                </TabList>
              </Box>
              <TabPanel className={classes.root} value="a">
                {" "}
                <Mytable
                  orderData={orderData}
                  dataTrue={dataTrue}
                  viewOrders={viewOrders}
                  handleClick={handleClick}
                />
                {orderData?.data?.length ? (
                  <Pagination
                    count={parseInt(
                      orderData?.count % 10 >= 1
                        ? orderData?.count / 10 + 1
                        : orderData?.count / 10
                    )}
                    rowsperpage={10}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      bottom: "0",
                      marginTop: "10px",
                    }}
                    color="primary"
                    page={allOrdersPageNo}
                    onChange={handleChangeOrders}
                  />
                ) : null}
              </TabPanel>
              <TabPanel
                className={classes.root}
                sx={{
                  "& .MuiTabPanel-root": {
                    bgcolor: "#E6EDFF",
                    padding: "5px",
                    color: "red",
                  },
                }}
                value="b"
              >
                <Typography
                  sx={{
                    marginLeft: "360px",
                    fontSize: "20px",
                    fontFamily: "Montserrat-Bold",
                    color: "#303779",
                  }}
                >
                  No Orders
                </Typography>
              </TabPanel>
              <TabPanel value="c" className={classes.root}>
                <Mytable
                  viewOrders={viewOrders}
                  dataTrue={dataTrue}
                  handleClick={handleClick}
                />
                {statusData === "approved" && viewOrders?.data?.length ? (
                  <Pagination
                    rowsperpage={10}
                    count={parseInt(
                      viewOrders?.count % 10 >= 1
                        ? viewOrders?.count / 10 + 1
                        : viewOrders?.count / 10
                    )}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      bottom: "0",
                      marginTop: "10px",
                    }}
                    color="primary"
                    page={OrderPlacedPage}
                    onChange={handleValueOrderPlaced}
                  />
                ) : null}
              </TabPanel>
              <TabPanel value="processed" className={classes.root}>
                <Mytable
                  viewOrders={viewOrders}
                  dataTrue={dataTrue}
                  handleClick={handleClick}
                />
                {statusData === "processed" && viewOrders?.data?.length ? (
                  <Pagination
                    rowsperpage={10}
                    count={parseInt(
                      viewOrders?.count % 10 >= 1
                        ? viewOrders?.count / 10 + 1
                        : viewOrders?.count / 10
                    )}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      bottom: "0",
                      marginTop: "10px",
                    }}
                    color="primary"
                    page={OrderPlacedPage}
                    onChange={handleValueOrderPlaced}
                  />
                ) : null}
              </TabPanel>
              <TabPanel value="shipped">
                <Mytable
                  viewOrders={viewOrders}
                  dataTrue={dataTrue}
                  handleClick={handleClick}
                />
                {statusData === "shipped" && viewOrders?.data?.length ? (
                  <Pagination
                    rowsperpage={10}
                    count={parseInt(
                      viewOrders?.count % 10 >= 1
                        ? viewOrders?.count / 10 + 1
                        : viewOrders?.count / 10
                    )}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      bottom: "0",
                      marginTop: "10px",
                    }}
                    color="primary"
                    page={OrderPlacedPage}
                    onChange={handleValueOrderPlaced}
                  />
                ) : null}
              </TabPanel>
              <TabPanel value="OrderPlaced" className={classes.root}>
                <Mytable
                  viewOrders={viewOrders}
                  dataTrue={dataTrue}
                  handleClick={handleClick}
                />
                {statusData === "OrderPlaced" && viewOrders?.data?.length ? (
                  <Pagination
                    rowsperpage={10}
                    count={parseInt(
                      viewOrders?.count % 10 >= 1
                        ? viewOrders?.count / 10 + 1
                        : viewOrders?.count / 10
                    )}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      bottom: "0",
                      marginTop: "10px",
                    }}
                    color="primary"
                    page={OrderPlacedPage}
                    onChange={handleValueOrderPlaced}
                  />
                ) : null}
              </TabPanel>
              <TabPanel value="f" className={classes.root}>
                <Mytable
                  viewOrders={viewOrders}
                  dataTrue={dataTrue}
                  handleClick={handleClick}
                />
                {statusData === "Delivered" && viewOrders?.data?.length ? (
                  <Pagination
                    rowsperpage={10}
                    count={parseInt(
                      viewOrders?.count % 10 >= 1
                        ? viewOrders?.count / 10 + 1
                        : viewOrders?.count / 10
                    )}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      bottom: "0",
                      marginTop: "10px",
                    }}
                    color="primary"
                    page={OrderPlacedPage}
                    onChange={handleValueOrderPlaced}
                  />
                ) : null}
              </TabPanel>
              <TabPanel value="g">
                {" "}
                <Typography
                  sx={{
                    marginLeft: "360px",
                    fontSize: "20px",
                    fontFamily: "Montserrat-Bold",
                    color: "#303779",
                  }}
                >
                  No Orders
                </Typography>
              </TabPanel>
              <TabPanel value="h" className={classes.root}>
                <Mytable
                  viewOrders={viewOrders}
                  dataTrue={dataTrue}
                  handleClick={handleClick}
                  returnsTrue={returnsTrue}
                  handleClickReturn={handleClickReturn}
                />
                {statusData === "returns" && viewOrders?.data?.length ? (
                  <Pagination
                    rowsperpage={10}
                    count={parseInt(
                      viewOrders?.count % 10 >= 1
                        ? viewOrders?.count / 10 + 1
                        : viewOrders?.count / 10
                    )}
                    // count={3}
                    sx={{
                      justifyContent: "center",
                      display: "flex",
                      bottom: "0",
                      marginTop: "10px",
                    }}
                    color="primary"
                    page={OrderPlacedPage}
                    onChange={handleValueOrderPlaced}
                  />
                ) : null}
              </TabPanel>
            </TabContext>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
