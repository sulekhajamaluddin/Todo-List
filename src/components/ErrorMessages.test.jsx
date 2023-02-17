//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

//Project Files
import ErrorMessages from "./ErrorMessages";

//Test-1

test("should return a list of correct error messages", () => {
  //Arrage
  const errors = {
    itemName: "Product name cannot be empty",
    emptyItemName: "Please enter a valid product name",
  };

  render(<ErrorMessages errors={errors} />);

  //Act
  const errorMessageOne = screen.getByText("Product name cannot be empty");
  const errorMessageTwo = screen.getByText("Please enter a valid product name");

  //Assert
  expect(errorMessageOne).toBeInTheDocument();
  expect(errorMessageTwo).toBeInTheDocument();
});
