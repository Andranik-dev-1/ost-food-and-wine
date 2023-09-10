"use client";

import DrawerPage from "@/components/drawer-page";
import useNavbarDrawer from "@/hooks/drawers/use-navbar-drawer";
import InfoCards from "../sections/contact-section/components/info-cards";
import MapLocation from "../sections/contact-section/components/map-location";

interface NavbarDrawerProps {
  translations: any;
}

const NavbarDrawer = ({ translations }: NavbarDrawerProps) => {
  const navbarDrawer = useNavbarDrawer();

  return (
    <DrawerPage
      placement="right"
      open={navbarDrawer.isOpen}
      onCloseDrawer={navbarDrawer.onClose}
    >
      <InfoCards contactInfoTexts={translations} />
      <MapLocation />
    </DrawerPage>
  );
};

export default NavbarDrawer;
