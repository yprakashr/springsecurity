import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { API_URL } from '../../constant';
import { apiCall } from '../../services/apis';

export default function useCustomInvoiceDetails() {
  const { token } = useSelector((state) => state.userReducer);

  const [invoiceOrderDetails, setInvoiceOrderDetails] = useState({});
  const [orderStatus, setOrderStatus] = useState("");
  useEffect(() => {
    const id = localStorage.getItem("invoiceUnique");
    Invoices(id);
  }, []);
  useEffect(() => {
    if (invoiceOrderDetails.orderStatus === "OrderPlaced") {
      setOrderStatus(1);
    } else if (invoiceOrderDetails.orderStatus === "Approved") {
      setOrderStatus(2);
    } else if (invoiceOrderDetails.orderStatus === "Processed") {
      setOrderStatus(3);
    } else if (invoiceOrderDetails.orderStatus === "Shipped") {
      setOrderStatus(4);
    } else if (invoiceOrderDetails.orderStatus === "Delivered") {
      setOrderStatus(5);
    }
  }, [invoiceOrderDetails.orderStatus]);

  //invoice download
  const invoicePdf = async (invoice_id) => {
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
  const Invoices = (invoiceuniqe) => {
    apiCall(
      `/getInvoiceDetailsByInvoiceId?invoiceUnique=${invoiceuniqe}`,
      "GET",
      token
    )
      .then((res) => {
        setInvoiceOrderDetails(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  return {
    Invoices,
    invoicePdf,
    invoiceOrderDetails,
    orderStatus,
  };
}
