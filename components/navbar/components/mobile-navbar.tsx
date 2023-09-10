import Link from "next-intl/link";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineMenuBook } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuHeart, LuMail, LuPhone, LuShoppingBag } from "react-icons/lu";
import { usePathname } from "next-intl/client";
import useContactDrawer from "@/hooks/drawers/use-contact-drawer";
import LangSwitcher from "../../ui/lang-switcher";
import useNavbarDrawer from "@/hooks/drawers/use-navbar-drawer";

const MobileNavbar = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const contactDrawer = useContactDrawer();
  const navbarDrawer = useNavbarDrawer();
  const routes = [
    {
      href: "/",
      label: "home",
      active: pathname === "/",
      icon: <AiFillHome />,
    },
    {
      href: "/liked",
      label: "liked",
      active: pathname === "/liked",
      icon: <LuHeart />,
    },
    {
      href: "/menu",
      label: "menu",
      active: pathname === "/menu",
      icon: <MdOutlineMenuBook />,
    },
    {
      href: "/cart",
      label: "cart",
      active: pathname === "/cart",
      icon: <LuShoppingBag />,
    },
    //setting page need to be user profile page
    // {
    //   href: "/",
    //   label: "settings",
    //   active: pathname === "/",
    //   icon: <GiHamburgerMenu />,
    // },
  ];
  return (
    <>
      <div className="fixed top-0 border-b border-orange-600 bg-white text-black w-full z-8000">
        <div className="absolute left-1/2 -translate-x-1/2 flex h-full items-center">
          {title}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <div
              className={`text-xl p-3 cursor-pointer ${
                contactDrawer.isOpen && "text-orange-600"
              }`}
              onClick={contactDrawer.onToggle}
            >
              <LuMail />
            </div>

            <a href="tel:+37410234334" className="text-xl p-3">
              <LuPhone />
            </a>
          </div>
          <div>
            <LangSwitcher buttonClassName="text-black text-xl" />
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-0 border-t border-orange-600 bg-white text-black w-full z-8000"
        style={{ boxShadow: "0px 15px 15px 8px #ea580c" }}
      >
        <div className="flex justify-around mb-4">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              aria-label="Go to home page"
              className="p-3 transition-colors"
            >
              <div
                className={`text-xl ${
                  route.active && !navbarDrawer.isOpen && "text-orange-600"
                }`}
              >
                {route.icon}
              </div>
            </Link>
          ))}
          {/* petqa esi stex chlni vor havayi sraactiv classi het sax chkapvi sra text pti verevi glubsy lini prosto hima mihat globusi hamar petq chi settings menu bacel */}
          <div
            onClick={navbarDrawer.onToggle}
            className={`text-xl p-3 transition-colors ${
              navbarDrawer.isOpen && "text-orange-600"
            }`}
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
