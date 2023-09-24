import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ADD_BACKORDER,
  REMOVE_BACKORDER,
} from "../../redux/actions/backorder.action";
import { SET_CART } from "../../redux/actions/cart.action";
import { apiCall } from "../../services/apis";

function useCustomTable(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const backOrders = useSelector((state) => state.backOrderReducer);
  const { token } = useSelector((state) => state.userReducer);
  const { searchKey, getdata, SetListData } = props;
  const [inventoryItems, setInventoryItems] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [isChecked, setIsChecked] = useState({});
  const [totalCount, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [addToCartBtn, setAddToCartBtn] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setInventoryItems([]);
    return () => {
      setInventoryItems([]);
    };
  }, [searchKey, page]);
  useEffect(() => {
    let flag = false;
    inventoryItems.forEach((item) => {
      if (item.qtyButtons === true) {
        flag = true;
      }
    });
    setAddToCartBtn(flag);
  }, [inventoryItems]);

  useEffect(() => {
    if (!inventoryItems.length && searchKey) search();
  }, [inventoryItems, searchKey]);

  const showQtyButtons = (inventoryItemId) => {
    const newInventoryItems = inventoryItems.map((item) => {
      if (inventoryItemId === item.id) {
        item.qtyButtons = true;
      }
      return item;
    });
    setInventoryItems(newInventoryItems);
  };

  const qtyUpdate = (inventoryItemId, action) => {
    if (action === "inc") {
      const newInventoryItems = inventoryItems.map((item) => {
        if (inventoryItemId === item.id) {
          item.qty = item.qty + 1;
        }
        return item;
      });
      setInventoryItems(newInventoryItems);
    }
    if (action === "dec") {
      const newInventoryItems = inventoryItems.map((item) => {
        if (inventoryItemId === item.id && item.qty > 1) {
          item.qty = item.qty - 1;
        }
        return item;
      });
      setInventoryItems(newInventoryItems);
    }
  };

  const search = () => {
    apiCall(
      `/masterproduct?search=${searchKey}&searchType=auto&pageNo=${page}&pageSize=${20}`
    )
      .then((res) => {
        if (res?.data?.count) {
          res?.data?.rows.forEach((item) => {
            item.qtyButtons = false;
            item.qty = 1;
            item.isBackOrder = false;
          });
          res.data.rows.forEach((item) => {
            backOrders.forEach((backOrderItem) => {
              if (item.id === backOrderItem.wholesalerInventoryId) {
                item.isBackOrder = true;
              }
            });
          });
          setInventoryItems(res?.data?.rows);
        }
        if (searchKey.length === 1) {
          setInventoryItems([]);
          getdata([]);
          setCount(0);
          return;
        }

        getdata(res?.data?.rows);
        setCount(res?.data?.count);
      })
      .catch((er) => {
        setInventoryItems([]);
        console.log(er);
      });
  };

  const handleAllCheck = (e) => {
    setAllChecked(e.target.checked);
  };

  useEffect(() => {
    if (allChecked) {
      const newInventoryItems = inventoryItems.map((item) => {
        item.qtyButtons = true;
        return item;
      });
      setInventoryItems(newInventoryItems);
    }
    if (!allChecked) {
      const newInventoryItems = inventoryItems.map((item) => {
        item.qtyButtons = false;
        return item;
      });
      setInventoryItems(newInventoryItems);
    }
  }, [allChecked]);

  const handleSingleCheck = (e, row) => {
    if (!e.target.checked) {
      //setAllChecked(false);

      const newInventoryItems = inventoryItems.map((item) => {
        if (row.id === item.id) {
          item.qtyButtons = false;
        }
        return item;
      });
      setInventoryItems(newInventoryItems);
    }
    if (e.target.checked) {
      const newInventoryItems = inventoryItems.map((item) => {
        if (row.id === item.id) {
          item.qtyButtons = true;
        }
        return item;
      });
      setInventoryItems(newInventoryItems);
    }
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };

  const addToCart = async () => {
    try {
      const addToCartArr = [];
      inventoryItems.forEach((item) => {
        if (item.qtyButtons === true) {
          addToCartArr.push({
            wholesalerInventoryId: item.id,
            quantity: item.qty,
          });
        }
      });
      const { message } = await apiCall(
        `/cart`,
        "PATCH",
        token,
        { itemsToCart: addToCartArr }
      );
      const updatedCartData = await apiCall(`/cart`, "GET", token);
      dispatch(SET_CART(updatedCartData));
      toast.success(message, { autoClose: 750 });
      setTimeout(() => {
        navigate("/dashboard/cartpage");
      }, 800);
      return;
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addToBackOrder = (itemObj) => {
    apiCall(
      "/add-backorder-product",
      "POST",
      token,
      {
        wholesalerInventoryId: itemObj?.id,
      }
    )
      .then((res) => {
        if (res.data.action === "added") {
          dispatch(ADD_BACKORDER(res.data));
          const updatedInv = inventoryItems.map((item) => {
            if (item.id === res.data.wholesalerInventoryId) {
              item.isBackOrder = true;
            }
            return item;
          });
          setInventoryItems(updatedInv);
        }

        if (res.data.action === "removed") {
          dispatch(REMOVE_BACKORDER(itemObj.id));
          const updatedInv = inventoryItems.map((item) => {
            if (item.id === itemObj.id) {
              item.isBackOrder = false;
            }
            return item;
          });
          setInventoryItems(updatedInv);
        }
      })
      .catch((err) => console.log(err));
  };
  return {
    addToBackOrder,
    addToCart,
    handleSingleCheck,
    handleAllCheck,
    qtyUpdate,
    handleChange,
    showQtyButtons,
    totalCount,
    addToCartBtn,
    allChecked,
    inventoryItems,
    page,
  };
}

export default useCustomTable;
