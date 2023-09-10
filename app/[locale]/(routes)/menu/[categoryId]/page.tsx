import Container from "@/components/ui/container";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-result";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const locale = useLocale();
  const products = await getProducts({
    categoryId: params.categoryId,
  });
  const categories = await getCategories();
  const t = await getTranslator(locale, "filter");
  const currentCategory = categories.find(
    (item) => item._id === params.categoryId
  );

  const filterTexts = {
    all: t("all-products"),
  };
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
        <MobileFilters
          categories={categories}
          locale={locale}
          btnText={t("categories")}
        />
        <div className="hidden lg:block">
          <Filter
            name={t("categories")}
            data={categories}
            locale={locale}
            texts={filterTexts}
          />
        </div>
        <div className="mt-6 lg:col-span-4 lg:mt-0">
          <h3 className="text-lg font-semibold text-orange-600">
            {currentCategory?.name[locale as keyof typeof currentCategory.name]}
          </h3>
          <hr className="my-4 border-orange-600" />
          {products.length === 0 && <NoResults />}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {products.map((item) => (
              <ProductCard key={item._id} data={item} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPage;
