import React, { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import ImageList from "@mui/material/ImageList";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import forward from "../../assets/images/wholesalerImages/arrow_forward.svg";
import {
  Badge,
  badgeClasses,
  Collapse,
  InputAdornment,
  InputBase,
  MenuList,
  Paper,
  TextField,
} from "@mui/material";
import { Link, Outlet, useNavigate } from "react-router-dom";
import downarroe from "../../assets/images/downarrow.svg";
import search from "../../assets/images/wholesalerImages/search icon.svg";
import menuicon from "../../assets/images/wholesalerImages/menu icon.svg";
import notification_icon from "../../assets/images/wholesalerImages/Icon_notifications.svg";

import { LOGOUT } from "../../redux/actions/user.action";

import downarroe_4 from "../../assets/images/wholesalerImages/arrow_right_4.svg";

import { useDispatch, useSelector } from "react-redux";
import { apiCall } from "../../services/apis";

export const Items = [
  {
    sidebarName: "Dashboard",
    icon: require("../../assets/images/wholesalerImages/Dashboard icon.svg")
      .default,
    pathName: "WholeSalerDashboardPart",
  },
  {
    sidebarName: "Sales Order",
    icon: require("../../assets/images/wholesalerImages/Sale order icon.svg")
      .default,
    pathName: "salesorder",
  },
  {
    sidebarName: "Inventory",

    icon: require("../../assets/images/wholesalerImages/Inventory icon.svg")
      .default,
    pathName: "productlist",
    subMenu: [
      {
        sidebarName: "Product List",
        icon: require("../../assets/images/wholesalerImages/Inventory icon.svg")
          .default,
        pathName: "productlist",
      },
      {
        sidebarName: "Add New",
        icon: require("../../assets/images/wholesalerImages/Inventory icon.svg")
          .default,
        pathName: "addproduct",
      },
    ],
  },
  {
    sidebarName: "Reports",

    icon: require("../../assets/images/wholesalerImages/Reports icon.svg")
      .default,
    pathName: "reports",
  },
  {
    sidebarName: "Settings",

    icon: require("../../assets/images/wholesalerImages/settings icon.svg")
      .default,
    pathName: "settings",
  },
  {
    sidebarName: "FAQ's",

    icon: require("../../assets/images/wholesalerImages/faq icon.svg").default,
    pathName: "faqs",
  },
  {
    sidebarName: "Contact Us",

    icon: require("../../assets/images/wholesalerImages/contact icon.svg")
      .default,
    pathName: "contactUs",
  },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} )`,
  [theme.breakpoints.up("lg")]: {
    width: `calc(${theme.spacing(9)} )`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "end",

  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - 238px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - 73px)`,
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Layout() {
  //   const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(true);
  const [set1, setSet] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.userReducer);
  const opendown = Boolean(anchorEl);
  const handleClicksubmenu = () => {
    setSet(!set1);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerOpen = () => {
    setOpen(false);
  };
  const handleDrawerClose = () => {
    setOpen(true);
  };

  const logoutFn = async () => {
    await apiCall("/logout", "DELETE", token);
    dispatch(LOGOUT());
    localStorage.clear();
  };

  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px white inset" };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          // position="absolute"
          open={open}
          sx={{ bgcolor: "#FFFFFF" }}
        >
          <Toolbar
            sx={{
              pr: "24px",
              // paddingLeft:
              //     open ? "90px":"190px"

              // position:"fixed" // keep right padding when drawer closed
            }}
          >
            {open ? (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  "&:hover": {
                    bgcolor: "#F3F3FF",
                  },
                }}
              >
                {/* <ImageList> */}
                <img src={menuicon} alt="" />
                {/* </ImageList> */}
              </IconButton>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerClose}
                edge="start"
                sx={{
                  marginRight: 5,
                  hover: "none",
                  "&:hover": {
                    bgcolor: "#F3F3FF",
                  },
                }}
              >
                {/* <ImageList
                  sx={{
                    "&$selected:hover": {
                      backgroundColor: "purple",
                    },
                  }}
                > */}
                <img src={menuicon} alt="" />
                {/* </ImageList> */}
              </IconButton>
            )}

            {/* <TextField
              
              id="margin-none"
              
              inputProps={{ style: inputStyle }}
              InputProps={{
                sx: {
                  width: "320px",
                  height: "40px",

                  background: " #FFFFFF 0% 0% no-repeat padding-box",

                  border: "1px solid #E6EDFF",
                  borderRadius: "4px",
                  opacity: 1,
                },
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      disableelevation
                      disableRipple
                      sx={{
                        bgcolor: "#FFFFFF",
                        borderRadius: "0px 3px 3px 0px",
                        width: "849x",
                        height: "37px",
                        margin: "-14px",
                    
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "none",
                        },
                      
                      }}
                      
                    >
                      <img src={search} alt="" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            /> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                position: "fixed",
                right: "54px",
                marginLeft: open ? "80px" : "290px",
              }}
            >
              <Badge
                // max="99"
                // badgeContent=""
                sx={{
                  marginRight: "20px",
                  "& .MuiBadge-badge": { fontSize: "9px", width: "1px" },
                  // ml: 3,
                  // bgcolor: "#F3F3FF",
                  // border: "9px solid #F3F3FF",
                  // borderRadius: "16px",
                  cursor: "pointer",
                }}
                color="error"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                // onClick={() => navigate("/dashboard/cartPage")}
              >
                <img src={notification_icon} style={{ width: "100%" }} alt="" />
              </Badge>
              <IconButton
                id="basic-button"
                size="large"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={opendown ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  "&.MuiIconButton-root": {
                    padding: "0px",

                    "&:hover": {
                      // background: "red",
                    },
                  },
                }}
              >
                {opendown ? (
                  <Box>
                    <Typography
                      sx={{
                        bgcolor: "#FFFFFF",

                        width: "auto",
                        height: "auto",
                        // border: "1px solid #D1D1D1",
                        // borderRadius: "4px",
                        // padding: "8px",
                        paddingLeft: "10px",
                        paddingRight: "10px",

                        paddingTop: "3px",
                        paddingBottom: "3px",
                        color: "#313F4D",
                        fontSize: "13px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      {user && user?.wholesaler.fullName
                        ? user?.wholesaler.fullName
                        : "UserName"}
                      <Typography component="span" sx={{ marginLeft: "20px" }}>
                        <img
                          src={downarroe}
                          style={{
                            color: "#313F4D",
                            transform: "rotate(180deg)",
                          }}
                          alt=""
                        />
                      </Typography>
                    </Typography>
                  </Box>
                ) : (
                  <Box>
                    <Typography
                      sx={{
                        bgcolor: "#FFFFFF",

                        width: "auto",
                        height: "auto",
                        // border: "1px solid #D1D1D1",
                        textAlign: "center",
                        // borderRadius: "4px",
                        paddingLeft: "10px",
                        paddingRight: "10px",

                        paddingTop: "3px",
                        paddingBottom: "3px",
                        color: "#313F4D",
                        fontSize: "13px",
                        fontFamily: "Montserrat-Bold",
                      }}
                    >
                      {user && user?.wholesaler.fullName
                        ? user?.wholesaler.fullName
                        : "UserName"}
                      <Typography component="span" sx={{ marginLeft: "20px" }}>
                        <img
                          src={downarroe}
                          style={{ color: "#313F4D" }}
                          alt=""
                        />
                      </Typography>
                    </Typography>
                  </Box>
                )}
              </IconButton>
              <Menu
                // inputProps={{
                //   MenuProps: { disableScrollLock: true },
                // }}
                id="basic-menu"
                anchorEl={anchorEl}
                disableScrollLock={true}
                open={opendown}
                onClose={handleClose}
                MenuListProps={{
                  MenuProps: { disableScrollLock: true },
                  "aria-labelledby": "basic-button",
                }}
                PaperProps={{
                  style: {
                    marginTop: "2px",
                    backgroundColor: "#1F255E",
                  },
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    "&:hover": {
                      background: "#11154D",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: "15px",
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    {" "}
                    My account
                  </Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    "&:hover": {
                      background: "#11154D",
                    },
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#FFFFFF",
                      fontSize: "15px",
                      fontFamily: "Montserrat-Medium",
                    }}
                    to="/"
                    onClick={logoutFn}
                  >
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{ bgcolor: "#1F255E", height: "100vh" }}
        >
          <DrawerHeader sx={{ bgcolor: "#1D2336" }}>
            {open ? (
              <ImageList sx={{ width: "210px" }}>
                {/* <img src={medexWhite} /> */}
                <Typography
                  sx={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: "20px",
                    color: "#FFFFFF",
                    width: "180px",
                  }}
                >
                  US PHARMACY
                  <Typography
                    component="span"
                    sx={{
                      fontFamily: "Montserrat-Bold",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      marginRight: "40px",
                    }}
                  >
                    {" "}
                    WHOLESALER
                  </Typography>
                </Typography>
              </ImageList>
            ) : (
              <ImageList>
                {/* <img src={Logo2} /> */}
                {/* <img src={newlogo} /> */}
                <Typography
                  sx={{
                    fontFamily: "Montserrat-Bold",
                    fontSize: "20px",
                    color: "#FFFFFF",
                    textAlign: "center",
                    // width: "180px",
                  }}
                >
                  US
                </Typography>
              </ImageList>
            )}
            {/* <IconButton onClick={handleDrawerClose}> */}
            {/* {theme.direction === "rtl" ? ( */}
            {/* <ChevronRightIcon /> */}

            {/* ) : ( */}
            {/* <ChevronLeftIcon /> */}
            {/* )} */}
            {/* </IconButton> */}
          </DrawerHeader>
          {/* <Divider /> */}
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            sx={{ bgcolor: "#1D2336", height: "100vh" }}
          >
            {Items.map((text) => {
              return (
                <>
                  <Link
                    style={{ textdecoration: "none", color: "#1D2336" }}
                    to={`${text?.pathName}`}
                  >
                    {text?.subMenu != null ? (
                      <div>
                        <ListItem
                          key={text}
                          disablePadding
                          sx={{
                            display: "block",
                            color: "#FFFFFF",
                            textDecoration: "none",
                            font: "normal normal 200 13px/18px Montserrat",
                            "& MuiTypography-root": {
                              font: "normal normal 900 13px/18px Montserrat",
                            },
                          }}
                        >
                          <ListItemButton
                            onClick={handleClicksubmenu}
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? "initial" : "center",
                              px: 2.5,
                            }}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 1 : "auto",
                                // mt:!open && -9,
                                justifyContent: "center",
                              }}
                            >
                              <img src={text.icon} alt="" />

                              {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                            </ListItemIcon>

                            <ListItemText
                              primary={text.sidebarName}
                              primaryTypographyProps={{
                                fontSize: "13px",
                                fontFamily: "Montserrat-Medium",
                                textDecoration: "none",
                              }}
                              sx={{
                                opacity: open ? 1 : 0,
                              }}
                            />
                            {set1 ? (
                              <img
                                src={downarroe_4}
                                style={{
                                  color: "#313F4D",
                                  transform: "rotate(90deg)",
                                }}
                                alt=""
                              />
                            ) : (
                              <img src={downarroe_4} alt="" />
                            )}
                          </ListItemButton>
                        </ListItem>
                        <Collapse in={set1} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {text?.subMenu?.map((sem) => {
                              return (
                                <>
                                  <Link
                                    style={{
                                      textdecoration: "none",
                                      color: "#1D2336",
                                    }}
                                    to={`${sem?.pathName}`}
                                  >
                                    <ListItemButton
                                      sx={{
                                        minHeight: 48,
                                        justifyContent: open
                                          ? "initial"
                                          : "center",
                                        px: 2.5,
                                      }}

                                      // onClick={() => alert("jju")}
                                    >
                                      <ListItemIcon
                                        sx={{
                                          minWidth: 0,
                                          mr: open ? 1 : "auto",
                                          // mt:!open && -9,
                                          justifyContent: "center",
                                        }}
                                      >
                                        <img
                                          src={forward}
                                          style={{ color: "#313F4D" }}
                                          alt=""
                                        />
                                      </ListItemIcon>
                                      <ListItemText
                                        primary={sem?.sidebarName}
                                        primaryTypographyProps={{
                                          fontSize: "12px",
                                          fontFamily: "Montserrat-Medium",
                                          textdecoration: "none",
                                          color: "#FFFFFF",
                                        }}
                                        sx={{
                                          opacity: open ? 1 : 0,
                                        }}
                                      />
                                    </ListItemButton>
                                  </Link>
                                </>
                              );
                            })}
                          </List>
                        </Collapse>
                      </div>
                    ) : (
                      <ListItem
                        key={text}
                        disablePadding
                        sx={{
                          display: "block",
                          color: "#FFFFFF",
                          textDecoration: "none",
                          font: "normal normal 200 13px/18px Montserrat",
                          "& MuiTypography-root": {
                            font: "normal normal 900 13px/18px Montserrat",
                          },
                        }}
                      >
                        <ListItemButton
                          // onClick={handleClicksubmenu}
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 1 : "auto",
                              // mt:!open && -9,
                              justifyContent: "center",
                            }}
                          >
                            <img src={text.icon} alt="" />

                            {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                          </ListItemIcon>

                          <ListItemText
                            primary={text.sidebarName}
                            primaryTypographyProps={{
                              fontSize: "13px",
                              fontFamily: "Montserrat-Medium",
                              textDecoration: "none",
                            }}
                            sx={{
                              opacity: open ? 1 : 0,
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    )}
                  </Link>
                </>
              );
            })}
          </List>
          {/* <Divider /> */}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#F3F3FF" }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
