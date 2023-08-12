"use client";

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";

import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
  locale: string;
}

const Info: React.FC<InfoProps> = ({ data, locale }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

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
        <div className="">
          <h3 className="font-semibold text-black">Description:</h3>
          <div>
            {data?.description?.[locale as keyof typeof data.description]}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          {/* <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data?.color?.value }}
          /> */}
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center justify-center gap-x-2 w-full animate-bounce"
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;