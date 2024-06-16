import PerformancePage from "@/components/LV3/PerformancePage";
import Layout from "@/components/Templates/Base";

export default function Performance() {
  const contents = {
    title: "LOVEマシーン",
    composer: "つんく",
    source: "モーニング娘。",
    comment: `●コメント：
      <br />
      モーニング娘。が一躍お茶の間に浸透したキッカケとなった、有名な楽曲です。
      <br />
      あのゴマキが新加入した最初のシングルでもあり、サビの合いの手フレーズが印象的です。
      <br />
      今回はカラオケ風な演奏にしようと思い、カラオケ音源をバックに演奏してみました。
      <br />
      ピッタリくる運指とコードがなかなか見つからず、思ったよりも苦戦してしまいました。
      <br />
      ただ、コードを探していく中でもう1曲演奏が出来そうなモーニング娘。の楽曲を発見し、次回はその曲を演奏しようと思ってます。
      <br />
      他にこういう系統の曲も聴いてみたい、などあればFBお待ちしています。
    `,
    videoId: "UiW9DeTDb20",
  };
  return (
    <Layout title="Performance">
      <PerformancePage contents={contents} />
    </Layout>
  );
}
