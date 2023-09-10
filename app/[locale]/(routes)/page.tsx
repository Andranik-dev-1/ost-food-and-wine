import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import GallerySection from "@/components/sections/gallery-section";

export const revalidate = 0;

export default async function HomePage() {
  const locale = useLocale();
  const tContact = await getTranslator(locale, "contact");

  const contactFormTexts = {
    btnText: tContact("contactForm.send-message-btn"),
    namePlaceholder: tContact("contactForm.name-placeholder"),
    nameValidation: tContact("contactForm.name-validation"),
    phonePlaceholder: tContact("contactForm.phone-placeholder"),
    subjectPlaceholder: tContact("contactForm.subject-placeholder"),
    messagePlaceholder: tContact("contactForm.message-placeholder"),
    messageValidation: tContact("contactForm.message-validation"),
  };

  const contactInfoTexts = {
    locationText: tContact("infoCards.location-text"),
    openHoursText: tContact("infoCards.open-hours-text"),
    emailText: tContact("infoCards.email-text"),
    callText: tContact("infoCards.call-text"),
    addressText: tContact("infoCards.address-text"),
    addressTextRegion: tContact("infoCards.address-text-region"),
  };

  const contactHeaderTexts = {
    header: tContact("contactHeader.contact-heading"),
    subheader: tContact("contactHeader.contact-subheading"),
  };

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection
        locale={locale}
        contactHeaderTexts={contactHeaderTexts}
        contactInfoTexts={contactInfoTexts}
        formTexts={contactFormTexts}
      />
      <GallerySection locale={locale} />
    </>
  );
}
