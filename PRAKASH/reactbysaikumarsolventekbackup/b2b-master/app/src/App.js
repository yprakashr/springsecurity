import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Signin from "./authPages/signin";
import Register from "./authPages/register";
import Forgetpassword from "../src/authPages/forgotPassword";
import Dashboard from "./retailer/dashboard";
// import SerachResultPage from "./retailer/serachResultPage";
import Homepage from "./retailer/homePage";
import Cartpage from "./retailer/cartPage/index";
import Orderreviewpage from "./retailer/orderReviewPage/index";
import { apiCall } from "./services/apis";
import { useDispatch, useSelector } from "react-redux";
import { SET_CART } from "./redux/actions/cart.action";
import Myorders from "./retailer/myOrders/index";
import Myprofile from "./retailer/myprofile/index";

import Orderdetails from "./retailer/orderDetails/index";
import InvoiceDetails from "./retailer/invoiceDetails/index";
import Return from "./retailer/return/return";
import ReturnReview from "./retailer/return/returnReview";
import ViewReturnDetails from "./retailer/return/viewReturnDetails";
import Invoices from "./retailer/invoices/index";
import TermsAndConditions from "./retailer/termsAndConditions";
import Layout from "./wholesaler/components/layout";
import Salesorder from "./wholesaler/containers/salesOrder";
import Whdashboard from "./wholesaler/containers/whDashboard";
import ViewOrderDetails from "./wholesaler/containers/viewOrderDetails";
import WholeSalerInvoiceDetails from "./wholesaler/containers/wholeSalerInvoiceDetails";
import Productlist from "./wholesaler/containers/Products/productList";
import Reports from "./wholesaler/containers/reports";
import WholeSalerDashboard from "./wholesaler/containers/wholeSalerDashboard/wholeSalerDashboard1";
import { SET_BACKORDER } from "./redux/actions/backorder.action";
import BackOrder from "./retailer/backOrder/index";
import SearchResultPage from "./retailer/searchResultPage";

import AddProduct from "./wholesaler/containers/Products/addProduct";
import ContactUs from "./wholesaler/containers/contactUs";
import Faqs from "./wholesaler/containers/faqs";
import CreditLine from "./retailer/creditLine";
import Support from "./retailer/support";
import Settings from "./wholesaler/containers/settings";


function App() {
  const { user, token, isLogin } = useSelector((state) => state.userReducer);
  const [searchData, setsearchData] = useState("");
  const dispatch = useDispatch();

  //cart primary fetching
  const getCart = async () => {
    try {
      const response = await apiCall(`/cart`, "GET", token);
      dispatch(SET_CART(response?.data));
    } catch (error) {
      console.log(error);
    }
  };

  //backorder primary fetching
  const getBackOrders = () => {
    apiCall("/all-backorder-details", "GET", token)
      .then((res) => {
        if (res.data.backorder_items) {
          const updatedBackOrders = res?.data?.backorder_items.map(
            (item, index) => {
              item.qtyButtons = false;
              item.qty = 1;
              return item;
            }
          );
          dispatch(SET_BACKORDER(updatedBackOrders));
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (user.userType === "retailer") {
      getCart();
      getBackOrders();
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              !isLogin ? (
                <Navigate replace to="signin" />
              ) : (
                <Navigate replace to={"dashboard/homepage"} />
              )
            }
          />
          <Route
            path="signin"
            element={
              !isLogin ? (
                <Signin />
              ) : user?.userType === "retailer" ? (
                <Navigate replace to={"/dashboard/homepage"} />
              ) : (
                <Navigate replace to={"/layout/salesorder"} />
              )
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="forgetpassword" element={<Forgetpassword />} />

          <Route
            path="dashboard"
            element={
              !isLogin ? (
                <Navigate replace to={"/signin"} />
              ) : user?.userType === "retailer" ? (
                <Dashboard
                  onSearch={setsearchData}
                  searchData={searchData}
                  setsearchData={setsearchData}
                />
              ) : (
                <Navigate replace to="/signin" />
              )
            }
          >
            <Route
              path="searchpage"
              element={
                <SearchResultPage
                  searchData={searchData}
                  setsearchData={setsearchData}
                />
              }
            />
            <Route path="backorder" element={<BackOrder />} />
            <Route path="allinvoices" element={<Invoices />} />
            <Route path="termsandconditions" element={<TermsAndConditions />} />
            <Route path="support" element={<Support />} />

            <Route path="myorders" element={<Myorders />} />
            <Route path="orderdetails" element={<Orderdetails />} />
            <Route path="creditline" element={<CreditLine />} />
            <Route path="invoicedetails" element={<InvoiceDetails />} />
            <Route path="return" element={<Return />} />
            <Route path="returnreview" element={<ReturnReview />} />
            <Route path="viewreturndetails" element={<ViewReturnDetails />} />
            <Route path="myprofile" element={<Myprofile />} />
            <Route path="homepage" element={<Homepage see={false} />} />
            <Route path="cartpage" element={<Cartpage />} />
            <Route path="orderreviewpage" element={<Orderreviewpage />} />

            {/* </Route> */}
          </Route>
          <Route
            path="layout"
            element={
              !isLogin ? (
                <Navigate replace to={"/signin"} />
              ) : user?.userType === "wholesaler" ? (
                <Layout />
              ) : (
                <Navigate replace to="/signin" />
              )
            }
          >
            <Route path="salesorder" element={<Salesorder />} />
            <Route path="wholesalerdashboard" element={<Whdashboard />} />
            <Route path="vieworderdetails" element={<ViewOrderDetails />} />
            <Route
              path="wholeSalerInvoiceDetails"
              element={<WholeSalerInvoiceDetails />}
            />
            <Route
              path="WholeSalerDashboardPart"
              element={<WholeSalerDashboard />}
            />

            <Route path="productlist" element={<Productlist />} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="reports" element={<Reports />} />
            <Route path="contactUs" element={<ContactUs />} />
            <Route path="faqs" element={<Faqs />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
