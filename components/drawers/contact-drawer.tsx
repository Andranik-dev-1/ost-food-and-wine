"use client";

import useContactDrawer from "@/hooks/drawers/use-contact-drawer";
import DrawerPage from "../drawer-page";
import ContactForm from "../sections/contact-section/components/contact-form";
import ContactHeader from "../sections/contact-section/components/contact-header";

interface ProductDrawerProps {
  locale: string;
}

const ContactDrawer = ({ locale }: ProductDrawerProps) => {
  const contactDrawer = useContactDrawer();

  return (
    <DrawerPage
      placement="right"
      open={contactDrawer.isOpen}
      onCloseDrawer={contactDrawer.onClose}
    >
      <ContactHeader locale={locale} />
      <ContactForm locale={locale} />
    </DrawerPage>
  );
};

export default ContactDrawer;
