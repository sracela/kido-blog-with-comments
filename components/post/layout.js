import { Meta } from "../layout/Meta";
import { Footer } from "../templates/Footer";
import { AppConfig } from "../../utils/AppConfig";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "../templates/Logo";
import Link from "next/link";
import { Section } from "../layout/Section";
import { Button } from "../button/Button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const lngs = {
  en: { nativeName: "English" },
  es: { nativeName: "Español" },
};

const Layout = ({ children, buttonA, buttonB }) => {
  const { t, i18n } = useTranslation("common");
  // const { locale, defaultLocale } = router;

  // useEffect(() => {
  //   console.log(`defaultLocale`, defaultLocale);
  //   console.log("locale", locale);
  // }, [router]);

  // useEffect(() => {
  //   console.log("locale", locale);
  //   i18n.changeLanguage(locale);
  // }, [locale]);
  
  return (
    <div className="antialiased bg-gray-100">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="min-h-screen">
        <header>
          <Section yPadding="pt-12 px-12">
            <NavbarTwoColumns logo={<Logo xl />}>
              <li>
                <Link href="https://es.app.kidodynamics.com/">
                  <a>
                    <Button inverse>{buttonA}</Button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://es.app.kidodynamics.com/">
                  <a>
                    <Button>{buttonB}</Button>
                  </a>
                </Link>
              </li>
              {Object.keys(lngs).map((lng) => (
                <button
                  key={lng}
                  style={{
                    fontWeight: i18n.language === lng ? "bold" : "normal",
                    margin: '16px'
                  }}
                  type="submit"
                  onClick={() => i18n.changeLanguage(lng)}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </NavbarTwoColumns>
          </Section>
        </header>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
