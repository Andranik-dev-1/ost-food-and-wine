import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container";
import Filter from "./[categoryId]/components/filter";
import MobileFilters from "./[categoryId]/components/mobile-filters";
import { useLocale } from "next-intl";
import { getTranslator } from "next-intl/server";
import { CategorySlider } from "@/components/ui/category-slider";
import getAllProductsByCategorieset from "@/actions/get-allproducts-by-category";

const MenuPage = async () => {
  const locale = useLocale();
  const allProductsByCategories = await getAllProductsByCategorieset();
  const categories = await getCategories();
  const t = await getTranslator(locale, "filter");

  const filterTexts = {
    all: t("all-products"),
  };
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
        <MobileFilters
          categories={categories}
          btnText={t("categories")}
          locale={locale}
        />
        <div className="hidden lg:block">
          <Filter
            name={t("categories")}
            texts={filterTexts}
            data={categories}
            locale={locale}
          />
        </div>
        <div className="mt-6 lg:col-span-4 lg:mt-0">
          {allProductsByCategories.map((slide) => (
            <CategorySlider
              key={slide.id}
              title={slide.name[locale as keyof typeof slide.name]}
              products={slide.products}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MenuPage;
