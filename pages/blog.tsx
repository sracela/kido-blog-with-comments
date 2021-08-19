import { getAllPostsForHome } from "../lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


import HeroPost from "../components/heropost/hero-post";
import MoreStories from "../components/post/more-stories";
import Layout from '../components/post/layout'
import { useTranslation } from "react-i18next";

function Blog({ allPosts, preview, lang }) {
  const { t, i18n } = useTranslation('common');


  if (allPosts) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
      <Layout buttonA={t('buttonA')} buttonB={t('buttonB')}>
          {heroPost && (
            <HeroPost
              title={heroPost.title[i18n.language]}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} lang={i18n.language} />}
      </Layout>
    );
  }

  return <div>No Posts</div>;
}

export async function getStaticProps({ preview = false, locale }) {
  const allPosts = await getAllPostsForHome(preview);
  console.log("locale", locale)
  return {
    props: { 
      ...(await serverSideTranslations("es", ["common", "footer"]))
      , allPosts, preview
    },
    revalidate: 3,
  };
}

export default Blog;