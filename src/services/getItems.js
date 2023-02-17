export function getItemsFromLocalStorage() {
  const itemsOnList = JSON.parse(localStorage.getItem("items"));
  return itemsOnList;
}
