export function setItemsToLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}
