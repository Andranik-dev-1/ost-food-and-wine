import Container from "@/components/ui/container";
import { useLocale } from "next-intl";
import CartPageBody from "./components/cart-page-body";
import { useTranslations } from "next-intl";

export const revalidate = 0;

export default function CardPage() {
  const locale = useLocale();
  const t = useTranslations("cart");
  const cartListTexts = {
    emptyCart: t("cart-p1"),
    menuBtn: t("menu-btn"),
  };
  const summaryTexts = {
    deliveryAreas: t("delivery-areas"),
    deliveryAmount: t("delivery-amount"),
    total: t("total"),
    orderSubtotal: t("subtotal-text"),
    buttonText: t("submit-btn"),
  };
  return (
    <Container>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">{t("your-cart-text")}</h1>
      </div>
      <CartPageBody
        locale={locale}
        cartListTexts={cartListTexts}
        summaryTexts={summaryTexts}
      />
    </Container>
  );
}
