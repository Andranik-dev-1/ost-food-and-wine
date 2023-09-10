import Form from "./components/form";
import Container from "@/components/ui/container";
import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import Header from "./components/header.tsx";
export const revalidate = 0;

export default async function CheckoutPage() {
  const locale = useLocale();
  const t = await getTranslator(locale, "payment");
  const tCart = await getTranslator(locale, "cart");

  const formTexts = {
    nameLabel: t("name-label"),
    namePlaceholder: t("name-placeholder"),
    detailsLabel: t("details-label"),
    detailsText: t("details-text"),
    phoneLabel: t("phone-label"),
    phonePlaceholder: t("phone-placeholder"),
    addressLabel: t("address-label"),
    addressPlaceholder: t("address-placeholder"),
    paymentMethodText: t("payment-method-text"),
    paymentByCash: t("payment-by-cash"),
    orderText: t("order-btn-text"),
    orderSubtotal: t("subtotal-text"),
    total: t("total"),
    nameErrorMessage: t("nameErrorMessage"),
    phoneErrorMessage: t("phoneErrorMessage"),
    addressErrorMessage: t("addressErrorMessage"),
    deliveryAreas: tCart("delivery-areas"),
    deliveryAmount: tCart("delivery-amount"),
  };
  return (
    <Container>
      <Header title={t("payment-text")} />
      <Form texts={formTexts} locale={locale} />
    </Container>
  );
}
