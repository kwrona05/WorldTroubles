import React from "react";
import { render } from "@testing-library/react";
import AppHeader from "../Header";
import { MemoryRouter } from "react-router-dom";

test("matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <AppHeader />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
