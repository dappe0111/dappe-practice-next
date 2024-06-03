import styled from "styled-components";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";

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

const SongsWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    flex-direction: column;
    gap: 8px;
  }
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
        <SongsWrap>
          <ContentsDescription>作詞：{contents.lyricist}</ContentsDescription>
          <ContentsDescription>作曲：{contents.composer}</ContentsDescription>
          <ContentsDescription>編曲：{contents.arranger}</ContentsDescription>
        </SongsWrap>
        <DescriptionWrap>
          <ContentsDescription>
            <div dangerouslySetInnerHTML={{ __html: contents.comment }}></div>
          </ContentsDescription>
        </DescriptionWrap>
      </ContentsBlock>
      {contents.videoId && (
        <UpdateBlock>
          ※再生すると音声が流れます。音量にご注意ください。
          <VideoWrap>
            <YouTubeEmbed videoid={contents.videoId} />
          </VideoWrap>
        </UpdateBlock>
      )}
      <ButtonWrap>
        <Link href="/hello-project">
          <Button>
            <ButtonText>BACK</ButtonText>
          </Button>
        </Link>
      </ButtonWrap>
    </>
  );
};

export default PerformancePage;
