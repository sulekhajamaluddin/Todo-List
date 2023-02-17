export default function setNewItem(items, itemName, itemPrice) {
  return { id: items.length + 1, itemName, itemPrice, isAcquired: false };
}
