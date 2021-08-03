import { Meta } from "../layout/Meta";
import { AppConfig } from "../../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import Link from "next/link";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import { HeroOneButton } from '../hero/HeroOneButton';

const DocsIndex = () => (
  <div className="antialiased text-gray-600">
    <Meta title={`${AppConfig.title} | Docs`} description={AppConfig.description} />
    <div className="min-h-screen">
      <main>
        <Section yPadding="py-6">
          <NavbarTwoColumns logo={<Logo xl />}>
            <li>
              <Link href="https://github.com/kido-dynamics-sa/kido-ui">
                <a>GitHub</a>
              </Link>
            </li>
            <li>
              <Link href="/docs">
                <a>Docs</a>
              </Link>
            </li>
          </NavbarTwoColumns>
        </Section>
        <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Are you curious about how to user our app? \n'}
            <span className="text-primary-500">Let us </span><span className="text-secondary-500">guide </span>
            <span className="text-terciary-500">you!</span>
          </>
        }
        description="This project is based on NextJS as React framework, Theme-UI to handle the styles and NX as monorepo manager."
      />
        </Section>
        
      </main>
    </div>
    <Banner />
    <Footer />
  </div>
);

export { DocsIndex };
