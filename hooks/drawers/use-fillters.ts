import { Category } from "@/types";
import { create } from "zustand";

interface FilltersDrawerStore {
  isOpen: boolean;
  data?: Category[];
  onOpen: (data: Category[]) => void;
  onClose: () => void;
}

const useFilltersDrawer = create<FilltersDrawerStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFilltersDrawer;
