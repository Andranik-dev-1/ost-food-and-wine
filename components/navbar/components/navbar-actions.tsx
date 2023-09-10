"use client";

import { LuHeart, LuShoppingBag } from "react-icons/lu";
import { useEffect, useState } from "react";
import { useRouter } from "next-intl/client";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import LangSwitcher from "../../ui/lang-switcher";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

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
    </div>
  );
};

export default NavbarActions;
