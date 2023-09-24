import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CART_ITEM_QTY_UPDATE,
  CART_ITEM_REMOVE,
  SET_CART,
} from "../../redux/actions/cart.action";
import { apiCall } from "../../services/apis";
import { toast } from "react-toastify";

export default function useCustomCartItems() {
  const dispatch = useDispatch();
  const { cart_items, totalQuantity, finalPrice, user1, retailer } =
    useSelector((state) => state.cartReducer);
  const { token } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const back = () => {
    navigate("/dashboard/searchpage");
  };

  const [open, setOpen] = useState(false);
  const [imfoTableData, setInfoTableData] = useState({});
  const [showLoader, setShowLoader] = useState(false);

  const handleClickOpen = (item) => {
    setOpen(true);
    setInfoTableData(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCart = async () => {
    try {
      const response = await apiCall(`/cart`, "GET", token);
      dispatch(SET_CART(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  const qtyUpdate = async (item, action) => {
    try {
      if (item.quantity > 1 && action === "dec") {
        await apiCall("/cart-item-qty", "PATCH", token, {
          updateOp: action,
          cartItemId: item.id,
        });
        dispatch(CART_ITEM_QTY_UPDATE({ updAction: action, cartItem: item }));
      }
      if (action === "inc") {
        await apiCall("/cart-item-qty", "PATCH", token, {
          updateOp: action,
          cartItemId: item.id,
        });
        dispatch(CART_ITEM_QTY_UPDATE({ updAction: action, cartItem: item }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(showLoader);
  }, [showLoader]);
  const removeCartItem = async (cartItem) => {
    setShowLoader(true);
    // console.log(showLoader);

    try {
      if (window.confirm("Do you really want to remove this cart item?")) {
        await apiCall(`/cart/${cartItem.id}`, "DELETE", token);
        setShowLoader(false);
        dispatch(CART_ITEM_REMOVE(cartItem));
      } else {
        setShowLoader(false);
      }
    } catch (error) {
      setShowLoader(false);
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      const answer = window.confirm("Sure, you want to clear cart ?");
      if (answer) {
        const data = await apiCall("/cart", "DELETE", token);
        getCart();
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    cart_items,
    totalQuantity,
    finalPrice,
    user1,
    retailer,
    removeCartItem,
    qtyUpdate,
    getCart,
    handleClickOpen,
    handleClose,
    imfoTableData,
    back,
    open,
    showLoader,
    clearCart,
  };
}
