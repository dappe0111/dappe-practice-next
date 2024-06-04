import HelloProjectPage from "@/components/LV3/HelloProjectPage";
import Layout from "@/components/Templates/Base";

export default function HelloProject() {
  const contents = {
    title: "悲しきヘブン (Single Version)",
    lyricist: "つんく",
    composer: "つんく",
    arranger: "板垣祐介",
    comment: `●楽曲の特徴：
            <br />℃-uteのメジャー25枚目のシングルから「悲しきヘブン(Single Version)」です。
            <br />
            <br />元々は別のシングルのカップリング曲扱いでしたが、とても人気が高くシングルカットされた、という経緯があります。
            <br />まずは1つ目の動画を見て、一度この楽曲を聞いてみて欲しいです。
            <br />
            <br />
            <br />
            元々ツインボーカルの楽曲でメンバーの鈴木愛理と岡井千聖が歌唱しています。
            <br />
            メインパートとサブパートが曲中のほとんどの箇所で並走しているのがわかるかと思います。
            <br />
            <br />
            それだけだと他にも似たような作りの楽曲はたくさんあると思います。
            <br />
            この楽曲の最大の魅力は「曲中でメインパートとサブパートが交互に入れ替わっている」所なんです！
            <br />
            <br />
            例えばAさんが上パート、Bさんが下パートで最後まで歌い続けるのではなく、
            <br />
            <br />
            最初の四小節はAさんが上パート、Bさんが下パート
            <br />
            →次の四小節はAさんが下パート、Bさんが上パート
            <br />
            <br />
            と次々と入れ替わっていきます。
            <br />
            サビになると小節の区切れに関係なく入れ替わったりもします。
            <br />
            <br />
            パートが途中で入れ替わる構成にして音楽的な遊びを入れているつんく♂さん、恐るべし。
            <br />
            メンバーも別パートにつられないでよく歌えますよね、さすがです。
            <br />
            <br />
            この紹介ページでは公式のYoutube動画だけをあげるつもりだったのですが、このパート分けがわかりやすい非公式の動画があるので、今回だけ引用させていただきました。
            <br />
            （2つめの動画です）
            <br />
            <br />
            こちらはイヤホン推奨で、片方の耳だけ聞くとパートの移り変わりが、よく聞こえます。
            <br />
            ハロプロ楽曲の中には、こういった音楽の作りが特殊なものが多く、聞いていて飽きないのが魅力の一つだと思っています。
            `,
    videoId: "EmrvcbU3jsY",
    addVideoComment: "※左耳がピンク、右耳が緑パートです。",
    addVideoId: "owN0wArbAt8",
  };
  return (
    <Layout title="HelloProject">
      <HelloProjectPage contents={contents} />
    </Layout>
  );
}
