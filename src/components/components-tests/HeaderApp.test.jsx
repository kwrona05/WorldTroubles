import React from "react";
import AppHeader from "../Header";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("App header shouldn't be undefined and App header should has text: Beyond Border", () => {
  render(
    <MemoryRouter>
      <AppHeader />
    </MemoryRouter>
  );
  const appHeader = screen.getByTestId("app-header");
  expect(appHeader).toHaveTextContent("Beyond Border");
  expect(appHeader).not.toBeUndefined();
});
