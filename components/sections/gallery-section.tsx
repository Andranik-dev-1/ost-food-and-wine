import ImageGallery from "../Image-gallery";
import Container from "../ui/container";
import { useTranslations } from "next-intl";

const GallerySection = ({ locale }: { locale: string }) => {
  const t = useTranslations("main.gallerySection");
  return (
    <section className="py-5 md:py-10" id="gallery-images">
      <Container>
        <h2 className="font-bold text-orange-600 text-2xl sm:text-3xl lg:text-4xl sm:max-w-2xl max-w-xs">
          {t("gallery-heading")}
        </h2>
        <div className="border-b-2 border-orange-600 my-3"></div>
        <p className="mb-5"> {t("gallery-subheading")}</p>
        <ImageGallery />
      </Container>
    </section>
  );
};

export default GallerySection;
