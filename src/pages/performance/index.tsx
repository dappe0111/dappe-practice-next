import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import Link from "next/link";

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
  font-size: 64px;
  @media screen and (max-width: 599px) {
    font-size: 32px;
  }
`;

const ContentsBlock = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 599px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }
`;

const ContentsWrap = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const ContentsTitle = styled.p`
  font-size: 16px;
  transition: 0.4s;
  &:hover {
    text-decoration: none;
    opacity: 0.64;
  }
`;

export default function Performance() {
  return (
    <>
      <CommonMeta title="Performance" />
      <Header />
      <Main>
        <Block>
          <BlockTitle>Performance</BlockTitle>
        </Block>
        <ContentsBlock>
          <ContentsWrap>
            <Link href="/performance/001">
              <ContentsTitle>●いつか帰るところ</ContentsTitle>
            </Link>
          </ContentsWrap>
          <ContentsWrap>
            <Link href="/performance/002">
              <ContentsTitle>●名探偵コナンメインテーマ</ContentsTitle>
            </Link>
          </ContentsWrap>
        </ContentsBlock>
      </Main>
    </>
  );
}
