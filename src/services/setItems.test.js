import { setItemsToLocalStorage } from "./setItems";
import { getItemsFromLocalStorage } from "./getItems";

const localStorageMock = (function () {
  let store = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
  ];
  return {
    getItem() {
      return JSON.stringify(store);
    },
    setItem(name, item) {
      const newItem = JSON.parse(item);
      store.push(newItem);
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

//Method Tested: setItemsToLocalStorage

//Test - 12

test("the items are set to local storage correctly", () => {
  // Arrange
  const item = {
    id: 2,
    itemName: "Table",
    itemPrice: "500",
    isAcquired: false,
  };

  const result = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
    {
      id: 2,
      itemName: "Table",
      itemPrice: "500",
      isAcquired: false,
    },
  ];

  // Action
  setItemsToLocalStorage(item);
  const data = getItemsFromLocalStorage();

  //Assert
  expect(data).toEqual(result);
});
