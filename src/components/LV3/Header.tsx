import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{ color: "#ffffff", backgroundColor: "#5f5d5b" }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit">
            <Link href="/">
              <HomeIcon />
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
