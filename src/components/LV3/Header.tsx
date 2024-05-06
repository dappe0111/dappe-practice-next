import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";
import styled from "styled-components";

const IconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 46px;
`;

const LinkIcon = styled(Link)`
  display: flex;
  padding: 0;
`;

const HomeButton = styled(IconButton)`
  display: flex;
  padding: 0;
`;

const HeaderTitle = styled.div`
  font-size: 16px;
  margin-left: 8px;
`;

const Header: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{ color: "#ffffff", backgroundColor: "#5f5d5b" }}
      >
        <Toolbar>
          <IconWrap>
            <HomeButton color="inherit">
              <LinkIcon href="/">
                <HomeIcon />
              </LinkIcon>
            </HomeButton>
            <HeaderTitle>dappe-practice</HeaderTitle>
          </IconWrap>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
