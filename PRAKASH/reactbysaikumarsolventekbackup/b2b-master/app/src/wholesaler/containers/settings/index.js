import React from "react";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import eyeOf from "../../../assets/images/eye-off.svg";
import edit from "../../../assets/images/edit.svg";
import eye from "../../../assets/images/eye.svg";

import useCustomSettings from "./util";

export default function Settings() {
  const {
    handleSubmitAddress,
    handleChangeAddress,

    addressCancel,

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
    setNewPassword,
    setConfirmPassword,
    setOldPassword,
  } = useCustomSettings();
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };

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
          Settings
        </Typography>
        <Paper sx={{ width: "900px", height: "auto", marginTop: "18px", p: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid #F3F3FF",
            }}
          >
            <Typography
              sx={{
                letterSpacing: "0.28px",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold",
                opacity: 1,
                color: "#303030",
              }}
            >
              PERSONAL DETAILS
            </Typography>
            <Button onClick={edited}>{open ? <img src={edit} /> : null}</Button>
          </Box>
          {open ? (
            <>
              <Box
                sx={{
                  marginTop: "24px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <FormControl>
                  <Typography
                    sx={{
                      color: "#69747F",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Medium",
                      paddingBottom: "4px",
                    }}
                  >
                    Full Name
                  </Typography>
                  <TextField
                    name="fullName"
                    value={getAllDetailes?.fullName}
                    variant="standard"
                    // inputProps={{ style: inputStyle }}
                    type="text"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        height: 36,
                        width: 200,
                        bgcolor: "#F3F7FF",
                        borderRadius: "5px",
                        paddingLeft: "20px",
                        // border: "1px solid #F3F7FF",
                        color: " #303030",
                        fontSize: "13px",
                        letterSpacing: "0.3",
                        fontFamily: "Montserrat-Bold",
                      },
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Typography
                    sx={{
                      color: "#69747F",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Medium",
                      paddingBottom: "4px",
                    }}
                  >
                    Mobile No
                  </Typography>
                  <TextField
                    name="MobileNo"
                    variant="standard"
                    value={getAllDetailes?.mobileNo}
                    type="text"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        height: 36,
                        width: 200,
                        bgcolor: "#F3F7FF",

                        borderRadius: "5px",
                        // border: "1px solid #F3F7FF",
                        border: "none",
                        color: " #303030",
                        fontSize: "13px",
                        paddingLeft: "20px",
                        letterSpacing: "0.3",
                        fontFamily: "Montserrat-Bold",
                      },
                    }}
                  />
                </FormControl>
                <FormControl>
                  <Typography
                    sx={{
                      color: "#69747F",
                      fontSize: "12px",
                      fontFamily: "Montserrat-Medium",
                      paddingBottom: "4px",
                    }}
                  >
                    Email Address
                  </Typography>
                  <TextField
                    name="email"
                    disabled
                    value={getAllDetailes?.email}
                    variant="standard"
                    // inputProps={{ style: inputStyle }}
                    type="text"
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        height: 36,
                        width: 200,
                        bgcolor: "#F3F7FF",

                        borderRadius: "5px",
                        // border: "1px solid #F3F7FF",
                        color: " #303030",
                        fontSize: "13px",
                        letterSpacing: "0.3",
                        paddingLeft: "20px",
                        fontFamily: "Montserrat-Bold",
                      },
                    }}
                  />
                </FormControl>
              </Box>
              <Box sx={{ marginTop: "20px" }}></Box>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmiPersonalDetailes}>
                <Box
                  sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Full Name
                    </Typography>
                    <TextField
                      name="fullName"
                      onChange={handlePersonalEdit}
                      inputProps={{ style: inputStyle }}
                      value={
                        ispersonalDetailesChanged?.fullName
                          ? personalDetailes?.fullName
                          : getAllDetailes?.fullName
                      }
                      type="text"
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",
                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Mobile No
                    </Typography>
                    <TextField
                      name="mobileNo"
                      onChange={handlePersonalEdit}
                      inputProps={{ style: inputStyle }}
                      value={
                        ispersonalDetailesChanged?.mobileNo
                          ? personalDetailes?.mobileNo
                          : getAllDetailes?.mobileNo
                      }
                      type="text"
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",
                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Email Address
                    </Typography>
                    <TextField
                      name="email"
                      disabled
                      onChange={handlePersonalEdit}
                      inputProps={{ style: inputStyle }}
                      value={getAllDetailes?.email}
                      type="text"
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",
                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      bgcolor: "#3A63F3",
                      width: "100px",
                      height: "30px",

                      background: "#3A63F3 0% 0% no-repeat padding-box",
                      borderRadius: "4px",
                      opacity: 1,
                      color: "#FFFFFF",
                      fontSize: "13px",
                      fontFamily: "Mont-Light",
                      "&:hover": {
                        background: "#3A63F3",
                      },
                    }}
                    onClick={handleSubmiPersonalDetailes}
                    size="small"
                  >
                    Update
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      bgcolor: "#FFFFFF",
                      width: "100px",
                      height: "30px",
                      border: "1px solid #3A63F3",
                      marginLeft: "18px",
                      borderRadius: "4px",
                      opacity: 1,
                      color: "#3A63F3",
                      fontSize: "13px",
                      fontFamily: "Mont-Light",
                      "&:hover": {
                        background: "#FFFFFF",
                      },
                    }}
                    size="small"
                    onClick={handleCancelPersonalDetailes}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </>
          )}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid #F3F3FF",
              marginTop: "70px",
            }}
          >
            <Typography
              sx={{
                letterSpacing: "0.28px",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold",
                opacity: 1,
                color: "#303030",
              }}
            >
              CHANGE PASSWORD
            </Typography>
           
          </Box>
          <Box
            sx={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <FormControl>
              <Typography
                sx={{
                  color: "#69747F",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                  paddingBottom: "4px",
                }}
              >
                Old Password
              </Typography>
              <TextField
               
                onChange={handlePassword}
                name="oldPassword"
                value={passwordChange?.oldPassword}
                inputProps={{ style: inputStyle }}
                
                type={oldPassword ? "text" : "password"}
                InputProps={{
                  sx: {
                    height: 36,
                    width: 200,
                   
                    bgcolor: "!important #F3F7FF",
                   
                    borderRadius: "4px",

                    border: "1px solid #F3F7FF",
                    color: " #303030",
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Bold",
                  },
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        disableRipple
                        sx={{
                          boxShadow: "none",
                         
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "none",
                          },
                          
                        }}
                        onClick={() => {
                          setOldPassword(!oldPassword);
                        }}
                      >
                        {oldPassword ? (
                          <img src={eye} alt="" />
                        ) : (
                          <img src={eyeOf} alt="" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <Typography
                sx={{
                  color: "#69747F",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                  paddingBottom: "4px",
                }}
              >
                New Password
              </Typography>
              <TextField
                
                name="newPassword"
                onChange={handlePassword}
                value={passwordChange?.newPassword}
                
                inputProps={{ style: inputStyle }}
                
                type={newPassword ? "text" : "password"}
                InputProps={{
                  sx: {
                    height: 36,
                    width: 200,
              
                    bgcolor: "!important #F3F7FF",
                    
                    borderRadius: "4px",

                    border: "1px solid #F3F7FF",
                    color: " #303030",
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Bold",
                  },
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        disableRipple
                        sx={{
                          boxShadow: "none",
                         
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "none",
                          },
                         
                        }}
                        onClick={() => {
                          setNewPassword(!newPassword);
                        }}
                      >
                        {newPassword ? (
                          <img src={eye} alt="" />
                        ) : (
                          <img src={eyeOf} alt="" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl>
              <Typography
                sx={{
                  color: "#69747F",
                  fontSize: "12px",
                  fontFamily: "Montserrat-Medium",
                  paddingBottom: "4px",
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                
                name="confirmPassword"
                value={passwordChange?.confirmPassword}
           
                onChange={handlePassword}
              
                inputProps={{ style: inputStyle }}
               
                type={confirmPassword ? "text" : "password"}
                InputProps={{
                  sx: {
                    height: 36,
                    width: 200,
                   
                    bgcolor: "!important #F3F7FF",
                   
                    borderRadius: "4px",

                    border: "1px solid #F3F7FF",
                    color: " #303030",
                    fontSize: "13px",
                    letterSpacing: "0.3",
                    fontFamily: "Montserrat-Bold",
                  },
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        disableRipple
                        sx={{
                          boxShadow: "none",
                         
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "none",
                          },
                         
                        }}
                        onClick={() => {
                          setConfirmPassword(!confirmPassword);
                        }}
                      >
                        {confirmPassword ? (
                          <img src={eye} alt="" />
                        ) : (
                          <img src={eyeOf} alt="" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>

          <Box
            sx={{
              marginTop: "24px",
             
            }}
          >
            {passwordChange?.oldPassword ||
            passwordChange?.newPassword ||
            passwordChange?.confirmPassword ? (
              <>
                <Button
                  sx={{
                    textTransform: "none",
                    bgcolor: "#3A63F3",
                    width: "100px",
                    height: "30px",
                    background: "#3A63F3 0% 0% no-repeat padding-box",
                    borderRadius: "4px",
                    opacity: 1,
                    color: "#FFFFFF",
                    fontSize: "13px",
                    fontFamily: "Mont-Light",
                    "&:hover": {
                      background: "#3A63F3",
                    },
                  }}
                  onClick={changePassword}
                  size="small"
                >
                  Update
                </Button>
                <Button
                  sx={{
                    textTransform: "none",
                    bgcolor: "#FFFFFF",
                    width: "100px",
                    height: "30px",
                    border: "1px solid #3A63F3",
                    marginLeft: "18px",
                    borderRadius: "4px",
                    opacity: 1,
                    color: "#3A63F3",
                    fontSize: "13px",
                    fontFamily: "Mont-Light",
                    "&:hover": {
                      background: "#FFFFFF",
                    },
                  }}
                  size="small"
                  onClick={changePasswordCancel}
                 
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button
                  sx={{
                    textTransform: "none",
                   
                    width: "100px",
                    height: "30px",
                 
                    borderRadius: "4px",
                    

                    fontSize: "13px",
                    fontFamily: "Mont-Light",
                    "&:hover": {
                      background: "#3A63F3",
                    },
                    "&:disabled": {
                      background: "#3A63F3!important",
                      color: "#FFFFFF",
                      opacity: "0.4",

                      
                    },
                  }}
                  onClick={changePassword}
                  size="small"
                  disabled
                >
                  Update
                </Button>
                <Button
                  sx={{
                    textTransform: "none",
                   
                    width: "100px",
                    height: "30px",

                    marginLeft: "18px",
                    borderRadius: "4px",
                    opacity: 1,
                   
                    fontSize: "13px",
                    fontFamily: "Mont-Light",
                    "&:hover": {
                      background: "#FFFFFF",
                    },
                    "&:disabled": {
                      background: "#FFFFFF!important",
                      color: "#3A63F3",
                      border: "1px solid #3A63F3",
                      opacity: "0.2",

                     
                    },
                  }}
                  size="small"
                  disabled
                  onClick={changePasswordCancel}

           
                >
                  Cancel
                </Button>
              </>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "2px solid #F3F3FF",
              marginTop: "60px",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                letterSpacing: "0.28px",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold",
                opacity: 1,
                color: "#303030",
              }}
            >
              STORE DETAILS
            </Typography>
            {getAllDetailes?.phoneNumber ||
            getAllDetailes?.zipcode ||
            getAllDetailes?.state ||
            getAllDetailes?.city ||
            getAllDetailes?.address ||
            getAllDetailes?.storeName ? (
              <Button onClick={addressEdited}>
                {" "}
                <img src={edit} alt="" />
              </Button>
            ) : null}
          </Box>
          {getAllDetailes?.phoneNumber ||
          getAllDetailes?.zipcode ||
          getAllDetailes?.state ||
          getAllDetailes?.city ||
          getAllDetailes?.address ||
          getAllDetailes?.storeName ? (
            <>
              <div style={{ display: editedView ? "none" : "block" }}>
                <Box
                  sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Name
                    </Typography>
                    <TextField
                      value={getAllDetailes?.storeName}
                      variant="standard"
                      name="storeName"
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "#F3F7FF",
                          borderRadius: "5px",
                          paddingLeft: "20px",

                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Address
                    </Typography>
                    <TextField
                      name="address"
                      value={getAllDetailes?.address}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "#F3F7FF",
                          borderRadius: "5px",

                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          paddingLeft: "20px",

                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store City
                    </Typography>
                    <TextField
                      name="city"
                      type="text"
                      value={getAllDetailes?.city}
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "#F3F7FF",
                          borderRadius: "5px",

                          // border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                          paddingLeft: "20px",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store State
                    </Typography>
                    <TextField
                      name="state"
                      type="text"
                      variant="standard"
                      value={getAllDetailes?.state}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "#F3F7FF",
                          borderRadius: "5px",

                          // border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                          paddingLeft: "20px",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Zip
                    </Typography>
                    <TextField
                      name="zipcode"
                      value={getAllDetailes?.zipcode}
                      type="text"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "#F3F7FF",
                          borderRadius: "5px",
                          paddingLeft: "20px",

                          // border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Phone
                    </Typography>
                    <TextField
                      name="phoneNumber"
                      type="number"
                      variant="standard"
                      value={getAllDetailes?.phoneNumber}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "#F3F7FF",
                          borderRadius: "5px",
                          paddingLeft: "20px",
                          // border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleSubmitAddress}>
                <Box
                  sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Name
                    </Typography>
                    <TextField
                      value={storeDetailes?.storeName}
                      onChange={handleChangeAddress}
                      inputProps={{ style: inputStyle }}
                      name="storeName"
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Address
                    </Typography>
                    <TextField
                      onChange={handleChangeAddress}
                      value={storeDetailes?.address}
                      name="address"
                      inputProps={{ style: inputStyle }}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store City
                    </Typography>
                    <TextField
                      name="city"
                      type="text"
                      onChange={handleChangeAddress}
                      value={storeDetailes?.city}
                      inputProps={{ style: inputStyle }}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store State
                    </Typography>
                    <TextField
                      name="state"
                      type="text"
                      inputProps={{ style: inputStyle }}
                      onChange={handleChangeAddress}
                      value={storeDetailes?.state}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Zip
                    </Typography>
                    <TextField
                      onChange={handleChangeAddress}
                      inputProps={{ style: inputStyle }}
                      type="text"
                      name="zipcode"
                      value={storeDetailes?.zipcode}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Phone
                    </Typography>
                    <TextField
                      name="phoneNumber"
                      type="number"
                      value={storeDetailes?.phoneNumber}
                      onChange={handleChangeAddress}
                      inputProps={{ style: inputStyle }}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      bgcolor: "#3A63F3",
                      width: "100px",
                      height: "30px",

                      background: "#3A63F3 0% 0% no-repeat padding-box",
                      borderRadius: "4px",
                      opacity: 1,
                      color: "#FFFFFF",
                      fontSize: "13px",
                      fontFamily: "Mont-Light",
                      "&:hover": {
                        background: "#3A63F3",
                      },
                    }}
                    onClick={handleSubmitAddress}
                    size="small"
                  >
                    Add address
                  </Button>
                </Box>
              </form>
            </>
          )}

          {editedView ? (
            <>
              <form onSubmit={handleSubmiEdited}>
                <Box
                  sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Name
                    </Typography>
                    <TextField
                      value={
                        isAddressChanged?.storeName
                          ? storeDetailes?.storeName
                          : getAllDetailes?.storeName
                      }
                      onChange={handleEdited}
                      inputProps={{ style: inputStyle }}
                      name="storeName"
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Address
                    </Typography>
                    <TextField
                      name="address"
                      value={
                        isAddressChanged?.address
                          ? storeDetailes?.address
                          : getAllDetailes?.address
                      }
                      onChange={handleEdited}
                      inputProps={{ style: inputStyle }}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store City
                    </Typography>
                    <TextField
                      name="city"
                      type="text"
                      onChange={handleEdited}
                      inputProps={{ style: inputStyle }}
                      value={
                        isAddressChanged?.city
                          ? storeDetailes?.city
                          : getAllDetailes?.city
                      }
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box
                  sx={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store State
                    </Typography>
                    <TextField
                      name="state"
                      type="text"
                      onChange={handleEdited}
                      value={
                        isAddressChanged?.state
                          ? storeDetailes?.state
                          : getAllDetailes?.state
                      }
                      inputProps={{ style: inputStyle }}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Zip
                    </Typography>
                    <TextField
                      onChange={handleEdited}
                      type="text"
                      name="zipcode"
                      value={
                        isAddressChanged?.zipcode
                          ? storeDetailes?.zipcode
                          : getAllDetailes?.zipcode
                      }
                      inputProps={{ style: inputStyle }}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,
                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                  <FormControl>
                    <Typography
                      sx={{
                        color: "#69747F",
                        fontSize: "12px",
                        fontFamily: "Montserrat-Medium",
                        paddingBottom: "4px",
                      }}
                    >
                      Store Phone
                    </Typography>
                    <TextField
                      name="phoneNumber"
                      type="number"
                      onChange={handleEdited}
                      value={
                        isAddressChanged?.phoneNumber
                          ? storeDetailes?.phoneNumber
                          : getAllDetailes?.phoneNumber
                      }
                      inputProps={{ style: inputStyle }}
                      InputProps={{
                        sx: {
                          height: 36,
                          width: 200,

                          bgcolor: "!important #F3F7FF",
                          borderRadius: "4px",

                          border: "1px solid #F3F7FF",
                          color: " #303030",
                          fontSize: "13px",
                          letterSpacing: "0.3",
                          fontFamily: "Montserrat-Bold",
                        },
                      }}
                    />
                  </FormControl>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Button
                    sx={{
                      textTransform: "none",
                      bgcolor: "#3A63F3",
                      width: "100px",
                      height: "30px",

                      background: "#3A63F3 0% 0% no-repeat padding-box",
                      borderRadius: "4px",
                      opacity: 1,
                      color: "#FFFFFF",
                      fontSize: "13px",
                      fontFamily: "Mont-Light",
                      "&:hover": {
                        background: "#3A63F3",
                      },
                    }}
                    onClick={handleSubmiEdited}
                    size="small"
                  >
                    Update
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      bgcolor: "#FFFFFF",
                      width: "100px",
                      height: "30px",
                      border: "1px solid #3A63F3",
                      marginLeft: "18px",
                      borderRadius: "4px",
                      opacity: 1,
                      color: "#3A63F3",
                      fontSize: "13px",
                      fontFamily: "Mont-Light",
                      "&:hover": {
                        background: "#FFFFFF",
                      },
                    }}
                    size="small"
                    onClick={addressCancel}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </>
          ) : null}
        </Paper>
      </Container>
    </>
  );
}
