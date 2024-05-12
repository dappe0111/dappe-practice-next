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

const ContentsBlock = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContentsTitle = styled.div`
  font-size: 32px;
`;

export default function Performance() {
  return (
    <>
      <CommonMeta title="Performance" />
      <Header />
      <Main>
        <ContentsBlock>
          <ContentsTitle>名探偵コナンメインテーマ</ContentsTitle>
        </ContentsBlock>
      </Main>
    </>
  );
}
