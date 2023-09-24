import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import useCustomSearchResultPage from "./util";
import CustomTable from "../Table";

export default function SearchResultPage({
  searchData,
  setsearchData,
  ...props
}) {
  const { data, getdata, searchKey, SetListData } = useCustomSearchResultPage(
    searchData,
    setsearchData
  );
  return (
    <>
      {searchData && data.length ? (
        <Box sx={{ display: "flex", marginLeft: "70px" }}>
          <Typography
            sx={{
              color: "#313F4D",
              fontSize: "13px",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Drug Name :{" "}
            <Typography
              component="span"
              sx={{
                color: "#313F4D",
                fontSize: "13px",
                fontFamily: "Mont-Light",
              }}
            >
              {data[0]?.Drug_Name}
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "#313F4D",
              fontSize: "13px",
              fontFamily: "Montserrat-Bold",
              // marginRight: "19px",
              marginLeft: "40px",
            }}
          >
            NDC No. :{" "}
            <Typography
              component="span"
              sx={{
                color: "#313F4D",
                fontSize: "13px",
                fontFamily: "Mont-Light",
              }}
            >
              {data[0]?.ndc}
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "#313F4D",
              fontSize: "13px",
              fontFamily: "Montserrat-Bold",
              marginLeft: "70px",
            }}
          >
            {" "}
            Manufacturer :{" "}
            <Typography
              component="span"
              sx={{
                color: "#313F4D",
                fontSize: "13px",
                fontFamily: "Mont-Light",
              }}
            >
              {data[0]?.manufacturer}
            </Typography>
          </Typography>
        </Box>
      ) : null}

      {searchData && data.length ? (
        <Box
          sx={{ display: "flex", justifyContent: "start", marginLeft: "70px" }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontFamily: "Montserrat-Bold",
              color: "#313F4D",
              textAlign: "center",
              my: 1,
              // marginRight: "135px",
            }}
          >
            Description :{" "}
            <Typography
              component="span"
              sx={{
                color: "#313F4D",
                fontSize: "13px",
                fontFamily: "Mont-Light",
              }}
            >
              {data[0]?.New_Drug_Descriptor_Identifier}
            </Typography>
          </Typography>
        </Box>
      ) : null}
      {searchData?.length >= 2 && (
        <CustomTable
          getdata={getdata}
          searchKey={searchKey}
          SetListData={SetListData}
        />
      )}
    </>
  );
}
