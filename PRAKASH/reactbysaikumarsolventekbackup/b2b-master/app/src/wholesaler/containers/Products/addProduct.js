import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { apiCall } from "../../../services/apis";
import { useSelector } from "react-redux";

export default function AddProduct() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.userReducer);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    apiCall("/wholesalerinventory", "POST", token, data)
      .then((res) => {
        toast.success("Added successfully");
        navigate("/layout/productlist");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  console.log(watch("example"));

  return (
    <>
      <Container>
        <Typography
          sx={{
            height: "29px",

            fontSize: " 24px",
            lineHeight: "30px",
            fontFamily: "Montserrat-Bold",
            letterSpacing: "0.24px",
            color: " #303030",
          }}
        >
          Add Product
        </Typography>

        <Paper
          sx={{
            width: "1000px",
            height: "auto",
            marginTop: "18px",
            p: 4,
            "& .MuiPaper-root": {
              boxShadow: "none",
            },
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
            >
              <TextField
                {...register("ndc", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Please enter a valid NDC.",
                  },
                })}
                label="NDC"
                variant="outlined"
                error={Boolean(errors.ndc)}
                helperText={errors.ndc && errors.ndc.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("Drug_Name", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Please enter a valid Drug Name.",
                  },
                })}
                label="Drug Name"
                variant="outlined"
                error={Boolean(errors.Drug_Name)}
                helperText={errors.Drug_Name && errors.Drug_Name.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("stock", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid Stock.",
                  },
                })}
                label="Stock"
                variant="outlined"
                error={Boolean(errors.stock)}
                helperText={errors.stock && errors.stock.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("unit__cost", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid Unit Cost.",
                  },
                })}
                label="Unit Cost"
                variant="outlined"
                error={Boolean(errors.unit__cost)}
                helperText={errors.unit__cost && errors.unit__cost.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
            >
              <TextField
                {...register("discount_percentage", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid  Discount.",
                  },
                })}
                label="Discount"
                variant="outlined"
                error={Boolean(errors.discount_percentage)}
                helperText={
                  errors.discount_percentage &&
                  errors.discount_percentage.message
                }
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("manufacturer", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Please enter a valid Manufacturer.",
                  },
                })}
                label="Manufacturer"
                variant="outlined"
                error={Boolean(errors.manufacturer)}
                helperText={errors.manufacturer && errors.manufacturer.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("Strength", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid  Strength.",
                  },
                })}
                label="Strength"
                variant="outlined"
                error={Boolean(errors.Strength)}
                helperText={errors.Strength && errors.Strength.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("weighted_average_cost", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid  Weighted Average Cost.",
                  },
                })}
                label="Weighted Average Cost"
                variant="outlined"
                error={Boolean(errors.weighted_average_cost)}
                helperText={
                  errors.weighted_average_cost &&
                  errors.weighted_average_cost.message
                }
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}
            >
              <TextField
                {...register("Generic_Product_Identifier", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message:
                      "Please enter a valid  Generic Product Identifier.",
                  },
                })}
                label="Generic Product Identifier"
                variant="outlined"
                error={Boolean(errors.Generic_Product_Identifier)}
                helperText={
                  errors.Generic_Product_Identifier &&
                  errors.Generic_Product_Identifier.message
                }
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("New_Drug_Descriptor_Identifier", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Please enter a valid  Description.",
                  },
                })}
                label="Description"
                variant="outlined"
                error={Boolean(errors.New_Drug_Descriptor_Identifier)}
                helperText={
                  errors.New_Drug_Descriptor_Identifier &&
                  errors.New_Drug_Descriptor_Identifier.message
                }
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("Dosage_Form", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[A-Za-z\s]+$/i,
                    message: "Please enter a valid  Description.",
                  },
                })}
                label="Dosage Form"
                variant="outlined"
                error={Boolean(errors.Dosage_Form)}
                helperText={errors.Dosage_Form && errors.Dosage_Form.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
              <TextField
                {...register("Package_Code", {
                  required: { value: true, message: "This field is required" },
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid  Package Code.",
                  },
                })}
                label="Package Code"
                variant="outlined"
                error={Boolean(errors.Package_Code)}
                helperText={errors.Package_Code && errors.Package_Code.message}
                id="outlined-basic"
                size="small"
                InputLabelProps={{
                  sx: {
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Medium",
                  },
                }}
                FormHelperTextProps={{
                  style: {
                    fontFamily: "Montserrat-Medium",
                    fontSize: "11px",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: 3, marginLeft: "3px" }}>
              <Button
                type="submit"
                sx={{
                  textTransform: "none",
                  bgcolor: "#3A63F3",
                  width: "100px",
                  height: "30px",

                  background: "#3A63F3 0% 0% no-repeat padding-box",
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
                Add
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
                onClick={() => navigate("/layout/productlist")}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </>
  );
}
