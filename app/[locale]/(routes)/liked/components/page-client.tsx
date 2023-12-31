"use client";

import Button from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import useLikedStore from "@/hooks/use-liked";
import { Product } from "@/types";
import { useRouter } from "next-intl/client";
import { useEffect, useState } from "react";

const PageClient = ({ locale, texts }: { locale: string; texts: any }) => {
  const router = useRouter();
  const items = useLikedStore((state) => state.items);
  const clearList = useLikedStore((state) => state.removeAll);
  const [likedItems, setLikedItems] = useState<Product[]>([]);

  useEffect(() => {
    setLikedItems(items);
  }, [items]);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-lg lg:text-2xl font-semibold text-orange-600">
          {texts.likedTitle}
        </h1>
        <Button
          className="px-4 py-2 bg-orange-600 text-white"
          onClick={clearList}
        >
          {texts.deleteAllBtn}
        </Button>
      </div>

      <hr className="my-3 border-orange-600" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {likedItems.map((item) => (
          <ProductCard key={item._id} data={item} locale={locale} />
        ))}
      </div>
      {!likedItems.length && (
        <div className="h-full flex flex-col justify-center items-center py-10">
          <p className="mb-1">{texts.likedP1}</p>
          <p className="mb-3">{texts.likedP2}</p>
          <Button
            className="px-4 py-2 my-2 bg-orange-600 text-white"
            onClick={() => router.push("/menu")}
          >
            {texts.menuBtn}
          </Button>
        </div>
      )}
    </>
  );
};

export default PageClient;
