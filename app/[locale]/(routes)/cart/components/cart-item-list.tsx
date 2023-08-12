"use client";
import { useEffect, useState } from "react";
import CartItem from "./cart-item";
import useCart from "@/hooks/use-cart";
import { CartItem as CartItemType } from "@/types";
import Button from "@/components/ui/button";
import { useRouter } from "next-intl/client";

interface CartItemListProps {
  locale: string;
}

const CartItemList = ({ locale }: CartItemListProps) => {
  const cartItems = useCart((state) => state.items);
  const [items, setItems] = useState<CartItemType[] | null>();
  const router = useRouter();

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <div className="lg:col-span-7">
      {items && items.length === 0 ? (
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-neutral-500 text-lg">No items added to cart.</p>
          <Button onClick={() => router.push("/menu")}>Go To Menu</Button>
        </div>
      ) : (
        items &&
        items.map((item) => (
          <CartItem key={item._id} data={item} locale={locale} />
        ))
      )}
    </div>
  );
};

export default CartItemList;
