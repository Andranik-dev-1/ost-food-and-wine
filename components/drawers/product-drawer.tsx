"use client";

import usePoductModal from "@/hooks/drawers/use-product-drawer";
import Gallery from "@/components/gallery";
import Info from "@/components/ui/info";
import DrawerPage from "../drawer-page";

interface ProductDrawerProps {
  locale: string;
}

const ProductDrawer = ({ locale }: ProductDrawerProps) => {
  const previewModal = usePoductModal();
  const product = usePoductModal((state) => state.data);

  if (!product) {
    return null;
  }

  return (
    <DrawerPage
      placement="right"
      open={previewModal.isOpen}
      onCloseDrawer={previewModal.onClose}
    >
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <Gallery images={product.images} />
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <Info data={product} locale={locale} />
        </div>
      </div>
      <hr className="my-10" />
    </DrawerPage>
  );
};

export default ProductDrawer;
