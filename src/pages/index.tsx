import Head from "next/head";
import Header from "@/components/LV3/Header";
import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>dappe-practice</title>
        <meta name="description" content="練習用ページです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Main>
        <Block>
          <p>Performance</p>
        </Block>
        <Block>
          <p>Game History</p>
        </Block>
        <Block>
          <p>Coming Soon...</p>
        </Block>
      </Main>
    </>
  );
}
