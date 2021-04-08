import styled from "styled-components";
import { FaFacebook, FaSpotify , FaItunes} from "react-icons/fa";
import {IoLogoYoutube} from "react-icons/io";
import {AiFillInstagram} from "react-icons/ai";
import Link from "next/link";

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const IconWrapper = styled.div`
  transform: scale(3);
  color: white;
  margin: 20px;
`;


function FooterLinks() {
  return (
    <LinkWrapper>
      <Link href="/">
        <IconWrapper>
          <FaFacebook />
        </IconWrapper>
      </Link>
      <Link href="/">
        <IconWrapper>
          <AiFillInstagram />
        </IconWrapper>
      </Link>
      <Link href="/">
        <IconWrapper>
          <IoLogoYoutube />
        </IconWrapper>
      </Link>
      <Link href="/">
        <IconWrapper>
          <FaSpotify />
        </IconWrapper>
      </Link>
      <Link href="/">
        <IconWrapper>
          <FaItunes />
        </IconWrapper>
      </Link>
    </LinkWrapper>
  );
}

export default FooterLinks;
