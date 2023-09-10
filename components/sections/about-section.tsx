import Image from "next/image";
import { useTranslations } from "next-intl";

import Container from "../ui/container";
import Button from "../ui/button";

const AboutSection = () => {
  const t = useTranslations("main.aboutSection");
  return (
    <section className="py-5 md:py-8" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
          <div className="flex flex-col justify-center items-stretch">
            <h2 className="font-bold text-orange-600 text-2xl sm:text-3xl lg:text-4xl sm:max-w-xl max-w-xs mb-8">
              {t("about-heading")}
            </h2>
            <p className="mb-4 ">{t("about-p1")}</p>
            <p className="">{t("about-p2")}</p>
          </div>
          <div className="flex flex-col justify-center items-stretch">
            <Image
              src="/images/about-sec.png"
              alt="img"
              width="1360"
              height="1020"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-6">
          <div className="flex flex-col justify-center items-stretch order-last lg:order-first">
            <Image
              src="/images/about-sec-wine.png"
              alt="img"
              width="1360"
              height="1020"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-stretch">
            <div>
              <p className="mb-4">{t("about-p3")}</p>
              <p className="mb-4">{t("about-p4")}</p>
              <p>{t("about-p5")}</p>
              <div className="flex justify-center mt-6">
                <Button full>{t("about-wines-btn")}</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
