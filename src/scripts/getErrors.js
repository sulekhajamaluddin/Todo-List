export function getNameErrors(itemName) {
  const result = {};
  if (!itemName) result.itemName = "*Product name is required";
  else if (itemName.trim() === "")
    result.emptyItemName = "*Please enter a valid name";
  return result;
}

export function getPriceErrors(itemPrice) {
  const result = {};
  if (!itemPrice) result.itemPrice = "*Price is required";
  else if (!itemPrice.trim())
    result.emptyItemPrice = "*Please enter a valid price";
  else if (Number(itemPrice.trim()) === 0)
    result.zero = "*Price cannot be zero";
  else if (Number(itemPrice.trim()) < 0)
    result.negativeNumber = "*Price has to be greater than zero";
  else if (!Number(itemPrice.trim()))
    result.notANumber = "*Price has to be a number";
  return result;
}
