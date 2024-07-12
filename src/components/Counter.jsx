const Counter = ({ totalNoOfItems, numberOfItemsPacked }) => {
  return (
    <p>
      <b>{numberOfItemsPacked} </b>/ {totalNoOfItems} items packed
    </p>
  );
};

export default Counter;
