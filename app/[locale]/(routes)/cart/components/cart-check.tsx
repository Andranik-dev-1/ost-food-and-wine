"use client";
import { CartItem } from "@/types";
import Currency from "@/components/ui/currency";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const CartCheck = ({
  items,
  locale,
  summary,
}: {
  items: CartItem[] | [];
  locale: string;
  summary: number;
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
          Order summary
          <Currency value={summary} />
        </div>
      ),
      children: selectChild,
    },
  ];
  ("Order summary");

  return (
    <>
      {/* <div className="flex justify-between items-center">
        <h2 className="text-base md:text-xl font-medium text-gray-900 md:mb-3">
          Order summary
        </h2>
        <span className="text-base md:text-xl">see</span>
      </div> */}
      {/* <div className="flex flex-col space-y-2 p-2 rounded-md "> */}
      {!!items.length && <Collapse items={selectItemS} bordered={false} />}
      {/* {items &&
          items.map((item) => (
            <div className="text-sm md:text-base flex items-center justify-between italic">
              <div className="font-medium text-gray-900">
                {item.name[locale as keyof typeof item.name]}
              </div>
              <Currency value={item.count * +item.price} />
            </div>
          ))} */}
      {/* </div> */}
    </>
  );
};

export default CartCheck;
