import { FC } from "react";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";

interface CategorySliderProps {
  title: string;
  products: Product[];
  locale: string;
}

export const CategorySlider: FC<CategorySliderProps> = ({
  title,
  products,
  locale,
}) => {
  return (
    <section className="pb-10">
      <h3 className="text-lg font-semibold text-orange-600">{title}</h3>
      <hr className="my-4 border-orange-600" />
      <div className="w-full flex space-x-3 overflow-x-scroll slider">
        {products.map((item) => (
          <div key={item._id}>
            <ProductCard data={item} locale={locale} inSlider />
          </div>
        ))}
      </div>
    </section>
  );
};
