import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    background-color: #f4f4f4;
    border-radius: 50%;
    object-fit: cover;
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: ${({theme}) => theme.soft};
`;
const Text = styled.span`
    font-size: 11px;
    font-weight: 400;
    color: ${({theme}) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
        <Avatar />
        <Details>
            <Name>John Doe <Date>1 day ago</Date></Name>
            <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quam esse, et eaque voluptatem sequi nemo sed in libero autem?
            </Text>
        </Details>
    </Container>
  )
};

export default Comment;
