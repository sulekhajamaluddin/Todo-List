//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Project Files
import Sorter from "./Sorter";

//Test-1

test("should sort the products alphabetically", () => {
  //Arrage
  const pendingItems = [
    {
      id: 1,
      itemName: "Table",
      itemPrice: "250",
      isAcquired: false,
    },
    {
      id: 2,
      itemName: "Chair",
      itemPrice: "500",
      isAcquired: false,
    },
  ];

  const sortedList = [
    {
      id: 2,
      itemName: "Chair",
      itemPrice: "500",
      isAcquired: false,
    },
    {
      id: 1,
      itemName: "Table",
      itemPrice: "250",
      isAcquired: false,
    },
  ];

  const setPendingItems = jest.fn();

  render(
    <Sorter pendingItems={pendingItems} setPendingItems={setPendingItems} />
  );

  //Act
  const button = screen.getByText("Name");
  fireEvent.click(button);

  //Assert
  expect(setPendingItems).toBeCalledWith(sortedList);
});

//Test-2

test("should sort the products according to price", () => {
  //Arrage
  const pendingItems = [
    {
      id: 1,
      itemName: "Table",
      itemPrice: "500",
      isAcquired: false,
    },
    {
      id: 2,
      itemName: "Chair",
      itemPrice: "200",
      isAcquired: false,
    },
  ];

  const sortedList = [
    {
      id: 2,
      itemName: "Chair",
      itemPrice: "200",
      isAcquired: false,
    },
    {
      id: 1,
      itemName: "Table",
      itemPrice: "500",
      isAcquired: false,
    },
  ];

  const setPendingItems = jest.fn();

  render(
    <Sorter pendingItems={pendingItems} setPendingItems={setPendingItems} />
  );

  //Act
  const button = screen.getByText("Price");
  fireEvent.click(button);

  //Assert
  expect(setPendingItems).toBeCalledWith(sortedList);
});
