import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
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
