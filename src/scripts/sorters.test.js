import { sortByName, sortByPrice } from "./sorters";

//Method Tested: sortByName

//Test -9

test("the items are sorted alphabetically", () => {
  // Arrange
  const items = [
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
    {
      id: 3,
      itemName: "Dressing Table",
      itemPrice: "1500",
      isAcquired: false,
    },
  ];
  // Action

  const sortedItems = sortByName(items);
  const result = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
    {
      id: 3,
      itemName: "Dressing Table",
      itemPrice: "1500",
      isAcquired: false,
    },
    {
      id: 2,
      itemName: "Table",
      itemPrice: "500",
      isAcquired: false,
    },
  ];
  // Assert
  expect(result).toEqual(sortedItems);
});

//Method Tested: sortByPrice

//Test -10

test("the items are sorted in the ascending order of price", () => {
  // Arrange
  const items = [
    {
      id: 1,
      itemName: "Table",
      itemPrice: "500",
      isAcquired: false,
    },
    {
      id: 2,
      itemName: "Dressing Table",
      itemPrice: "1500",
      isAcquired: false,
    },
    {
      id: 3,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
  ];
  // Action

  const sortedItems = sortByPrice(items);
  const result = [
    {
      id: 3,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
    {
      id: 1,
      itemName: "Table",
      itemPrice: "500",
      isAcquired: false,
    },
    {
      id: 2,
      itemName: "Dressing Table",
      itemPrice: "1500",
      isAcquired: false,
    },
  ];
  // Assert
  expect(result).toEqual(sortedItems);
});
