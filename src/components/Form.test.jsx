//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Project Files
import Form from "../components/Form";
import setNewItem from "../scripts/setNewItem";
jest.mock("../scripts/setNewItem");

//Test-1

test("form should display error message if input is not valid when submit button is clicked", () => {
  //Arrage
  const items = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
  ];

  const addNewItem = jest.fn();
  const closeModal = jest.fn();

  render(
    <Form items={items} addNewItem={addNewItem} closeModal={closeModal} />
  );

  //Act

  const nameInput = screen.getByPlaceholderText("Chair");
  fireEvent.change(nameInput, { target: { value: "" } });
  const priceInput = screen.getByPlaceholderText("250:-");
  fireEvent.change(priceInput, { target: { value: "" } });
  const button = screen.getByTestId("submit");
  fireEvent.click(button);

  //Assert
  expect(screen.getByText("*Product name is required")).toBeInTheDocument();
  expect(screen.getByText("*Price is required")).toBeInTheDocument();
});

//Test-2

test("form should submit the correct input entered in the input fields when submit button is clicked", () => {
  //Arrage
  const items = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
  ];

  const addNewItem = jest.fn();
  const closeModal = jest.fn();

  render(
    <Form items={items} addNewItem={addNewItem} closeModal={closeModal} />
  );

  //Act

  const nameInput = screen.getByPlaceholderText("Chair");
  fireEvent.change(nameInput, { target: { value: "Table" } });

  const priceInput = screen.getByPlaceholderText("250:-");
  fireEvent.change(priceInput, { target: { value: "500" } });

  const button = screen.getByTestId("submit");
  fireEvent.click(button);

  //Assert
  expect(setNewItem).toBeCalledWith(items, "Table", "500");
  expect(addNewItem).toBeCalled();
  expect(closeModal).toBeCalled();
});

//Test -3

test("the form should close the modal when cancel button is clicked", () => {
  //Arrage
  const items = [
    {
      id: 1,
      itemName: "Chair",
      itemPrice: "250",
      isAcquired: false,
    },
  ];

  const addNewItem = jest.fn();
  const closeModal = jest.fn();
  render(
    <Form items={items} addNewItem={addNewItem} closeModal={closeModal} />
  );

  //Act
  const button = screen.getByText("Cancel");
  fireEvent.click(button);

  //Assert
  expect(closeModal).toBeCalled();
});
