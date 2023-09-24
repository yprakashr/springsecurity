import React from "react";
import {
  Button,
  Checkbox,
  Grid,
  Pagination,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useCustomTable from "./util";
// import addbackicon from "../assets/images/addbackicon.svg";
import addbackicon from "../../assets/images/addbackicon.svg";
import ReverseLogistics from "../../assets/images/Reverse_Logistics.svg";

function CustomTable(props) {
  const {
    addToBackOrder,
    addToCart,
    handleSingleCheck,
    handleAllCheck,
    qtyUpdate,
    handleChange,
    showQtyButtons,
    addToCartBtn,
    totalCount,
    allChecked,
    inventoryItems,
    page,
  } = useCustomTable(props);
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          my: 1,
          marginTop: "30px",
        }}
      >
        <Grid item xs={3}>
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "Mont-Light",
              color: "#3A63F3",
            }}
          >
            {totalCount} Items found
          </Typography>
        </Grid>
        <Grid item xs={9} sx={{ textAlign: "right" }}>
          {/* <Button
            sx={{
              textTransform: "none",
              width: "140px",
              height: "30px",
              border: " 1px solid #3A63F3",
              borderRadius: "4px",
              bgcolor: "#F3F3FF",
              opacity: 1,
              fontSize: "13px",
              fontFamily: "Mont-Light",
              marginRight: "14px",
            }}
            size="small"
          >
            Add to Back Order
          </Button> */}
          <Button
            onClick={addToCart}
            // variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#3A63F3",
              width: "100px",
              height: "30px",
              /* UI Properties */
              background: "#3A63F3 0% 0% no-repeat padding-box",
              borderRadius: "4px",
              opacity: 1,
              color: "#FFFFFF",
              fontSize: "13px",
              fontFamily: "Mont-Light",
              "&:hover": {
                background: "#3A63F3",
              },
              "&:disabled": {
                background: "#3A63F3!important",
                color: "#FFFFFF",
                opacity: "0.4",

                // color: "black",
              },
            }}
            size="small"
            disabled={!addToCartBtn}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            sx={{
              "& .MuiTableCell-head": {
                bgcolor: "#303779",

                // width: "3px",
                // lineHeight: "5px",
                padding: "1px",
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
                  // sx={{
                  //   paddingLeft: "14px",
                  //   "& .MuiSvgIcon-root": {

                  //     fill: "white",
                  //     color: "white",

                  //   },
                  //   color: "#A5A5A5",
                  // }}
                  checked={allChecked}
                  onChange={handleAllCheck}
                />
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
                Drug Name
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
                NDC
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
                Strength
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
                Package Code
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
                Dosage Form
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
                Unit Cost
              </TableCell>

              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              {/* <TableCell align="left">.</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-body": {
                padding: "6px",
              },
            }}
          >
            {getRows(
              inventoryItems,
              totalCount,
              handleSingleCheck,
              showQtyButtons,
              qtyUpdate,
              addToBackOrder
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {inventoryItems.length ? (
        <Pagination
          count={parseInt(totalCount / 20) + 1}
          rowsperpage={20}
          sx={{ justifyContent: "center", display: "flex", bottom: "0" }}
          color="primary"
          page={page}
          onChange={handleChange}
        />
      ) : null}
    </React.Fragment>
  );
}

const getRows = (
  inventoryItems,
  totalCount,
  handleSingleCheck,
  showQtyButtons,
  qtyUpdate,
  addToBackOrder
) => {
  if (!inventoryItems.length || !totalCount) {
    return (
      <TableRow
        key={"nodata key"}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell
          colSpan={6}
          align="center"
          sx={{
            letterSpacing: "0.12px",
            fontSize: " 20px",
            color: "#313F4D",
            fontFamily: "Montserrat-Bold",
          }}
        >
          No Content
        </TableCell>
      </TableRow>
    );
  }

  return inventoryItems?.map((row, index) => {
    return (
      <TableRow
        key={row.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <input
            style={{
              borderColor: "red",
              width: "15px",
              height: "25px",
              // paddingTop: "300px",

              backgroundClolor: "#FFFFFF",
              // borderRadius: "4px",
              border: "2px solid red",
              opacity: 1,
            }}
            type="checkbox"
            // sx={{ color: "#A5A5A5" }}
            name={row.id}
            // checked={
            //   allChecked &&
            //     Object.keys(isChecked).length === inventoryItems.length
            //     ? true
            //     : isChecked[row.id]
            // }
            checked={row.qtyButtons}
            onChange={(e) => handleSingleCheck(e, row)}
          />
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
          {row.Drug_Name}
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
          {row.NDC_UPC_HRI}
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
          {row.Strength_Unit_of_Measure}
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
          {row.Package_Code}
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
          {row.Dosage_Form}
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
          $ {row.unit__cost}
        </TableCell>
        <TableCell align="left">
          {!row.qtyButtons ? (
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                bgcolor: "#3A63F3",
                fontSize: "10px",
                fontFamily: "Mont-Light",
              }}
              size="small"
              onClick={() => {
                showQtyButtons(row.id);
              }}
            >
              Buy this item
            </Button>
          ) : (
            <React.Fragment>
              <Button
                onClick={() => qtyUpdate(row.id, "dec")}
                sx={{
                  bgcolor: "#E6E6E6",
                  color: "black",
                  minWidth: "20px",
                  height: "20px",
                  "&:hover": { bgcolor: "#E6E6E6" },
                }}
              >
                -
              </Button>
              &nbsp;
              <Button
                sx={{
                  color: "black",
                  border: "1px solid #69747F",
                  borderColor: "#69747F",
                  minWidth: "30px",
                  height: "25px",
                  Item: "center",
                }}
              >
                {row.qty}
              </Button>
              &nbsp;
              <Button
                sx={{
                  bgcolor: "#303779",
                  color: "white",
                  "&:hover": { bgcolor: "#303779" },
                  minWidth: "20px",
                  height: "20px",
                  mt: "4px",
                }}
                onClick={() => qtyUpdate(row.id, "inc")}
              >
                +
              </Button>
            </React.Fragment>
          )}
        </TableCell>
        <TableCell align="left">
          {/* <Link to="/dashboard/backorder"> */}{" "}
          <Button onClick={() => addToBackOrder(row)}>
            <img
              alt=""
              src={row.isBackOrder ? addbackicon : ReverseLogistics}
            />
          </Button>
          {/* </Link> */}
        </TableCell>
      </TableRow>
    );
  });
};

export default CustomTable;
