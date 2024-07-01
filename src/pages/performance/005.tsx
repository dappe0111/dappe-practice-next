import PerformancePage from "@/components/LV3/PerformancePage";
import Layout from "@/components/Templates/Base";

export default function Performance() {
  const contents = {
    title: "泡沫サタデーナイト!",
    composer: "津野米咲",
    source: "モーニング娘。'16 ",
    comment: `●コメント：
      <br />
      最近のモーニング娘。楽曲の中での「LOVEマシーン」的な位置付けの楽曲で、比較的ノリやすい明るい曲調になっています。
      <br />
      ラスサビ前の長セリフパートや、ちょっと奇抜な振り付けもあり、つんく♂さんプロデュースではなくなっても、つんく♂イズムが継承されている気がします。
      <br />
      ラスサビの「Do it...」と何回も続く箇所は、息が続かずにフラフラになりながら演奏していました笑
      <br />
      肺活量鍛えないとダメですね…。
      <br />
      <br />
      今回トランスポーズを＋4にする事で、演奏しやすい運指に調整しています。（LOVEマシーンも同じ設定）
      <br />
      毎回楽曲の楽譜がないので、耳コピして楽器を吹きながらどの調整が良いか探っています。
    `,
    videoId: "qICTWE8O79k",
  };
  return (
    <Layout title="Performance">
      <PerformancePage contents={contents} />
    </Layout>
  );
}
