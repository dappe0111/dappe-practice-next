import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
};

const CommonMeta: React.FC<Props> = ({
  title = "dappe-practice",
  description = "練習用ページです。",
}) => {
  return (
    <Head>
      <title>{`${title} | dappe-practice`}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={`${title} | dappe-practice`} />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default CommonMeta;
