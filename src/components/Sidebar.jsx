import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import useItemsContext from "../lib/hooks";

const Sidebar = () => {
  const { handleAddItem } = useItemsContext();
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
