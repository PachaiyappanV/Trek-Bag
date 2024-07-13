import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const useItemsContext = () => {
  const context = useContext(ItemsContext);
  return context;
};

export default useItemsContext;
