import Item from "../components/Item";

export default function List({ items, toggleAcquired }) {
  if (items.length === 0)
    return <span className="empty-list">No items to show</span>;

  const itemsList = items.map((item) => (
    <Item key={item.id} item={item} toggleAcquired={toggleAcquired} />
  ));

  return <section className="list">{itemsList}</section>;
}
