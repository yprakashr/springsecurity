import React from "react";
import useCustomPaymentDetails from "./util";
import {
  Button,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import cartIcon from "../../assets/images/cartIcon.svg";

export default function PaymentDetails() {
  const {
    changeLocation,
    handleClose,
    proceedOrder,
    match1,
    open,
    cart_items,
    finalPrice,
    totalPrice,
    discountPrice,
  } = useCustomPaymentDetails();
  return (
    <>
      {cart_items && cart_items.length ? (
        <Typography
          sx={{
            fontSize: "15px",
            fontFamily: "Montserrat-Bold",
            letterSpacing: "0.16px",
            color: "#303030",
            opacity: 1,
            marginTop: "-0px",
          }}
        >
          Payment Details
        </Typography>
      ) : null}
      {cart_items && cart_items.length ? (
        <Paper
          sx={{
            mt: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 200,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Cart Value
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              {/* $ {cartPrice} */}$ {totalPrice}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Discount
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              {discountPrice}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Coupon
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              - $ 00.00
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Credit Line
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              - $ 0.00
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "2px solid #F3F3FF",
              borderBottom: "2px solid #F3F3FF",
              pt: 1,
              pb: 1,
            }}
          >
            <Typography
              sx={{
                color: "#303030",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Shipping Charges
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "13px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              FREE &nbsp; <del>$ 25.00</del>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold",
              }}
            >
              Total Amount:
            </Typography>
            <Typography
              sx={{
                color: "#303030",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold",
              }}
            >
              $ {finalPrice}
            </Typography>
          </Box>
        </Paper>
      ) : null}
      {cart_items && cart_items.length ? (
        <Typography
          sx={{
            fontSize: "13px",
            fontFamily: "Mont-Light",
            color: "#303030",
            mt: 2,
          }}
        >
          Total Savings of{" "}
          <span
            style={{
              color: "#54C885",
              fontSize: "13px",
              fontFamily: "Montserrat-Medium",
            }}
          >
            $ {discountPrice}
          </span>{" "}
          on this order
        </Typography>
      ) : null}
      {cart_items && cart_items.length ? (
        <Box sx={{ display: "flex" }}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={{ mt: 1 }}
          >
            {/* <FormControlLabel
            name="userType"
            value="wholesaler"
            sx={{
              "& svg": {
                width: "0.9em",
                height: "0.9em",
              },
            }}
            
            control={<Radio size="small" sx={{ color: "#313F4D" }} />}
            label={
              <Typography
                sx={{
                  color: "#313F4D",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Bold",
                }}
              >
                Credit Line
              </Typography>
            }
            
          /> */}
            <FormControlLabel
              name="userType"
              defaultValue="Cash on Delivery"
              sx={{
                "& svg": {
                  width: "0.9em",
                  height: "0.9em",
                },
              }}
              control={<Radio size="small" />}
              label={
                <Typography
                  sx={{
                    color: "#313F4D",
                    fontSize: "13px",
                    fontFamily: "Montserrat-Bold",
                  }}
                >
                  Cash on Delivery
                </Typography>
              }
            />
          </RadioGroup>
        </Box>
      ) : null}

      {match1 ? (
        <>
          <Paper
            sx={{
              // mt: 1,
              // p: 2,
              paddingTop: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              // height: 200,
            }}
          >
            <Typography
              sx={{
                paddingLeft: "20px",
                color: "#303030",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold",
                marginBottom: "3px",
              }}
            >
              Payment Information
            </Typography>
            <Box
              sx={{
                border: "1px solid #54C885",
                borderRadius: "4px",
                width: "200px",
                height: "30px",
                bgcolor: "#F0FFF6",
                marginLeft: "20px",
                marginBottom: "3px",
              }}
            >
              <Typography
                sx={{
                  /* UI Properties */
                  textAlign: "center",
                  marginTop: "2px",
                  fontSize: "13px",

                  fontFamily: "Montserrat-Medium",
                  color: "#54C885",
                }}
              >
                Cash on Delivery
              </Typography>
            </Box>
            <Typography
              sx={{
                paddingLeft: "20px",
                fontSize: "12px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              It indicating that Products must be paid <br />
              for at the time of delivery
            </Typography>
            <Paper
              sx={{
                border: "1px solid #FFF1F0",
                borderRadius: "4px",
                bgcolor: "#FFF1F0",
                height: "40px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  // border: "1px solid #FFF1F0",
                  // borderRadius: "4px",
                  // width: "338px",
                  // height: "40px",

                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  // marginTop: "-0px",
                }}
              >
                <Typography
                  sx={{
                    /* UI Properties */
                    textAlign: "center",
                    // marginTop: "6px",
                    fontSize: "13px",
                    fontFamily: "Montserrat-Medium",
                    // textAlign: "center",
                    color: "#E8534E",
                  }}
                >
                  Past dues: $ 240.50
                </Typography>
                <RadioGroup>
                  <FormControlLabel
                    name="userType"
                    // defaultValue="Pay"
                    defaultValue="Pay :"
                    sx={{
                      "& svg": {
                        width: "0.9em",
                        height: "0.9em",
                      },
                    }}
                    // onChange={handleChange}
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "13px",
                          fontFamily: "Montserrat-Medium",
                          marginRight: "0px",
                        }}
                      >
                        Pay :
                        <Typography
                          component="span"
                          sx={{
                            color: "#303030",
                            fontSize: "12px",
                            padding: "4px",
                            fontFamily: "Montserrat-Medium",
                            // textAlign: "center",
                            width: "56px",
                            border: "1px solid #D1D1D1",
                            bgcolor: "#FFFFFF",
                            height: "16px",
                            marginLeft: "8px",
                          }}
                        >
                          $ {finalPrice}
                        </Typography>
                      </Typography>
                    }
                  />
                </RadioGroup>

                {/* <Typography
                sx={{
                  color: "#303030",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Medium",
                  textAlign: "center",
                }}
              >
                Pay : &nbsp;{" "}
                <Typography
                  component="span"
                  sx={{
                    color: "#303030",
                    fontSize: "12px",
                    padding: "4px",
                    fontFamily: "Montserrat-Medium",
                    textAlign: "center",
                    width: "56px",
                    border: "1px solid #D1D1D1",
                    bgcolor: "#FFFFFF",
                    height: "16px",
                  }}
                >
                  $ 240.50
                </Typography>
              </Typography> */}
                {/* <Typography
            sx={{
              color: "#303030",
              fontSize: "13px",
              fontFamily: "Montserrat-Medium",
            }}
          >
            $ 240.50
          </Typography> */}
              </Box>
            </Paper>
          </Paper>

          <Link
            to="/dashboard/orderreviewpage"
            style={{ textDecoration: "none" }}
          // onClick={() => changeLocationReload("/dashboard/orderreviewpage")}
          >
            <Button
              type="submit"
              //   onClick={handleSubmit}
              variant="text"
              sx={{
                width: "300px",
                height: "44px",
                /* UI Properties */
                border: "2px solid #3A63F3 ",
                textTransform: "none",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold",
                bgcolor: "#3A63F3",
                borderRadius: "4px",
                color: "#FFFFFF",
                mt: 5,
                "&:hover": { bgcolor: "#3A63F3" },
              }}
              // onClick={handleClickOpen}
              // onClick={handleSubmit}
              onClick={() => {
                proceedOrder();
              }}
            >
              Proceed
            </Button>
            {/* <Box sx={{ display: "flex" }}>
              {isLoading ? <CircularProgress /> : null}
            </Box> */}
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              sx={{
                "& .MuiPaper-root": {
                  width: "500px",
                  height: "260px",
                  borderRadius: "12px",
                },
              }}
            >
              <DialogContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 3,
                }}
              >
                <img
                  src={cartIcon}
                  style={{ width: "130px", height: "130px" }}
                  alt=""
                />
                {/* </ImageList> */}
                <Typography
                  sx={{
                    color: "#54C885",
                    fontFamily: "Montserrat-Bold",
                    fontSize: "17px",
                    marginTop: "10px",
                  }}
                >
                  Order Placed
                </Typography>
                <Typography
                  sx={{
                    color: "#313F4D",
                    fontFamily: "Montserrat-Medium",
                    fontSize: "13px",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  You will be receiving a confirmation email with order details
                </Typography>
                <Link
                  to="/dashboard/myorders"
                  style={{ textDecoration: "none" }}
                  onClick={() => changeLocation("/dashboard/myorders")}
                >
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      // bgcolor: "#FFFFFF",
                      fontSize: "13px",
                      fontFamily: "Montserrat-Medium",
                      // border: "1px solid #1F255E",
                      borderRadius: "20px",
                      textAlign: "center",
                      // color: "#1F255E",
                      marginTop: "10px",
                      bgcolor: "#54C885",
                      color: "#FFFFFF",
                      border: "1px solid  #54C885",
                      "&:hover": {
                        bgcolor: "#54C885",
                        color: "#FFFFFF",
                        border: "1px solid  #54C885",
                      },
                    }}
                    size="small"
                  >
                    My Orders
                  </Button>
                </Link>
              </DialogContent>
              {/* <DialogActions sx={{marginBottom:"20px"}}>
              <Button
                variant="contained"
                onClick={handleClose}
                sx={{
                  textTransform: "none",
                  bgcolor: "#FFFFFF",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Medium",
                  border: "1px solid #1F255E",
                  borderRadius: "20px",
                  textAlign: "center",
                  // color: "#1F255E",
                  // marginTop: "10px",
                  "&:hover": {
                    bgcolor: "#54C885",
                    color: "#FFFFFF",
                    border: "1px solid  #54C885",
                  },
                }}
                size="small"
              >
                Close
              </Button>
            </DialogActions> */}
            </Dialog>
          </Link>
        </>
      ) : (
        <Link
          to="/dashboard/orderreviewpage"
          style={{ textDecoration: "none" }}
        // onClick={() => changeLocationReload("/dashboard/orderreviewpage")}
        >
          <Button
            type="submit"
            //   onClick={handleSubmit}
            variant="text"
            sx={{
              width: "300px",
              height: "44px",
              /* UI Properties */
              border: "2px solid #3A63F3 ",
              textTransform: "none",
              fontSize: "14px",
              fontFamily: "Montserrat-Bold",
              bgcolor: "#3A63F3",
              borderRadius: "4px",
              color: "#FFFFFF",
              mt: 5,
              "&:hover": { bgcolor: "#3A63F3" },
            }}
          >
            Proceed
          </Button>
        </Link>
      )}
    </>
  );
}
