import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <AppBar
      id="AppBar"
      sx={{ background: "transparent", boxShadow: "none", padding: "15px" }}
      position="static"
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <TextField
          variant="outlined"
          id="Search"
          label="search"
          sx={{
            color: "#fff",
            bordeRadius: "40px",
            background: "#08315C",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#fff" }} />
              </InputAdornment>
            ),
          }}
        />
        <Avatar
          sx={{ width: 65, height: 65, marginLeft: "-20px" }}
          alt="Cindy Baker"
          src="/2.jpg"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
