//Node Modules
import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";

//Project Files
import App from "./App";

//Mock Local Stoarge

const localStorageMock = (function () {
  let store = [];
  return {
    getItem() {
      return JSON.stringify(store);
    },
    setItem(item) {
      store.push(item);
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

//Test-1

test("should render welcome screen if user has never added an item", () => {
  //Arrage

  render(<App />);

  //Act
  window.localStorage.setItem([]);
  const title = screen.getByText("EIKA's shopping list");

  //Assert
  expect(title).toBeInTheDocument();
});

//Test-2

test("should render shopping screen if user has added items", () => {
  //Arrage
  render(<App />);

  //Act
  window.localStorage.setItem({
    id: 1,
    itemName: "Chair",
    itemPrice: "250",
    isAcquired: false,
  });
  const title = screen.getByText("Shopping List");

  //Assert
  expect(title).toBeInTheDocument();
});
