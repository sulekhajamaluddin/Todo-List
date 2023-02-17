import setNewItem from "./setNewItem";

//Test -8

test("the correct item object is set", () => {
  // Arrange
  const items = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
  ];
  const itemName = "Table";
  const itemPrice = "500";

  const result = {
    id: 2,
    itemName: "Table",
    itemPrice: "500",
    isAcquired: false,
  };

  // Action
  const newItem = setNewItem(items, itemName, itemPrice);

  // Assert
  expect(newItem).toEqual(result);
});
