"use client";

import { useEffect, useState, useMemo } from "react";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { CartItem as CartItemType } from "@/types";
import CartCheck from "./cart-check";

interface SummaryProps {
  locale: string;
  submit?: boolean;
  buttonText: string;
  onClick?: () => void;
}

const Summary = ({ locale, buttonText, submit, onClick }: SummaryProps) => {
  const [disableBtn, setDisableBtn] = useState(true);
  const cartItems = useCart((state) => state.items);
  const totalAmount = useCart((state) => state.totalAmount);
  const deliveryPrice = useCart((state) => state.deliveryPrice);
  const [items, setItems] = useState<CartItemType[] | []>([]);
  // const [deliveryPrice, setDeliveryPrice] = useState(500);

  // const totalAmount: number = useMemo(() => {
  //   const amount = cartItems.reduce(
  //     (prev, next) => prev + next.count * +next.price,
  //     0
  //   );
  //   return amount;
  // }, [cartItems]);

  useEffect(() => {
    setDisableBtn(cartItems.length === 0);
  }, [cartItems]);

  // useEffect(() => {
  //   const price =
  //     totalAmount >= 0 && totalAmount <= 5000
  //       ? 1000
  //       : totalAmount >= 5001 && totalAmount <= 20000
  //       ? 600
  //       : 300;
  //   setDeliveryPrice(price);
  // }, [totalAmount]);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <div className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <CartCheck items={items} locale={locale} summary={totalAmount} />

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base md:text-xl">
          <div className="font-medium text-gray-900">Delivery</div>
          <Currency value={deliveryPrice} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base md:text-xl">
          <div className="font-medium text-gray-900">Order total</div>
          <Currency value={totalAmount + deliveryPrice} />
        </div>
      </div>
      <Button
        type={submit ? "submit" : "button"}
        onClick={submit ? undefined : onClick}
        disabled={disableBtn}
        className="w-full mt-6"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Summary;
