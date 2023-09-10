import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslator } from "next-intl/server";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ost Food & Wine",
  description: "The perfect place to have dinner",
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
  icons: "/images/logo-bg.png",
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale = useLocale();
  const tFooter = await getTranslator(locale, "footer");
  const tNavbar = await getTranslator(locale, "header");
  const tContact = await getTranslator(locale, "contact");
  const tProduct = await getTranslator(locale, "productPage");
  const tFilter = await getTranslator(locale, "filter");

  const footerTexts = {
    feedbackTitle: tFooter("feedback-title"),
    feedbackText: tFooter("feedback-text"),
    feedbackInputPlaceholder: tFooter("feedback-input-placeholder"),
    feedbackBtn: tFooter("feedback-btn"),
    address: tFooter("address"),
    copyright: tFooter("copyright"),
  };

  const navbarTexts = {
    home: tNavbar("home"),
    about: tNavbar("about"),
    menu: tNavbar("menu"),
    contact: tNavbar("contact"),
    gallery: tNavbar("gallery"),
    mobileTitle: tNavbar("mobile-header-title"),
  };

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

  const infoTexts = {
    addToCart: tProduct("addToCart"),
    addToLiked: tProduct("addToLiked"),
    description: tProduct("description"),
  };
  const filterTexts = {
    all: tFilter("all-products"),
  };

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <ModalProvider
          locale={locale}
          translations={{
            contactInfoTexts,
            contactFormTexts,
            contactHeaderTexts,
            infoTexts,
            filterTexts,
          }}
        />
        <ToastProvider />
        <Navbar texts={navbarTexts} />
        <main className="pb-24 pt-14 lg:pt-24">{children}</main>
        <Footer texts={footerTexts} />
      </body>
    </html>
  );
}
