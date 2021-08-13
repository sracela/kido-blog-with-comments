import { Meta } from "../layout/Meta";
import { AppConfig } from "../../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import { Partners } from "../partners/Partners";
import { WhyPage } from "../whypage/WhyPage";
import Layout from "../post/layout";

const Base = () => {
  return (
    <Layout>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Partners />
      <hr />
      <WhyPage />

      <VerticalFeatures />
      <Banner />
    </Layout>
  );
};

export default Base;
