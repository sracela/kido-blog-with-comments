import { Meta } from "../layout/Meta";
import { Footer } from "../templates/Footer";
import { AppConfig } from "../../utils/AppConfig";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "../templates/Logo";
import Link from "next/link";
import { Section } from "../layout/Section";
import { Button } from "../button/Button";

const Layout = ({ children }) => {
  return (
    <div className="antialiased bg-gray-100">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <div className="min-h-screen">
        <header>
          {" "}
          <Section yPadding="pt-12 px-12">
            <NavbarTwoColumns logo={<Logo xl />}>
              <li>
                <Link href="https://es.app.kidodynamics.com/">
                  <a>
                    <Button inverse>CONTACT SALES</Button>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://es.app.kidodynamics.com/">
                  <a>
                    <Button>GET STARTED</Button>
                  </a>
                </Link>
              </li>
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
