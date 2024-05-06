import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import styled from "styled-components";

const IconWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const LinkIcon = styled(Link)`
  width: 24px;
  height: auto;
  display: flex;
  padding: 0;
`;

const HomeButton = styled(IconButton)`
  display: flex;
  width: 24px;
  padding: 0;
`;

const HomeIcon = styled.img`
  width: 24px;
`;

const HeaderTitle = styled.div`
  font-size: 16px;
  margin-left: 16px;
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
                <HomeIcon src="/main-icon.svg" alt="" />
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
