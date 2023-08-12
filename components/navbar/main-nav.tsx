"use client";

import Link from "next-intl/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: "/#hero",
      label: "Գլխավոր",
      active: pathname === "/",
    },
    {
      href: "/menu",
      label: "Մենյու",
      active: pathname === "/menu",
    },
    {
      href: "/#about",
      label: "Մեր մասին",
      active: pathname === "/#about",
    },
    {
      href: "/#contact",
      label: "Հետադարձ կապ",
      active: pathname === "/#contact",
    },
    {
      href: "/#gallery-images",
      label: "Պատկերներ",
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
