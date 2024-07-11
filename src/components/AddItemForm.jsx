import { useRef, useState } from "react";
import Button from "./Button";

const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    //simple validation
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={(e) => setItemText(e.target.value)}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
