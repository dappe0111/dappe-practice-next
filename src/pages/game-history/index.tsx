import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";

const Main = styled.main`
  height: 100vh;
  margin-top: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 599px) {
    margin-top: 56px;
  }
`;

const Block = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 599px) {
    padding: 16px;
    gap: 16px;
  }
`;

const BlockTitle = styled.div`
  font-size: 36px;
`;

export default function GameHistory() {
  return (
    <>
      <CommonMeta title="GameHistory" />
      <Header />
      <Main>
        <Block>
          <BlockTitle>GameHistory</BlockTitle>
          <p>準備中...</p>
        </Block>
      </Main>
    </>
  );
}
