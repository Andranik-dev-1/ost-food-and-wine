"use client";

import useContactDrawer from "@/hooks/drawers/use-contact-drawer";
import DrawerPage from "../drawer-page";
import ContactForm from "../sections/contact-section/components/contact-form";
import ContactHeader from "../sections/contact-section/components/contact-header";

interface ProductDrawerProps {
  locale: string;
  translations: any;
}

const ContactDrawer = ({ locale, translations }: ProductDrawerProps) => {
  const contactDrawer = useContactDrawer();

  return (
    <DrawerPage
      placement="right"
      open={contactDrawer.isOpen}
      onCloseDrawer={contactDrawer.onClose}
    >
      <ContactHeader contactHeaderTexts={translations.contactHeaderTexts} />
      <ContactForm formTexts={translations.contactFormTexts} locale={locale} />
    </DrawerPage>
  );
};

export default ContactDrawer;
