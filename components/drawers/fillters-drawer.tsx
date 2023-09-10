"use client";

import Filter from "@/app/[locale]/(routes)/menu/[categoryId]/components/filter";
import DrawerPage from "../drawer-page";
import useFilltersDrawer from "@/hooks/drawers/use-fillters";

interface FilltersDrawerProps {
  locale: string;
  translations: any;
}

const FilltersDrawer = ({ locale, translations }: FilltersDrawerProps) => {
  const filltersDrawer = useFilltersDrawer();

  return (
    <DrawerPage
      placement="right"
      open={filltersDrawer.isOpen}
      onCloseDrawer={filltersDrawer.onClose}
    >
      {filltersDrawer.data && (
        <Filter
          name="Categories"
          data={filltersDrawer.data}
          locale={locale}
          texts={translations}
        />
      )}
    </DrawerPage>
  );
};

export default FilltersDrawer;
