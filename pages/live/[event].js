import {
  fetchContent,
  fetchContentBySlug,
} from "../../helpers/helpers";
import styled from "styled-components";
import Layout from "../../components/LayoutComponents/Layout";
import { Container } from "../../components/LayoutComponents/LayoutComponents";
import ImageSection from "../../components/live/ImageSection";
import ImageGalleries from "../../components/live/ImageGallery.js";
import React, { useState } from "react";
import Head from "next/head";

const Header = styled.h1`
  margin: 2rem;
`;
const MainText = styled.p`
  text-align: left;
  margin: 2rem;
`;

function SingleEventPage(props) {
  const { singleEvent } = props;

  const [showGallery, setShowGallery] = useState(false);

  function ToggleModal() {
    setShowGallery(!showGallery);
    console.log(showGallery);
  }

  const { Title, Text, Date, Images } = singleEvent[0];

  const ImageArray = Images.map((image) => {
    return {
      original: `https://strapi.sir-ivan.com${image.url}`,
      thumbnail: `https://strapi.sir-ivan.com${image.formats.thumbnail.url}`,
    };
  });

  console.log(ImageArray);

  return (
    <Layout>
      <Head></Head>

      <Container>
        <Header>{Title}</Header>
        <MainText>{Text}</MainText>

        {showGallery ? (
          <ImageGalleries images={ImageArray} onClick={ToggleModal} />
        ) : (
          <ImageSection Images={Images} onClick={ToggleModal} />
        )}
      </Container>
    </Layout>
  );
}

export default SingleEventPage;

export async function getStaticProps(context) {
  const { params } = context;
  const { event } = params;
  const { preview = false } = context;

  const singleEventData = await fetchContentBySlug("lives", event, false);



  return {
    props: { singleEvent: singleEventData, preview: preview },
  };
}

export async function getStaticPaths({ preview = false }) {
  const allEvents = await fetchContent("lives", preview);

  const slugs = allEvents.map((event) => event.slug);

  const paths = slugs.map((slug) => ({ params: { event: slug } }));

  return {
    paths: paths,
    fallback: false,
  };
}
