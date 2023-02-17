import { getItemsFromLocalStorage } from "./getItems";

//Mock Local Stoarge

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
    setItem(item) {
      store.push(JSON.stringify(item));
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

//Method Tested: getItemsFromLocalStorage

//Test - 11

test("the items in local storage are retrieved correctly", () => {
  // Arrange
  const result = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
  ];

  // Action
  const data = getItemsFromLocalStorage();

  // Assert
  expect(result).toEqual(data);
});
