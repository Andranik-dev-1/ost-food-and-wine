"use client";

import { Plus } from "lucide-react";
import Button from "@/components/ui/button";
import { Category } from "@/types";
import useFilltersDrawer from "@/hooks/drawers/use-fillters";

interface MobileFiltersProps {
  categories: Category[];
  locale: string;
  btnText: string;
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  categories,
  locale,
  btnText,
}) => {
  const filltersDrawer = useFilltersDrawer();

  return (
    <>
      <Button
        onClick={() => filltersDrawer.onOpen(categories)}
        className="flex items-center gap-x-2 lg:hidden"
      >
        {/* ste vabshe pti grac lini fillters mtnen ynde amen filter ira categoriov */}
        {btnText}
        <Plus size={20} />
      </Button>
    </>
  );
};

export default MobileFilters;
