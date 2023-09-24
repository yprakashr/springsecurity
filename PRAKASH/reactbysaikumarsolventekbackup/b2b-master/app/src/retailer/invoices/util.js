import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../constant";
import { apiCall } from "../../services/apis";
import { useNavigate } from "react-router-dom";

export default function useCustomInvoices() {
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.userReducer);
  const [invoices, setInvoices] = useState([]);
  const fetchInvoices = async () => {
    const response = await apiCall("/invoices", "GET", token);
    setInvoices(response.data);
  };
  const invoicePdf = async (invoice_id, e) => {
    e.stopPropagation();
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
  const invoicePage = (id) => {
    console.log("here onlyyyy")
    localStorage.setItem("invoiceUnique", id);

    navigate("/dashboard/invoicedetails");
  };
  useEffect(() => {
    fetchInvoices();
  }, []);

  return {
    invoices,
    invoicePdf,
    invoicePage
  };
}
