import useItemsContext from "../lib/hooks";
import Counter from "./Counter";
import Logo from "./Logo";

const Header = () => {
  const { items } = useItemsContext();
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
