"use client";
import { CartItem } from "@/types";
import Currency from "@/components/ui/currency";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const CartCheck = ({
  items,
  locale,
  summary,
  title,
}: {
  items: CartItem[] | [];
  locale: string;
  summary: number;
  title: string;
}) => {
  const selectChild = items.map((item) => (
    <div
      key={item._id}
      className="text-sm md:text-base flex items-center justify-between italic mb-1"
    >
      <div className="font-medium text-gray-900">
        {item.name[locale as keyof typeof item.name]}
      </div>
      <Currency value={item.count * +item.price} />
    </div>
  ));

  const selectItemS: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex justify-between">
          {title}
          <Currency value={summary} />
        </div>
      ),
      children: selectChild,
    },
  ];
  return (
    <>{!!items.length && <Collapse items={selectItemS} bordered={false} />}</>
  );
};

export default CartCheck;
