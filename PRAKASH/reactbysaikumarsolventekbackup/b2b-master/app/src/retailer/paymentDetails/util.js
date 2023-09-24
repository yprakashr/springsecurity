import { useState } from "react";
import { useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiCall } from "../../services/apis";

export default function useCustomPaymentDetails() {
  const { token } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const {
    cart_items,
    totalQuantity,
    finalPrice,
    totalPrice,
    discountPrice,
    user1,
    retailer,
  } = useSelector((state) => state.cartReducer);

  const match1 = useMatch("/dashboard/orderreviewpage");

  const [open, setOpen] = useState(false);

  const proceedOrder = async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      const orderAlert = confirm("Do you really want to proceed this order?");
      if (!orderAlert) {
        window.navigator("/");
      } else {
        // setIsLoading(true);

        const res = await apiCall(`/add-to-order`, "POST", token);
        if (res.status === 200) {
          setOpen(true);
        }
        if (res.status === 400) {
          toast.error(res?.message);
          setOpen(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const cartPrice =
  //   cart_items.length &&
  //   cart_items
  //     ?.map((prod) => {
  //       return parseFloat(prod.unit__cost) * parseFloat(prod.quantity);
  //     })
  //     .reduce((a, b) => parseFloat(a + b)?.toFixed(2));

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const changeLocation = (placeToGo) => {
    navigate(placeToGo, { replace: true });
    window.location.reload();
  };
  return {
    changeLocation,
    handleClose,
    proceedOrder,
    match1,
    open,
    cart_items,
    totalQuantity,
    finalPrice,
    totalPrice,
    discountPrice,
    user1,
    retailer,
  };
}
