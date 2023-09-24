import {
  Box,
  Button,
  Container,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import call_Icon from "../../assets/images/wholesalerImages/Icon_call.svg";
import mail_Icon from "../../assets/images/wholesalerImages/Icon_mail.svg";
import { apiCall } from "../../services/apis";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function ContactUs() {
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
  const { token, user } = useSelector((state) => state.userReducer);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });
  const handleContact = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };
  const contactus = () => {
    apiCall(
      `/post-contact-us`,
      "POST",
      token,
      {
        name: contactDetails?.name,
        phoneNumber: contactDetails?.phoneNumber,
        email: contactDetails?.email,
        message: contactDetails?.message,
      }
    )
      .then((res) => {
        if (res.status == 200) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => console.log(err));
  };
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
          Contact Us
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
          <Box sx={{ pl: 10 }}>
            <Typography
              sx={{
                //   height: "29px",

                fontSize: " 20px",
                lineHeight: "30px",
                fontFamily: "Montserrat-Bold",
                letterSpacing: "0.24px",
                color: " #303030",
              }}
            >
              Message Us
            </Typography>
            <Typography
              sx={{
                color: "#313F4D",
                fontSize: "12px",
                lineHeight: "30px",
                fontFamily: "Montserrat-Medium",
                letterSpacing: "0.24px",
                mb: 1,
              }}
            >
              Our support team will get back to you
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box
              sx={{
                display: "flex",

                // mt: 2,
                flexDirection: "column",
                // "& > :not(style)": {
                //   m: 1,
                //   width: "45ch",
                //   //   border: "1px solid #DCDCDC",
                //   //   borderRadius: "2px",
                // },
              }}
            >
              <FormControl sx={{ mb: 2 }}>
                <TextField
                  name="name"
                  inputProps={{ style: inputStyle }}
                  value={contactDetails?.name}
                  onChange={handleContact}
                  type="text"
                  label="Name"
                  InputProps={{
                    sx: {
                      height: "42px",
                      width: "400px",
                      bgcolor: "!important #F3F7FF",
                      borderRadius: "4px",
                      border: "1px solid #F3F7FF",
                      color: " #303030",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Bold",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#BBBBBB",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Medium",
                    },
                  }}
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <TextField
                  name="phoneNumber"
                  inputProps={{ style: inputStyle }}
                  type="text"
                  label="Phone Number"
                  value={contactDetails?.phoneNumber}
                  onChange={handleContact}
                  InputProps={{
                    sx: {
                      height: "42px",
                      width: "400px",
                      bgcolor: "!important #F3F7FF",
                      borderRadius: "4px",
                      border: "1px solid #F3F7FF",
                      color: " #303030",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Bold",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#BBBBBB",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Medium",
                    },
                  }}
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <TextField
                  name="email"
                  inputProps={{ style: inputStyle }}
                  value={contactDetails?.email}
                  onChange={handleContact}
                  type="text"
                  label="Email"
                  InputProps={{
                    sx: {
                      height: "42px",
                      width: "400px",
                      bgcolor: "!important #F3F7FF",
                      borderRadius: "4px",
                      border: "1px solid #F3F7FF",
                      color: " #303030",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Bold",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#BBBBBB",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Medium",
                    },
                  }}
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <TextField
                  name="message"
                  inputProps={{ style: inputStyle }}
                  value={contactDetails?.message}
                  onChange={handleContact}
                  type="text"
                  label="Message"
                  InputProps={{
                    sx: {
                      height: "42px",
                      width: "400px",
                      bgcolor: "!important #F3F7FF",
                      borderRadius: "4px",
                      border: "1px solid #F3F7FF",
                      color: " #303030",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Bold",
                      p: 6,
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#BBBBBB",
                      fontSize: "13px",
                      letterSpacing: "0.3",
                      fontFamily: "Montserrat-Medium",
                    },
                  }}
                />
              </FormControl>
              {/* <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  sx: {
                    color: "#BBBBBB",
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  sx: {
                    color: "#BBBBBB",
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  sx: {
                    color: "#BBBBBB",
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                size="small"
                InputLabelProps={{
                  sx: {
                    color: "#BBBBBB",
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
              /> */}
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  width: "130px",
                  height: "40px",

                  background: "#3A63F3 0% 0% no-repeat padding-box",
                  borderRadius: "4px",
                  opacity: 1,
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontFamily: "Mont-Light",
                  "&:hover": {
                    background: "#3A63F3",
                  },
                }}
                size="small"
                onClick={contactus}
              >
                Send Message
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                // justifyContent: "space-around",
                mt: -5,
                // mb: 6,
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#F0F4FF",
                  width: "240px",
                  height: "120px",
                  p: 2,
                  mb: 2,
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
                  <img src={call_Icon} alt="" />
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#313F4D",
                    fontFamily: "Montserrat-Bold",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  Call
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
                  bgcolor: "#F0F4FF",
                  width: "240px",
                  height: "120px",
                  p: 2,
                  mb: 2,
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
                    fontFamily: "Montserrat-Bold",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  Sales
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
                  sales@uspharmacy.com
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#F0F4FF",
                  width: "240px",
                  height: "120px",
                  p: 2,
                  mb: 2,
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
                    fontFamily: "Montserrat-Bold",
                    letterSpacing: "0.13px",
                    // textAlign: "center",
                  }}
                >
                  Contact
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
                  support@uspharmacy.com
                </Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
