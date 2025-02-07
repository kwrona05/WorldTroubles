import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Intro from "../Intro";
import { MemoryRouter } from "react-router-dom";

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Intro />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
