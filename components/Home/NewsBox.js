import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import  useInView  from "react-cool-inview";
import {motion} from "framer-motion";

const NewsBoxWrapper = styled(motion.div)`
  width: 300px;
  height: 300px;
  position: relative;
  z-index: 5;
  margin: 20px;
  &:hover {
    cursor: pointer;
  }


`;

const ImageWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  filter: brightness(50%);
`;

const NewsTitle = styled.p`
  z-index: 2;
  position: absolute;
  bottom: 4rem;
  left: 2rem;
  color: ${(props) => props.theme.colors.main1};
  width: 100%;
  text-align: left;

  &:after {
    border-bottom: solid 1px white;
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 0;
    width: 80%;
  }
`;

function NewsBox(props) {

  const { ref, inView } = useInView({
    threshold: 0.5,
    unobserveOnEnter: true,
  });

  const { blog, animation1} = props;
  const ImageUrl = `https://strapi.sir-ivan.com${blog.Imges[0].url}`;
  const ImageWidth = blog.Imges[0].width;
  const ImageHeight = blog.Imges[0].height;
  console.log(blog.Imges[0])

  console.log("here");
  console.log(ImageHeight)
  console.log(ImageWidth)

  return (
    <Link href={`/news/${blog.slug}`}>
      <NewsBoxWrapper whileHover={{scale: 1.2, rotate:2}}  whileTap={{ scale: 0.9 }}>
        <ImageWrapper>
          <Image src={ImageUrl}  alt={blog.slug} layout="fill" objectFit="cover" />
        </ImageWrapper>

        <NewsTitle>{blog.Title}</NewsTitle>
      </NewsBoxWrapper>
    </Link>
  );
}

export default NewsBox;
