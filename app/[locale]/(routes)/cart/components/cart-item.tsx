"use client";
import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { CartItem } from "@/types";
import { LuPlus, LuMinus } from "react-icons/lu";
import { useEffect, useState } from "react";
import CartItemSkeleton from "./cart-item-skeleton";

interface CartItemProps {
  data: CartItem;
  locale: string;
}

const CartItem = ({ data, locale }: CartItemProps) => {
  const [mounted, setMounted] = useState(false);
  const removeItem = useCart((state) => state.removeItem);
  const increaseItem = useCart((state) => state.increaseItem);
  const decreaseItem = useCart((state) => state.decreaseItem);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onRemove = () => {
    removeItem(data._id);
  };

  if (!mounted) {
    return <CartItemSkeleton />;
  }

  return (
    <div className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0]}
          alt="image"
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0 ">
          <p className="text-lg font-semibold text-black text-ellipsis overflow-hidden">
            {data.name[locale as keyof typeof data.name]}
          </p>
          <Currency value={data.price} />
        </div>
        <div className="flex items-center z-10 bottom-0 left-0 mt-2">
          <IconButton
            className="bg-orange-600 text-white"
            onClick={() => increaseItem(data)}
            icon={<LuPlus className="text-base lg:text-2xl" />}
          />
          <p className="text-black mx-3 w-8 text-center">x {data.count}</p>
          <IconButton
            className="bg-orange-600 text-white"
            onClick={() => decreaseItem(data)}
            icon={<LuMinus className="text-base lg:text-2xl" />}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
