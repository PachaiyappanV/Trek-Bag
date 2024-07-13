import Counter from "./Counter";
import Logo from "./Logo";
import { useItemsStore } from "../stores/itemsStore";

const Header = () => {
  const items = useItemsStore((state) => state.items);
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
