import React from "react";
import styled from "styled-components";
import { AiOutlineDislike, AiOutlineLike, AiOutlineShareAlt } from "react-icons/ai";
import { MdSaveAlt } from "react-icons/md";
import Comments from "../components/Comments";
import Card from "../components/Card";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  gap: 20px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`

`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin: 7px 0;
  color: ${({theme}) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({theme}) => theme.text};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`;
const Button = styled.div`
  padding: 7px 13px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Recommendation = styled.div`
  flex: 2;
`;
const Hr = styled.hr`
  margin: 10px 0%;
  background-color: ${({theme}) => theme.soft };
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Subscribe = styled.button`
  background-color: red;
  color: #FFF;
  height: 40px;
  padding: 7px 13px;
  border: 0;
  outline: 0;
  cursor: pointer;
  font: inherit;
  font-size: 12px;

`;
const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
`;
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};

`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.soft};
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 12px;
`;



const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/EJxeMbDTkVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>1,000,000 views . Jun 22, 2022</Info>
          <Buttons>
            <Button><AiOutlineLike /> 123</Button>
            <Button><AiOutlineDislike /> Dislike</Button>
            <Button><AiOutlineShareAlt /> Share</Button>
            <Button><MdSaveAlt /> Save</Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
              <ChannelImage />
              <ChannelDetail>
                <ChannelName>Wonder kid</ChannelName>
                <ChannelCounter>200k subscribers</ChannelCounter>
                <Description>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea adipisci nesciunt illum minima consectetur ipsum deleniti ex obcaecati mollitia beatae!
                </Description>
              </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
};

export default Video;
