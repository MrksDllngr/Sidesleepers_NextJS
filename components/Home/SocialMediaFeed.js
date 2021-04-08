import styled from "styled-components";
import { Container, Row } from "../LayoutComponents/LayoutComponents";
import SocialMediaBox from "./SocialMediaBox";
import { CgCornerRightDown } from "react-icons/cg";
import { Button } from "../ui/ui";
const SocialWrapper = styled.section`
  height: 48rem;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.colors.main2};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
`;

const Header = styled.h3`
  transform: rotate(-20deg);
  position: absolute;
  top: 4rem;
  left: 30%;
  font-size: 2rem;
`;

const StyledIcon = styled(CgCornerRightDown)`
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(2);
  top: 4rem;
  left: 43%;
`;

function SocialMediaFeed(props) {
  const { socialMedia } = props;
  return (
    <SocialWrapper>
      <Header>Social Media Feed</Header>

      <StyledIcon />

      <Container relative>
        <Grid>
          {socialMedia.map((item, i) => {
            return <SocialMediaBox socialMedia={item} key={i} />;
          })}
        </Grid>

        <Row>
          {" "}
          <Button>more</Button>
        </Row>
      </Container>
    </SocialWrapper>
  );
}

export default SocialMediaFeed;
