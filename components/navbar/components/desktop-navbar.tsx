import Container from "@/components/ui/container";
import Link from "next-intl/link";
import Image from "next/image";
import MainNav from "./main-nav";
import NavbarActions from "./navbar-actions";

const DesktopNavbar = ({ texts }: { texts: any }) => {
  return (
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

          <MainNav texts={texts} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default DesktopNavbar;
