import Form from "./components/form";
import Container from "@/components/ui/container";
import { useLocale } from "next-intl";
import Summary from "../cart/components/summary";
import Header from "./components/header.tsx";
export const revalidate = 0;

export default function CheckoutPage() {
  const locale = useLocale();

  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}
