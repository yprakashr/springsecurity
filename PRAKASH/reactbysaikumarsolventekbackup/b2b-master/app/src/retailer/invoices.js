import React, { useEffect, useState } from "react";
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
import invoiceDownloadIcon from "../assets/images/invoicedownload.svg";
import { apiCall } from "../services/apis";
import { useSelector } from "react-redux";
import { API_URL } from "../constant";
// import { API_URL } from "../constant";

export default function Invoices() {
  const { token } = useSelector((state) => state.userReducer);
  const [invoices, setInvoices] = useState([]);
  const fetchInvoices = async () => {
    const response = await apiCall("/invoices", "GET", token);
    setInvoices(response.data);
  };
  const invoicePdf = async (invoice_id) => {
    console.log("clicked download");
    fetch(`${API_URL}/download-invoice?invoice_id=${invoice_id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((response) => {
        return response.arrayBuffer();
      })
      .then((response) => {
        const file = new Blob([response], { type: "application/pdf" });

        const fileURL = URL.createObjectURL(file);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "download" + ".pdf";
        link.click();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
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
                // key={rs.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                  {item?.order?.orderUnique}
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
                      onClick={() => {
                        invoicePdf(item.id);
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
  );
}
