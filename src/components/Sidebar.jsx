import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
};

export default Sidebar;
