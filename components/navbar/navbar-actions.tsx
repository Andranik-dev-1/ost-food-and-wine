"use client";

import { LuHeart, LuShoppingBag } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useRouter } from "next-intl/client";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import LangSwitcher from "./components/lang-switcher";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  // const switchLang = (lang: string) => {
  //   router.replace(pathname, { locale: lang });
  // };
  // const items: MenuProps["items"] = [
  //   {
  //     key: "1",
  //     label: (
  //       <div
  //         className="px-1 my-1 flex justify-center"
  //         onClick={() => switchLang("am")}
  //       >
  //         <Image src={`/images/am.svg`} width="20" height="15" alt="am" />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <div
  //         className="px-1 my-1 flex justify-center"
  //         onClick={() => switchLang("ru")}
  //       >
  //         <Image src={`/images/ru.svg`} width="20" height="15" alt="ru" />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <div
  //         className="px-1 my-1 flex justify-center"
  //         onClick={() => switchLang("en")}
  //       >
  //         <Image src={`/images/en.svg`} width="20" height="15" alt="en" />
  //       </div>
  //     ),
  //   },
  // ];

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-2">
      <Button
        className="flex items-center rounded-full bg-transparent px-2 py-1"
        onClick={() => router.push("/liked")}
      >
        <LuHeart className="text-2xl" />
      </Button>

      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <LuShoppingBag className="text-xl" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
      <LangSwitcher buttonClassName="text-2xl" />

      {/* <Dropdown menu={{ items }} placement="bottom" overlayClassName={"z-9000"}>
        <Button className="flex items-center rounded-full bg-transparent text-white hover:text-orange-600 px-2 py-1">
          <Globe size={25} />
        </Button>
      </Dropdown> */}
    </div>
  );
};

export default NavbarActions;
