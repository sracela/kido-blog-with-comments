import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
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
            {'A modern digital platform specialized in \n'}
            <span className="text-primary-500">Tourism</span>, <span className="text-secondary-500">Mobility</span> and
            <span className="text-terciary-500"> Retail</span> data
          </>
        }
        description="This project is based on NextJS as React framework, Theme-UI to handle the styles and NX as monorepo manager."
        button={
          <Link href="https://es.app.kidodynamics.com/">
            <a>
              <Button xl>Test the platform</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
