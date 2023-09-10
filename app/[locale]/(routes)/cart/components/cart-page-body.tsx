"use client";

import { useRouter } from "next-intl/client";
import CartItemList from "./cart-item-list";
import Summary from "../../../../../components/ui/summary";

const CartPageBody = ({
  locale,
  cartListTexts,
  summaryTexts,
}: {
  locale: string;
  cartListTexts: any;
  summaryTexts: any;
}) => {
  const router = useRouter();
  return (
    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 relative">
      <CartItemList locale={locale} cartListTexts={cartListTexts} />
      <Summary
        locale={locale}
        summaryTexts={summaryTexts}
        onClick={() => router.push("/checkout")}
      />
    </div>
  );
};

export default CartPageBody;
