import {
  Grid,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import CartItems from "../cartItems/index";
import { Container } from "@mui/system";
import React from "react";

import PaymentDetails from "../paymentDetails/index";
import { useSelector } from "react-redux";

export default function Cartpage() {
  const { cart_items } = useSelector((state) => state.cartReducer);

  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 6, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8} sx={{ mt: 3 }}>
            <CartItems />
          </Grid>
          {cart_items && cart_items.length ? (
            <Grid item xs={12} md={4} lg={4}>
              {/* <TextField
                id="margin-none"
                sx={{ mt: -4, mb: 2 }}
                defaultValue="PHARMA20"
                // color="red"
                InputProps={{
                  sx: {
                    width: "300px",
                    height: "40px",

                    color: "#FFFFFF",
                    border: "1px solid #54C885 ",
                    borderRadius: "4px",
                    opacity: 1,
                    "&:hover": { bgcolor: "none" },
                    "& .MuiInputBase-input": {
                      color: "#54C885",
                    },
                  },
                  endAdornment: (
                    <InputAdornment>
                      <Box component="span" disableElevation>

                      </Box>
                      <IconButton
                        disableElevation
                        disableRipple
                        sx={{
                          bgcolor: "#303779",
                          borderRadius: "0px 3px 3px 0px",
                          width: "449x",
                          height: "auto",
                          margin: "-14px",

                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "none",
                          },
                          "&:hover": { bgcolor: "none" },
                        }}
                      >
                        <Button
                          type="submit"
                          variant="text"
                          sx={{
                            width: "80px",
                            height: "23px",

                            textTransform: "none",
                            fontSize: "14px",
                            fontFamily: "Montserrat-Bold",
                            bgcolor: "#303779",
                            borderRadius: "0px 4px 4px 0px",
                            color: "#FFFFFF",

                            "&:hover": { bgcolor: "none" },
                          }}
                        >
                          Applied
                        </Button>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /> */}
              <PaymentDetails />
            </Grid>
          ) : null}
        </Grid>
      </Container>
      {/* </>
      )} */}
    </>
  );
}
