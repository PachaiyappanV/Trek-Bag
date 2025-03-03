import Button from "./Button";
import { useItemsStore } from "../stores/itemsStore";

const ButtonGroup = () => {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={markAllAsIncomplete}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={resetToInitial}>
        Reset to inital
      </Button>
      <Button buttonType="secondary" onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
};

export default ButtonGroup;
