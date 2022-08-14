import React from "react";
import styled from 'styled-components';
import Logo from '../image/logo.png';
import { AiFillHome } from 'react-icons/ai';
import { MdSubscriptions, MdLibraryAdd, MdHistory, MdLibraryMusic, MdOutlineSportsBasketball, MdOutlineGamepad, MdMovieCreation, MdSettingsApplications, MdLiveTv, MdHelp, MdLightMode } from 'react-icons/md';
import { FaWpexplorer, FaUserCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  background: ${({theme}) => theme.bg };
  ${'' /* height: 100vh; */}
  color: ${({theme}) => theme.text };
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const MenuWrapper = styled.div`
  padding: 1.5rem;
`;

const MenuLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  text-transform: uppercase;
  /* height: 25px; */
  margin-bottom: 20px;
`;

const MenuImg = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 3px;

  &:hover {
    background-color: ${({theme}) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 10px 0%;
  background-color: ${({theme}) => theme.soft };
`;

const Login = styled.div`

`;

const Button = styled.button`
  padding: 0.4rem;
  display: flex;
  gap: 3px;
  font: inherit;
  font-size: 10px;
  font-weight: 500;
  background: transparent;
  color: #55a3eb;
  margin: 0.4rem 0;
  cursor: pointer;
  border-color: #54a8f2;
`

const Menu = ({ mode, setmode}) => {
  return (
    <Container>
      <MenuWrapper>
        <Link to="/" style={{textDecoration: "none", color: "inherit"}} >
        <MenuLogo>
          <MenuImg src={Logo} />
          Video App
        </MenuLogo>
        <Item>
          <AiFillHome /> Home
        </Item>
        </Link>
        <Item>
          <FaWpexplorer /> Explore
        </Item>
        <Item>
          <MdSubscriptions /> Subscriptions
        </Item>
        <Hr />
        <Login>
          Sign in to like more videos
          <Link to="signin" style={{textDecoration: "none"}}>
            <Button><FaUserCircle /> SIGN IN</Button>
          </Link>
        </Login>
        <Item>
          <MdLibraryAdd/> Library
        </Item>
        <Item>
          <MdHistory/> History
        </Item>
        <Hr />
        <Item>
          <MdLibraryMusic/> Music
        </Item>
        <Item>
          <MdOutlineSportsBasketball /> Sports
        </Item>
        <Item>
          <MdOutlineGamepad/> Gaming
        </Item>
        <Item>
          <MdMovieCreation /> Movies
        </Item>
        <Item>
          <MdLiveTv /> Live
        </Item>
        <Item>
          <MdSettingsApplications /> Settings
        </Item>
        <Item>
          <MdHelp /> Help
        </Item>
        <Item onClick={() => setmode(!mode)}>
          <MdLightMode /> Light Mode
        </Item>

      </MenuWrapper>
    </Container>
  )
};

export default Menu;
