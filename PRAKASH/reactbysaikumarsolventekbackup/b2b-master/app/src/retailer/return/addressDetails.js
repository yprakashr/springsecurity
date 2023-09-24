import { Box, Paper, Typography } from "@mui/material";
import React from "react";

export default function AddressDetails() {
  return (
    <>
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
          ></Typography>
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
            9877565787
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
            sai@gmail.com
          </Typography>
        </Typography>
      </Paper>
    </>
  );
}
