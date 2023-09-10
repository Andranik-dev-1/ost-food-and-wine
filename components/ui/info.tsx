"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";

import useCart from "@/hooks/use-cart";
import useLikedStore from "@/hooks/use-liked";
import { FaHeart } from "react-icons/fa";
import { LuHeart } from "react-icons/lu";
import IconButton from "./icon-button";

interface InfoProps {
  data: Product;
  locale: string;
  infoTexts: any;
}

const Info: React.FC<InfoProps> = ({ data, locale, infoTexts }) => {
  const addToCart = useCart((state) => state.addItem);
  const toggleLiked = useLikedStore((state) => state.toggleItem);
  const LikedItems = useLikedStore((state) => state.items);
  const existingItem = LikedItems.find((item) => item._id === data._id);
  let heartIcon;
  if (existingItem) {
    heartIcon = <FaHeart className="text-xl md:text-2xl text-red-600" />;
  } else {
    heartIcon = <LuHeart className="text-gray-600 text-xl md:text-2xl" />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">
        {data.name[locale as keyof typeof data.name]}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <hr className="my-4 border-orange-600" />
      <div className="flex flex-col gap-y-6">
        <div className="p-2 flex items-center">
          {infoTexts.addToLiked}
          <IconButton
            onClick={() => toggleLiked(data)}
            icon={heartIcon}
            className="ml-3"
          />
        </div>
        <div className="mb-4">
          {data?.description?.[locale as keyof typeof data.description] && (
            <h3 className="font-semibold text-black">
              {infoTexts.description}
            </h3>
          )}
          <div>
            {data?.description?.[locale as keyof typeof data.description]}
          </div>
        </div>
      </div>
      <div className="mt-10 py-4">
        <Button
          full
          onClick={() => addToCart(data)}
          className="flex items-center justify-center gap-x-2 w-full animate-bounce"
        >
          {infoTexts.addToCart}
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
