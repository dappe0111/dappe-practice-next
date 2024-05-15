import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";

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

const VideoWrap = styled.div`
  width: 100%;
  max-width: 540px;
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
          <ContentsTitle>いつか帰るところ</ContentsTitle>
          <ContentsDescription>●作曲者：植松伸夫</ContentsDescription>
          <ContentsDescription>
            ●出典：ファイナルファンタジーIX
          </ContentsDescription>
          <ContentsDescription>
            ●コメント：
            <br />
            ファイナルファンタジーIXのオープニングで流れるBGMです。
            <br />
            原曲はメインの旋律とサブの旋律の絶妙な掛け合いがあり、とても幻想的で素敵な楽曲です。
            <br />
            <br />
            今回はオーボエの音色を使用し、メイン旋律のみを演奏しました。
          </ContentsDescription>
        </ContentsBlock>
        <UpdateBlock>
          ※再生すると音声が流れます。音量にご注意ください。
          <VideoWrap>
            <YouTubeEmbed videoid="xW3CefYY4vA" />
          </VideoWrap>
        </UpdateBlock>
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
