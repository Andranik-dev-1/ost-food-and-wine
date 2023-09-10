import Container from "@/components/ui/container";
import { useLocale } from "next-intl";
import PageClient from "./components/page-client";
import { getTranslator } from "next-intl/server";

const LikedPage = async () => {
  const locale = useLocale();
  const t = await getTranslator(locale, "liked");
  const texts = {
    likedTitle: t("liked-title"),
    deleteAllBtn: t("delete-all-btn"),
    likedP1: t("liked-p1"),
    likedP2: t("liked-p2"),
    menuBtn: t("menu-btn"),
  };
  return (
    <Container>
      <PageClient locale={locale} texts={texts} />
    </Container>
  );
};

export default LikedPage;
