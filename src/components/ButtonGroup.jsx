import Button from "./Button";

const ButtonGroup = () => {
  const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to inital",
    "Remove all items",
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((text) => {
        return (
          <Button key={text} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
};

export default ButtonGroup;
