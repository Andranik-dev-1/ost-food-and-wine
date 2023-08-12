"use client";

import { useEffect, useState } from "react";
import ProductDrawer from "@/components/drawers/product-drawer";
import ContactDrawer from "@/components/drawers/contact-drawer";
import NavbarDrawer from "@/components/drawers/navbar-drawer";
import FilltersDrawer from "@/components/drawers/fillters-drawer";

interface ModalProviderProps {
  locale: string;
}

const ModalProvider = ({ locale }: ModalProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProductDrawer locale={locale} />
      <ContactDrawer locale={locale} />
      <NavbarDrawer locale={locale} />
      <FilltersDrawer locale={locale} />
    </>
  );
};

export default ModalProvider;
