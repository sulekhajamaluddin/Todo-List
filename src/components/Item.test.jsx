//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Project Files
import Item from "../components/Item";

//Test-1

test("should render checkbox of pending item as unchecked", () => {
  //Arrage
  const item = {
    id: 1,
    itemName: "Chair",
    itemPrice: "250",
    isAcquired: false,
  };
  render(<Item item={item} />);

  //Act
  const element = screen.getByTestId("input");

  //Assert
  expect(element.checked).toEqual(false);
});

//Test-2

test("should render checkbox of acquired item as checked", () => {
  //Arrage
  const item = {
    id: 1,
    itemName: "Chair",
    itemPrice: "250",
    isAcquired: true,
  };
  render(<Item item={item} />);

  //Act
  const element = screen.getByTestId("input");

  //Assert
  expect(element.checked).toEqual(true);
});

//Test - 3

test("checkbox click should toggle the status of item", () => {
  //Arrage
  const item = {
    id: 1,
    itemName: "Chair",
    itemPrice: "250",
    isAcquired: false,
  };
  const toggleAcquired = jest.fn();
  render(<Item item={item} toggleAcquired={toggleAcquired} />);

  //Act
  const element = screen.getByTestId("input");
  fireEvent.click(element);

  //Assert
  expect(toggleAcquired).toBeCalled();
});
