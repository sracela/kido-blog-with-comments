import { Meta } from "../layout/Meta";
import { AppConfig } from "../../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";
import { Background } from "../background/Background";
import { Section } from "../layout/Section";
import { HeroOneButton } from '../hero/HeroOneButton';
import { Button } from '../button/Button';
import Link from 'next/link';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title="¿Cómo lo hacemos?"
        description="Historia de los datos"
        button={
          <Link href="https://es.app.kidodynamics.com/">
            <a>
              <Button xl>Test the platform</Button>
            </a>
          </Link>
        }
      />
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title="¿Qué más cosas hacemos?"
        description={
          <ul>
            <li>COVID</li>
            <li>Enlace a Blog / Papers</li>
          </ul>
        }
        button={
          <Link href="https://es.app.kidodynamics.com/">
            <a>
              <Button xl>Test the platform</Button>
            </a>
          </Link>
        }
      />
    </Section>

    {/* <VerticalFeatures />
    <Banner /> */}
    <Footer />
  </div>
);

export { Base };
