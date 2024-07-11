import Button from "./Button";
const ButtonGroup = ({ handleRemoveAllItems, handleResetToInitial }) => {
  return (
    <section className="button-group">
      <Button buttonType="secondary">Mark all as complete</Button>
      <Button buttonType="secondary">Mark all as incomplete</Button>
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
