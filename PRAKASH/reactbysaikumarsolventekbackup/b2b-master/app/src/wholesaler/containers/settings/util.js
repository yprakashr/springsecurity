import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { apiCall } from "../../../services/apis";
import { UPDATE_USER_NAME } from "../../../redux/actions/user.action";

export default function useCustomSettings() {
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [view, setview] = useState(false);
  const [editedView, setEditedView] = useState(false);
  const [open, setOpen] = useState(!false);
  const { token } = useSelector((state) => state.userReducer);

  const [personalDetailes, setPersonalDetailes] = useState({
    mobileNo: "",
    fullName: "",
  });
  const [ispersonalDetailesChanged, setisPersonalDetailes] = useState({
    mobileNo: false,
    fullName: false,
  });
  const [storeDetailes, setStoreDetailes] = useState({
    storeName: "",
    address: "",
    city: "",
    state: "",
    // country: "",
    zipcode: "",
    phoneNumber: "",
  });
  const [getAllDetailes, setAllDetailes] = useState({});
  const [disablefun, setDisable] = useState(true);
  const [isAddressChanged, setIsAddressChanged] = useState({
    storeName: false,
    address: false,
    city: false,
    state: false,
    zipcode: false,
    phoneNumber: false,
  });
  const [passwordChange, setPasswordChange] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleEdited = (e) => {
    const { name, value } = e.target;
    setIsAddressChanged({ ...isAddressChanged, [name]: true });
    setStoreDetailes({ ...storeDetailes, [name]: value });
  };
  const handlePersonalEdit = (e) => {
    const { name, value } = e.target;
    setisPersonalDetailes({ ...ispersonalDetailesChanged, [name]: true });

    setPersonalDetailes({ ...personalDetailes, [name]: value });
  };
  const handlePassword = (e) => {
    const { name, value } = e.target;
    setPasswordChange({ ...passwordChange, [name]: value });
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    apiCall(`/fetch-wholesaler-settings`, "GET", token)
      .then((response) => {
        dispatch(UPDATE_USER_NAME(response?.data?.fullName));
        setAllDetailes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSubmiPersonalDetailes = () => {
    apiCall(`/update-profile-settings`, "PATCH", token, {
      fullName: personalDetailes?.fullName
        ? personalDetailes?.fullName
        : getAllDetailes?.fullName,
      mobileNo: personalDetailes?.mobileNo
        ? personalDetailes?.mobileNo
        : getAllDetailes?.mobileNo,
    })
      .then((response) => {
        if (response.status == 200) {
          setOpen(true);
          getUserDetails();
          toast.success(response?.message);
        } else {
          toast.error((response?.message).slice(55));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCancelPersonalDetailes = () => {
    setOpen(true);
  };
  const changePassword = () => {
    apiCall(`/change-password`, "PATCH", token, {
      oldPassword: passwordChange?.oldPassword,
      newPassword: passwordChange?.newPassword,
      confirmPassword: passwordChange?.confirmPassword,
    })
      .then((response) => {
        if (response.status == 200) {
          toast.success(response?.message);
        } else {
          toast.error(response?.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changePasswordCancel = () => {
    setPasswordChange({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  const handleSubmiEdited = () => {
    apiCall(`/update-wholesaler-address`, "PATCH", token, {
      storeName: storeDetailes?.storeName
        ? storeDetailes?.storeName
        : getAllDetailes?.storeName,
      address: storeDetailes?.address
        ? storeDetailes?.address
        : getAllDetailes?.address,
      city: storeDetailes?.city ? storeDetailes?.city : getAllDetailes?.city,
      state: storeDetailes?.state
        ? storeDetailes?.state
        : getAllDetailes?.state,
      zipcode: storeDetailes?.zipcode
        ? storeDetailes?.zipcode
        : getAllDetailes?.zipcode,
      phoneNumber: storeDetailes?.phoneNumber
        ? storeDetailes?.phoneNumber
        : getAllDetailes?.phoneNumber,
    })
      .then((response) => {
        if (response.status == 200) {
          setEditedView(false);
          getUserDetails();
          toast.success(response?.message);
        } else {
          toast.error((response?.message).slice(56));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const edited = () => {
    setOpen(false);
  };
  const addressEdited = () => {
    setEditedView(true);
  };
  const cancel = () => {
    setOpen(true);
  };
  const addressCancel = () => {
    // setview(false);
    setEditedView(false);
  };
  const addressUpdate = () => {
    setview(!false);
  };

  const handleChangeAddress = (e) => {
    const { name, value } = e.target;
    setStoreDetailes({ ...storeDetailes, [name]: value });
  };

  const handleSubmitAddress = () => {
    apiCall(`/add-wholesaler-address`, "POST", token, storeDetailes)
      .then((res) => {
        if (res.status == 200) {
          setDisable(!disablefun);
          setview(false);
          getUserDetails();
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => console.log(err));
  };
  return {
    handleSubmitAddress,
    handleChangeAddress,
    addressUpdate,
    addressCancel,
    cancel,
    addressEdited,
    edited,
    handleSubmiEdited,
    changePasswordCancel,
    changePassword,
    handleCancelPersonalDetailes,
    handleSubmiPersonalDetailes,
    handlePassword,
    handlePersonalEdit,
    handleEdited,
    open,
    getAllDetailes,
    storeDetailes,
    personalDetailes,
    isAddressChanged,
    passwordChange,
    ispersonalDetailesChanged,
    oldPassword,
    newPassword,
    confirmPassword,
    editedView,
    view,
    setNewPassword,
    setConfirmPassword,
    setOldPassword,
  };
}
