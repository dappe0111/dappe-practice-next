import PerformancePage from "@/components/LV3/PerformancePage";
import Layout from "@/components/Templates/Base";

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
    <Layout title="Performance">
      <PerformancePage contents={contents} />
    </Layout>
  );
}
