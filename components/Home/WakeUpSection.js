import Image from "next/image";
import styled from "styled-components";
import { Row } from "../LayoutComponents/LayoutComponents";
import { Button } from "../ui/ui";

const WakeUpWrapper = styled.section`
height: 32.5rem;
width:100%;
position: relative;
`
const BackgroundImageWrapper = styled.div`
position:absolute;
top:0;
right:0;
left:0;
bottom:0;
text-align:right;
z-index:-10;
`
const TextArea = styled.div`
position:absolute;
width:50%;
top:0;
left:0;
height:100%;
padding: 0 7rem;
`

const Heading = styled.h1`
line-height:45px;
margin-top:4rem;
margin-bottom: 2rem;
`


function WakeUpSection() {
    return(
        <WakeUpWrapper>
    <BackgroundImageWrapper>
    <Image src = "/images/clock.webp" alt="clock" width={950} height={520}/>
    </BackgroundImageWrapper>
    <TextArea>
        <Heading>
        WAKE UP FOR <br/>ROCK N FUNK
        </Heading>
        <p>
        Wenn die „SIDESLEEPERS“ aus ihren Träumen erwachen, lassen sie die Helden ihrer Jugend auferstehen, wiegen sich in echter handgemachter (Funk-)Rockmusik aus dem Tiefschlaf, trotzen den Charts der aktuellen Mainstream-Musikindustrie, pfeifen auf schnulzigen Synthi-Pop und zelebrieren die persönlichen Rock'n'Funk-Perlen. 
        </p>
        <Row>
        <Button>MORE</Button>
        </Row>

    </TextArea>
     
          
        </WakeUpWrapper>
    )
}

export default WakeUpSection;