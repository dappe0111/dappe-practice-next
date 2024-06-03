import HelloProjectPage from "@/components/LV3/HelloProjectPage";
import Layout from "@/components/Templates/Base";

export default function HelloProject() {
  const contents = {
    title: "Go City Go",
    lyricist: "児玉雨子",
    composer: "星部ショウ",
    arranger: "炭竃智弘",
    comment: `●楽曲の特徴：
            <br />2024年6月現在、BEYOOOOONDSの最新シングルの楽曲です。
            <br />
            <br />タイトルからもわかる通り（？）「五・七・五」がモチーフとなっている楽曲です。
            <br />
            まず冒頭のイントロ部分から、早速「五・七・五」のリズムが使われています。
            <br />
            そして歌い初めのAメロやサビの入りにも「五・七・五」のリズムを崩さないようにメロディーと歌詞が充てられています。
            <br />
            （PVを見ると文字が出てわかりやすい）
            <br />
            <br />
            またこの楽曲は「JR東海」とのコラボとなっており、「東海道新幹線の停車駅」が全て登場します。
            ハロプロ楽曲は昔から「お勉強シリーズ」のような楽曲がいくつかあり、これも歌詞を覚えれば「東海道新幹線の停車駅」を覚えられます。
            <br />
            （役に立つかは置いておいて）
            <br />
            <br />
            曲の作りとしては「五音音階」が多用されているので、初めて聞くのにどこか懐かしく感じるようなメロディーラインになっています。
            <br />
            <br />
            BEYOOOOONDS楽曲が初めての人でも、聞きやすくてノリノリな楽曲になっていると思います！
            <br />
            （ビヨはトンチキ楽曲が多いグループなので）
            <br />
            <br />
            ぜひ「五・七・五」を数えながら聞いてみてください。
            `,
    videoId: "_e8qN-5l4Fc",
  };
  return (
    <Layout title="HelloProject">
      <HelloProjectPage contents={contents} />
    </Layout>
  );
}
