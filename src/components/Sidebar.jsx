import { useContext } from "react";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const Sidebar = () => {
  const { handleAddItem } = useContext(ItemsContext);
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
