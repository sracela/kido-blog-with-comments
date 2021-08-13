import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { Section } from "../layout/Section";
import className from "classnames";
import { useRouter } from "next/router";

import Typewriter from "typewriter-effect";
import { useState } from "react";

const Hero = () => {
  const verticalFeatureClass = className(
    // "mt-10",
    // "p-3",
    "flex",
    "flex-wrap",
    // "items-center"
    // "text-gray-600"
  );

  const router = useRouter();
  const [active, setActive] = useState(1);

  return (
    <Background color="bg-gray-100">
      <Section yPadding="pt-12 pb-6 px-12">
        <div className={verticalFeatureClass}>
          <div className="w-full md:w-1/2 text-left sm:px-5 px-12 py-12">
            <h1 className="lg:text-6xl text-4xl text-gray-800 font-extrabold leading-tight">
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
            <h3 className="mt-8 text-lg lg:text-2xl">
              Understanding people's mobility to boost your business.
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

          <div className="w-full md:w-1/2 p-0 pb-12 flex justify-center flex-col">
            {active === 1 ? (
              <img
                src={`${router.basePath}/assets/images/superpos.png`}
                alt="First feature alt text"
                className="object-contain"
              />
            ) : active === 2 ? (
              <img
                src={`${router.basePath}/assets/images/superpos2.png`}
                alt="Second feature alt text"
                className="object-contain"
              />
            ) : (
              <img
                src={`${router.basePath}/assets/images/superpos3.png`}
                alt="Third feature alt text"
                className="object-contain"
              />
            )}
            <span className="text-center" style={{ color: "#b8b8d9" }}>
              We operate worldwide! Check out the other countries{" "}
              <strong>here</strong>.{" "}
            </span>
          </div>
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
