import PerformancePage from "@/components/LV3/PerformancePage";
import Layout from "@/components/Templates/Base";

export default function Performance() {
  const contents = {
    title: "恋愛レボリューション21",
    composer: "つんく",
    source: "モーニング娘。",
    comment: `●コメント：
      <br />
      モーニング娘。黄金期にヒットした曲の1つで、「超超超いい感じ、超超超超いい感じ」のフレーズが印象深いですね。
      <br />
      今回はサビのみのフレーズを演奏しました。
      <br />
      ピアノでいう白鍵のみで演奏できる部分なのですが、音が一音飛んで上がってから下がるのフレーズ繰り返しがあり、意外と運指で苦労しました。
      <br />
      この曲は今後の運指練習用にも使えそうです。
      <br />
      音はバグパイプを使用し、合いの手パートはハーモニカで入れてみました。
      <br />
      <br />
      今後もメインメロディに追加してサブメロディを入れるなど、様々なパターンに挑戦してみたいです。
      <br />
      あと、MIDI運用で録音できるようのにしたいです。（現在はライン入力での録音）
    `,
    videoId: "TtSm0D9nOeY",
  };
  return (
    <Layout title="Performance">
      <PerformancePage contents={contents} />
    </Layout>
  );
}
