import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { motion } from "framer-motion";


const EventWrapper = styled(motion.div)`
  width: 300px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  border: solid 1px rgba(0,0,0,0.1); 
  margin:1rem;
  &:hover{
      cursor:pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

function PreviousEvent(props) {
    const {event} = props;

    const ImageUrl =`https://strapi.sir-ivan.com${event.Images[0].url}`;

    const ImageWidth = event.Images[0].width;
    const ImageHeight = event.Images[0].height;

    const ImageRatio = ImageHeight / ImageWidth;

    const link =`/live/${event.slug}` 

    const date = new Date(event.Date).toLocaleDateString("de-DE");
  return (
    <Link href={link}>
    <EventWrapper whileHover={{scale: 1.2, rotate:2}}  whileTap={{ scale: 0.9 }}>
      <ImageWrapper>
     
    <Image src={ImageUrl} alt="Previous Event Image" width={ImageWidth} height={ImageHeight} priority={true} loading="eager"/>

      </ImageWrapper>
      <TitleWrapper>
       <h2>{event.Location}</h2>
        <p>{date}</p> 
      </TitleWrapper>
    </EventWrapper>
    </Link>
  );
}

export default PreviousEvent;
