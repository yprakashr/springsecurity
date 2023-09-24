import { Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import moment from "moment";
import cal_icon from "../../assets/images/wholesalerImages/cal icon.svg";
import { Box } from "@mui/system";

import { useSelector } from "react-redux";
import { API_URL } from "../../constant";
import { toast } from "react-toastify";
export default function Daterangepicker(props) {
  const { getdet, getdet6 } = props;
  const [startDate, setstartDate] = useState(moment("01/01/2014"));

  const { token } = useSelector((state) => state.userReducer);

  const [endDate, setendDate] = useState(
    moment(new Date().toLocaleDateString())
  );
  const handlePickDate = (event, picker) => {
    const sd = picker?.startDate;
    setstartDate(picker?.startDate);
    setendDate(picker?.endDate);
  };

  const submitdate = async () => {
    getdet6(true);
    let c = `${startDate.format("YYYY-MM-DD")}`;
    let e = `${endDate.format("YYYY-MM-DD")}`;
    let val = c + "";

    let data = await fetch(
      `${API_URL}/orderslist-filter-by-date?startDate=${val}&endDate=${e}`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          //       "Access-Control-Allow-Origin": "*",
          Authorization: token,
        },
      }
    );
    data = await data.json();
    data = data;
    if (data.status == 200) {
      getdet(data?.data);
      toast.success(data?.message);
    } else {
      getdet();
      toast.error(data?.message);
    }
    console.log(data);
    // fetch(
    //   `${API_URL}/orderslist-filter-by-date?startDate=${val}&endDate=${e}`,
    //   {
    //     method: "get",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //       Authorization: token,
    //     },
    //   }
    // )
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((json) => {
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <DateRangePicker
        initialSettings={{
          startDate: startDate,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days"),
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment().subtract(1, "month").startOf("month"),
              moment().subtract(1, "month").endOf("month"),
            ],
          },
        }}
        onEvent={handlePickDate}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              border: "1px solid #DCDCDC",
              borderRadius: "4px",
              opacity: "1",
              width: "150px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              bgcolor: "#FFFFFF",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Montserrat-Medium",
                letterSpacing: "1px",
              }}
            >
              {`${startDate.format("DD-MM-YYYY")}`} &nbsp;
            </Typography>{" "}
            <Typography>
              <img
                src={cal_icon}
                alt=""
                style={{ width: "15px", marginTop: "6px" }}
              />
            </Typography>
          </Box>{" "}
          <Typography
            sx={{
              color: "#303030",
              fontSize: "15px",
              fontFamily: "Montserrat-Medium",
              marginLeft: "10px",
            }}
          >
            To
          </Typography>
          <Box
            sx={{
              border: "1px solid #DCDCDC",
              borderRadius: "4px",
              opacity: "1",
              width: "150px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              bgcolor: "#FFFFFF",
              marginLeft: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Montserrat-Medium",
                letterSpacing: "1px",
              }}
            >
              {" "}
              {`${endDate.format("DD-MM-YYYY")}`} &nbsp;
            </Typography>
            <Typography>
              <img
                src={cal_icon}
                alt=""
                style={{ width: "15px", marginTop: "6px" }}
              />
            </Typography>
          </Box>
          <Box>
            <Button
              sx={{
                textTransform: "none",
                bgcolor: "#3A63F3",
                width: "70px",
                height: "36px",

                background: "#3A63F3 0% 0% no-repeat padding-box",
                borderRadius: "4px",
                opacity: 1,
                color: "#FFFFFF",
                fontSize: "11px",
                fontFamily: "Montserrat-Medium",
                marginLeft: "10px",
                "&:hover": {
                  background: "#3A63F3",
                },
              }}
              size="small"
              onClick={submitdate}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </DateRangePicker>
    </>
  );
}
