import styled from "styled-components";
import Layout from "../components/LayoutComponents/Layout";
import Hero from "../components/Home/Hero";
import NewsSection from "../components/Home/NewsSection";
import WakeUpSection from "../components/Home/WakeUpSection";
import WhatsNew from "../components/Home/WhatsNew";

import { Container } from "../components/LayoutComponents/LayoutComponents";
import { fetchContent, fetchSocialMedia } from "../helpers/helpers";
import SocialMediaFeed from "../components/Home/SocialMediaFeed";

export default function Home(props) {
  
const {blogs, preview, socialMedia} = props;

  return (
    <Layout preview={preview}>
      <Container>
        <Hero />
      </Container>
      <NewsSection blogs = {blogs}/>
      <WakeUpSection />
      <SocialMediaFeed socialMedia={socialMedia}/>   
      <WhatsNew/>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {

const blogs = await fetchContent("blogs", preview);
const socialMedia = await fetchSocialMedia();


  return {
    props: { blogs: blogs, preview: preview, socialMedia: socialMedia},
  };
}
