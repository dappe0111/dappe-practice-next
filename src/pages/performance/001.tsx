import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import PerformancePage from "@/components/LV3/PerformancePage";

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

export default function Performance() {
  const contents = {
    title: "いつか帰るところ",
    composer: "植松伸夫",
    source: "ファイナルファンタジーIX",
    comment: `●コメント：<br />ファイナルファンタジーIXのオープニングで流れるBGMです。
            <br />
            原曲はメインの旋律とサブの旋律の絶妙な掛け合いがあり、とても幻想的で素敵な楽曲です。
            <br />
            <br />
            今回はオーボエの音色を使用し、メイン旋律のみを演奏しました。`,
    videoId: "xW3CefYY4vA",
  };
  return (
    <>
      <CommonMeta title="Performance" />
      <Header />
      <Main>
        <PerformancePage contents={contents} />
      </Main>
    </>
  );
}
