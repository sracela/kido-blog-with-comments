import { Section } from "../layout/Section";
import { useRouter } from "next/router";
import { Background } from "../background/Background";

const WhyPage = () => {
  const router = useRouter();
  return (
    <div>
        <Background color="bg-backgroundColor-secondary">
          <Section yPadding="pt-20 pb-32">
            <div className="flex flex-col content-center w-full">
              <h2 className="text-center text-5xl text-gray-100 font-bold mb-6">
                Why KIDO?
              </h2>
              <p className="text-center text-lg text-gray-100 mb-12 max-w-screen-sm mx-auto">
                We generate deep knowledge about the
                mobility behaviour of millions of people through machine
                learning technologies leveraged by the science of social
                physics.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={`${router.basePath}/assets/images/esquema.png`}
                alt="First feature alt text"
                className="object-contain min-w-1/2 max-w-screen-lg"
              />
            </div>
          </Section>
        </Background>
      </div>

  );
};

export { WhyPage };
