import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import GameHistoryPage from "@/components/LV3/GameHistoryPage";

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
    title: "ファイナルファンタジーIX",
    seller: "スクウェア",
    model: "PlayStation",
    releaseDate: "2000.07.07",
    comment: `●概要：<br />言わずと知れた「FFシリーズ」の第9作目で、PS時代では最後のナンバリングタイトルです。<br /><br />前作までのリアル等身のキャラクター・近代的な舞台とは打って変わって、SFC時代のような3頭身・中世ファンタジーの舞台を採用しています。<br /><br />本作は「原点回帰」を1つの大きい軸として、過去シリーズのオマージュネタやBGMのアレンジ採用などが行われています。なのでシリーズファンも思わずニヤッとしてしまうような演出も多々あります。<br /><br />ただし1つのゲーム作品としての完成度も高いので、初見でも難なくその世界観に入れると思います。この世界観にマッチした音楽もたまりません。<br /><br />またこの児童文学のような世界観に反して、作中で大きいテーマとして扱われるのが「命とは？生きることとは？」となっています。登場キャラクターが抱える悩み・葛藤・不自由さなどに各々が、もしくは仲間の力を借りながらも1つ1つ落とし所を見つけていき解決していく様は、どこか現実世界の自分自身と照らし合わせられるような感覚を覚えます。EDは涙なしでは見られません。（今でもうるっときます・・・。）<br /><br />今ではリマスター版も販売されており、遊びやすくなった状態で最新機種でも遊べるので、ぜひ手に取ってみてもらいたいタイトルです。`,
    merit: `●良いと思った点：<br />・バトルの戦法に幅の広がる「アビリティシステム」<br />・思わずのめり込んでしまう「ミニゲーム」<br />・随所で流れる美麗な「ムービーシーン」`,
    demerit: `●良くないと思った点：<br />・フィールドからバトル画面へ切り替わる際の時間、テンポが遅い<br />・物語後半の展開がやや駆け足気味で付いていけなくなる人も出てきそう<br />・主人公への感情移入がしにくい（プレイする人による。自分はビビの方が親さを感じました。）`,
    link: "https://www.jp.square-enix.com/game/detail/ff9/",
  };
  return (
    <>
      <CommonMeta title="Performance" />
      <Header />
      <Main>
        <GameHistoryPage contents={contents} />
      </Main>
    </>
  );
}
