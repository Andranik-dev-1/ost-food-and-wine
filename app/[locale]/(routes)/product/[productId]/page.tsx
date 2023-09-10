import Gallery from "@/components/gallery";
import Info from "@/components/ui/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-result";
import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import { CategorySlider } from "../../../../../components/ui/category-slider";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const locale = useLocale();
  const product = await getProduct(params.productId);
  const t = await getTranslator(locale, "productPage");

  const suggestedProducts = await getProducts({
    categoryId: product?.category?._id,
  });

  const infoTexts = {
    addToCart: t("addToCart"),
    addToLiked: t("addToLiked"),
    description: t("description"),
  };

  if (!product) {
    return (
      <div className="h-full">
        <NoResults />
      </div>
    );
  }

  return (
    <Container>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-10">
          <Gallery images={product.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} locale={locale} infoTexts={infoTexts} />
          </div>
        </div>
        <hr className="my-10" />
        <CategorySlider
          title={t("similarProducts")}
          products={suggestedProducts}
          locale={locale}
        />
      </div>
    </Container>
  );
};

export default ProductPage;
