import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import className from "classnames";
import { useRouter } from "next/router";

import Typewriter from "typewriter-effect";
import { useState } from "react";

const Hero = () => {
  const verticalFeatureClass = className(
    // "mt-10",
    // "p-3",
    "flex",
    "flex-wrap"
    // "items-center"
  );

  const router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="pt-12 px-12">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://es.app.kidodynamics.com/">
              <a>
                <Button inverse>CONTACT SALES</Button>
              </a>
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>

      <Section yPadding="pt-20 pb-20">
        <div className={verticalFeatureClass}>
          <div className="w-full md:w-1/2 text-left sm:px-5">
            <h1 className="text-6xl text-gray-800 font-bold">
              Unveil Powerful Insights of
              <span className="text-primary-500">
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    return typewriter
                      .callFunction(() => setActive(1))
                      .typeString("Barcelona")
                      .pauseFor(3000)
                      .deleteAll()
                      .callFunction(() => setActive(2))
                      .typeString("Cádiz")
                      .pauseFor(3000)
                      .deleteAll()
                      .callFunction(() => setActive(3))
                      .typeString("Sarria")
                      .pauseFor(3000)
                      .start();
                  }}
                />
              </span>
            </h1>
            <h3 className="mt-8 text-2xl">
              Are you ready to make smarter decisions?
            </h3>

            <div className="pt-2 mt-12 mb-12">
              <Link href="https://es.app.kidodynamics.com/tourism">
                <a>
                  <Button xl>See more stats</Button>
                </a>
              </Link>
            </div>

            {/* <h3 className="mt-12 text-2xl font-semibold">
              <i>¿Ha afectado la pandemia a mi ciudad el último mes?</i>
            </h3>
            <div className="mt-6 text-gray-800 text-xl">
              Descubre cuántas personas han visitado tu ciudad durante la
              pandemia y si ha recibido más o menos turistas internacionales que
              otros años.
            </div> */}
          </div>

          <div className="w-full md:w-1/2 p-0 flex justify-center">
            {active === 1 ? (
              <div sx={{position: 'relative'}}>
                <img
                  src={`${router.basePath}/assets/images/superpos.png`}
                  alt="First feature alt text"
                />
              </div>
            ) : active === 2 ? (
              <img
                src={`${router.basePath}/assets/images/superpos2.png`}
                alt="Second feature alt text"
              />
            ) : (
              <img
                src={`${router.basePath}/assets/images/superpos3.png`}
                alt="Third feature alt text"
              />
            )}
              {/* <div className="z-40 relative flex justify-center items-center"> */}
                {/* <img
                  src={`${router.basePath}/assets/images/first.png`}
                  alt="First feature alt text"
                /> */}
              {/* </div> */}
              {/* <div className="z-30 relative flex -left-72 -top-12 items-center justify-center">
                <img
                  src={`${router.basePath}/assets/images/first.png`}
                  alt="First feature alt text"
                />
              </div> */}
              {/* <div className="z-0 relative flex left-12 top-4 w-200">
                <img
                  src={`${router.basePath}/assets/images/behind2.png`}
                  alt="First feature alt text"
                />
              </div> */}
              {/* <div>
              <img
                src={`${router.basePath}/assets/images/party2.png`}
                alt="First feature alt text"
              /></div> */}

          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
