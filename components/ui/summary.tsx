"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { CartItem as CartItemType } from "@/types";
import CartCheck from "../../app/[locale]/(routes)/cart/components/cart-check";

interface SummaryProps {
  locale: string;
  submit?: boolean;
  summaryTexts: any;
  onClick?: () => void;
}

const Summary = ({ locale, summaryTexts, submit, onClick }: SummaryProps) => {
  const [disableBtn, setDisableBtn] = useState(true);
  const cartItems = useCart((state) => state.items);
  const totalAmount = useCart((state) => state.totalAmount);
  const [items, setItems] = useState<CartItemType[] | []>([]);

  useEffect(() => {
    setDisableBtn(cartItems.length === 0);
  }, [cartItems]);

  useEffect(() => {
    setItems(cartItems);
  }, [cartItems]);

  return (
    <div className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <CartCheck
        items={items}
        locale={locale}
        summary={totalAmount}
        title={summaryTexts.orderSubtotal}
      />
      <div className="mt-6 border border-green-500 bg-green-100 rounded-lg p-3">
        <p>{summaryTexts.deliveryAreas}</p>
        <p>{summaryTexts.deliveryAmount}</p>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 text-base md:text-xl">
          <div className="font-medium text-gray-900">{summaryTexts.total}</div>
          <Currency value={totalAmount} />
        </div>
      </div>
      <Button
        type={submit ? "submit" : "button"}
        onClick={submit ? undefined : onClick}
        disabled={disableBtn}
        className="w-full mt-6"
      >
        {summaryTexts.buttonText}
      </Button>
    </div>
  );
};

export default Summary;
