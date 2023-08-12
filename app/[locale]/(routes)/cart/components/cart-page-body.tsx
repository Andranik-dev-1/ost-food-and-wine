"use client";

import { useRouter } from "next-intl/client";
import CartItemList from "./cart-item-list";
import Summary from "./summary";

const CartPageBody = ({ locale }: { locale: string }) => {
  const router = useRouter();
  return (
    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 relative">
      <CartItemList locale={locale} />
      <Summary
        locale={locale}
        buttonText="Checkout"
        onClick={() => router.push("/checkout")}
      />
    </div>
  );
};

export default CartPageBody;
