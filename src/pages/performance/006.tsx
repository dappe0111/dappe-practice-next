import PerformancePage from "@/components/LV3/PerformancePage";
import Layout from "@/components/Templates/Base";

export default function Performance() {
  const contents = {
    title: "サマーナイトタウン",
    composer: "つんく",
    source: "モーニング娘。",
    comment: `●コメント：
      <br />
      モーニング娘。セカンドシングルの楽曲で、サビのハーモニーパートやBメロのコーラスパートが特徴の楽曲です。
      <br />
      この楽曲はとても歌唱が難しい楽曲で、ハロプロ内でも大事にされている「16ビート」が取れないと正しく歌えないと思います。
      <br />
      （こちらの楽曲はHelloProject！カテゴリで別途取り扱い予定です）
      <br />
      <br />
      特徴的なハーモニーを再現したかったので、フルートの音色を使用し、多重録音して2つのパートを合わせました。
      <br />
      また、今回もトランスポーズ機能を使用しラスサビの転調を再現しています。
      <br />
      なので運指は全く変えずに半音上げるという小技が出来ます。（通常の管楽器では無理）
      <br />
      <br />
      ただ今回いくつか反省点もあり、
      <br />
      ・楽譜を用意していないので、メインパートとハーモニーパートで若干リズムが異なってしまっている（楽譜ってやっぱり大切！）
      <br />
      ・サビ終わりの「Ah」の部分、フォールが再現できず単音演奏しか出来なかった（元々吐息みたいな部分ではありますが）
      <br />
      <br />
      この辺は練習を重ねて技術や表現力を高めていかないとなあ、という事で今後の課題ですね。
      <br />
      ある程度モーニング娘。のサビパートをあげてきたので、またゲーム音楽にも挑戦してみたいです。
    `,
    videoId: "JNHANe9uebQ",
  };
  return (
    <Layout title="Performance">
      <PerformancePage contents={contents} />
    </Layout>
  );
}
