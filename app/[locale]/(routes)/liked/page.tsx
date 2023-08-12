import Container from "@/components/ui/container";
import { useLocale } from "next-intl";
import PageClient from "./components/page-client";

const LikedPage = () => {
  const locale = useLocale();

  return (
    <Container>
      <PageClient locale={locale} />
    </Container>
  );
};

export default LikedPage;
