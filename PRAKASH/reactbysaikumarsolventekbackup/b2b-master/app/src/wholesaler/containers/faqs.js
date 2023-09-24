import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import downarroe from "../../assets/images/downarrow.svg";

export default function Faqs() {
  return (
    <>
      <Container>
        <Typography
          sx={{
            height: "29px",

            fontSize: " 24px",
            lineHeight: "30px",
            fontFamily: "Montserrat-Bold",
            letterSpacing: "0.24px",
            color: " #303030",
          }}
        >
          FAQ's
        </Typography>
        <Paper
          sx={{
            width: "1000px",
            height: "auto",
            marginTop: "18px",
            p: 2,
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Box sx={{ p: 2 }}>
            <Accordion
              sx={{
                marginTop: "15px",
                "&.Mui-expanded": {
                  marginTop: "15px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  bgcolor: "#F6F6F6",
                  borderRadius: "4px",
                  borderBottom: "none",
                  //   width: "94px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#313F4D",
                    fontFamily: "Montserrat-Medium",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  How to order medicines?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#313F4D",
                    fontFamily: "Mont-Light",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                marginTop: "15px",
                "&.Mui-expanded": {
                  marginTop: "15px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                  bgcolor: "#F6F6F6",
                  borderRadius: "4px",
                  borderBottom: "none",
                  //   width: "94px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#313F4D",
                    fontFamily: "Montserrat-Medium",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  What are subscriptions?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#313F4D",
                    fontFamily: "Mont-Light",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                marginTop: "15px",
                "&.Mui-expanded": {
                  marginTop: "15px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                sx={{
                  bgcolor: "#F6F6F6",
                  borderRadius: "4px",
                  borderBottom: "none",
                  //   width: "94px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#313F4D",
                    fontFamily: "Montserrat-Medium",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  Where do I get coupons?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontSize: "13px",
                    color: "#313F4D",
                    fontFamily: "Mont-Light",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
