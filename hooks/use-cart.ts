import { create } from "zustand";
import { toast } from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { CartItem, Product } from "@/types";

interface CartStore {
  items: CartItem[];
  totalAmount: number;
  deliveryPrice: number;
  addItem: (data: Product) => void;
  increaseItem: (data: CartItem) => void;
  decreaseItem: (data: CartItem) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalAmount: 0,
      deliveryPrice: 0,
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item._id === data._id);

        if (existingItem) {
          return toast.success("Item already in cart.");
        }
        const cartItem = { ...data, count: 1 };
        set({
          items: [...get().items, cartItem],
          totalAmount: computeTotalAmount([...get().items, cartItem]),
          deliveryPrice: computeDeliveryPrice([...get().items, cartItem]),
        });
        toast.success("Item added to cart.");
      },
      increaseItem: (data: CartItem) => {
        const currentItems = get().items;
        const cartItem = { ...data, count: data.count + 1 };
        const updatedItems = currentItems.map((item) =>
          item._id === cartItem._id ? cartItem : item
        );
        set({
          items: updatedItems,
          totalAmount: computeTotalAmount(updatedItems),
          deliveryPrice: computeDeliveryPrice(updatedItems),
        });
        toast.success("Item increased to cart.");
      },
      decreaseItem: (data: CartItem) => {
        if (data.count <= 1) {
          return toast.error("Minimal count of item is 1");
        }
        const currentItems = get().items;
        const cartItem = { ...data, count: data.count - 1 };
        const updatedItems = currentItems.map((item) =>
          item._id === cartItem._id ? cartItem : item
        );
        set({
          items: updatedItems,
          totalAmount: computeTotalAmount(updatedItems),
          deliveryPrice: computeDeliveryPrice(updatedItems),
        });
        toast.success("Item decreased from cart.");
      },
      removeItem: (id: string) => {
        const updatedItems = get().items.filter((item) => item._id !== id);
        set({
          items: updatedItems,
          totalAmount: computeTotalAmount(updatedItems),
          deliveryPrice: computeDeliveryPrice(updatedItems),
        });
        toast.success("Item removed from cart.");
      },
      removeAll: () => {
        set({ items: [], totalAmount: 0, deliveryPrice: 0 });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;

function computeTotalAmount(items: CartItem[]): number {
  return items.reduce((total, item) => total + +item.price * item.count, 0);
}

function computeDeliveryPrice(items: CartItem[]): number {
  const totalAmount = computeTotalAmount(items);
  const deliveryPrice =
    totalAmount >= 0 && totalAmount <= 5000
      ? 1000
      : totalAmount >= 5001 && totalAmount <= 20000
      ? 600
      : 300;

  return deliveryPrice;
}
