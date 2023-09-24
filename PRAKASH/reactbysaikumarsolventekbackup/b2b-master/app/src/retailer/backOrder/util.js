import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SET_BACKORDER } from "../../redux/actions/backorder.action";
import { SET_CART } from "../../redux/actions/cart.action";
import { apiCall } from "../../services/apis";

function useBackOrder() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.userReducer);
  const backOrders = useSelector((state) => state.backOrderReducer);
  const [addToCartBtn, setAddToCartBtn] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const showQtyButtons = (inventoryItemId) => {
    const newBackOrders = backOrders.map((item) => {
      if (inventoryItemId === item.wholesalerInventoryId) {
        item.qtyButtons = true;
      }
      return item;
    });
    dispatch(SET_BACKORDER(newBackOrders));
  };

  useEffect(() => {
    if (allChecked) {
      const updatedBackOrders = backOrders.map((item) => {
        item.qtyButtons = true;
        return item;
      });
      dispatch(SET_BACKORDER(updatedBackOrders));
    }
    if (!allChecked) {
      const updatedBackOrders = backOrders.map((item) => {
        item.qtyButtons = false;
        return item;
      });
      dispatch(SET_BACKORDER(updatedBackOrders));
    }
  }, [allChecked]);

  const qtyUpdate = (inventoryItemId, action) => {
    if (action === "inc") {
      const newBackOrders = backOrders?.map((item) => {
        if (inventoryItemId === item.wholesalerInventoryId) {
          item.qty = item.qty + 1;
        }
        return item;
      });
      dispatch(SET_BACKORDER(newBackOrders));
    }
    if (action === "dec") {
      const newBackOrders = backOrders?.map((item) => {
        if (inventoryItemId === item.wholesalerInventoryId && item.qty > 1) {
          item.qty = item.qty - 1;
        }
        return item;
      });
      dispatch(SET_BACKORDER(newBackOrders));
    }
  };

  const handleSingleCheck = (e, row) => {
    if (!e.target.checked) {
      // setAllChecked(false);

      const updatedBackOrders = backOrders.map((item) => {
        if (row.wholesalerInventoryId === item.wholesalerInventoryId) {
          item.qtyButtons = false;
        }
        return item;
      });
      dispatch(SET_BACKORDER(updatedBackOrders));
    }
    if (e.target.checked) {
      const updatedBackOrders = backOrders.map((item) => {
        if (row.wholesalerInventoryId === item.wholesalerInventoryId) {
          item.qtyButtons = true;
        }
        return item;
      });
      dispatch(SET_BACKORDER(updatedBackOrders));
    }
    //setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };

  const handleAllCheck = (e) => {
    setAllChecked(e.target.checked);
  };

  useEffect(() => {
    getBackOrders();
  }, []);

  const getBackOrders = () => {
    apiCall("/all-backorder-details", "GET", token)
      .then((res) => {
        if (res?.data?.backorder_items) {
          const updatedBackOrders = res?.data?.backorder_items.map((item) => {
            item.qtyButtons = false;
            item.qty = 1;
            return item;
          });
          dispatch(SET_BACKORDER(updatedBackOrders));
        }
      })
      .catch((err) => console.log(err));
  };

  const addToCart = async () => {
    try {
      const addToCartArr = [];
      backOrders.forEach((item) => {
        if (item.qtyButtons === true) {
          addToCartArr.push({
            wholesalerInventoryId: item.wholesalerInventoryId,
            quantity: item.qty,
          });
        }
      });
      const result = await apiCall(
        `/cart`, "PATCH",
        token,
        { itemsToCart: addToCartArr }
      );
      const response = await apiCall(`/cart`, "GET", token);
      dispatch(SET_CART(response.data));
      toast.success(result?.message, { autoClose: 750 });
      setTimeout(() => {
        navigate("/dashboard/cartpage");
      }, 800);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    let flag = false;
    backOrders.forEach((item) => {
      if (item.qtyButtons === true) {
        flag = true;
      }
    });
    setAddToCartBtn(flag);
  }, [backOrders]);

  const discardBackOrder = (id) => {
    apiCall(`/discardBackOrder?id=${id}`, "DELETE", token)
      .then((rs) => {
        console.log(rs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleClose,
    addToCart,
    addToCartBtn,
    allChecked,
    handleAllCheck,
    discardBackOrder,
    handleSingleCheck,
    showQtyButtons,
    qtyUpdate,
    backOrders,
  };
}

export default useBackOrder;
