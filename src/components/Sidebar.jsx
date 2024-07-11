import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllComplete,
  handleMarkAllInComplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllComplete={handleMarkAllComplete}
        handleMarkAllInComplete={handleMarkAllInComplete}
      />
    </div>
  );
};

export default Sidebar;
