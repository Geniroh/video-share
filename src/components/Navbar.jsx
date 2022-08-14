import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Container = styled.div`
    position: sticky;
    top: 0;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.bg};
    padding: 0 1rem;
    justify-content: flex-end;
    position: relative;
    padding: 1rem;
`;

const Search = styled.div`
    position: absolute;
    width: 40%;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    background-color: #FFF;
    border-radius: 5px;
    padding-inline: 5px;
`;

const Input = styled.input`
    width: 90%;
    padding: 10px 15px;
    border: none;
    outline: 0;
    background-color: transparent;
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
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Search' />
                    <MdSearch />
                </Search>
                <Link to="signin" style={{textDecoration: "none"}}>
                    <Button>
                        <FaUserCircle />
                        SIGN IN
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
