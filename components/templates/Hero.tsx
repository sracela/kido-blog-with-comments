import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-5">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#">
            <a>Contact Sales</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Select Country</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        // title={
        //   <>
        //     {'A modern digital platform specialized in \n'}
        //     <span className="text-primary-500">Tourism</span>, <span className="text-secondary-500">Mobility</span> and
        //     <span className="text-terciary-500"> Retail</span> data
        //   </>
        // }
        title="¿Qué hacemos?"
        description={
          <ul>
            <li>Turismo: cuánta gente hubo en Mayo en Barcelona?</li>
            <li>Mobility: cuánta gente viajó ayer entre Madrid y Sevilla</li>
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
  </Background>
);

export { Hero };
