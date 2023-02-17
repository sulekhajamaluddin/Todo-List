//Node Modules
import { useEffect, useState } from "react";

//Project Files
import "./styles/styles.scss";
import logo from "./assets/images/logo.png";
import Welcome from "./screens/Welcome";
import Modal from "./components/Modal";
import Shopping from "./screens/Shopping";
import { getItemsFromLocalStorage } from "./services/getItems";
import { setItemsToLocalStorage } from "./services/setItems";

export default function App() {
  const [items, setItems] = useState(getItemsFromLocalStorage() || []);
  const [modal, setModal] = useState(null);

  function addNewItem(item) {
    setItems([...items, item]);
  }

  function toggleAcquired(toggledItem) {
    const updatedItems = items.map((item) => {
      if (item.id === toggledItem.id) {
        return { ...item, isAcquired: !item.isAcquired };
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  }

  function openModal(modalContent) {
    setModal(modalContent);
  }

  function closeModal() {
    setModal(null);
  }

  useEffect(() => {
    setItemsToLocalStorage(items);
  }, [items]);

  const isFirstItem = items.length === 0;
  const state = {
    items,
    addNewItem,
    openModal,
    closeModal,
    toggleAcquired,
  };

  return (
    <div className="main-page">
      <img className="logo" src={logo} alt="The word EIKA"></img>
      {isFirstItem && <Welcome {...state} />}
      {!isFirstItem && <Shopping {...state} />}
      <Modal modal={modal} openModal={openModal} closeModal={closeModal} />
    </div>
  );
}
