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
    "p-3",
    "flex",
    "flex-wrap",
    // "items-center"
  );

  const router = useRouter();
  const [active, setActive] = useState(1)

  return (
    <Background color="bg-gray-100">
      <Section yPadding="pt-8">
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

      <Section yPadding="pt-12 pb-8">

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

        <div className="text-center pt-2 mt-12 flex gap-8 xs:justify-center">
          <Link href="https://es.app.kidodynamics.com/tourism">
            <a>
              <Button xl>See more stats</Button>
            </a>
          </Link>

          <Link href="https://es.app.kidodynamics.com/">
            <a>
              <Button xl inverse>Contact us</Button>
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

          <div className="w-full md:w-1/2 p-0 flex flex-col mt-20">
            {active === 1 ? (<img
              src={`${router.basePath}/assets/images/first.png`}
              alt="First feature alt text"
            />) : active === 2 ? (<img
              src={`${router.basePath}/assets/images/second.png`}
              alt="Second feature alt text"
            />) : (<img
              src={`${router.basePath}/assets/images/third.png`}
              alt="Third feature alt text"
            />)}
            <div className="text-right text-sm mr-8 my-0 p-0">
              Período: De 01-05-2021 a 31-05-2021.<br></br>
              {/* Datos para <i>{active === 1 ? "Barcelona" : active === 2 ? "Cádiz" : "Sarria"}</i>. */}
            </div>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
