import { getNameErrors, getPriceErrors } from "./getErrors";

//Method Tested: getNameErrors()

//Test -1

test("empty string is not accepted for name", () => {
  // Arrange
  const itemName = "";
  const displayMessage = "*Product name is required";

  // Action
  const errorObject = getNameErrors(itemName);
  const errorMessage = errorObject.itemName;

  // Assert
  expect(errorMessage).toEqual(displayMessage);
});

//Test -2

test("string with only spaces is not accepted for name", () => {
  // Arrange
  const itemName = "   ";
  const displayMessage = "*Please enter a valid name";

  // Action
  const errorObject = getNameErrors(itemName);
  const errorMessage = errorObject.emptyItemName;

  // Assert
  expect(errorMessage).toEqual(displayMessage);
});

//Method Tested: getPriceErrors()

//Test-3
test("empty string is not accepted for price", () => {
  // Arrange
  const itemPrice = "";
  const displayMessage = "*Price is required";

  // Action
  const errorObject = getPriceErrors(itemPrice);
  const errorMessage = errorObject.itemPrice;

  // Assert
  expect(errorMessage).toEqual(displayMessage);
});

//Test -4

test("string with only spaces is not accepted for price", () => {
  // Arrange
  const itemPrice = "   ";
  const displayMessage = "*Please enter a valid price";

  // Action
  const errorObject = getPriceErrors(itemPrice);
  const errorMessage = errorObject.emptyItemPrice;

  // Assert
  expect(errorMessage).toEqual(displayMessage);
});

//Test -5

test("price is not zero", () => {
  // Arrange
  const itemPrice = "0";
  const displayMessage = "*Price cannot be zero";

  // Action
  const errorObject = getPriceErrors(itemPrice);
  const errorMessage = errorObject.zero;

  // Assert
  expect(errorMessage).toEqual(displayMessage);
});

//Test -6

test("price is greater than zero", () => {
  // Arrange
  const itemPrice = "-10";
  const displayMessage = "*Price has to be greater than zero";

  // Action
  const errorObject = getPriceErrors(itemPrice);
  const errorMessage = errorObject.negativeNumber;

  // Assert
  expect(errorMessage).toEqual(displayMessage);
});

//Test -7

test("price is a number", () => {
  // Arrange
  const itemPrice = "abc";
  const displayMessage = "*Price has to be a number";

  // Action
  const errorObject = getPriceErrors(itemPrice);
  const errorMessage = errorObject.notANumber;

  // Assert
  expect(errorMessage).toEqual(displayMessage);
});
