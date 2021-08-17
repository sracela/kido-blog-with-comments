import { Banner } from "./Banner";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import { Partners } from "../partners/Partners";
import { WhyPage } from "../whypage/WhyPage";
import Layout from "../post/layout";

const Base = ({ allPosts, preview }) => {
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <Hero />
      <Partners />
      <hr />
      <WhyPage />

      <VerticalFeatures posts={morePosts}/>
      <Banner />
    </Layout>
  );
};

export default Base;

