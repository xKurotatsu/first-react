import { create } from "zustand";

export const useCounter = create((set) => ({
  count: 0,
  handleAdd: () => set((state) => ({ count: state.count + 1 })),
  handleMinus: () => set((state) => ({ count: state.count - 1 })),
  handleReset: () => set({ count: 0 }),
}));
