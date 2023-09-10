"use client";

import { isMobile } from "@/lib/utils";
import { useEffect, useState } from "react";
import MobileNavbar from "./components/mobile-navbar";
import DesktopNavbar from "./components/desktop-navbar";

const Navbar = ({ texts }: { texts: any }) => {
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
        <MobileNavbar title={texts.mobileTitle} />
      ) : (
        // <Suspense
        //   fallback={
        //     <Skeleton.Button
        //       active
        //       className="border-b-2 border-orange-600 fixed z-8000 w-full h-10"
        //     />
        //   }
        // >
        <DesktopNavbar texts={texts} />
        // </Suspense>
      )}
    </>
  );
};

export default Navbar;
