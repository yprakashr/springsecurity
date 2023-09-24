import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import newlogo from "../assets/images/newlogo.svg";
import downarroe from "../assets/images/downarrow.svg";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import ImageList from "@mui/material/ImageList";
import iconMetro from "../assets/images/Icon metro-menu.svg";
import "../assets/images/css/authStyles/paginate.css";
import { Badge, InputAdornment, TextField } from "@mui/material";
import medexWhite from "./../assets/images/medexWhite.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cart from "../assets/images/cart.svg";
import { Link, Outlet, useMatch, useNavigate } from "react-router-dom";
import search from "../assets/images/search_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../redux/actions/user.action";
import { apiCall } from "../services/apis";

export const Items = [
  {
    sidebarName: "My Profile",
    icon: require("../assets/images/Profile.svg").default,
    pathName: "myprofile",
  },
  {
    sidebarName: "My Orders",
    icon: require("../assets/images/Orders.svg").default,
    pathName: "myorders",
  },
  {
    sidebarName: "Invoices",

    icon: require("../assets/images/Icon awesome-file-invoice.svg").default,
    pathName: "allinvoices",
  },
  {
    sidebarName: "Credit Line",

    icon: require("../assets/images/Icon awesome-file-invoice-dollar.svg")
      .default,
    pathName: "creditline",
  },
  {
    sidebarName: "Back Order",

    icon: require("../assets/images/Back order.svg").default,
    pathName: "backorder",
    textDecoration: "none",
    // backOrderLength:length,
  },
  {
    sidebarName: "Support",

    icon: require("../assets/images/support.svg").default,
    pathName: "support",
  },
  {
    sidebarName: "Terms & Conditions",

    icon: require("../assets/images/Terms & Conditions.svg").default,
    pathName: "termsandconditions",
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

export default function Dashboard({ onSearch, ...props }) {
  const navigate = useNavigate();
  const [searchKey, setSearchKey] = useState(undefined);
  const { user, token } = useSelector((state) => state.userReducer);
  const { totalQuantity } = useSelector((state) => state.cartReducer);
  const backOrders = useSelector((state) => state.backOrderReducer);

  Items[4].backorderLength = backOrders.length;
  Items[4].backgroundColor = "#3A63F3";

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const opendown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutFn = async () => {
    await apiCall("/logout", "DELETE", token);
    dispatch(LOGOUT());
    localStorage.clear();
  };
  const match = useMatch("/dashboard/searchpage");

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(false);
  };

  const handleDrawerClose = () => {
    setOpen(true);
  };

  const searchHandle = async (event) => {
    const value = event.currentTarget.value;
    if (!value) onSearch(undefined);

    const searchKey = value ? value : undefined;
    if (searchKey && searchKey.length < 2) onSearch(searchKey);
    setSearchKey(searchKey);
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
                <img src={iconMetro} />
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
                <img src={iconMetro} />
                {/* </ImageList> */}
              </IconButton>
            )}
            {match ? (
              <TextField
                // id="outlined-basic"
                id="margin-none"
                // label="Outlined"
                // variant="outlined"
                onChange={searchHandle}
                autoFocus
                inputProps={{ style: inputStyle }}
                InputProps={{
                  sx: {
                    width: "600px",
                    height: "34px",

                    background: " #FFFFFF 0% 0% no-repeat padding-box",

                    border: "1px solid #A5A5A5",
                    borderRadius: "4px",
                    opacity: 1,
                  },
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        disableRipple
                        sx={{
                          boxShadow: "none",
                          bgcolor: "#3A63F3",
                          borderRadius: "0px 3px 3px 0px",
                          width: "449x",
                          height: "auto",
                          margin: "-14px",
                          // "&.hover": { bgcolor: "none"}
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "none",
                          },
                          // paddingRight:"70px"
                        }}
                        onClick={() => onSearch(searchKey)}
                      >
                        <img src={search} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            ) : null}
            {/* <InputBase
              placeholder="Search"
              sx={{
                width: "640px",
                height: "34px",
            
                background: " #FFFFFF 0% 0% no-repeat padding-box",
            
                border: "1px solid #A5A5A5",
                borderRadius: "4px",
                opacity: 1,
              }}
            /> */}
            {/* <Typography
              color="primary"
              sx={{ paddingRight: open ? "500px" : "500px" }}
            >
              njnkjjknj
            </Typography> */}
            <Box
              sx={{
                display: "flex",
                position: "fixed",
                right: "54px",
                marginLeft: open ? "80px" : "290px",
              }}
            >
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
                      background: "red",
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
                        border: "1px solid #D1D1D1",
                        borderRadius: "4px",
                        padding: "8px",
                        color: "#313F4D",
                        fontSize: "13px",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {user && user?.retailer.fullName
                        ? user?.retailer.fullName
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
                        border: "1px solid #D1D1D1",
                        borderRadius: "4px",
                        padding: "8px",
                        color: "#313F4D",
                        fontSize: "13px",
                        fontFamily: "Montserrat-Medium",
                      }}
                    >
                      {user && user?.retailer.fullName
                        ? user?.retailer.fullName
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
                id="basic-menu"
                disableScrollLock={true}
                anchorEl={anchorEl}
                open={opendown}
                onClose={handleClose}
                MenuListProps={{
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
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#FFFFFF",
                      fontSize: "15px",
                      fontFamily: "Montserrat-Medium",
                    }}
                    to="/dashboard/myprofile"
                  >
                    My account
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    "&:hover": {
                      background: "#11154D",
                    },
                  }}
                >
                  {" "}
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
              {/* <Typography
                sx={
                  {
                 
                  }
                }
              >
                <Button
                  id="basic-button"
                  aria-controls={visible ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  variant="text"
                  aria-expanded={visible ? "true" : undefined}
                  onClick={handleClick}
                  sx={{
                    background: "#FFFFFF 0% 0% no-repeat padding-box",
                    border: "1px solid #D1D1D1",
                    borderRadius: "4px",
                    width: "120px",
                    height: "36px",
                    textTransform: "none",
                    color: "#313F4D",
                    fontSize: "13px",
                    fontFamily: "Montserrat-Medium",
                  }}
                >
                  {userInfo && userInfo?.user?.retailer.fullName
                    ? userInfo?.user?.retailer.fullName
                    : "UserName"}
                
                  <IconButton sx={{}}>
                    <img
                      src={arrowforward}
                      style={{
                        backgroundColor: "#313F4D",
                        marginLeft: "9px",
                        transform: "rotate(90deg)",
                        width: "10px",
                      }}
                    />
                  </IconButton>
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={visible}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Paper sx={{ bgcolor: "#1F255E" }}>
                    <MenuList
                      sx={{
                        "&.MuiMenu-list": {
                          padding: "19988px",
                         
                        },
                      }}
                    >
                     
                      <MenuItem sx={{ color: "#FFFFFF" }} onClick={handleClose}>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#FFFFFF",
                            fontSize: "15px",
                            fontFamily: "Montserrat-Medium",
                          }}
                          to="/dashboard/myprofile"
                        >
                          My account
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#FFFFFF",
                            fontSize: "15px",
                            fontFamily: "Montserrat-Medium",
                          }}
                          to="/"
                          onClick={logout}
                        >
                          Logout
                        </Link>
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Menu>
              </Typography> */}
              <Badge
                // max="99"
                badgeContent={totalQuantity}
                sx={{
                  "& .MuiBadge-badge": { fontSize: "9px" },
                  ml: 3,
                  bgcolor: "#F3F3FF",
                  border: "9px solid #F3F3FF",
                  borderRadius: "16px",
                  cursor: "pointer",
                }}
                color="error"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                onClick={() => navigate("/dashboard/cartPage")}
              >
                <img src={cart} style={{ width: "22px" }} />
              </Badge>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{ bgcolor: "#1F255E", height: "100vh" }}
        >
          <DrawerHeader sx={{ bgcolor: "#1F255E" }}>
            {open ? (
              <Link to="homepage">
                <ImageList>
                  <img src={medexWhite} />
                </ImageList>
              </Link>
            ) : (
              <ImageList>
                {/* <img src={Logo2} /> */}
                <img src={newlogo} />
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
          <List sx={{ bgcolor: "#1F255E", height: "100vh" }}>
            {Items.map((text, i) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${text?.pathName}`}
                  key={i}
                >
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
                        <img src={text.icon} />

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
                      <div>
                        <span
                          style={{
                            height: "19px",
                            width: "20px",
                            backgroundColor: text?.backgroundColor,
                            borderRadius: "50%",
                            display: "inline-block",
                            paddingLeft: "5px",
                            fontSize: "13px",
                            fontFamily: "Montserrat-Medium",
                          }}
                        >
                          {text.backorderLength}
                        </span>

                        {/* <Typography
                            sx={{
                              backgroundColor: text?.backgroundColor,
                              borderBottomColor: "#3A63F3",
                              borderRadius: "100%",
                            }}
                          >
                            {text.backorderLength}
                          </Typography> */}
                      </div>
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
          </List>
          {/* <Divider /> */}
          {/* <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "#F3F3FF" }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
      <footer
        style={{
          backgroundColor: "#E6EDFF",
          fontSize: "13px",
          fontFamily: "Montserrat-Medium",
          color: "#313F4D",
          textAlign: open ? "center" : "center",
          padding: "10px",
        }}
      >
        © US Pharmacy 2023 | All Right Reserved
      </footer>
    </>
  );
}
