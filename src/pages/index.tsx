import styled from "styled-components";
import Link from "next/link";
import Layout from "@/components/Templates/Base";

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

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LinkText = styled.div`
  font-size: 16px;
  transition: 0.4s;
  &:hover {
    text-decoration: none;
    opacity: 0.64;
  }
`;

const getBlockStyle = (category?: string) => {
  switch (category) {
    case "top":
      return `width: 100%; gap: 16px;`;
    case "performance":
      return `background-image: linear-gradient(to top,rgba(0, 0, 0, 0.7) 0%,
          rgba(255, 255, 225, 0.7) 100%),url(/bg-block-1.jpg);background-size: cover;background-position: bottom;`;
    case "game":
      return `background-image: linear-gradient(to top,rgba(0, 0, 0, 0.7) 0%,
          rgba(255, 255, 225, 0.7) 100%),url(/bg-block-2.jpg);background-size: cover;background-position: center;`;
    case "hello":
      return `background-image: url(/bg-block-4.jpg);background-size: cover;background-position: center; color: #ffffff;`;
    default:
      return ``;
  }
};

export default function Home() {
  return (
    <Layout title="TOP">
      <Block category="top">
        <BlockTitle>dappe-practice</BlockTitle>
        <Description>
          過去の実装経験を活かした記事や、趣味にまつわる話題まで
          <br />
          ジャンルを問わず、格納していきます。
        </Description>
      </Block>
      <BlockWrap>
        <Block category="top">
          <BlockTitle>NEWS</BlockTitle>
          <LinkWrap>
            <LinkText>
              <Link href="/game-history/003">
                2024.06.24　GameHistoryの「ゼルダの伝説
                時のオカリナ」を公開しました。
              </Link>
            </LinkText>
            <LinkText>
              <Link href="/performance/004">
                2024.06.16　Performanceの「LOVEマシーン」を公開しました。
              </Link>
            </LinkText>
            <LinkText>
              <Link href="/hello-project/c-ute/001">
                2024.06.04　HelloProjectの「悲しきヘブン (Single
                Version)」を公開しました。
              </Link>
            </LinkText>
          </LinkWrap>
        </Block>
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
        <Block category="hello">
          <BlockTitle>Hello! Project</BlockTitle>
          <Description>
            Hello!
            Project楽曲の魅力を伝えるページです。新旧問わず、音楽的に面白い作りの楽曲やおすすめの楽曲などをピックアップして紹介します。
          </Description>
          <ButtonWrap>
            <Link href="/hello-project">
              <Button>
                <ButtonText>MORE</ButtonText>
              </Button>
            </Link>
          </ButtonWrap>
        </Block>
      </BlockWrap>
    </Layout>
  );
}
