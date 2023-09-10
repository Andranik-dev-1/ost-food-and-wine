"use client";

import Link from "next-intl/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const MainNav = ({ texts }: { texts: any }) => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/#hero",
      label: texts.home,
      active: pathname === "/",
    },
    {
      href: "/menu",
      label: texts.menu,
      active: pathname === "/menu",
    },
    {
      href: "/#about",
      label: texts.about,
      active: pathname === "/#about",
    },
    {
      href: "/#contact",
      label: texts.contact,
      active: pathname === "/#contact",
    },
    {
      href: "/#gallery-images",
      label: texts.gallery,
      active: pathname === "/#gallery-images",
    },
  ];

  return (
    <nav className="ml-10 mr-6 flex items-center space-x-4 lg:space-x-6 overflow-x-scroll">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-orange-600 py-3",
            route.active ? "text-orange-600" : "text-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
