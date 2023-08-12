import { create } from "zustand";

interface NavbarDrawerStore {
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}

const useNavbarDrawer = create<NavbarDrawerStore>((set) => ({
  isOpen: false,
  onToggle: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNavbarDrawer;
