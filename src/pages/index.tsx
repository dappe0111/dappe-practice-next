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
  justify-content: center;
  align-items: center;
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

const Description = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;

const ButtonWrap = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 32px;
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

export default function Home() {
  return (
    <>
      <CommonMeta title="TOP" />
      <Header />
      <Main>
        <Block>
          <BlockTitle>Performance</BlockTitle>
          <Description>
            AKAIのEWI SOLOを使って、様々なジャンルの曲を練習しています。
            <br />
            EWI SOLOの多種多様なサウンドをお楽しみください。
          </Description>
          <ButtonWrap>
            <Link href="/performance">
              <Button>
                <ButtonText>MORE</ButtonText>
              </Button>
            </Link>
          </ButtonWrap>
        </Block>
        <Block>
          <BlockTitle>Game History</BlockTitle>
          <Description>
            今まで私が生きてきた中でプレイしてきたTVゲームを振り返る場です。
            <br />
            ネタバレがない範囲で、所感やコメントを残しています。
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
          <BlockTitle>Coming Soon...</BlockTitle>
          <Description>公開までしばらくお待ちください。</Description>
        </Block>
      </Main>
    </>
  );
}
