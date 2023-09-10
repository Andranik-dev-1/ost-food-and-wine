"use client";

import { useRouter, usePathname } from "next-intl/client";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface FilterProps {
  data: Category[];
  name: string;
  locale: string;
  texts: any;
}

const Filter: React.FC<FilterProps> = ({ data, name, locale, texts }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-orange-600">{name}</h3>
      <hr className="my-4 border-orange-600" />
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center">
          <Button
            className={cn(
              "rounded-md text-sm text-gray-800 p-2 bg-white border border-neutral-300",
              pathname === "/menu" &&
                "bg-orange-600 border-orange-600 text-white"
            )}
            onClick={() => router.push(`/menu`)}
          >
            {texts.all}
          </Button>
        </div>
        {data.map((category) => (
          <div key={category._id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-neutral-300",
                pathname.includes(category._id) &&
                  "bg-orange-600 border-orange-600 text-white"
              )}
              onClick={() => router.push(`/menu/${category._id}`)}
            >
              {category.name[locale as keyof typeof category.name]}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
