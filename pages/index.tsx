// import Base from "../components/templates/Base";
// import { getAllPostsForHome } from "../lib/api";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// const Index = ({ allPosts, preview }) => (
  
//   <Base allPosts={allPosts} preview={preview} />
// );

// export async function getStaticProps({ preview = false }) {
//     const allPosts = await getAllPostsForHome(preview);
//     return {
//       props: { allPosts, preview },
//       revalidate: 10,
//     };
//   }

import { Banner } from "../components/templates/Banner";
import { Hero } from "../components/templates/Hero";
import { VerticalFeatures } from "../components/templates/VerticalFeatures";
import { Partners } from "../components/partners/Partners";
import { WhyPage } from "../components/whypage/WhyPage";
import Layout from "../components/post/layout";

import { getAllPostsForHome } from "../lib/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const Index = ({ allPosts, preview }) => {
  const router = useRouter()
  const { t, i18n } = useTranslation('common')
  const morePosts = allPosts.slice(1);
  return (
    <Layout buttonA={t('buttonA')} buttonB={t('buttonB')}>
      <Hero />
      <Partners />
      <hr />
      <WhyPage />
      <VerticalFeatures posts={morePosts} lang={i18n.language}/>
      <Banner />
    </Layout>
  );
};

export const getStaticProps = async ({ preview = false, locale}) => {
  const allPosts = await getAllPostsForHome(preview);
  console.log("locale", locale)
  return {
    props: {
      ...(await serverSideTranslations("es", ["common", "footer"])),
      allPosts,
      preview,
    },
  };
};


export default Index;

