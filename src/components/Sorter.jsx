//Project Files
import { sortByName, sortByPrice } from "../scripts/sorters";

export default function Sorter({ pendingItems, setPendingItems }) {
  function handleNameSort() {
    const sortedList = sortByName(pendingItems);
    setPendingItems(sortedList);
  }

  function handlePriceSort() {
    const sortedList = sortByPrice(pendingItems);
    setPendingItems(sortedList);
  }

  return (
    <section className="sorter">
      Sort by:{" "}
      <button className="label btn-clear" onClick={() => handleNameSort()}>
        Name
      </button>{" "}
      <button className="label btn-clear" onClick={() => handlePriceSort()}>
        Price
      </button>
    </section>
  );
}
