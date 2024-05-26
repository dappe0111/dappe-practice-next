import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import PerformancePage from "@/components/LV3/PerformancePage";

const Main = styled.main`
  max-width: 1440px;
  height: 100vh;
  margin: 64px auto 0;
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
    title: "名探偵コナンメインテーマ",
    composer: "大野克夫",
    source: "アニメ「名探偵コナン」",
    comment: `●コメント：
      <br />
      言わずと知れた、アニメのオープニング等で流れる有名な楽曲です。
      <br />
      現在では様々なアレンジバージョンが存在していて、歌になった事もあります。（初期の頃の劇場版が懐かしい...）
      <br />
      <br />
      今回はイメージ通りアルトサックスの音色を使用し、メイン旋律のみを演奏しました。
      <br />
      途中音がよれていますが、人前で演奏している想定で、一発撮りにしました。
      <br />
      まだまだテクニックが足りなく、格好よく演奏は出来ないですが、雰囲気だけでも味わってみてください。
    `,
    videoId: "SqeLhpPZY9o",
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
