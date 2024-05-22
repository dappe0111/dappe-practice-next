import Header from "@/components/LV3/Header";
import styled from "styled-components";
import CommonMeta from "@/components/LV1/CommonMeta";
import GameHistoryPage from "@/components/LV3/GameHistoryPage";

const Main = styled.main`
  height: 100vh;
  margin-top: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 599px) {
    margin-top: 56px;
  }
`;

export default function Performance() {
  const contents = {
    title: "ファイナルファンタジーIX",
    seller: "スクウェア・エニックス",
    model: "PlayStation",
    comment: `●概要：<br />更新中`,
    merit: `●良いと思った点：更新中`,
    demerit: `●良くないと思った点：更新中`,
    link: "",
  };
  return (
    <>
      <CommonMeta title="Performance" />
      <Header />
      <Main>
        <GameHistoryPage contents={contents} />
      </Main>
    </>
  );
}
