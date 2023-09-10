"use client";
import Container from "@/components/ui/container";
import InfoCards from "./components/info-cards";
import ContactForm from "./components/contact-form";
import { isMobile } from "@/lib/utils";
import ContactHeader from "./components/contact-header";
import MapLocation from "./components/map-location";
import { useEffect, useState } from "react";

const ContactSection = ({
  contactHeaderTexts,
  formTexts,
  contactInfoTexts,
  locale,
}: {
  contactHeaderTexts: any;
  contactInfoTexts: any;
  formTexts: any;
  locale: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {!isMobile() && (
        <section id="contact" className="contact py-5">
          <Container>
            <ContactHeader contactHeaderTexts={contactHeaderTexts} />
            <MapLocation />
          </Container>
          <Container>
            <InfoCards contactInfoTexts={contactInfoTexts} />
            <ContactForm locale={locale} formTexts={formTexts} />
          </Container>
        </section>
      )}
    </>
  );
};

export default ContactSection;
