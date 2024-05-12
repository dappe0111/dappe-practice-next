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
  height: 640px;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    padding: 16px;
    gap: 16px;
    height: 240px;
  }
`;

const BlockTitle = styled.div<{ noAction?: boolean }>`
  font-size: 64px;
  @media screen and (max-width: 599px) {
    font-size: 32px;
  }
  ${({ noAction }) =>
    !noAction &&
    `
    transition: 0.4s;
    &:hover {
      text-decoration: none;
      opacity: 0.64;
    }
  `}
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

export default function Home() {
  return (
    <>
      <CommonMeta title="TOP" />
      <Header />
      <Main>
        <Block>
          <Link href="/performance">
            <BlockTitle>Performance</BlockTitle>
          </Link>
          <Description>
            AKAIのEWI SOLOを使って、様々なジャンルの曲を練習しています。
            <br />
            EWI SOLOの多種多様なサウンドをお楽しみください。
          </Description>
        </Block>
        <Block>
          <Link href="/game-history">
            <BlockTitle>Game History</BlockTitle>
          </Link>
          <Description>
            今まで私が生きてきた中でプレイしてきたTVゲームを振り返る場です。
            <br />
            ネタバレがない範囲で、所感やコメントを残しています。
          </Description>
        </Block>
        <Block>
          <BlockTitle noAction>Coming Soon...</BlockTitle>
          <Description>公開までしばらくお待ちください。</Description>
        </Block>
      </Main>
    </>
  );
}
