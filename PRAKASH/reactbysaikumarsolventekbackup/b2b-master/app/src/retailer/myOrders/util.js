import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../../services/apis";

export default function useCustomMyorders() {
  const [orderData, setOrderData] = useState([]);
  const { token } = useSelector((state) => state.userReducer);
  const [dataTrue, setDataTrue] = useState(false);
  const [statusData, setStatus] = useState("");
  const [value, setValue] = useState("a");
  const [allOrdersPageNo, setPage] = useState(1);
  const [viewOrders, setViewOrders] = useState([]);
  const [OrderPlacedPage, setOrderPlacedPage] = useState(1);
  const [totalCount, setCount] = useState(0);
  const [totalCountOfOrderPlaced, setCountorder] = useState(0);
  const [returnsTrue, SetReturnsTrue] = useState(false);
  const navigate = useNavigate();
  const handleChangeOrders = (event, value) => {
    setPage(value);
  };
  const handleValueReports = (event, value) => {
    setOrderPlacedPage(value);
  };
  const handleValueOrderPlaced = (event, value) => {
    setOrderPlacedPage(value);
  };
  useEffect(() => {
    orders();
  }, [allOrdersPageNo, statusData, OrderPlacedPage, dataTrue]);
  useEffect(() => {
    apiOrdersCall();
  }, [OrderPlacedPage, statusData, dataTrue]);
  const orders = () => {
    apiCall(
      `/orderDetails?pageNo=${allOrdersPageNo}&pageSize=${10}`,
      "GET",
      token
    )
      .then((res) => {
        setOrderData(res);
        if (res?.data?.length === 1) {
          setCount(0);
          return;
        }
        setCount(res?.count);
      })
      .catch((er) => {
        console.error(er);
      });
  };
  const apiOrdersCall = () => {
    apiCall(
      `/order/filter?status=${statusData}&sort=desc&pageNo=${OrderPlacedPage}&pageSize=${10}`,
      "GET",
      token
    )
      .then((res) => {
        setViewOrders(res);
        if (res?.data?.length === 1) {
          setCountorder(0);
          return;
        }
        setCountorder(res?.count);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const handleChange = (event, newValue, label) => {
    let x = event.target.name;
    setStatus(x);
    console.log("x", statusData);
    setValue(newValue);
    console.log("value", value);
    setDataTrue(true);
  };
  useEffect(() => {
    if (statusData === "") {
      setDataTrue(false);
    } else if (statusData === "approved") {
      setOrderPlacedPage(1);
    } else if (statusData === "OrderPlaced") {
      setOrderPlacedPage(1);
    } else if (statusData === "Delivered") {
      setOrderPlacedPage(1);
    } else if (statusData === "returns") {
      SetReturnsTrue(true);
      setOrderPlacedPage(1);
    } else {
      setDataTrue(true);
    }
  }, [statusData]);
  const handleClick = (id) => {
    localStorage.setItem("orderId", id);
    localStorage.setItem("statusData", statusData);

    navigate("/dashboard/orderdetails");
  };
  const handleClickReturn = (id) => {
    localStorage.setItem("returnId", id);
    navigate("/dashboard/viewreturndetails");
  };
  return {
    handleClick,
    handleChange,
    apiOrdersCall,
    allOrdersPageNo,
    orderData,
    totalCount,
    statusData,
    value,
    viewOrders,
    handleClickReturn,
    totalCountOfOrderPlaced,
    OrderPlacedPage,
    handleValueOrderPlaced,
    handleChangeOrders,
    handleValueReports,
    setDataTrue,
    dataTrue,
    returnsTrue,
    SetReturnsTrue,
  };
}
