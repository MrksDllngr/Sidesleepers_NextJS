import React from "react";
import styled from "styled-components";
import { Button, InvertedButton } from "../../ui/ui";
import { Row, Column } from "../LayoutComponents";
import FooterLinks from "./FooterLinks";

const Header = styled.h3`
  color: white;
  font-size: 3.5rem;
  margin-top:3rem;
`;
const Hashtags = styled.h2`
color:${props=>props.theme.colors.main1};
margin-top:4rem;

`;

const FooterWrapper = styled.div`
  background-color: black;
  width: 100%;
  height: 30rem;
  text-align:center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Column justifyContent="center">
        <Header>Follow us</Header>
        <FooterLinks />

      </Column>
      <Hashtags>#SIDESLEEPERSBAND #WAKEUP4ROCKNFUNK</Hashtags>
      <InvertedButton>EPK</InvertedButton>
    </FooterWrapper>
  );
};

export default Footer;
