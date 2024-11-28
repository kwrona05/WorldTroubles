import React from "react";

import Amazonia from "../header-components/global-issues/Amazonia";
import Bangladesh from "../header-components/global-issues/Bangladesh";
import OzoneHole from "../header-components/global-issues/OzoneHole";
import Pekin from "../header-components/global-issues/Pekin";
import SouthAfrica from "../header-components/global-issues/RPA";
import Spain from "../header-components/global-issues/Spain";
import Syria from "../header-components/global-issues/Syria";
import Ukraine from "../header-components/global-issues/Ukraine";

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

//Amazonia.jsx tests
test("Header shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <Amazonia />
    </MemoryRouter>
  );
  const header = screen.getByTestId("header");
  expect(header).not.toBeUndefined();
});

test("Description shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <Amazonia />
    </MemoryRouter>
  );
  const description = screen.getByTestId("description");
  expect(description).not.toBeUndefined();
});
