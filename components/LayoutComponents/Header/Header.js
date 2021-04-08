
import Navigation from "./Navigation";

import styled from "styled-components";
import React from "react";
import Image from "next/image";

const HeaderSection = styled.div`
background-color: rgba(0,0,0,0.9);
height: 6rem;
display: flex;
width: 100%;

`

const HeaderWrapper = styled.div`
margin: 0 auto;
display: flex;
align-items: center;
`

const Logo = styled.div`
height: 40px;
width: 212px;
margin-right: 2rem;
`

const Header = () => {
  return (
    <HeaderSection>
      <HeaderWrapper>

     
        <Logo>
        <Image src="/images/LOGO.webp" alt="Logo" width={212} height={40} />
        </Logo>
     
    <Navigation />
    </HeaderWrapper>
    </HeaderSection>
  );
};

export default Header;
