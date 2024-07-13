import Button from "./Button";
import useItemsContext from "../lib/hooks";

const ButtonGroup = () => {
  const {
    handleRemoveAllItems,
    handleResetToInitial,
    handleMarkAllComplete,
    handleMarkAllInComplete,
  } = useItemsContext();
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={handleMarkAllComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handleMarkAllInComplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to inital
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
