import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Intro from "../Intro";

test("Element h2 shouldn't be undefined in intro component", () => {
  render(
    <MemoryRouter>
      <Intro />
    </MemoryRouter>
  );
  const h2 = screen.getByTestId("intro-header");
  expect(h2).not.toBeUndefined();
});

test("Cursor should be: | and shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <Intro />
    </MemoryRouter>
  );
  const cursor = screen.getByTestId("cursor");
  expect(cursor).not.toBeUndefined();
  expect(cursor).toHaveTextContent("|");
});
