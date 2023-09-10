"use client";

import { useEffect, useState } from "react";
import ProductDrawer from "@/components/drawers/product-drawer";
import ContactDrawer from "@/components/drawers/contact-drawer";
import NavbarDrawer from "@/components/drawers/navbar-drawer";
import FilltersDrawer from "@/components/drawers/fillters-drawer";

interface ModalProviderProps {
  locale: string;
  translations: any;
}

const ModalProvider = ({ locale, translations }: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProductDrawer locale={locale} translations={translations.infoTexts} />
      <ContactDrawer locale={locale} translations={translations} />
      <NavbarDrawer translations={translations.contactInfoTexts} />
      <FilltersDrawer locale={locale} translations={translations.filterTexts} />
    </>
  );
};

export default ModalProvider;
