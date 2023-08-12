import Container from "@/components/ui/container";
import ImageGallery from "@/components/Image-gallery";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import { useLocale } from "next-intl";

export const revalidate = 0;

export default async function HomePage() {
  const locale = useLocale();
  return (
    <>
      <Container>
        <div id="hero" className="overflow-hidden">
          <div
            className="bg-cover bg-fixed lg:bg-local bg-center rounded-xl"
            style={{ backgroundImage: `url('/images/ost-slide-1.png')` }}
          >
            <div className="w-full flex py-44 flex-col justify-center items-center text-center gap-y-8 bg-black/60 rounded-xl">
              <h1 className="font-bold text-orange-600 text-3xl sm:text-4xl lg:text-5xl sm:max-w-xl max-w-xs">
                Բարի գալուստ Օստ Ուտելիք և Գինի
              </h1>
              <p className="text-white sm:max-w-2xl max-w-xs">
                Եզակի ճաշի փորձ, որն առաջարկում է համերի և խոհարարական
                հաճույքների յուրահատուկ խառնուրդ: Մեր ռեստորանը գտնվում է քաղաքի
                սրտում, և մենք հպարտանում ենք, որ մեր հյուրերին մատուցում ենք
                բացառիկ ճաշի փորձ, որը նրանք կփայփայեն ողջ կյանքի ընթացքում:
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* about section */}
      <AboutSection />
      {/* contact sectio */}

      <ContactSection locale={locale} />
      {/* section gallery */}
      <section className="py-5 md:py-10" id="gallery-images">
        <Container>
          <h2 className="font-bold text-orange-600 text-2xl sm:text-3xl lg:text-4xl sm:max-w-2xl max-w-xs">
            Լուսանկարներ մեր ռեստորանից
          </h2>
          <div className="border-b-2 border-orange-600 my-3 mb-8"></div>

          <ImageGallery />
        </Container>
      </section>
    </>
  );
}
