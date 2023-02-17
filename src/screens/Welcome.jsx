//Project Files
import shoppingImage from "../assets/images/shopping.png";
import Form from "../components/Form";

export default function Welcome({ items, addNewItem, openModal, closeModal }) {
  function handleClick() {
    openModal(
      <Form items={items} addNewItem={addNewItem} closeModal={closeModal} />
    );
  }

  return (
    <div className="welcome-screen">
      <img
        className="shopping-image"
        src={shoppingImage}
        alt="A woman holding shopping bags"
      ></img>
      <h1>EIKA's shopping list</h1>
      <p>
        Welcome to EIKA’s shopping list. Here you will be able to create a todo
        list with for the furniture you want to buy.
      </p>
      <p>
        To get started press the Add new item button and a popup will ask you
        the name and the price of the item you want to add. You can also and an
        image after the item is added by touching the camera icon.
      </p>
      <button onClick={() => handleClick()}>Add item</button>
    </div>
  );
}
