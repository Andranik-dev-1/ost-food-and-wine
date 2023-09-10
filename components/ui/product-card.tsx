"use client";

import Image from "next/image";
import { MouseEventHandler, useEffect, useState } from "react";
import { LuHeart, LuShoppingCart } from "react-icons/lu";

import { FaHeart } from "react-icons/fa";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useProductDrawer from "@/hooks/drawers/use-product-drawer";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import useLikedStore from "@/hooks/use-liked";
import Skeleton from "./skeleton";
import { isMobile } from "@/lib/utils";
import { useRouter } from "next-intl/client";

interface ProductCard {
  data: Product;
  locale: string;
  inSlider?: boolean;
}

const ProductCard: React.FC<ProductCard> = ({ data, locale, inSlider }) => {
  const [mounted, setMounted] = useState(false);
  const productDrawer = useProductDrawer();
  const addItem = useCart((state) => state.addItem);
  const toggleLikedItem = useLikedStore((state) => state.toggleItem);
  const LikedItems = useLikedStore((state) => state.items);
  const router = useRouter();

  const existingItem = LikedItems.find((item) => item._id === data._id);
  let heartIcon;
  if (existingItem) {
    heartIcon = <FaHeart className="text-sm md:text-lg text-red-600" />;
  } else {
    heartIcon = <LuHeart className="text-gray-600 text-sm md:text-lg" />;
  }

  const handleClick = () => {
    if (isMobile()) {
      productDrawer.onOpen(data);
    } else {
      router.push(`/product/${data?._id}`);
    }
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    addItem(data);
  };

  const onAddToLiked: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    toggleLikedItem(data);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`bg-white group cursor-pointer transition-colors rounded-xl border p-2 md:p-3 space-y-2 md:space-y-4 hover:border-orange-600 ${
          inSlider && "w-40 md:w-60"
        }`}
      >
        <div className="w-full h-3/5 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
        <div className="w-1/2 h-4 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
        <div className="w-full h-4 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
        <div className="w-full h-4 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
        <div className="w-full h-5 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`bg-white group cursor-pointer transition-colors rounded-xl border p-2 md:p-3 space-y-2 md:space-y-4 hover:border-orange-600 ${
        inSlider && "w-40 md:w-60"
      }`}
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]}
          alt="image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // sizes="100%"
          className="aspect-square object-cover rounded-md"
        />
        {!isMobile() && (
          <span className="opacity-0 group-hover:opacity-100 transition absolute p-2 top-0 right-0">
            <IconButton onClick={onAddToLiked} icon={heartIcon} />
          </span>
        )}
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-sm md:text-lg text-ellipsis overflow-hidden whitespace-nowrap">
          {data.name[locale as keyof typeof data.name]}
        </p>
        <p className="text-xs md:text-sm text-gray-500 text-ellipsis overflow-hidden whitespace-nowrap">
          {data.category?.name[locale as keyof typeof data.category.name]}
        </p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between text-sm md:text-lg">
        <Currency value={data.price} />
        <IconButton
          onClick={onAddToCart}
          icon={<LuShoppingCart className="text-gray-600 text-sm md:text-lg" />}
        />
      </div>
    </div>
  );
};

export default ProductCard;
