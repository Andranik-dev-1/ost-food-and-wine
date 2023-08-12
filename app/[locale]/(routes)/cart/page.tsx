import Container from "@/components/ui/container";
import { useLocale } from "next-intl";
import CartPageBody from "./components/cart-page-body";

export const revalidate = 0;

export default function CardPage() {
  const locale = useLocale();

  return (
    <Container>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
      </div>
      <CartPageBody locale={locale} />
    </Container>
  );
}
