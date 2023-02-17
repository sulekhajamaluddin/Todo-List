export function sortByName(items) {
  const nameSortedArray = [...items].sort((item1, item2) => {
    const nameItem1 = item1.itemName.toUpperCase();
    const nameItem2 = item2.itemName.toUpperCase();
    return nameItem1 < nameItem2 ? -1 : nameItem1 > nameItem2 ? 1 : 0;
  });
  return nameSortedArray;
}

export function sortByPrice(items) {
  const priceSortedArray = [...items].sort(
    (item1, item2) => Number(item1.itemPrice) - Number(item2.itemPrice)
  );
  return priceSortedArray;
}
