import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ handleAddItem, handleRemoveAllItems }) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup handleRemoveAllItems={handleRemoveAllItems} />
    </div>
  );
};

export default Sidebar;
