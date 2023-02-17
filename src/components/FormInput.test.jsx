//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Project Files
import FormInput from "../components/FormInput";

//Test-1

test("the input field is rendered properly", () => {
  //Arrage
  const text = "Product Name";
  const placeholder = "Chair";

  render(<FormInput text={text} placeholder={placeholder} />);

  //Act
  const label = screen.getByLabelText("Product Name");
  const element = screen.getByPlaceholderText("Chair");

  //Assert
  expect(label).toBeInTheDocument();
  expect(element).toBeInTheDocument();
});

//Test-2

test("the value entered in the input field is accepted", () => {
  //Arrage
  const text = "Product Name";
  const placeholder = "Chair";
  const setItem = jest.fn();

  render(<FormInput text={text} placeholder={placeholder} setItem={setItem} />);

  //Act
  const element = screen.getByPlaceholderText("Chair");
  fireEvent.change(element, { target: { value: "Table" } });

  //Assert
  expect(setItem).toBeCalledWith("Table");
});
