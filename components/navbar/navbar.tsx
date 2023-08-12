"use client";
import Link from "next-intl/link";
import MainNav from "@/components/navbar/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar/navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";
import { isMobile } from "@/lib/utils";
import { useEffect, useState } from "react";
import MobileNavbar from "./components/mobile-navbar";
// import { Heart, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      {isMobile() ? (
        <MobileNavbar />
      ) : (
        <div className="border-b-2 border-orange-600 fixed z-8000 bg-black/80 w-full">
          <Container>
            <div className="relative px-4 py-2 sm:px-6 lg:px-8 flex h-16 items-center">
              <Link
                href="/"
                aria-label="Go to home page"
                className="ml-4 flex lg:ml-0 gap-x-2"
              >
                <Image
                  src="/images/logo-bg.png"
                  alt="logo"
                  width={55}
                  height={55}
                  className="rounded-full"
                />
              </Link>

              <MainNav />
              <NavbarActions />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default Navbar;
