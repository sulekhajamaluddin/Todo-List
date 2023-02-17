export default function Item({ item, toggleAcquired }) {
  const checked = item.isAcquired;

  return (
    <article className="item">
      <input
        data-testid="input"
        type={"checkbox"}
        checked={checked}
        onChange={() => toggleAcquired(item)}
      ></input>
      <label htmlFor="checkbox"></label>
      <div className="details">
        <span>{item.itemName}</span>
        <span className="label">{item.itemPrice}:-</span>
      </div>
    </article>
  );
}
