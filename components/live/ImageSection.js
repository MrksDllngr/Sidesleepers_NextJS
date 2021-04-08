import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;

 align-items:center;
 justify-content:center;
 flex-wrap:wrap;
margin-left:auto;
margin-right:auto;

`;
const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  position:relative;
  margin:1rem;
  z-index:0;
  transition:0.5s;
  &:hover{
     transform: scale(1.05);
     z-index:2;
  }

`;


//
function ImageSection({Images, onClick}) {



  return (
    <Wrapper >
      {Images.map((image, index) => {
       // const ImageUrl = `https://strapi.sir-ivan.com${image.url}`;
       const ImageUrl=image.url
        return (
          <ImageWrapper onClick = {onClick} key={index}> 
          <Image src={ImageUrl} layout="fill" objectFit="cover"  priority={true}/>
          
          </ImageWrapper>
        );
      })}
    </Wrapper>
  );
}

export default ImageSection
