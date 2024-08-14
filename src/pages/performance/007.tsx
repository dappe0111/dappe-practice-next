import PerformancePage from "@/components/LV3/PerformancePage";
import Layout from "@/components/Templates/Base";

export default function Performance() {
  const contents = {
    title: "ゼルダの子守唄",
    composer: "近藤浩治",
    source: "ゼルダの伝説 時のオカリナ",
    comment: `●コメント：
      <br />
      今回は久々にゲーム楽曲から選んでみました。
      <br />
      ゼルダの伝説シリーズでゼルダ姫と出会う際に流れるBGMで、今回は「時のオカリナ」で流れるアレンジを選びました。
      <br />
      この作品の一番重要なアイテム「オカリナ」の音色を使って演奏しました。
      <br />
      <br />
      3拍子のリズムに合わせて主旋律を吹くのに意外と苦労し、テンポが崩れすぎないように注意しました。
      <br />
      理想を言えばバックで流れるハープの音も再現したかったですが、耳コピが厳しく断念しました。
      <br />
      今度ゲームミュージックの楽譜がないか探してみようと思います。
    `,
    videoId: "tmOzZtcWkTc",
  };
  return (
    <Layout title="Performance">
      <PerformancePage contents={contents} />
    </Layout>
  );
}
