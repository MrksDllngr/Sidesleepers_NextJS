import Image from "next/image";
import styled from "styled-components";
import ReactPlayer from "react-player";

const Wrapper = styled.div`
  width: 100%;
  height: 236px;
  position: relative;
  background-color: white;
  z-index: 10;
`;



const Text = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0px;
  z-index: 2;
  color: ${(props) => props.theme.colors.main1};
  text-align: center;
  opacity: 0;
  transition: 1s;
  margin-left: 2rem;
  margin-right: 2rem;
  height: 100%;
  line-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Wrapper}:hover &{
    opacity: 1;
  }
 
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
  height:100%;
  ${Wrapper}:hover & {
    filter: brightness(50%);
  }

`;

function SocialMediaBox(props) {
  const { socialMedia } = props;

  const text = socialMedia.node.edge_media_to_caption.edges[0].node.text;
  const shortText = text.slice(0, 125);
  const image = socialMedia.node.display_resources[0].src;
  const isVideo = socialMedia.node.is_video;
  const videoUrl = socialMedia.node.video_url;

  return (
    <Wrapper >
      <Text>{shortText}</Text>

      <ImageWrapper>
        {isVideo ? (
          <ReactPlayer
            url={videoUrl}
            loop={true}
            controls={false}
            volume={0}
            height="236px"
            width="236px"
            muted={true}
            playing={true}
          />
        ) : (
          <Image src={image} alt="instagramimage" layout="fill" objectFit="cover" />
        )}
      </ImageWrapper>
    </Wrapper>
  );
}

export default SocialMediaBox;
