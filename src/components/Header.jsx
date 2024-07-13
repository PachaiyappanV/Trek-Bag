import { useContext } from "react";
import Counter from "./Counter";
import Logo from "./Logo";
import { ItemsContext } from "../contexts/ItemsContextProvider";

const Header = () => {
  const { items } = useContext(ItemsContext);
  return (
    <header>
      <Logo />
      <Counter
        totalNoOfItems={items.length}
        numberOfItemsPacked={items.filter((item) => item.packed).length}
      />
    </header>
  );
};

export default Header;
