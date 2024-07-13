import { createContext, useEffect, useState } from "react";
import { initialItems } from "../lib/constants";

export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  const itemsFromLocalStorage = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(itemsFromLocalStorage || initialItems);

  const handleAddItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id != id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllComplete = () => {
    const completedItems = items.map((item) => ({ ...item, packed: true }));
    setItems(completedItems);
  };

  const handleMarkAllInComplete = () => {
    const inCompletedItems = items.map((item) => ({ ...item, packed: false }));
    setItems(inCompletedItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleMarkAllComplete,
        handleMarkAllInComplete,
        handleRemoveAllItems,
        handleResetToInitial,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
