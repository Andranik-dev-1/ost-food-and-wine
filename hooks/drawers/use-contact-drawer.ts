import { create } from "zustand";

interface ContactDrawerStore {
  isOpen: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
}

const useContactDrawer = create<ContactDrawerStore>((set) => ({
  isOpen: false,
  onToggle: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useContactDrawer;
