import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "340px" };
    margin-bottom: ${(props) => props.type === "sm" ? "15px" : "45px"};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "sm" ? "100px" : "202px"};
    background-color: #999;
    flex: 1;
`;

const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type !== "sm" && "16px" };;
    gap: 10px;
    flex: 1;
`;

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none" };
`;

const Texts = styled.div``;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.soft};
    margin: 0;
`;
const Info = styled.div`
    font-size: 12px;
    color: ${({theme}) => theme.soft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{textDecoration: 'none'}}>
        <Container type={type}>
            <Image type={type} />
            <Details type={type} >
                <ChannelImage type={type} />
                <Texts>
                    <Title>Wonder Kid</Title>
                    <ChannelName>Geniroh</ChannelName>
                    <Info> 100,000 views . 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    </Link>
  )
};

export default Card;
