import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
const Header = () => {
  
  // const handleLogout = () => {
	// 	localStorage.removeItem("token");
	// 	window.location.reload();
	// };
  
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/login" label="logout" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
