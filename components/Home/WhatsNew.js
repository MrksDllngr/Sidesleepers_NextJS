import styled from "styled-components";
import { Column, Container, Row } from "../LayoutComponents/LayoutComponents";
import { InvertedButton } from "../ui/ui";

const Header = styled.h3`
  color: ${(props) => props.theme.colors.main3};
  font-size: 3rem;
  margin-top: 3rem;
  text-align:center;
`;



;
function WhatsNew() {
  return (
    <Container>
        <Column justifyContent="center" alignItems="center">
        <Header>WhatsNew?</Header>
        <p>
        Jetzt unserer SIDESLEEPERS WhatsApp Gruppe beitreten und keine Neuigkeiten verpassen! <br/><br/>
        Das besondere an unserer Gruppe? Als Mitglied hast du nur Leserechte. So garantieren wir, dass es bestimmt keine nervige  "Spamgruppe" wird! Wir informieren dich über besondere Neuigkeiten und unsere nächsten Auftritte.
        </p>
        <Row>
        <InvertedButton>jetzt beitreten</InvertedButton>
        </Row>
     
        </Column>
        

    </Container>
  );
}

export default WhatsNew;
