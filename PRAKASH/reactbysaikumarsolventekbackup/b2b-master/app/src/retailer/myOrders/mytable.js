import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

export default function Mytable({
  viewOrders,
  handleClick,
  dataTrue,
  orderData,
  returnsTrue,
  handleClickReturn,
}) {
  const columns = [
    {
      label: "S.No",
    },
    {
      label: returnsTrue ? " Support Id" : "Order Id",
    },

    {
      label: " No of items",
    },
    {
      label: "No of Quantity",
    },
    {
      label: "Date",
    },
    {
      label: "Amount",
    },
    {
      label: "Status",
    },
  ];

  const arrayToMap = dataTrue ? viewOrders || [] : orderData || [];
  return (
    <>
      <TableContainer sx={{ border: "1px solid #F3F3FF" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              "& .MuiTableCell-head": {
                bgcolor: "#E6EDFF",

                padding: "5px",
              },
            }}
          >
            <TableRow>
              {columns.map((rs) => {
                return (
                  <>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      {rs.label}
                    </TableCell>
                  </>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-body": {
                padding: "6px",
              },
            }}
          >
            {arrayToMap?.data?.map((rs, i) => {
              const {
                orderUnique,
                createdAt,
                orderStatus,
                finalPrice,
                id,

                supportId,
                returnStatus,
              } = rs;
              return (
                <>
                  <TableRow
                    // key={i.id}
                    sx={{
                      cursor: "pointer",
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                    onClick={
                      returnsTrue
                        ? () => handleClickReturn(id)
                        : () => handleClick(id)
                    }
                  >
                    <TableCell component="th" scope="row">
                      {i + 1}
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
                      {returnsTrue ? supportId : orderUnique}
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
                      {rs.itemQuantity}
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
                      {rs.sumQuantity}
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
                      {createdAt.slice(0, 10)}
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
                      $ {finalPrice}
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        sx={{
                          textTransform: "none",
                          bgcolor: "#F3F3FF",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                          color: "#54C885",
                        }}
                        size="small"
                      >
                        {returnsTrue ? returnStatus : orderStatus}
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
