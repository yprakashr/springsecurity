// import { Typography } from "@mui/material";
// import React from "react";

// export default function UnderDeveloping() {
//   return (
//     <>
//       {/* <Typography
//         sx={{
//           marginLeft: "360px",
//           fontSize: "30px",
//           fontFamily: "Montserrat-Bold",
//           color: "#303779",
//           marginTop: "220px",
//         }}
//       >
//         Under Developing
//       </Typography> */}
//     </>
//   );
// }
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import downarroe from "../assets/images/downarrow.svg";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";

import call_Icon from "../assets/images/wholesalerImages/Icon_call.svg";
import mail_Icon from "../assets/images/wholesalerImages/Icon_mail.svg";

export default function Support() {
  return (
    <div>
      {/* <Typography
        sx={{
          marginLeft: "360px",
          fontSize: "30px",
          fontFamily: "Montserrat-Bold",
          color: "#303779",
          marginTop: "220px",
        }}
      >
        Under Developing
      </Typography> */}
      <Typography
        sx={{
          color: "#303030",
          fontFamily: "Montserrat-Bold",
          letterSpacing: "0.13px",

          fontSize: "18px",
          pb: 2,
        }}
      >
        Support
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ bgcolor: "#FFFFFF", boxShadow: "0px 1px 4px #00000029", p: 4 }}
        >
          <Typography
            sx={{
              bgcolor: "#3A63F3",
              width: "38px",
              height: "38px",
              borderRadius: "5px",
              p: 1,
              mb: 1,
            }}
          >
            <img src={call_Icon} alt="" />
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#313F4D",
              fontFamily: "Montserrat-Medium",
              letterSpacing: "0.13px",
              // textAlign: "center",
            }}
          >
            Customer Care: +1 484 551 2345
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#313F4D",
              fontFamily: "Montserrat-Medium",
              letterSpacing: "0.13px",
              // textAlign: "center",
            }}
          >
            Toll Free:+1 484 553 1234{" "}
          </Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            boxShadow: "0px 1px 4px #00000029",
            p: 4,
            marginLeft: "20px",
          }}
        >
          <Typography
            sx={{
              bgcolor: "#3A63F3",
              width: "38px",
              height: "38px",
              borderRadius: "5px",
              p: 1,
              mb: 1,
            }}
          >
            <img src={mail_Icon} alt="" />
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#313F4D",
              fontFamily: "Montserrat-Medium",
              letterSpacing: "0.13px",
              // textAlign: "center",
            }}
          >
            Customer Care: +1 484 551 2345
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#313F4D",
              fontFamily: "Montserrat-Medium",
              letterSpacing: "0.13px",
              // textAlign: "center",
            }}
          >
            Toll Free:+1 484 553 1234{" "}
          </Typography>
        </Box>
      </Box>

      <Paper
        sx={{
          bgcolor: "#FFFFFF",
          mt: 4,
          "& .MuiPaper-root": {
            boxShadow: "none",
          },
        }}
      >
        <Typography
          sx={{
            color: "#303030",
            fontFamily: "Montserrat-Bold",
            letterSpacing: "0.13px",

            fontSize: "18px",
            paddingTop: "20px",
            paddingLeft: "20px",
          }}
        >
          FAQ's
        </Typography>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
                How to check status of my orders?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
                How to re-order medicines?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        {/* <Box sx={{ display: "flex", bgcolor: "#FFFFFF" }}>
          <Box sx={{ p: 2 }}>
            <Accordion
              sx={{
                "&.Mui-expanded": {
                  margin: "-15px 0",
                  marginTop: "1px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
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
                "&.Mui-expanded": {
                  // margin: "-15px 0",
                  marginTop: "1px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                "&.Mui-expanded": {
                  marginTop: "1px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
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
          <Box sx={{ p: 2 }}>
            <Accordion
              sx={{
                "&.Mui-expanded": {
                  margin: "-15px 0",
                  marginTop: "1px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
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
            <Accordion
              sx={{
                "&.Mui-expanded": {
                  // margin: "-15px 0",
                  marginTop: "1px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                  How to check status of my orders?
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
                "&.Mui-expanded": {
                  marginTop: "1px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<img src={downarroe} alt="" />}
                aria-controls="panel2a-content"
                id="panel2a-header"
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
                  What are the shipping charges?
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
        </Box> */}
      </Paper>
    </div>
  );
}
