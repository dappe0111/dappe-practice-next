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

const ContentsBlock = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContentsTitle = styled.div`
  font-size: 32px;
`;

const ContentsDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  text-indent: -1em;
  padding-left: 1em;
`;

const UpdateBlock = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default function Performance() {
  return (
    <>
      <CommonMeta title="Performance" />
      <Header />
      <Main>
        <ContentsBlock>
          <ContentsTitle>名探偵コナンメインテーマ</ContentsTitle>
          <ContentsDescription>●作曲者：大野克夫</ContentsDescription>
          <ContentsDescription>
            ●出典：アニメ「名探偵コナン」
          </ContentsDescription>
          <ContentsDescription>
            ●コメント：
            <br />
            言わずと知れた、アニメのオープニング等で流れる有名な楽曲です。
            <br />
            現在では様々なアレンジバージョンが存在していて、歌になった事もあります。（初期の頃の劇場版が懐かしい...）
            <br />
            <br />
            今回はイメージ通りアルトサックスの音色を使用し、メイン旋律のみを演奏しました。
            <br />
            まだまだテクニックが足りなく、格好よく演奏は出来ないですが、雰囲気だけでも味わってみてください。
          </ContentsDescription>
        </ContentsBlock>
        <UpdateBlock>音源貼り付け箇所</UpdateBlock>
        <ButtonWrap>
          <Link href="/performance">
            <Button>
              <ButtonText>BACK</ButtonText>
            </Button>
          </Link>
        </ButtonWrap>
      </Main>
    </>
  );
}
