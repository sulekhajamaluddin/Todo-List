//Node Modules
import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

//Project Files
import Modal from "./Modal";
import Form from "../components/Form";

//Test-1

test("modal should stay closed if nothing is passed to it", () => {
  //Arrage
  const modal = null;
  render(<Modal modal={modal} />);

  //Act
  const element = screen.queryByText("Create New Item");

  //Assert
  expect(element).toBeNull();
});

//Test-2

test("modal should open with a the form if form is passed to it", () => {
  //Arrage
  const modal = <Form />;
  render(<Modal modal={modal} />);

  //Act
  const element = screen.getByText("Create New Item");

  //Assert
  expect(element).toBeInTheDocument();
});

//Test-3
test("modal should close when the background is clicked", () => {
  //Arrage
  const closeModal = jest.fn();
  render(<Modal closeModal={closeModal} />);

  //Act
  const element = screen.getByTestId("modal-background");
  fireEvent.click(element);

  //Assert
  expect(closeModal).toBeCalled();
});
