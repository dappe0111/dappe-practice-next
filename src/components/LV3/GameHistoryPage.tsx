import styled from "styled-components";
import Link from "next/link";
import React, { useState } from "react";

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

const LinkText = styled.a`
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

type Contents = {
  title: string;
  seller: string;
  model: string;
  releaseDate: string;
  comment: string;
  merit: string;
  demerit: string;
  link: string;
};

type Props = {
  contents: Contents;
};

const PerformancePage: React.FC<Props> = ({ contents }) => {
  const [link] = useState<string>(contents.link);
  return (
    <>
      <ContentsBlock>
        <ContentsTitle>{contents.title}</ContentsTitle>
        <DescriptionWrap>
          <ContentsDescription>●販売元：{contents.seller}</ContentsDescription>
          <ContentsDescription>●機種：{contents.model}</ContentsDescription>
          <ContentsDescription>
            ●発売日：{contents.releaseDate}
          </ContentsDescription>
          <ContentsDescription>
            <div dangerouslySetInnerHTML={{ __html: contents.comment }}></div>
          </ContentsDescription>
          <ContentsDescription>
            <div dangerouslySetInnerHTML={{ __html: contents.merit }}></div>
          </ContentsDescription>
          <ContentsDescription>
            <div dangerouslySetInnerHTML={{ __html: contents.demerit }}></div>
          </ContentsDescription>
          <ContentsDescription>
            ●外部リンク：
            <br />
            <LinkText href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </LinkText>
          </ContentsDescription>
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
