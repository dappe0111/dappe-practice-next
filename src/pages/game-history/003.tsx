import GameHistoryPage from "@/components/LV3/GameHistoryPage";
import Layout from "@/components/Templates/Base";

export default function GameHistory() {
  const contents = {
    title: "ゼルダの伝説 時のオカリナ",
    seller: "任天堂",
    model: "NINTENDO64",
    releaseDate: "1999.11.21",
    comment: `●概要：<br />言わずと知れたNINTENDO64の名作タイトルです。<br />それまで2D見下ろし型だったゼルダシリーズが3Dになり、様々なアクションのバリエーション増加やイベントの演出強化がなされ、大きくゲーム体験の向上に一役買っています。また今日の3Dゲームの礎を築いたタイトルの1つでもあります。<br />劇中でオカリナがフィーチャーされたり、各場面で使用されるBGMも名曲揃いです。<br />様々な収集要素やミニゲームも多数あり、やりこみ要素も結構な数あります。<br />一部ゲーム初心者に厳しい部分もありますが、ゼルダシリーズをプレイしていない方にも十分おすすめできる作品です。`,
    merit: `●良いと思った点：<br />・Z注目システムによる爽快な3Dアクション<br />・その当時ではかなり広めで冒険している感覚を味わえるゲームフィールド<br />・ダンジョンの謎解きに正解した時の爽快感`,
    demerit: `●良くないと思った点：<br />・一部トラウマ要素あり（敵キャラクターのリーデッドや超難関の水の神殿など）`,
    link: "https://www.nintendo.co.jp/n01/n64/software/zelda/index.html",
  };
  return (
    <Layout title="GameHistory">
      <GameHistoryPage contents={contents} />
    </Layout>
  );
}
