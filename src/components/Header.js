import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5em;
`;

const Nav = styled.nav`
  display: flex;
  gap: 15px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #4fa3f7;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>Company</Logo>
    <Nav>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Nav>
  </HeaderWrapper>
);

export default Header;
