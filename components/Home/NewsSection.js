import styled from "styled-components";
import NewsBoxes from "./NewsBoxes";

const NewsSectionWrapper = styled.div`
background-color:${props=>props.theme.colors.main2};
width:100vw;
height: 530px;
`

const Heading = styled.h1`
font-family: ${props=>props.theme.fonts.funny};
color:${props=>props.theme.colors.main1};
padding-top: 2rem;
padding-bottom: 2rem;
`;


function NewsSection ( props ) {
    return(
        <NewsSectionWrapper>
            <Heading>Neuigkeiten</Heading>
            <NewsBoxes blogs = {props.blogs}/>
        </NewsSectionWrapper>
    )
}

export default NewsSection;