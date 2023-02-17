import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Sorter, Form, List } from "../components";

export default function Shopping({
  items,
  addNewItem,
  closeModal,
  openModal,
  toggleAcquired,
}) {
  const [showItems, setShowItems] = useState(false);
  const [pendingItems, setPendingItems] = useState([]);
  const acquiredItems = items?.filter((item) => item.isAcquired === true);
  const icon = showItems ? solid("eye-slash") : solid("eye");
  const toggleButtonText = showItems
    ? "Hide Acquired Items"
    : "View Acquired Items";

  function handleClick() {
    openModal(
      <Form items={items} addNewItem={addNewItem} closeModal={closeModal} />
    );
  }
  useEffect(() => {
    const pendingItems = items.filter((item) => item.isAcquired === false);
    setPendingItems(pendingItems);
  }, [items]);

  return (
    <main className="shopping">
      <h1>Shopping List</h1>
      <Sorter pendingItems={pendingItems} setPendingItems={setPendingItems} />
      <List items={pendingItems} toggleAcquired={toggleAcquired} />
      <button onClick={() => handleClick()}>Add item</button>
      <button
        className="label button-no-background"
        onClick={() => setShowItems(!showItems)}
      >
        <FontAwesomeIcon icon={icon} />
        {toggleButtonText}
      </button>
      {showItems && (
        <List items={acquiredItems} toggleAcquired={toggleAcquired} />
      )}
    </main>
  );
}
