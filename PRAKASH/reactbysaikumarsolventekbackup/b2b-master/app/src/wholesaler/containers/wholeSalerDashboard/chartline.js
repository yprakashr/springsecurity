import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Box, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
export default function Chartline({ setDashboardData, dashboardData }) {
  // console.log(dashboardData);

  const [chartData, setChartData] = useState({
    // labels: ["Jan", "Feb", "March", "April", "May"],
    // labels: [...labelData],
    labels: null,
    datasets: [
      {
        label: "Cash Flow Orders this week",
        fill: false,
        width: "20px",
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "#00B7CE",
        color: "#00B7CE",
        borderWidth: 2,
        // data: [65, 59, 80, 81, 56],
        // data: dashboardData?.cashFlowOrders?.data,
        data: [],

        // fontSize: ["90px", "90px", "90px", "90px", "90px", "90px"],
      },
    ],
  });
  // useEffect(() => {
  //   chartData?.datasets?.forEach(
  //     (datas) => (datas.data = dashboardData?.cashFlowOrders?.data)
  //   );
  //   chartData.labels = dashboardData?.cashFlowOrders?.labels;
  // }, []);
  const [chartMonthData, setChartMonthData] = useState({
    labels: null,

    datasets: [
      {
        label: "Orders this week",
        fill: true,
        width: "20px",
        lineTension: 0.9,
        // backgroundColor: CanvasGradient,
        backgroundColor: "#F0F8FF",
        // backgroundColor:
        // "transparent linear-gradient(180deg, #147AD6 0%, #FFFFFF 100%)",
        // background: ["linear-gradient(to bottom, #B9C6F6 50% , #ffffff 90%)"],
        borderColor: "#00B7CE",
        color: "#00B7CE",
        borderWidth: 2,
        data: [],

        // fontSize: ["90px", "90px", "90px", "90px", "90px", "90px"],
      },
    ],
  });
  useEffect(() => {
    if (dashboardData?.cashFlowOrders) {
      setChartData({
        ...chartData,
        labels: dashboardData.cashFlowOrders.labels,
        datasets: [
          {
            ...chartData.datasets[0],
            data: dashboardData.cashFlowOrders.data,
          },
        ],
      });
    }
    if (dashboardData?.ordersThisWeek) {
      setChartMonthData({
        ...chartMonthData,
        labels: dashboardData.ordersThisWeek.labels,
        datasets: [
          {
            ...chartMonthData.datasets[0],
            data: dashboardData.ordersThisWeek.data,
          },
        ],
      });
    }
  }, [dashboardData]);

  return (
    <>
      {/* <Container> */}
      {/* <Box sx={{ display: "felx" }}> */}
      <Stack direction="row" spacing={2} sx={{ paddingTop: "50px" }}>
        <Box
          sx={{
            width: "480px",
            height: "300px",
            boxShadow: "0px 0px 4px #0000001A",
            borderRadius: "12px",
            p: 4,
          }}
        >
          <Typography
            sx={{
              color: "#313F4D",
              fontSize: "13px",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Cash Flow Orders this week
          </Typography>
          <Line
            data={chartData}
            options={{
              scales: {
                x: {
                  ticks: {
                    font: {
                      size: 11,
                      family: "Montserrat-Medium",
                      color: "red",
                    },
                  },
                },

                y: {
                  ticks: {
                    font: {
                      size: 10,
                      family: "Montserrat-Medium",
                      color: "red",
                    },
                  },
                },
              },
              plugins: {
                legend: {
                  labels: {
                    // This more specific font property overrides the global property
                    font: {
                      size: 11,
                      family: "Montserrat-Medium",
                    },
                  },
                  // labels: {
                  //   size: 10,
                  //   family: "Montserrat-Medium",
                  // },
                },
              },
              //   legend: {
              //     display: true,
              //     fontSize: "90px",

              //   },
              labels: {
                font: {
                  size: 74,
                },
              },
            }}
          />
        </Box>
        <Box
          sx={{
            width: "480px",
            height: "300px",
            boxShadow: "0px 0px 4px #0000001A",
            borderRadius: "12px",
            p: 4,
          }}
        >
          <Typography
            sx={{
              color: "#313F4D",
              fontSize: "13px",
              fontFamily: "Montserrat-Bold",
            }}
          >
            Orders this week
          </Typography>
          <Line
            data={chartMonthData}
            options={{
              scales: {
                x: {
                  ticks: {
                    font: {
                      size: 11,
                      family: "Montserrat-Medium",
                      color: "red",
                    },
                  },
                },

                y: {
                  ticks: {
                    font: {
                      size: 10,
                      family: "Montserrat-Medium",
                      color: "red",
                    },
                  },
                },
              },
              // title: {
              //   display: true,
              //   text: "Average Rainfall per month",
              //   fontSize: 20,
              // },
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    // This more specific font property overrides the global property
                    font: {
                      size: 11,
                      family: "Montserrat-Medium",
                    },
                  },
                  //   position: "right",
                },
              },
            }}
          />
        </Box>
      </Stack>
      {/* </Container> */}
    </>
  );
}
