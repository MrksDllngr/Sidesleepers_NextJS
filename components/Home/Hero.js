import { Container, Column } from "../LayoutComponents/LayoutComponents";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import useInView from "react-cool-inview";

const ImageWrapper = styled.div`
  text-align: center;
`;

const StyledHeading = styled.h1`
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

const HeroWrapper = styled.div`
  height: 100vh;
  margin-top: 13rem;
`;

function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    unobserveOnEnter: false,
  });

  return (
    <HeroWrapper
      ref={ref}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        },
      }}
    >
      <Column alignItems="center" justifyContent="center">
        <ImageWrapper>
          <Image src="/images/LOGO.webp" alt="logo" width={600} height={100} />
        </ImageWrapper>
        <StyledHeading>wake up for Rock n Funk</StyledHeading>
        <ImageWrapper as={motion.div} animate={{ opacity: 1 }}>
          <Image
            src="/images/LogoKreis.webp"
            alt="logo"
            width={150}
            height={150}
          />
        </ImageWrapper>
      </Column>
    </HeroWrapper>
  );
}

export default Hero;
