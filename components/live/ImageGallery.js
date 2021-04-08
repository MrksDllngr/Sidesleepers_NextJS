import styled from "styled-components";
import ImageGallery from "react-image-gallery";


const Wrapper = styled.div`
position:relative;

width:100%;
height:auto;

z-index:10;


`
const Exit = styled.div`
width:50px;
height:50px;
position:absolute;
right:0;
top:0;
z-index:50;
background-color:black;
`

function ImageGalleries(props) {

    const {images} = props;

    console.log(images)

    const pics = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];
    return(
        <Wrapper >
            <Exit onClick = {props.onClick} />
            <ImageGallery items={images} />
        </Wrapper>

    )
}

export default ImageGalleries;