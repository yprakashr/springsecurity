import React, { useEffect, useRef, useState } from "react";
import {
  Button,
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
import { Link, useNavigate } from "react-router-dom";
import { apiCall } from "../../services/apis";
import { useSelector } from "react-redux";

export default function Return() {
  const [value, setValue] = useState("");

  const [ids, setIds] = useState([]);
  const { token } = useSelector((state) => state.userReducer);
  const [returnOrderDetails, setReturnOrderDetails] = useState({});
  const [selectedFile, setSelectedFile] = useState([]);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    returnOrders();
  }, []);
  const handleCheckbox = (e, id) => {
    if (e.target.checked) {
      setIds((prev) => [...prev, { id: id }]);
    }
    if (!e.target.checked) {
      setIds([]);
    }
  };
  useEffect(() => {
    console.log("idss", ids);
  }, [ids]);

  const handleFileUpload = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img) => {
      if (img.type !== "image/jpeg" && img.type !== "image/png") {
        // setError(
        //   `${img.name} format is unsupported ! only Jpeg, Png, Webp, Gif are allowed.`
        // );
        files = files.filter((file) => img.name !== file.name);
        return;
      } else if (img.size > 1024 * 1024 * 5) {
        //setError(`${img.name} size is too large max 5mb allowed.`);
        files = files.filter((file) => img.name !== file.name);
        return;
      } else {
        setSelectedFile(files);
      }
    });
  };
  const returnProduct = async () => {
    try {
      // localStorage.setItem("formData", formData);
      const data = { selectedFile, ids, value, returnOrderDetails };
      navigate("/dashboard/returnreview", { state: data });
      // await FileUpload("/return-product", formData, token);
    } catch (error) {
      console.log(error);
    }
  };
  const invoiceuniqeData = localStorage.getItem("invoiceUnique");

  const returnOrders = () => {
    apiCall(
      `/getInvoiceDetailsByInvoiceId?invoiceUnique=${invoiceuniqeData}`,
      "GET",
      token
    )
      .then((res) => {
        setReturnOrderDetails(res?.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

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
            to="/dashboard/invoicedetails"
            sx={{ textDecoration: "none", color: "red" }}
          >
            <img src={backArrow} style={{ width: "20px" }} alt="" />
          </Link>
          &nbsp;Return
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <Typography
              sx={{
                color: "#303030",
                fontSize: "14px",
                fontFamily: "Montserrat-Medium",
              }}
            >
              Select the Product(s) you want to Return
            </Typography>
          </Box>

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
                    />
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
                        <TableCell component="th" scope="row" key={{ index }}>
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
                            onChange={(e) => {
                              handleCheckbox(e, rs.id);
                            }}
                          />
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
                            fontSize: "12px",
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
            <Box sx={{ display: "flex", p: 4 }}>
              <Box>
                <form onSubmit={returnProduct}>
                  <FormControl component="fieldset">
                    <FormLabel
                      component="legend"
                      sx={{
                        color: "#303030",
                        fontSize: "14px",
                        fontFamily: "Montserrat-Bold",
                        paddingBottom: "12px",
                      }}
                    >
                      Among the options, please select reason for the return
                    </FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        sx={{
                          "& svg": {
                            width: "0.9em",
                            height: "0.8em",
                          },
                        }}
                        value="Received a wrong product"
                        control={<Radio size="small" />}
                        label={
                          <Typography
                            sx={{
                              color: "#A3A3A3",
                              fontSize: "13px",
                              fontFamily: "Montserrat-Medium",
                            }}
                          >
                            Received a wrong product
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        sx={{
                          "& svg": {
                            width: "0.9em",
                            height: "0.8em",
                          },
                        }}
                        value="Received damage/defective product"
                        control={<Radio size="small" />}
                        label={
                          <Typography
                            sx={{
                              color: "#A3A3A3",
                              fontSize: "13px",
                              fontFamily: "Montserrat-Medium",
                            }}
                          >
                            Received damage/defective product
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        sx={{
                          "& svg": {
                            width: "0.9em",
                            height: "0.8em",
                          },
                        }}
                        value="Received expired product"
                        control={<Radio size="small" />}
                        label={
                          <Typography
                            sx={{
                              color: "#303030",
                              fontSize: "13px",
                              fontFamily: "Montserrat-Medium",
                            }}
                          >
                            Received expired product
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        value="Ordered wrong product by mistake"
                        sx={{
                          "& svg": {
                            width: "0.9em",
                            height: "0.8em",
                          },
                        }}
                        control={<Radio size="small" />}
                        label={
                          <Typography
                            sx={{
                              color: "#A3A3A3",
                              fontSize: "13px",
                              fontFamily: "Montserrat-Medium",
                            }}
                          >
                            Ordered wrong product by mistake
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        sx={{
                          "& svg": {
                            width: "0.9em",
                            height: "0.8em",
                          },
                        }}
                        value="Others"
                        control={<Radio size="small" />}
                        label={
                          <Typography
                            sx={{
                              color: "#A3A3A3",
                              fontSize: "13px",
                              fontFamily: "Montserrat-Medium",
                            }}
                          >
                            Others
                          </Typography>
                        }
                      />
                    </RadioGroup>
                    <TextField rows={10} />
                  </FormControl>
                  <Paper>
                    {/* <Link
                      to="/dashboard/returnreview"
                      style={{ textDecoration: "none" }}
                    > */}
                    <Button
                      variant="contained"
                      // type="submit"
                      sx={{
                        textTransform: "none",
                        bgcolor: "#3A63F3",
                        fontSize: "10px",
                        fontFamily: "Mont-Light",
                        my: 2,
                      }}
                      size="small"
                      onClick={returnProduct}
                    >
                      Submit
                    </Button>
                    {/* </Link> */}
                  </Paper>
                </form>
              </Box>
              <Box sx={{ paddingLeft: "40px", paddingTop: "7px" }}>
                <input
                  accept="image/jpeg,image/png"
                  type="file"
                  multiple
                  onChange={(e) => {
                    handleFileUpload(e);
                  }}
                />
                {/* <TextField
                  Text="Upload Images"
                  // onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  sx={{
                    border: "none",
                    "&.hover": {
                      bgcolor: "none",
                    },
                    "&.MuiTextField-root": {
                      width: "320px",
                    },
                    "& .MuiOutlinedInput-input": {
                      fontSize: "12px",
                      fontFamily: "Montserrat-Medium",
                    },
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                  }}
                  //   ref="upload"
                  disableElevation
                  disableRipple
                  onChange={(e)=>{handleFileUpload(e)}}
                  InputProps={{
                    sx: {
                      bgcolor: "#FFFFFF",
                      border: "2px dashed #A5A5A5",
                      borderRadius: "4px",
                      opacity: 1,
                      fonSize: "2px",
                      fontFamily: "Mont-Light",
                      //   paddingRight:"20px",
                      //   paddingLeft:"20px",
                      paddingTop: "30px",
                      paddingBottom: "20px",
                    },
                    endAdornment: (
                      <Typography
                        sx={{
                          position: "relative",
                          bottom: "30px",
                          right: "180px",
                          color: "#303030",
                          fontSize: "13px",
                          width: "180px",
                          fontFamily: "Montserrat-Bold",
                        }}
                      >
                        Upload Images
                      </Typography>
                    ),
                  }}
                /> */}
              </Box>
            </Box>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}
