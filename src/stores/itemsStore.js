import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItem) => {
        set((state) => ({ items: [...state.items, newItem] }));
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id != id);
          return { items: newItems };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },

      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const completedItems = state.items.map((item) => ({
            ...item,
            packed: true,
          }));
          return { items: completedItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const incompletedItems = state.items.map((item) => ({
            ...item,
            packed: false,
          }));
          return { items: incompletedItems };
        });
      },
    }),
    { name: "items" }
  )
);
