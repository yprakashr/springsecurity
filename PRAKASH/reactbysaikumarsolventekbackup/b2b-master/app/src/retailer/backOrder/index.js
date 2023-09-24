import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import useBackOrder from "./util";

function BackOrder() {
  const {
    open,
    handleClose,
    addToCart,
    addToCartBtn,
    allChecked,
    handleAllCheck,
    discardBackOrder,
    handleSingleCheck,
    showQtyButtons,
    qtyUpdate,
    backOrders,
  } = useBackOrder();
  return (
    <>
      {!backOrders.length ? (
        <Typography
          sx={{
            marginLeft: "360px",
            fontSize: "29px",
            fontFamily: "Montserrat-Bold",
            color: "#303779",
            alignItems: "center",
            marginTop: "160px",
          }}
        >
          No Back Orders
        </Typography>
      ) : (
        <>
          <Typography
            sx={{
              // width: "13px",
              height: "49px",
              /* UI Properties */
              // textAlign: "left",

              fontFamily: "Montserrat-Bold",
              fontSize: "24px",
              letterSpacing: "0.24px",
              color: "#303030",
            }}
          >
            Back Order
          </Typography>

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "10px",
            }}
          >
            <Button
              // onClick={handleSubmit}
              // variant="contained"
              onClick={addToCart}
              sx={{
                textTransform: "none",
                bgcolor: "#3A63F3",
                width: "100px",
                height: "30px",
                /* UI Properties */
                background: "#3A63F3 0% 0% no-repeat padding-box",
                borderRadius: "4px",
                opacity: 1,
                color: "#FFFFFF",
                fontSize: "13px",
                fontFamily: "Mont-Light",
                "&:hover": {
                  background: "#3A63F3",
                },
              }}
              size="small"
              // onClick={shiftBackOrderToCart}
              disabled={!addToCartBtn}
            >
              Add to Cart
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                      checked={allChecked}
                      onChange={handleAllCheck}
                    />
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Mont-Light",
                    }}
                  >
                    Drug Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: " 12px",
                      fontFamily: "Mont-Light",
                      letterSpacing: "0.12px",
                    }}
                  >
                    NDC
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: " 12px",
                      fontFamily: "Mont-Light",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Strength
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: " 12px",
                      fontFamily: "Mont-Light",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Package Code
                  </TableCell>

                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontSize: " 12px",
                      fontFamily: "Mont-Light",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Unit Cost
                  </TableCell>

                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                  {/* <TableCell align="left">.</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  "& .MuiTableCell-body": {
                    padding: "6px",
                  },
                }}
              >
                {backOrders.map((rs) => {
                  return (
                    <>
                      <TableRow
                        key={rs.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <input
                            checked={rs.qtyButtons}
                            onChange={(e) => {
                              handleSingleCheck(e, rs);
                            }}
                            style={{
                              borderColor: "red",
                              width: "15px",
                              height: "25px",
                              // paddingTop: "300px",

                              backgroundClolor: "#FFFFFF",
                              // borderRadius: "4px",
                              border: "2px solid red",
                              opacity: 1,
                            }}
                            type="checkbox"
                          />
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#313F4D",
                            fontFamily: "Mont-Light",
                          }}
                        >
                          {rs?.wholesalerInventory?.Drug_Name}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#313F4D",
                            fontFamily: "Mont-Light",
                          }}
                        >
                          {rs?.wholesalerInventory?.NDC_UPC_HRI}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#313F4D",
                            fontFamily: "Mont-Light",
                          }}
                        >
                          {rs?.wholesalerInventory?.Strength_Unit_of_Measure}
                        </TableCell>

                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#313F4D",
                            fontFamily: "Mont-Light",
                          }}
                        >
                          {rs?.wholesalerInventory?.Package_Code}
                        </TableCell>

                        <TableCell
                          align="left"
                          sx={{
                            letterSpacing: "0.12px",
                            fontSize: " 12px",
                            color: "#313F4D",
                            fontFamily: "Mont-Light",
                          }}
                        >
                          {rs?.wholesalerInventory?.unit__cost}
                        </TableCell>
                        <TableCell align="left">
                          {!rs.qtyButtons ? (
                            <Button
                              variant="contained"
                              sx={{
                                textTransform: "none",
                                bgcolor: "#3A63F3",
                                fontSize: "10px",
                                fontFamily: "Mont-Light",
                              }}
                              size="small"
                              onClick={() => {
                                showQtyButtons(rs.wholesalerInventoryId);
                              }}
                            >
                              Buy this item
                            </Button>
                          ) : (
                            <React.Fragment>
                              <Button
                                onClick={() =>
                                  qtyUpdate(rs.wholesalerInventoryId, "dec")
                                }
                                sx={{
                                  bgcolor: "#E6E6E6",
                                  color: "black",
                                  minWidth: "20px",
                                  height: "20px",
                                  "&:hover": { bgcolor: "#E6E6E6" },
                                }}
                              >
                                -
                              </Button>
                              &nbsp;
                              <Button
                                sx={{
                                  color: "black",
                                  border: "1px solid #69747F",
                                  borderColor: "#69747F",
                                  minWidth: "30px",
                                  height: "25px",
                                  Item: "center",
                                }}
                              >
                                {rs.qty}
                              </Button>
                              &nbsp;
                              <Button
                                sx={{
                                  bgcolor: "#303779",
                                  color: "white",
                                  "&:hover": { bgcolor: "#303779" },
                                  minWidth: "20px",
                                  height: "20px",
                                  mt: "4px",
                                }}
                                onClick={() =>
                                  qtyUpdate(rs.wholesalerInventoryId, "inc")
                                }
                              >
                                +
                              </Button>
                            </React.Fragment>
                          )}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}

export default BackOrder;
