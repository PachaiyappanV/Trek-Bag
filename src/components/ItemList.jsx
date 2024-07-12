import EmptyView from "./EmptyView";

const ItemList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <ul className="item-list">
      {items.length == 0 && <EmptyView />}
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
};

const Item = ({ item, handleDeleteItem, handleToggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          onClick={() => handleToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;
