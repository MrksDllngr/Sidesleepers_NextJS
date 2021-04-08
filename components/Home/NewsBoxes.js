import { Row } from "../LayoutComponents/LayoutComponents";
import NewsBox from "./NewsBox";
import styled from "styled-components";
import Link from "next/link";
import {Button} from "../ui/ui";


const NewsBoxesWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;


function NewsBoxes(props) {
  const { blogs } = props;

  return (
    <NewsBoxesWrapper>
      <Row justifyContent="center">
        <NewsBox blog={blogs[0]} key={blogs[0].slug} />{" "}
        <NewsBox animation1={true} blog={blogs[1]} key={blogs[1].slug} />
        <NewsBox blog={blogs[1]} key={blogs[1].slug} />
      </Row>
      <Row>
     <Link href="/news"><Button>MORE</Button></Link>
      </Row>
      
    </NewsBoxesWrapper>
  );
}

export default NewsBoxes;
