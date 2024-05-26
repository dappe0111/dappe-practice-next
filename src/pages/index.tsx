import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import Link from "next/link";

const Main = styled.main`
  max-width: 1440px;
  margin: 64px auto 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 599px) {
    margin-top: 56px;
  }
`;

const BlockWrap = styled.main`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 599px) {
    flex-direction: column;
  }
`;

const Block = styled.div<{ category?: string }>`
  width: 50%;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    padding: 16px;
    gap: 16px;
    width: 100%;
  }
  ${({ category }) => getBlockStyle(category)}
`;

const BlockTitle = styled.div`
  font-size: 64px;
  @media screen and (max-width: 599px) {
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const ButtonWrap = styled.div`
  width: 100%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  min-width: 160px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5f5d5b;
  border-radius: 4px;
  transition: 0.4s;
  &:hover {
    text-decoration: none;
    opacity: 0.64;
  }
`;

const ButtonText = styled.div`
  font-size: 32px;
  color: #ffffff;
`;

const getBlockStyle = (category?: string) => {
  switch (category) {
    case "top":
      return `width: 100%`;
    case "performance":
      return `background-image: linear-gradient(to top,rgba(0, 0, 0, 0.7) 0%,
          rgba(255, 255, 225, 0.7) 100%),url(/bg-block-1.jpg);background-size: cover;background-position: bottom;`;
    case "game":
      return `background-image: linear-gradient(to top,rgba(0, 0, 0, 0.7) 0%,
          rgba(255, 255, 225, 0.7) 100%),url(/bg-block-2.jpg);background-size: cover;background-position: center;`;
    default:
      return ``;
  }
};

export default function Home() {
  return (
    <>
      <CommonMeta title="TOP" />
      <Header />
      <Main>
        <Block category="top">
          <BlockTitle>dappe-practice</BlockTitle>
          <Description>
            過去の実装経験を活かした記事や、趣味にまつわる話題まで
            <br />
            ジャンルを問わず、格納していきます。
          </Description>
        </Block>
        <BlockWrap>
          <Block category="performance">
            <BlockTitle>Performance</BlockTitle>
            <Description>
              AKAIのEWI SOLOを使って、様々なジャンルの曲を練習しています。EWI
              SOLOの多種多様なサウンドをお楽しみください。
            </Description>
            <ButtonWrap>
              <Link href="/performance">
                <Button>
                  <ButtonText>MORE</ButtonText>
                </Button>
              </Link>
            </ButtonWrap>
          </Block>
          <Block category="game">
            <BlockTitle>Game History</BlockTitle>
            <Description>
              今まで私が生きてきた中でプレイしてきたTVゲームを振り返る場です。ネタバレがない範囲で、所感やコメントを残しています。
            </Description>
            <ButtonWrap>
              <Link href="/game-history">
                <Button>
                  <ButtonText>MORE</ButtonText>
                </Button>
              </Link>
            </ButtonWrap>
          </Block>
          <Block>
            <BlockTitle>Technic</BlockTitle>
            <Description>公開までしばらくお待ちください。</Description>
          </Block>
          <Block>
            <BlockTitle>Hello! Project</BlockTitle>
            <Description>公開までしばらくお待ちください。</Description>
          </Block>
          <Block category="top">
            <BlockTitle>Coming Soon...</BlockTitle>
            <Description>公開までしばらくお待ちください。</Description>
          </Block>
        </BlockWrap>
      </Main>
    </>
  );
}
