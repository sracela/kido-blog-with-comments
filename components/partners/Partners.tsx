import { Section } from "../layout/Section";
import { useRouter } from "next/router";

const Partners = () => {
  const router = useRouter();
  return (
    <Section yPadding="pt-6 pb-12">
      <h3 className="text-center text-3xl text-gray-900 font-bold mb-12">
        Trusted by
      </h3>
        <ul className="flex flex-wrap justify-around px-6 gap-3 w-full">
          <li className="xs:mx-12 max-w-1/4">
            <a href="#">
              <img
                src={`${router.basePath}/assets/images/partners/logo Red DTI.png`}
                alt="First feature alt text"
                className="object-contain min-w-logo"
              />
            </a>
          </li>
          <li className="xs:mx-12 max-w-1/4">
            <a href="#">
              <img
                src={`${router.basePath}/assets/images/partners/Ooredoo-new-logo.png`}
                alt="First feature alt text"
                className="object-contain min-w-logo"
              />
            </a>
          </li>
          <li className="xs:mx-12 max-w-1/4">
            <a href="#">
              <img
                src={`${router.basePath}/assets/images/partners/LogoSwisstraffic2020.jpg`}
                alt="First feature alt text"
                className="object-contain min-w-logo"
              />
            </a>
          </li>
          <li className="xs:mx-12 max-w-1/4">
            <a href="#">
              <img
                src={`${router.basePath}/assets/images/partners/logo_altice.png`}
                alt="First feature alt text"
                className="object-contain min-w-logo"
              />
            </a>
          </li>
        </ul>
    </Section>
  );
};

export { Partners };
