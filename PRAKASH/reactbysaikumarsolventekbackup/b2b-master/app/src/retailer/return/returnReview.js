import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
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
import backArrow from "../../assets/images/backArrow.svg";
// import ReverseLogistics from "../assets/images/Reverse_Logistics.svg";
import ReverseLogistics from "../../assets/images/Reverse_Logistics.svg";
import { Link, useLocation } from "react-router-dom";
import returnicon from "../../assets/images/returnSymbol.svg";
import AddressDetails from "./addressDetails";
import { FileUpload } from "../../services/apis";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as moment from "moment";

export default function ReturnReview(props) {
  const { token } = useSelector((state) => state.userReducer);

  const { state } = useLocation();
  console.log("state", state);
  const { selectedFile, ids, value, imageUrls, returnOrderDetails } = state;
  console.log(
    "selectedFile, ids, value, imageUrls ",
    selectedFile,
    ids,
    value,
    imageUrls,
    returnOrderDetails
  );
  const [open, setOpen] = useState(false);
  const [returnProducts, setReturnProducts] = useState({});
  useEffect(() => { }, [returnProducts, open]);
  const handleClose = () => {
    setOpen(false);
  };
  const confirmReturn = async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      const orderAlert = confirm("Do you really want to return this order?");
      // if (orderAlert) {
      //   handleClickOpen();
      const formData = new FormData();
      selectedFile.forEach((image) => {
        formData.append("file", image);
      });
      formData.append("invoiceId", JSON.stringify(ids));
      formData.append("reason", value);
      const res = await FileUpload("/return-product", formData, token);
      if (res.status === 200) {
        setReturnProducts(res.data);
        setOpen(true);
      } else if (res.statusCode === 400) {
        toast.error(res?.message);
        setOpen(false);
      } else {
        window.navigator("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const y = returnProducts?.timeStamp;

  const returnCreationDate = moment(y).format("MMMM DD YYYY");
  // const { state } = props.location;
  // console.log("kkkkkkkkkk", state);

  return (
    <>
      <Container>
        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Montserrat-Bold",
            letterSpacing: "0.16px",
            color: "#303030",
            opacity: 1,

            // lineHeight:"40px"
          }}
        >
          <Link
            to="/dashboard/return"
            sx={{ textDecoration: "none", color: "red" }}
          >
            <img src={backArrow} style={{ width: "20px" }} />
          </Link>
          &nbsp;Return Review
        </Typography>
        <Paper
          sx={{
            bgcolor: "#FFFFFF",
            marginTop: "10px",
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <TableContainer
            component={Paper}
            sx={{ paddingTop: "0px", borderBottom: "none" }}
          >
            <Table
              sx={{
                minWidth: 650,
                "&.MuiTable-root": {
                  borderBottom: "none",
                },
              }}
              aria-label="simple table"
            >
              <TableHead
                sx={{
                  "& .MuiTableCell-head": {
                    bgcolor: "#E6EDFF",

                    // width: "3px",
                    // lineHeight: "5px",
                    padding: "5px",
                    // overflowX: "auto"
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                    }}
                  >
                    S.No
                  </TableCell>

                  <TableCell
                    align="left"
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                    }}
                  >
                    Description
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Manufacture
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Vendor
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Discount (%)
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Cost
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Total Amount
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
                {returnOrderDetails?.invoiced_items?.map((rs, index) => {
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
                          {rs?.wholesalerInventory?.Drug_Name}
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
                          {rs?.wholesalerInventory?.manufacturer}
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
                          {rs?.wholesalerInventory?.manufacturer}
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
                          {rs?.wholesalerInventory?.discount_percentage} %
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
                          $ {rs?.wholesalerInventory?.unit__cost}
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
                          {rs?.quantity}
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
                          $ {rs?.amount}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}

                <TableRow>
                  <TableCell
                    align="right"
                    colSpan={6}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "38px",
                      }}
                    >
                      Order Value
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={2}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      $ {returnOrderDetails?.totalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    align="right"
                    colSpan={6}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "56px",
                      }}
                    >
                      Discount
                    </Typography>
                  </TableCell>
                  <TableCell
                    align="center"
                    colSpan={2}
                    sx={{
                      "&.MuiTableCell-root": {
                        borderBottom: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      - $ {returnOrderDetails?.discountPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={6}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "4px",
                      }}
                    >
                      Delivery Charges
                    </Typography>
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      FREE
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right" colSpan={6}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Bold",
                        marginRight: "82px",
                      }}
                    >
                      Total
                    </Typography>
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    <Typography
                      sx={{
                        color: "#303030",
                        fontSize: "13px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      $ {returnOrderDetails?.finalPrice}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ p: 3 }}>
                <Paper
                  sx={{
                    bgcolor: "#F9F9F9",
                    width: "350px",
                    paddingBottom: "40px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: "14px",
                      fontFamily: "Montserrat-Bold",
                      borderBottom: "2px solid #ECECEC",
                      paddingTop: "15px",
                      paddingLeft: "16px",
                    }}
                  >
                    Selected reason for the return
                  </Typography>
                  <Typography
                    sx={{
                      color: "#69747F",
                      fontSize: "13px",
                      fontFamily: "Montserrat-Medium",

                      paddingTop: "10px",
                      paddingLeft: "16px",
                      paddingBottom: "20px",
                    }}
                  >
                    {value}
                  </Typography>
                </Paper>
              </Box>
              <Box sx={{ p: 3 }}>
                <Paper
                  sx={{
                    bgcolor: "#F9F9F9",
                    width: "350px",
                    paddingBottom: "40px",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#303030",
                      fontSize: "14px",
                      fontFamily: "Montserrat-Bold",
                      borderBottom: "2px solid #ECECEC",
                      paddingTop: "10px",
                      paddingLeft: "16px",
                    }}
                  >
                    Uploaded Images
                  </Typography>
                  {selectedFile?.map((image) => (
                    <img
                      src={image ? URL.createObjectURL(image) : ""}
                      style={{
                        width: "33px",
                        // backgroundColor: "#303030",
                        // color: "#303030",
                        marginLeft: "20px",
                        paddingTop: "10px",
                      }}
                      alt="Preview"
                    />
                  ))}
                </Paper>
              </Box>
            </Box>
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
                >
                  {returnOrderDetails?.retailer?.fullName}
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
                Address: &nbsp; &nbsp;
                <Typography
                  component="span"
                  sx={{
                    color: "#303030",
                    fontSize: "11px",
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  {returnOrderDetails?.order?.orderAddress?.storeName},&nbsp;
                  {returnOrderDetails?.order?.orderAddress?.address},&nbsp;
                  {returnOrderDetails?.order?.orderAddress?.city},&nbsp;
                  {returnOrderDetails?.order?.orderAddress?.zipcode},&nbsp;
                  {returnOrderDetails?.order?.orderAddress?.state},&nbsp;
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
                  {returnOrderDetails?.retailer?.user?.mobileNo}
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
                  {returnOrderDetails?.retailer?.user?.email}
                </Typography>
              </Typography>
            </Paper>
            {/* <Paper
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
                >
                  saikumar
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
                Address: &nbsp; &nbsp;
                <Typography
                  component="span"
                  sx={{
                    color: "#303030",
                    fontSize: "11px",
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  hyd
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
            </Paper> */}
            <Box sx={{ m: 3 }}>
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  width: "100px",
                  height: "30px",

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
                onClick={() => {
                  confirmReturn();
                }}
              >
                Confirm
              </Button>
              <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                  "& .MuiPaper-root": {
                    width: "500px",
                    height: "320px",
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
                    src={returnicon}
                    style={{ width: "130px", height: "130px" }}
                    alt=""
                  />
                  {/* </ImageList> */}
                  <Typography
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Bold",
                      fontSize: "15px",
                      marginTop: "10px",
                      width: "440px",
                    }}
                  >
                    Your return request has been processed successfully
                  </Typography>
                  <Typography
                    sx={{
                      color: "#303030",
                      fontFamily: "Montserrat-Medium",
                      fontSize: "13px",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  >
                    Support ID:&nbsp;&nbsp;
                    <Typography
                      component="span"
                      sx={{
                        color: "#A3A3A3",
                        fontFamily: "Mont-Light",
                        fontSize: "13px",
                      }}
                    >
                      {returnProducts?.supportId}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#313F4D",
                      fontFamily: "Montserrat-Medium",
                      fontSize: "14px",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  >
                    Date & Time:&nbsp;&nbsp;
                    <Typography
                      component="span"
                      sx={{
                        color: "#A3A3A3",
                        fontFamily: "Mont-Light",
                        fontSize: "14px",
                      }}
                    >
                      {returnCreationDate} |&nbsp;
                      {returnProducts?.timeStamp?.slice(11, 16)}
                      &nbsp;AM
                    </Typography>
                  </Typography>
                  <Link
                    to="/dashboard/myorders"
                    style={{ textDecoration: "none" }}
                  // onClick={() => changeLocation("/dashboard/myorders")}
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
                        bgcolor: "#FFFFFF",
                        color: "#303779",
                        border: "1px solid #303779",
                        "&:hover": {
                          bgcolor: "#303779",
                          color: "#FFFFFF",
                          border: "1px solid  #303779",
                        },
                      }}
                      size="small"
                    >
                      My Orders
                    </Button>
                  </Link>
                </DialogContent>
              </Dialog>
              <Link
                to="/dashboard/return"
                style={{ textDecoration: "none" }}
              // onClick={() => changeLocation("/dashboard/myorders")}
              >
                <Button
                  sx={{
                    textTransform: "none",
                    bgcolor: "#FFFFFF",
                    width: "100px",
                    height: "30px",
                    border: "1px solid #E8534E",
                    marginLeft: "18px",
                    borderRadius: "4px",
                    opacity: 1,
                    color: "#E8534E",
                    fontSize: "13px",
                    fontFamily: "Mont-Light",
                    "&:hover": {
                      background: "#FFFFFF",
                    },
                  }}
                  size="small"
                >
                  Cancel
                </Button>
              </Link>
            </Box>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}
