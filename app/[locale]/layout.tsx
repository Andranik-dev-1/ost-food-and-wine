import "./globals.css";
import Footer from "@/components/footer/footer";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

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

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={urbanist.className}>
        <ModalProvider locale={locale} />
        <ToastProvider />
        <Navbar />
        <main className="pb-24 pt-14 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
