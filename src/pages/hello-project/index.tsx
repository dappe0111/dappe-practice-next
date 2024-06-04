import styled from "styled-components";
import Link from "next/link";
import Layout from "@/components/Templates/Base";

const Block = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 599px) {
    padding: 16px;
    gap: 16px;
  }
`;

const BlockTitle = styled.div`
  font-size: 64px;
  @media screen and (max-width: 599px) {
    font-size: 32px;
  }
`;

const ContentsBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 599px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ContentsWrap = styled.div`
  width: 50%;
  display: flex;
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;

const GroupeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  @media screen and (max-width: 599px) {
    padding: 16px;
    gap: 16px;
  }
`;

const GroupeTitle = styled.p`
  width: 100%;
  font-size: 32px;
`;

const ContentsTitle = styled.p`
  font-size: 16px;
  transition: 0.4s;
  &:hover {
    text-decoration: none;
    opacity: 0.64;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  font-size: 16px;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  min-width: 160px;
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5f5d5b;
  border-radius: 4px;
  transition: 0.4s;
  &:hover {
    text-decoration: none;
    opacity: 0.64;
  }
`;

const ButtonText = styled.div`
  font-size: 32px;
  color: #ffffff;
`;

export default function HelloProject() {
  return (
    <Layout title="Hello! Project">
      <Block>
        <BlockTitle>Hello! Project</BlockTitle>
      </Block>
      <GroupeWrap>
        <GroupeTitle>♪℃-ute</GroupeTitle>
        <ContentsBlock>
          <ContentsWrap>
            <Link href="/hello-project/c-ute/001">
              <ContentsTitle>●悲しきヘブン (Single Version)</ContentsTitle>
            </Link>
          </ContentsWrap>
        </ContentsBlock>
      </GroupeWrap>
      <GroupeWrap>
        <GroupeTitle>♪BEYOOOOONDS</GroupeTitle>
        <ContentsBlock>
          <ContentsWrap>
            <Link href="/hello-project/beyooooonds/001">
              <ContentsTitle>●Go City Go</ContentsTitle>
            </Link>
          </ContentsWrap>
        </ContentsBlock>
      </GroupeWrap>
      <ButtonWrap>
        <Link href="/">
          <Button>
            <ButtonText>BACK</ButtonText>
          </Button>
        </Link>
      </ButtonWrap>
    </Layout>
  );
}
