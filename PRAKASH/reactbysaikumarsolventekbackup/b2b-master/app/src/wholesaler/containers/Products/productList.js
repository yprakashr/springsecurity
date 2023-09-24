import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  InputAdornment,
  Pagination,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import { Box, Container } from "@mui/system";
import search from "../../../assets/images/wholesalerImages/search icon.svg";
import { Link, useNavigate } from "react-router-dom";
import delete_icon from "../../../assets/images/wholesalerImages/delete.svg";
import mode_edit from "../../../assets/images/wholesalerImages/Icon-edit.svg";
import upload_icon from "../../../assets/images/wholesalerImages/Icon_upload.svg";
import { apiCall } from "../../../services/apis";
import { useSelector } from "react-redux";
import { API_URL } from "../../../constant";
export default function Productlist() {
  const navigate = useNavigate();
  const importRef = useRef();
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
  const { token } = useSelector((state) => state.userReducer);
  const [inventoryItems, setInvenoryItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [showBulkDelete, setShowBulkDelete] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [pageno, setPageNo] = useState(1);
  const [totalCount, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [dialogData, setDialogData] = useState({});
  const [refresh, setRefresh] = useState(true);
  const [editFormData, setEditFormData] = useState({
    id: "",

    stock: "",
    Drug_Name: "",

    Strength_Unit_of_Measure: "",
    discount_percentage: "",
  });
  const [iseditFormDataChanged, setiseditFormData] = useState({
    stock: false,
    Drug_Name: false,

    Strength_Unit_of_Measure: false,
    discount_percentage: false,
  });
  const handleProductEdit = (e) => {
    const { name, value } = e.target;
    setiseditFormData({ ...iseditFormDataChanged, [name]: true });

    setEditFormData({ ...editFormData, [name]: value });
  };

  const fetchInventory = async () => {
    try {
      let fetchData = await apiCall(
        `/wholesalerinventory?pageNo=${pageno}&pageSize=${10}`,
        "GET",
        token
      );
      fetchData.data.rows = fetchData.data.rows.map((item) => {
        item.checked = false;
        return item;
      });
      setUpdated(true);
      setInvenoryItems(fetchData.data);
      if (fetchData.data?.rows?.length === 1) {
        setCount(0);
        return;
      }
      setCount(fetchData?.data?.count);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCheckbox = (e, id) => {
    if (e.target.checked) {
      inventoryItems?.rows?.forEach((item) => {
        if (item.id === id) {
          item.checked = true;
        }
      });
    }
    if (!e.target.checked) {
      inventoryItems?.rows?.forEach((item) => {
        if (item.id === id) {
          item.checked = false;
        }
      });
    }
    setInvenoryItems({ ...inventoryItems });
  };
  const checking = (actionChecked) => {
    const rows = inventoryItems.rows.map((item) => {
      if (actionChecked) {
        item.checked = true;
      }
      if (!actionChecked) {
        item.checked = false;
      }
      return item;
    });
    setInvenoryItems((prev) => ({ ...prev, rows }));
  };

  const bulkDeleteVisibility = () => {
    const rows = inventoryItems?.rows;
    if (rows) {
      const showBulkDelete = rows.map((item) => item.checked).some(Boolean);
      setShowBulkDelete(showBulkDelete);
    }
  };

  useEffect(() => {
    bulkDeleteVisibility();
  }, [inventoryItems, inventoryItems.rows]);
  useEffect(() => {
    if (allChecked && updated) {
      checking(true);
    }
    if (!allChecked && updated) {
      checking(false);
    }
  }, [allChecked]);

  const handleChangeProducts = (event, value) => {
    setPageNo(value);
  };
  const deleteInventory = async (id) => {
    try {
      const answer = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (answer) {
        await apiCall(`/wholesalerinventory`, "DELETE", token, {
          deleteId: [id],
        });
        setInvenoryItems((prev) =>
          prev?.rows?.filter((item) => item.id !== id)
        );
        fetchInventory();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("files", file);

    try {
      let response = await fetch(`${API_URL + "/wholesalerimport"}`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      });
      response = await response.json();
      if (response?.statusCode === 400) {
        return toast.error(response.message);
      }
      await fetchInventory();
      toast.success(response.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (pageno || searchKey.length === 0) {
    }
    fetchInventory();
  }, [pageno]);
  useEffect(() => {
    if (searchKey.length === 0) {
      fetchInventory();
    }
  }, [searchKey]);
  const bulkDelete = async () => {
    try {
      const answer = window.confirm(
        "Are you sure you want to delete all this items?"
      );
      if (answer) {
        const itemsToDel = inventoryItems.rows
          .filter((item) => item.checked)
          .map((item) => item.id);
        await apiCall(`/wholesalerinventory`, "DELETE", token, {
          deleteId: itemsToDel,
        });
        fetchInventory();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (item) => {
    setEditFormData({
      id: item?.id,
      stock: item?.stock,
      Drug_Name: item?.Drug_Name,

      Strength_Unit_of_Measure: item?.Strength_Unit_of_Measure,
      discount_percentage: item?.discount_percentage,
    });
    setOpen(true);
    setRefresh(refresh);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let Drug_Name;
  let Strength_Unit_of_Measure;
  let stock;
  let discount_percentage;
  inventoryItems?.rows?.forEach((ks) => {
    Drug_Name = ks?.Drug_Name;
    Strength_Unit_of_Measure = ks?.Strength_Unit_of_Measure;
    stock = ks?.stock;
    discount_percentage = ks?.discount_percentage;
  });

  const editProductList = () => {
    apiCall(`/wholesalerinventory`, "PATCH", token, {
      stock: editFormData?.stock ? editFormData?.stock : stock,
      Drug_Name: editFormData?.Drug_Name ? editFormData?.Drug_Name : Drug_Name,
      Strength_Unit_of_Measure: editFormData?.Strength_Unit_of_Measure
        ? editFormData?.Strength_Unit_of_Measure
        : Strength_Unit_of_Measure,
      discount_percentage: editFormData?.discount_percentage
        ? editFormData?.discount_percentage
        : discount_percentage,
      id: editFormData?.id,
    })
      .then((res) => {
        if (res?.statusCode == 400) {
          toast.error(res?.message);
        } else {
          toast.success(res?.message);
          setOpen(false);
          fetchInventory();
        }
      })
      .catch((err) => console.log(err));
  };
  const searchFn = async () => {
    try {
      if (searchKey.length) {
        const fetchData = await apiCall(
          `/search-wholesaler-inventory?search=${searchKey}&searchType=auto&pageNo=1&pageSize=10`,
          "GET",
          token
        );
        fetchData.data.rows = fetchData.data.rows.map((item) => {
          item.checked = false;
          return item;
        });
        setUpdated(true);
        setInvenoryItems(fetchData.data);
        if (fetchData.data?.rows?.length === 1) {
          setCount(0);
          return;
        }
        setCount(fetchData?.data?.count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontFamily: "Montserrat-Bold",
              letterSpacing: "0.16px",
              color: "#303030",
              opacity: 1,

              // lineHeight:"40px"
            }}
          >
            Product List &nbsp;
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontFamily: "Montserrat-Medium",
              letterSpacing: "0.16px",
              color: "#8A8A8A",
              opacity: 1,

              // lineHeight:"40px"
            }}
          >
            Dashboard &nbsp; Inventory &nbsp; Product List
          </Typography>
        </Box>
        <Paper
          sx={{
            bgcolor: "#FFFFFF",
            marginTop: "10px",
            padding: "23px",
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              //   padding: "10px",
              //   borderBottom: " 2px solid #E6EDFF",
              bgcolor: "#FFFFFF",
            }}
          >
            {showBulkDelete && (
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  //   width: "116px",
                  //   height: "32px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #303779",
                  borderRadius: "4px",
                  opacity: 1,
                  color: "#303779",
                  fontSize: "12px",

                  fontFamily: "Montserrat-Medium",
                  //   marginLeft: "10px",
                  //   "&:hover": {
                  //     background: "#3A63F3",
                  //   },
                }}
                size="small"
                onClick={bulkDelete}
              >
                Bulk Delete
              </Button>
            )}
            <TextField
              id="margin-none"
              placeholder="Search by Drug name and NDC"
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              value={searchKey}
              sx={{
                fontSize: "200px",
                "&.MuiTextField-root": {
                  bgcolor: "#FFFFFF",
                },
              }}
              inputProps={{ style: inputStyle }}
              InputProps={{
                sx: {
                  width: "320px",
                  height: "40px",
                  padding: "0px",

                  border: "1px solid #DCDCDC",
                  borderRadius: "20px",
                  opacity: 1,
                  input: {
                    "&::placeholder": {
                      color: "#BBBBBB",
                      opacity: "0.7",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Medium",
                    },
                  },
                },
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={searchFn}
                      disableElevation
                      disableRipple
                      sx={{
                        width: "849x",
                        height: "37px",

                        color: "#FFFFFF",

                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "none",
                        },
                      }}
                    >
                      <img src={search} style={{ color: "red" }} alt="" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  width: "80px",
                  height: "32px",

                  background: "#3A63F3 0% 0% no-repeat padding-box",
                  borderRadius: "4px",
                  opacity: 1,
                  color: "#FFFFFF",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                  marginLeft: "10px",
                  "&:hover": {
                    background: "#3A63F3",
                  },
                }}
                size="small"
                onClick={() => navigate("/layout/addproduct")}
              >
                Add New
              </Button>
              <Button
                onClick={() => {
                  importRef.current.click();
                }}
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  //   width: "116px",
                  //   height: "32px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid #303779",
                  borderRadius: "4px",
                  opacity: 1,
                  color: "#303779",
                  fontSize: "12px",
                  marginLeft: "60px",
                  fontFamily: "Montserrat-Medium",
                  //   marginLeft: "10px",
                  //   "&:hover": {
                  //     background: "#3A63F3",
                  //   },
                }}
                size="small"
              >
                <img src={upload_icon} alt="" />
                &nbsp;&nbsp; Import Items
              </Button>
              <input
                ref={importRef}
                type="file"
                multiple={false}
                style={{ display: "none" }}
                onChange={(e) => {
                  handleUpload(e);
                }}
              />
              {/* <Typography
                sx={{
                  color: "#303030",
                  fontSize: "13px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                Status:
              </Typography>
              &nbsp;
              <Typography
                sx={{
                  padding: "1px",
                  paddingLeft: "7px",
                  paddingRight: "7px",
                  bgcolor: "#E6EDFF",
                  color: "#54C885",
                  border: "1px solid #E6EDFF",
                  borderRadius: "2px",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                }}
              >
                Delivered
              </Typography> */}
            </Box>
          </Box>
          <TableContainer
            // component={Paper}
            sx={{ marginTop: "20px" }}
          >
            <Table
              sx={{
                minWidth: 650,
                "&.MuiTable-root": {
                  border: "1px solid #DCDCDC",
                },
              }}
              aria-label="simple table"
            >
              <TableHead
                sx={{
                  "& .MuiTableCell-head": {
                    bgcolor: "#303779",

                    // width: "3px",
                    // lineHeight: "5px",
                    padding: "3px",
                    // overflowX: "auto"
                  },
                }}
              >
                <TableRow>
                  <TableCell>
                    <input
                      type="checkbox"
                      style={{
                        width: "15px",
                        height: "30px",
                        paddingTop: "300px",

                        backgroundClolor: "#FFFFFF",
                        borderRadius: "4px",
                        opacity: 1,
                      }}
                      onChange={(e) => {
                        setAllChecked(e.target.checked);
                      }}
                      checked={allChecked}
                    />
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      letterSpacing: "0.12px",
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    NDC
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Product Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Strength
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: " 12px",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      letterSpacing: "0.12px",
                    }}
                  >
                    Dosage
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    MRP
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Stock
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Discount
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Montserrat-Medium",
                      fontSize: " 12px",

                      letterSpacing: "0.12px",
                    }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  "& .MuiTableCell-body": {
                    padding: "6px",
                  },
                }}
              >
                {inventoryItems?.rows?.map((item, i) => (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                    key={item.id}
                  >
                    <TableCell component="th" scope="row">
                      <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={(e) => {
                          handleCheckbox(e, item.id);
                        }}
                        style={{
                          width: "15px",
                          height: "30px",
                          paddingTop: "300px",

                          backgroundClolor: "#FFFFFF",
                          borderRadius: "4px",
                          opacity: 1,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {item.NDC_UPC_HRI}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {item.Drug_Name}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      Tablets
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {item.Strength_Unit_of_Measure}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {item.Dosage_Form}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      $ {item.unit__cost}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {item.stock}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        letterSpacing: "0.12px",
                        fontSize: " 12px",
                        color: "#303030",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {item.discount_percentage}%
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        // variant="contained"
                        // onClick={() => handleClick(id)}
                        sx={{
                          textTransform: "none",
                          // bgcolor: "#F6F7FA",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                          color: "#3A63F3",
                          borderRadius: "2px",
                        }}
                        size="small"
                        onClick={() => {
                          handleEdit(item);
                        }}
                      >
                        <img src={mode_edit} alt="" />
                      </Button>
                      {refresh && (
                        <>
                          <Dialog
                            onClose={handleClose}
                            aria-labelledby="customized-dialog-title"
                            open={open}
                            sx={{
                              "& .MuiPaper-root": {
                                width: "3000px",
                                height: "auto",
                                borderRadius: "12px",
                              },
                            }}
                          >
                            <DialogContent
                              sx={{
                                p: 4,
                              }}
                            >
                              <Container>
                                <Typography
                                  sx={{
                                    height: "29px",

                                    fontSize: " 20px",
                                    lineHeight: "30px",
                                    fontFamily: "Montserrat-Bold",
                                    letterSpacing: "0.24px",
                                    color: " #303030",
                                  }}
                                >
                                  Update Product
                                </Typography>

                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    mt: 2,
                                  }}
                                >
                                  <TextField
                                    // onChange={(e) => {
                                    //   setEditFormData((prev) => ({
                                    //     ...prev,
                                    //     Drug_Name: e.target.value,
                                    //   }));
                                    // }}
                                    onChange={handleProductEdit}
                                    id="outlined-basic"
                                    label="Drug Name"
                                    name="Drug_Name"
                                    variant="outlined"
                                    size="small"
                                    sx={{
                                      "& .MuiInputBase-root": {
                                        fontFamily: "Montserrat-Medium",
                                        color: "#303030",

                                        letterSpacing: "0.3",
                                      },
                                    }}
                                    InputLabelProps={{
                                      sx: {
                                        color: "#BBBBBB",
                                        fontSize: "13px",
                                        letterSpacing: "0.3",
                                        fontFamily: "Montserrat-Medium",
                                      },
                                    }}
                                    value={editFormData?.Drug_Name}
                                  />
                                  <TextField
                                    // onChange={(e) => {
                                    //   setEditFormData((prev) => ({
                                    //     ...prev,
                                    //     Strength: e.target.value,
                                    //   }));
                                    // }}
                                    onChange={handleProductEdit}
                                    value={
                                      editFormData?.Strength_Unit_of_Measure
                                    }
                                    id="outlined-basic"
                                    label="Strength"
                                    variant="outlined"
                                    name="Strength_Unit_of_Measure"
                                    size="small"
                                    sx={{
                                      "& .MuiInputBase-root": {
                                        fontFamily: "Montserrat-Medium",
                                        color: "#303030",

                                        letterSpacing: "0.3",
                                      },
                                    }}
                                    InputLabelProps={{
                                      sx: {
                                        color: "#BBBBBB",
                                        fontSize: "13px",
                                        letterSpacing: "0.3",
                                        fontFamily: "Montserrat-Medium",
                                      },
                                    }}
                                  />
                                </Box>

                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    mt: 2,
                                  }}
                                >
                                  <TextField
                                    // onChange={(e) => {
                                    //   setEditFormData((prev) => ({
                                    //     ...prev,
                                    //     stock: e.target.value,
                                    //   }));
                                    // }}
                                    onChange={handleProductEdit}
                                    value={editFormData?.stock}
                                    id="outlined-basic"
                                    label="Quantity"
                                    variant="outlined"
                                    size="small"
                                    name="stock"
                                    sx={{
                                      "& .MuiInputBase-root": {
                                        fontFamily: "Montserrat-Medium",
                                        color: "#303030",

                                        letterSpacing: "0.3",
                                      },
                                    }}
                                    InputLabelProps={{
                                      sx: {
                                        color: "#BBBBBB",
                                        fontSize: "13px",
                                        letterSpacing: "0.3",
                                        fontFamily: "Montserrat-Medium",
                                      },
                                    }}
                                  />
                                  <TextField
                                    // onChange={(e) => {
                                    //   setEditFormData((prev) => ({
                                    //     ...prev,
                                    //     discount_percentage: e.target.value,
                                    //   }));
                                    // }}
                                    sx={{
                                      "& .MuiInputBase-root": {
                                        fontFamily: "Montserrat-Medium",
                                        color: "#303030",
                                        // fontSize: "13px",
                                        letterSpacing: "0.3",
                                      },
                                    }}
                                    onChange={handleProductEdit}
                                    value={editFormData?.discount_percentage}
                                    id="outlined-basic"
                                    label="Discount"
                                    name="discount_percentage"
                                    variant="outlined"
                                    size="small"
                                    InputLabelProps={{
                                      sx: {
                                        color: "#BBBBBB",
                                        fontSize: "13px",
                                        letterSpacing: "0.3",
                                        fontFamily: "Montserrat-Medium",
                                      },
                                    }}
                                  />
                                </Box>
                                <Box
                                  component="form"
                                  sx={{
                                    "& > :not(style)": {
                                      marginLeft: "5px",
                                      mt: 2,
                                      width: "25ch",
                                    },
                                  }}
                                  noValidate
                                  autoComplete="off"
                                ></Box>
                                <Box sx={{ mt: 3, marginLeft: "3px" }}>
                                  <Button
                                    onClick={editProductList}
                                    sx={{
                                      textTransform: "none",
                                      bgcolor: "#3A63F3",
                                      width: "100px",
                                      height: "30px",

                                      background:
                                        "#3A63F3 0% 0% no-repeat padding-box",
                                      borderRadius: "4px",
                                      opacity: 1,
                                      color: "#FFFFFF",
                                      fontSize: "11px",
                                      fontFamily: "Mont-Light",
                                      "&:hover": {
                                        background: "#3A63F3",
                                      },
                                    }}
                                    size="small"
                                  >
                                    Update
                                  </Button>
                                  <Button
                                    sx={{
                                      textTransform: "none",
                                      bgcolor: "#FFFFFF",
                                      width: "50px",
                                      height: "20px",
                                      // border: "1px solid #3A63F3",
                                      marginLeft: "18px",
                                      // borderRadius: "4px",
                                      opacity: 1,
                                      color: "#3A63F3",
                                      fontSize: "13px",
                                      fontFamily: "Mont-Light",
                                      "&:hover": {
                                        background: "#FFFFFF",
                                      },
                                    }}
                                    size="small"
                                    onClick={handleClose}
                                  >
                                    Cancel
                                  </Button>
                                </Box>
                              </Container>
                            </DialogContent>
                          </Dialog>
                        </>
                      )}
                      <Button
                        // variant="contained"
                        onClick={() => deleteInventory(item.id)}
                        sx={{
                          textTransform: "none",
                          // bgcolor: "#F6F7FA",
                          fontSize: "11px",
                          fontFamily: "Montserrat-Medium",
                          color: "#3A63F3",
                          borderRadius: "2px",
                        }}
                        size="small"
                      >
                        <img src={delete_icon} alt="" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {inventoryItems?.rows?.length ? (
            <Pagination
              rowsperpage={10}
              count={parseInt(
                inventoryItems?.count % 10 >= 1
                  ? inventoryItems?.count / 10 + 1
                  : inventoryItems?.count / 10
              )}
              // count={3}

              sx={{
                justifyContent: "center",
                display: "flex",
                bottom: "0",
                marginTop: "10px",
              }}
              color="primary"
              page={pageno}
              onChange={handleChangeProducts}
            />
          ) : null}
        </Paper>
      </Container>
    </>
  );
}
