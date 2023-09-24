import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import invoiceDownloadIcon from "../../assets/images/invoicedownload.svg";
import useCustomInvoices from "./util";

export default function Invoices() {
  const { invoices, invoicePdf, invoicePage } = useCustomInvoices();
  return (
    <>
      {!invoices.length ? (
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
          <Typography sx={{ fontSize: "24px", fontFamily: "Montserrat-Bold" }}>
            Invoices
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead
                sx={{
                  "& .MuiTableCell-head": {
                    bgcolor: "#303779",

                    // width: "3px",
                    // lineHeight: "5px",
                    padding: "4px",
                    // overflowX: "auto"
                  },
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Mont-Light",
                    }}
                  >
                    S.No
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
                    Invoice No
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
                    Order Id
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
                    Order Status
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
                    Price
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
                    Download
                  </TableCell>
                  <TableCell align="left"></TableCell>

                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  "& .MuiTableCell-body": {
                    padding: "6px",
                  },
                }}
              >
                {invoices.map((item, index) => (
                  <TableRow
                    onClick={() => {
                      invoicePage(item.invoiceUnique);
                    }}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      cursor: "pointer",
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
                        color: "#313F4D",
                        fontFamily: "Mont-Light",
                      }}
                    >
                      {item.invoiceUnique}
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
                      {item.order.orderUnique}
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
                      {item.orderStatus}
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
                      {item.finalPrice}
                    </TableCell>
                    <TableCell align="left">
                      <Button sx={{ minWidth: "0px" }}>
                        <img
                          src={invoiceDownloadIcon}
                          onClick={(e) => {
                            invoicePdf(item.id, e);
                          }}
                          alt=""
                        />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
}
