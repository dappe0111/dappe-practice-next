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
  height: 640px;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlockTitle = styled.div`
  font-size: 36px;
`;

export default function Home() {
  return (
    <>
      <CommonMeta title="TOP" />
      <Header />
      <Main>
        <Block>
          <BlockTitle>Performance</BlockTitle>
          <p>説明文説明文</p>
        </Block>
        <Block>
          <BlockTitle>GameHistory</BlockTitle>
          <p>説明文説明文</p>
        </Block>
        <Block>
          <BlockTitle>Coming Soon...</BlockTitle>
          <p>説明文説明文</p>
        </Block>
      </Main>
    </>
  );
}
