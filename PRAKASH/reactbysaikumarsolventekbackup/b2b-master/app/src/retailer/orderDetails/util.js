import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../constant";
import { SET_CART } from "../../redux/actions/cart.action";
import { apiCall } from "../../services/apis";
import { toast } from "react-toastify";

export default function useCustomOrderdetails() {
  const [orderDetails, setOrderDetails] = useState({});
  const [idInvoices, setInvoiceIds] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.userReducer);
  useEffect(() => {
    invoiceIdsApi();
  }, [orderDetails]);
  useEffect(() => {
    const id = localStorage.getItem("orderId");

    Orders(id);
  }, []);

  useEffect(() => {}, []);

  const Orders = (orderId) => {
    const statusData = localStorage.getItem("statusData");
    let url;
    if (statusData === "" || statusData === "OrderPlaced") {
      url = `getByOrderId?id`;
    }
    if (statusData === "approved") {
      url = `fetch-approved-orderById?id`;
    }
    if (statusData === "Delivered") {
      url = `fetch-delivered-orderById?id`;
    }
    if (statusData === "processed") {
      url = `/fetch-processed-orderById?id`;
    }
    if (statusData === "shipped") {
      url = `/fetch-shipped-orderById?id`;
    }

    apiCall(`/${url}=${orderId}`, "GET", token)
      .then((res) => {
        setOrderDetails(res?.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  console.log(orderDetails);
  const invoicePage = (id) => {
    localStorage.setItem("invoiceUnique", id);
    navigate("/dashboard/invoicedetails");
  };
  const invoiceIdsApi = () => {
    apiCall(`/getInvoiceDetails?orderId=${orderDetails?.id}`, "GET", token)
      .then((res) => {
        setInvoiceIds(res?.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const invoicePdf = () => {
    fetch(`${API_URL}/generateInvoice`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
    })
      .then((response) => response.arrayBuffer())
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

  const reOrder = async () => {
    try {
      const addToCartArr = [];
      orderDetails.items.forEach((item) => {
        addToCartArr.push({
          wholesalerInventoryId: item.wholesalerInventory.id,
          quantity: item.quantity,
        });
      });
      const { message } = await apiCall(`/cart`, "PATCH", token, {
        itemsToCart: addToCartArr,
      });
      const response = await apiCall(`/cart`, "GET", token);
      dispatch(SET_CART(response?.data));
      toast.success(message, { autoClose: 750 });
      setTimeout(() => {
        navigate("/dashboard/cartpage");
      }, 800);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    invoicePdf,
    invoiceIdsApi,
    invoicePage,
    Orders,
    orderDetails,
    idInvoices,
    reOrder,
  };
}
