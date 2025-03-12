// src/components/Navbar.tsx
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
`;

const SlogansContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > :nth-child(2) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Slogan = styled.div`
  font-size: 1rem;
  color: #fff;
  text-align: right;
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Logo>keigoify</Logo>
      <SlogansContainer>
        <Slogan>どの言語からでも、どんな日本語の丁寧さでも</Slogan>
        <Slogan>any Japanese politness, from any language</Slogan>
      </SlogansContainer>
    </NavbarContainer>
  );
};

export default Navbar;
