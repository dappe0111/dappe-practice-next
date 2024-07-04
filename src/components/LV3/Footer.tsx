import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  width: 100%;
  max-width: 1440px;
  padding: 0 32px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  algin-items: center;
  @media screen and (max-width: 599px) {
    padding: 0 16px;
  }
`;

const FooterTitle = styled.div`
  font-size: 16px;
`;

const Footer: React.FC = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{
          color: "#ffffff",
          backgroundColor: "#000000",
          position: "fixed",
          bottom: "0",
          zIndex: "9999",
        }}
      >
        <StyledToolbar>
          <FooterTitle>© 2024 tadahiko-nihei</FooterTitle>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Footer;
