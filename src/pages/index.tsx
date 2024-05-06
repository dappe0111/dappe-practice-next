import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/LV3/Header";
import { ButtonBase } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>dappe-practice</title>
        <meta name="description" content="練習用ページです。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <p>Coming Soon...</p>
        </div>
        <Link href="/test">
          <ButtonBase>Test</ButtonBase>
        </Link>
      </main>
    </>
  );
}
