import React from "react";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import {
  Dialog,
  DialogActions,
  dialogActionsClasses,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import useCustomCartItems from "./util";
import del from "../../assets/images/delete.svg";
import view from "../../assets/images/iinformation.svg";

import { useNavigate } from "react-router-dom";
export default function CartItems() {
  const {
    cart_items,
    totalQuantity,
    finalPrice,
    user1,
    retailer,
    removeCartItem,
    qtyUpdate,
    getCart,
    handleClickOpen,
    handleClose,
    imfoTableData,
    back,
    showLoader,
    open,
    clearCart,
  } = useCustomCartItems();
  const navigate = useNavigate();

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* <Grid item xs={12} md={8} lg={8}> */}
      {cart_items && cart_items.length ? (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontFamily: "Montserrat-Bold",
              letterSpacing: "0.16px",
              color: "#303030",
              opacity: 1,
            }}
          >
            Item(s) in cart ({totalQuantity}){/* {row.count} */}
          </Typography>
          <Button
            onClick={clearCart}
            // variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#FFFFFF",
              width: "100px",
              height: "25px",
              /* UI Properties */

              borderRadius: "4px",
              border: "1px solid #3A63F3",

              opacity: 1,
              color: "#3A63F3",
              fontSize: "12px",
              fontFamily: "Montserrat-Medium",
            }}
            size="small"
            // disabled={!addToCartBtn}
          >
            Clear Cart
          </Button>
          <Button
            onClick={() => navigate("/dashboard/searchpage")}
            // variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#FFFFFF",
              width: "100px",
              height: "25px",
              /* UI Properties */

              borderRadius: "4px",
              border: "1px solid #3A63F3",

              opacity: 1,
              color: "#3A63F3",
              fontSize: "12px",
              fontFamily: "Montserrat-Medium",
            }}
            size="small"
            // disabled={!addToCartBtn}
          >
            {`+`} Add Items
            {/* <MenuItem style={{ textdecoration: "none" }}> */}
            {/* <Button>Add to Cart</Button> */}
            {/* </MenuItem> */}
          </Button>
        </Box>
      ) : (
        <Container>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            sx={{ marginTop: "120px", marginLeft: "70px" }}
          >
            <h1>Your Cart is Empty!</h1>

            <Button
              type="submit"
              onClick={back}
              variant="text"
              sx={{
                width: "142px",
                height: "30px",
                /* UI Properties */
                bgcolor: "#303779",
                borderRadius: "8px",
                border: "2px solid #F3F3FF ",
                opacity: 1,
                textTransform: "none",
                color: "#FFFFFF",
                fontFamily: "Mont-Light",
                "&:hover": {
                  background: "#3A63F3",
                },

                fontSize: "12px",
              }}
            >
              Buy now
            </Button>
          </Box>
        </Container>
      )}
      {cart_items?.map((item) => {
        return (
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 120,
              marginTop: "10px",
            }}
            key={item.id}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  letterSpacing: "0.28px",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Bold",
                  opacity: 1,
                  color: "#303030",
                }}
              >
                {item.wholesalerInventory.Drug_Name}
                {/* <Typography component="span" sx={{ mx: 2 }}>
                  <img src={scanner} />
                </Typography> */}
              </Typography>
              <Typography
                sx={{
                  letterSpacing: "0.28px",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Bold",
                  opacity: 1,
                  color: "#303030",
                }}
              >
                $ {item.discounted_item_total}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "6px",
              }}
            >
              <Typography
                sx={{
                  letterSpacing: "0px",
                  fontSize: "12px",
                  fontFamily: "Mont-Light",
                  color: "#A3A3A3",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    letterSpacing: "0px",
                    fontSize: "12px",
                    fontFamily: "Mont-Light",
                    color: "#A3A3A3",
                  }}
                >
                  NDC - {item.wholesalerInventory.NDC_UPC_HRI},&nbsp;&nbsp;
                </Typography>{" "}
                Packing: {item.quantity} Units/pack
              </Typography>
              <Typography
                sx={{
                  color: "#39C85A",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                  opacity: 1,
                }}
              >
                {item.wholesalerInventory.discount_percentage}% off
                <Typography
                  component="span"
                  sx={{
                    letterSpacing: "0px",
                    fontSize: "12px",
                    fontFamily: "Mont-Light",
                    color: "#A3A3A3",
                    paddingLeft: "8px",
                  }}
                >
                  MRP: <del>$ {item.item_total}</del>${" "}
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "16px",
              }}
            >
              <Typography
                sx={{
                  letterSpacing: "0px",
                  fontSize: "12px",
                  fontFamily: "Mont-Light",
                  color: "#A3A3A3",
                }}
              >
                Quantity: &nbsp;
                {/* <Stack spacing={1} direction="row" > */}
                <Button
                  onClick={() => qtyUpdate(item, "dec")}
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
                  {item.quantity}
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
                  onClick={() => qtyUpdate(item, "inc")}
                >
                  +
                </Button>
                <Typography component="span">
                  <IconButton
                    aria-label="delete"
                    sx={{ marginTop: "10px" }}
                    onClick={() => handleClickOpen(item)}
                  >
                    <img
                      src={view}
                      alt=""
                      // style={{ marginRight: "50px", marginTop: "10px" }}
                    />
                    {/* <DeleteIcon /> */}
                  </IconButton>

                  <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    sx={{ p: 5 }}
                  >
                    <DialogTitle
                      sx={{
                        color: "#303030",
                        fontSize: "18px",
                        fontFamily: "Montserrat-Bold",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "30px",
                      }}
                    >
                      Item information
                    </DialogTitle>
                    {/* <DialogContent sx={{}}> */}
                    {/* <DialogContentText id="alert-dialog-slide-description"> */}
                    {/* <Paper
                        sx={{
                          // mt: 1,
                          // p: 7,
                          padding: "300px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          height: 240,
                          "&.MuiPaper-root": {
                            boxShadow: "none",
                            padding: "3px",
                            height: "auto",
                          },
                        }}
                      > */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pl: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "12px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        Drug Name
                      </Typography>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                          pr: 2,
                        }}
                      >
                        {imfoTableData?.wholesalerInventory?.Drug_Name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pt: 1,
                        pl: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "12px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        NDC :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                          pr: 2,
                        }}
                      >
                        {imfoTableData?.wholesalerInventory?.NDC_UPC_HRI}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pl: 2,
                        pr: 2,
                        pt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "12px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        Packing Details :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        {imfoTableData?.quantity}&nbsp;Units/pack
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pl: 2,
                        pr: 2,
                        pt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "12px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        Manufacturer :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        {imfoTableData?.wholesalerInventory?.manufacturer}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pl: 2,
                        pr: 2,
                        pt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "12px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        Strength :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        ${" "}
                        {
                          imfoTableData?.wholesalerInventory
                            ?.Strength_Unit_of_Measure
                        }
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pl: 2,
                        pr: 2,
                        pt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "12px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        GPI :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        ${" "}
                        {
                          imfoTableData?.wholesalerInventory
                            ?.Generic_Product_Identifier
                        }
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pl: 2,
                        pr: 2,
                        pt: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "12px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        Price :
                      </Typography>
                      <Typography
                        sx={{
                          color: "#303030",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                        }}
                      >
                        $ {imfoTableData?.wholesalerInventory?.unit__cost}
                      </Typography>
                    </Box>
                    {/* </Paper> */}
                    {/* </DialogContentText> */}
                    {/* </DialogContent> */}
                    <DialogActions>
                      <Button
                        onClick={handleClose}
                        sx={{ color: "black", textTransform: "none" }}
                      >
                        ok
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Typography>
                {/* </Stack> */}
                {/* <ButtonGroup
                      size="small"
                      aria-label="small outlined button group"
                    >
                      <Button style={{ bgcolor: "#303779" }} onClick={IncNum}>
                        +
                      </Button>
                      <Button onClick>{count}</Button>
                      <Button onClick={DecNum}>-</Button>
                    </ButtonGroup> */}
              </Typography>
              {/* <Button
                type="submit"
                variant="text"
                sx={{
                  width: "142px",
                  height: "30px",

                  bgcolor: "#F3F3FF",
                  borderRadius: "4px",
                  border: "2px solid #F3F3FF ",
                  opacity: 1,
                  textTransform: "none",
                  color: " #A5A5A5",
                  fontFamily: "Mont-Light",

                  fontSize: "12px",
                }}
              >
                Add to Back Order
              </Button> */}
              <Button
                type="submit"
                //   onClick={handleSubmit}
                variant="text"
                sx={{
                  width: "70px",
                  height: "30px",
                  /* UI Properties */
                  bgcolor: "#FFFFFF",
                  border: "none",
                  color: " #A5A5A5",
                  fontFamily: "Mont-Light",

                  fontSize: "12px",

                  borderRadius: "4px",
                  opacity: 1,
                  textTransform: "none",
                }}
                onClick={() => {
                  removeCartItem(item);
                }}
              >
                <img src={del} alt="" />
                <Typography
                  sx={{
                    width: "70px",
                    // height: "30px",
                    /* UI Properties */
                    bgcolor: "#FFFFFF",
                    border: "none",
                    color: " #A5A5A5",
                    fontFamily: "Mont-Light",

                    fontSize: "13px",

                    borderRadius: "4px",
                    opacity: 1,
                    textTransform: "none",
                    paddingLeft: "5px",
                  }}
                >
                  Remove
                </Typography>
              </Button>
            </Box>
          </Paper>
        );
      })}
    </>
  );
}
