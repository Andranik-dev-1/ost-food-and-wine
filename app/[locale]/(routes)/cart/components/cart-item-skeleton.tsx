import Skeleton from "@/components/ui/skeleton";
import React from "react";

const CartItemSkeleton = () => {
  return (
    <div className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Skeleton className="h-full" />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-around sm:ml-6">
        <div className="w-full h-4 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
        <div className="w-full h-4 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
        <div className="w-full h-4 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
        <div className="w-full h-4 aspect-square rounded-xl">
          <Skeleton className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
