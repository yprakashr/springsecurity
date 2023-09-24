import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import search from "../assets/images/search_icon.svg";
export default function Homepage() {
  const inputStyle = { WebkitBoxShadow: "0 0 0 1000px #F3F3FF inset" };

  return (
    <>
      <Box sx={{ margin: "170px" }}>
        <Link to="/dashboard/searchpage">
          <TextField
            // id="outlined-basic"
            id="margin-none"
            // label="Outlined"
            // variant="outlined"
            // onChange={searchHandle}
            // inputProps={{ style: inputStyle }}
            InputProps={{
              sx: {
                width: "600px",
                height: "34px",

                background: " #FFFFFF 0% 0% no-repeat padding-box",

                // border: "1px solid #A5A5A5",
                border: "1px solid #3A63F3",
                borderRadius: "4px",
                opacity: 1,
              },
              endAdornment: (
                <InputAdornment>
                  <Box component="span" disableElevation>

                  </Box>
                  <IconButton
                    disableRipple
                    sx={{
                      boxShadow: 'none',
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
                  // onClick={() => onSearch(searchKey)}
                  >
                    <img src={search} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Link>
      </Box>
    </>
  );
}
