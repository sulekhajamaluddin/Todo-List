import { useState } from "react";
import setNewItem from "../scripts/setNewItem";
import FormInput from "./FormInput";
import { getNameErrors, getPriceErrors } from "../scripts/getErrors";
import ErrorMessages from "./ErrorMessages";

export default function Form({ items, addNewItem, closeModal }) {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [nameErrors, setNameErrors] = useState({});
  const [priceErrors, setPriceErrors] = useState({});
  const [isValid, setisValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const nameErrors = getNameErrors(itemName);
    const priceErrors = getPriceErrors(itemPrice);
    const isValid =
      Object.keys(nameErrors).length === 0 &&
      Object.keys(priceErrors).length === 0;
    if (isValid) {
      const newItem = setNewItem(items, itemName, itemPrice);
      addNewItem(newItem);
      closeModal();
    } else {
      setNameErrors(nameErrors);
      setPriceErrors(priceErrors);
      setisValid(false);
    }
  }
  function handleCancel(e) {
    e.preventDefault();
    closeModal();
  }
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h2>Create New Item</h2>
      <FormInput text={"Name"} setItem={setItemName} placeholder={"Chair"} />
      {!isValid && <ErrorMessages errors={nameErrors} />}
      <FormInput text={"Price"} setItem={setItemPrice} placeholder={"250:-"} />
      {!isValid && <ErrorMessages errors={priceErrors} />}
      <input data-testid="submit" className="label button" type={"submit"} />
      <button className="label btn-clear" onClick={(e) => handleCancel(e)}>
        Cancel
      </button>
    </form>
  );
}
