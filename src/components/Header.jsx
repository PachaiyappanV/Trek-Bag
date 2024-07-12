import Counter from "./Counter";
import Logo from "./Logo";

const Header = ({ totalNoOfItems, numberOfItemsPacked }) => {
  return (
    <header>
      <Logo />
      <Counter
        totalNoOfItems={totalNoOfItems}
        numberOfItemsPacked={numberOfItemsPacked}
      />
    </header>
  );
};

export default Header;
