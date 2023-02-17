//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Project Files
import Welcome from "./Welcome";
import Form from "../components/Form";

//Test-1

test("should show the title EIKA's shopping list", () => {
  //Arrage
  render(<Welcome />);

  //Act
  const title = screen.getByText("EIKA's shopping list");

  //Assert
  expect(title).toBeInTheDocument();
});

//Test-2

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
    <Welcome
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
