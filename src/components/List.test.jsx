//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

//Project Files
import List from "../components/List";

//Test-1

test("should return message: No items to show if there are no items in the list", () => {
  //Arrage
  const items = [];
  render(<List items={items} />);

  //Act
  const element = screen.getByText("No items to show");

  //Assert
  expect(element).toBeInTheDocument();
});

//Test-1

test("should return a list of items if there are items to display", () => {
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

  render(<List items={items} />);

  //Act
  const itemOne = screen.getByText("Chair");
  const itemTwo = screen.getByText("Table");

  //Assert
  expect(itemOne).toBeInTheDocument();
  expect(itemTwo).toBeInTheDocument();
});
