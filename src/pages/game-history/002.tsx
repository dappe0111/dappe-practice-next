import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import GameHistoryPage from "@/components/LV3/GameHistoryPage";

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

export default function GameHistory() {
  const contents = {
    title: "牧場物語2",
    seller: "ビクターインタラクティブソフトウエア",
    model: "NINTENDO64",
    releaseDate: "1999.02.05",
    comment: `●概要：<br />タイトルは「2」ですが、牧場物語シリーズ3作目のタイトルです。<br />前作までがSFC・GBだったのが今作からNINTENDO64に移行し、3D主体となったことが大きな変化です。<br />前作までである程度シリーズの方向性や主軸は完成していましたが、グラフィックの向上と共にイベントの数もパワーアップしています。<br />3年間の限られた期間の中で祖父の牧場をかつてのような活気のある、幸せいっぱいの牧場にすることが目標になります。<br />ちなみにこの条件を満たせなかった場合は、バッドエンドになって牧場を手放さないといけなくなります。（クリアすればそのままプレイ可能です。）<br /><br />本作の魅力は何といっても、色々な層にはまりそうな、各種ヒロイン候補たちです。<br />・明るく活発で動物が大好きなグリーン牧場の一人娘、ラン<br />・お花が大好きで可愛らしいけどちょっと子供っぽい花屋の娘、ポプリ<br />・お菓子が大好きで近所の子供達にも優しく接してくれるケーキ屋の、エリィ<br />・町長の一人娘で読書が大好きなメガネの女の子、マリー<br />・都会に憧れているちょっとツンデレな酒場のアルバイト、カレン<br />この恋愛候補の中から将来のパートナーとなる子を選んで恋愛することが可能です。<br /><br />将来的には結婚したり、子供も産まれるのでそういった恋愛要素が好きでプレイする方も多いです。<br />後は自宅を改築して大きくしたり、夜な夜な道具を振り回してレベルアップしたり、ただひたすら釣りをしたりと色々な楽しみ方があります。<br /><br />現在はNintendo Switch Onlineの追加パックに加入していれば遊べるので、もし興味を持った方はぜひプレイしてみてください。`,
    merit: `●良いと思った点：<br />・各種魅力的なキャラクターたちとの触れ合いやイベント<br />・のんびり、ゆっくりとした時間の中で何でも体験出来る自由さ`,
    demerit: `●良くないと思った点：<br />・アイテムや道具の切り替えがメニューを開いてからしか行えないので若干テンポが悪い（後のシリーズでは改善）<br />・自由度が高い反面、ハッピーエンドを迎えるのにはある程度の効率プレイが求められること<br />・クリア後のやり込み要素が少ない`,
    link: "https://www.nintendo.com/jp/software/feature/nintendo-classics/n-1635_j/index.html",
  };
  return (
    <>
      <CommonMeta title="GameHistory" />
      <Header />
      <Main>
        <GameHistoryPage contents={contents} />
      </Main>
    </>
  );
}
