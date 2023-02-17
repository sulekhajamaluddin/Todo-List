//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Project Files
import Shopping from "./Shopping";
import Form from "../components/Form";

//Test-1

test("should render the pending items directly", () => {
  //Arrage
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
  ];
  render(<Shopping items={items} />);

  //Act
  const itemOne = screen.getByText("Chair");
  const itemTwo = screen.getByText("Table");

  //Assert
  expect(itemOne).toBeInTheDocument();
  expect(itemTwo).toBeInTheDocument();
});

//Test-2

test("Should have hidden the items already acquired", () => {
  //Arrage
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
      isAcquired: true,
    },
  ];
  render(<Shopping items={items} />);

  //Act
  const itemOne = screen.getByText("Chair");
  const itemTwo = screen.queryByText("Table");

  //Assert
  expect(itemOne).toBeInTheDocument();
  expect(itemTwo).toBeNull();
});

//Test-3

test("should show acquired items when the View Acquired Items button is clicked", () => {
  //Arrage
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
      isAcquired: true,
    },
  ];
  render(<Shopping items={items} />);

  //Act
  const button = screen.getByText("View Acquired Items");
  fireEvent.click(button);
  const item = screen.getByText("Table");

  //Assert
  expect(item).toBeInTheDocument();
});

//Test-4

test("should hide acquired items when the Hide Acquired Items button is clicked", () => {
  //Arrage
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
      isAcquired: true,
    },
  ];
  render(<Shopping items={items} />);

  //Act
  const button = screen.getByText("View Acquired Items");
  fireEvent.click(button);
  const hideButton = screen.getByText("Hide Acquired Items");
  fireEvent.click(hideButton);

  //Assert
  expect(screen.queryByText("Table")).toBeNull();
});

//Test-5

test("add item button click should open modal with a form with the correct props", () => {
  //Arrage
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
  ];
  const addNewItem = jest.fn();
  const openModal = jest.fn();
  const closeModal = jest.fn();

  render(
    <Shopping
      items={items}
      addNewItem={addNewItem}
      openModal={openModal}
      closeModal={closeModal}
    />
  );

  //Act
  const button = screen.getByText("Add item");
  fireEvent.click(button);

  //Assert
  expect(openModal).toHaveBeenCalledWith(
    <Form items={items} addNewItem={addNewItem} closeModal={closeModal} />
  );
});
