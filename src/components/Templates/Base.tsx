import Header from "@/components/LV3/Header";
import Footer from "@/components/LV3/Footer";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import React, { ReactNode } from "react";

const Main = styled.main`
  max-width: 1440px;
  margin: 64px auto;
  padding-bottom: 32px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 599px) {
    margin: 56px auto;
    padding-bottom: 16px;
  }
`;

type Props = {
  children: ReactNode;
  title?: string;
};

const BaseTemplate: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <CommonMeta title={title} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default BaseTemplate;
