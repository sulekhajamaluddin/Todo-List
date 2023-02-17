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
    <span className="sorter">
      Sort by:{" "}
      <button
        className="label button-no-background"
        onClick={() => handleNameSort()}
      >
        Name
      </button>{" "}
      <button
        className="label button-no-background"
        onClick={() => handlePriceSort()}
      >
        Price
      </button>
    </span>
  );
}
