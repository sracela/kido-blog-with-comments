import { Meta } from "../layout/Meta";
import { AppConfig } from "../../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import { Background } from "../background/Background";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Button } from "../button/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { Partners } from "../partners/Partners";
import { Section } from "../layout/Section";
import { WhyPage } from "../why-page/WhyPage";
import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";

const Base = () => {
  const router = useRouter();
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Partners />
      <hr />
      <WhyPage />

      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };
