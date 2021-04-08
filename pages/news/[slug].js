import { fetchContent, fetchContentBySlug } from "../../helpers/helpers";
import Layout from "../../components/LayoutComponents/Layout";
import { render } from "react-dom";

function SingleNews () {
    return(
        <Layout>

        </Layout>
    )

}

export default SingleNews;


export async function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const { preview = false } = context;
  
    const singleNews = await fetchContentBySlug("blogs", slug, false);

  
    return {
      props: { News: singleNews, preview: preview },
    };
  }
  
  export async function getStaticPaths({ preview = false }) {
    const allNews = await fetchContent("blogs", preview);

    const slugs = allNews.map((event) => event.slug);
  
    const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  
    return {
      paths: paths,
      fallback: false,
    };
  }
  