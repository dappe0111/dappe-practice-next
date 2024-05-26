import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import React, { ReactNode } from "react";

const Main = styled.main`
  max-width: 1440px;
  height: calc(100vh - 64px);
  margin: 64px auto 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 599px) {
    margin-top: 56px;
    height: calc(100vh - 56px);
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
    </>
  );
};

export default BaseTemplate;
