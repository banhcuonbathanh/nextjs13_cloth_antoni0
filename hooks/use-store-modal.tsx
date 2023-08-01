import { create } from "zustand";

interface useStoreModalStore {
  isComponentMounted: boolean;
  isOpen: boolean;
  onComponentMounted: () => void;
  onOpen: () => void;
  onClose: () => void;
}

console.log("This is Zustand store for modal.");

export const useStoreModal = create<useStoreModalStore>((set) => ({
  isComponentMounted: false,
  isOpen: false,
  onComponentMounted: () => set({ isComponentMounted: true }),
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

// export const useStoreModal = create<useStoreModalStore>((set) => ({

//   isOpen: false,
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false }),
// }));
