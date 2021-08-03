import Link from "next/link";

import { Background } from "../background/Background";
import { Button } from "../button/Button";
import { HeroOneButton } from "../hero/HeroOneButton";
import { Section } from "../layout/Section";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "./Logo";
import className from "classnames";
import { useRouter } from "next/router";
import { useState } from "react";

const Hero = () => {
  const verticalFeatureClass = className(
    "mt-10",
    "flex",
    "flex-wrap"
    // "items-center"
  );

  const router = useRouter();
  return (
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
        {/* <HeroOneButton
        // title={
        //   <>
        //     {'A modern digital platform specialized in \n'}
        //     <span className="text-primary-500">Tourism</span>, <span className="text-secondary-500">Mobility</span> and
        //     <span className="text-terciary-500"> Retail</span> data
        //   </>
        // }
        title="Unveil powerful insights to take smarter decisions"
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
      /> */}

        <div className={verticalFeatureClass}>
          <div className="w-full sm:w-1/2 text-left sm:px-5">
            <h1 className="text-4xl text-gray-800 font-bold">
              Unveil Powerful Insights of{" "}
              <span className="text-primary-500">any location </span>
              to take<i> Smarter Decisions</i>.
            </h1>

            <h3 className="mt-12 text-2xl font-semibold">
              <i>¿Ha afectado la pandemia a mi ciudad el último mes?</i>
            </h3>
            <div className="mt-6 text-gray-800 text-xl">
              Descubre cuántas personas han visitado tu ciudad durante la
              pandemia y si ha recibido más o menos turistas internacionales que
              otros años.
            </div>

            <div className="mt-12 text-center">
              {" "}
              <Link href="https://es.app.kidodynamics.com/">
                <a>
                  <Button>Test the platform</Button>
                </a>
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-1/2 p-7 flex flex-col">
            <div>
              <p className="mb-3">
                Puedes probar con "Barcelona", "Cádiz" o "Sarria".
              </p>
              <input
                autoFocus
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.9,
                  height: "calc(1.9em + .75rem + 2px)",
                  display: "block",
                  width: "100%",
                  padding: ".375rem .75rem",
                  textAlign: "left",
                  background: "#fff",
                  backgroundClip: "padding-box",
                  border: "2px solid #eaeff4",
                  borderRadius: "6px",
                  transition: "all 0.3s ease-out",
                  overflow: "invisible",
                  boxSizing: "border-box",
                  color: "text",
                  outline: 0,
                }}
                value="Barcelona"
                placeholder="Barcelona"
              />
            </div>
            <img
              src={`${router.basePath}/assets/images/first.png`}
              alt="Second feature alt text"
            />
            <div className="mt-1 text-primary-500 underline text-right">
              <Link href="https://es.app.kidodynamics.com/">
                <a>-{">"} See more stats</a>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="text-center pt-10">
        <Link href="https://es.app.kidodynamics.com/">
            <a>
              <Button xl>Test the platform</Button>
            </a>
          </Link></div> */}
      </Section>
    </Background>
  );
};

export { Hero };
