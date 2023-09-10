import Container from "../ui/container";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("main.heroSection");

  return (
    <Container>
      <div id="hero" className="overflow-hidden">
        <div
          className="bg-cover bg-fixed lg:bg-local bg-center rounded-xl"
          style={{ backgroundImage: `url('/images/ost-slide-1.png')` }}
        >
          <div className="w-full flex py-44 flex-col justify-center items-center text-center gap-y-8 bg-black/60 rounded-xl">
            <h1 className="font-bold text-orange-600 text-3xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs">
              {t("hero-heading")}
            </h1>
            <p className="text-white sm:max-w-2xl max-w-xs">
              {t("hero-subheading")}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
