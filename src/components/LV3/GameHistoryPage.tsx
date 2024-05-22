import styled from "styled-components";
import Link from "next/link";

const ContentsBlock = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 599px) {
    padding: 16px;
  }
`;

const ContentsTitle = styled.div`
  font-size: 32px;
`;

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContentsDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  text-indent: -1em;
  padding-left: 1em;
`;

const UpdateBlock = styled.div`
  width: 100%;
  padding: 32px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    padding: 16px;
  }
`;

const VideoWrap = styled.div`
  width: 100%;
  max-width: 640px;
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

type Props = {
  contents: any;
};

const PerformancePage: React.FC<Props> = ({ contents }) => {
  return (
    <>
      <ContentsBlock>
        <ContentsTitle>{contents.title}</ContentsTitle>
        <DescriptionWrap>
          <ContentsDescription>●販売元：{contents.seller}</ContentsDescription>
          <ContentsDescription>●機種：{contents.model}</ContentsDescription>
          <ContentsDescription>
            <div dangerouslySetInnerHTML={{ __html: contents.comment }}></div>
          </ContentsDescription>
          <ContentsDescription>{contents.merit}</ContentsDescription>
          <ContentsDescription>{contents.demerit}</ContentsDescription>
          <ContentsDescription>●外部リンク：更新中</ContentsDescription>
        </DescriptionWrap>
      </ContentsBlock>
      <ButtonWrap>
        <Link href="/game-history">
          <Button>
            <ButtonText>BACK</ButtonText>
          </Button>
        </Link>
      </ButtonWrap>
    </>
  );
};

export default PerformancePage;
