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

//Bangladesh.jsx
test("Header shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <Bangladesh />
    </MemoryRouter>
  );
  const header2 = screen.getByTestId("header2");
  expect(header2).not.toBeUndefined();
});

test("Description shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <Bangladesh />
    </MemoryRouter>
  );
  const description2 = screen.getByTestId("description2");
  expect(description2).not.toBeUndefined();
});

//OzoneHole.jsx
test("Header shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <OzoneHole />
    </MemoryRouter>
  );
  const header3 = screen.getByTestId("header3");
  expect(header3).not.toBeUndefined();
});

test("Description shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <OzoneHole />
    </MemoryRouter>
  );
  const description3 = screen.getByTestId("description3");
  expect(description3).not.toBeUndefined();
});

//Pekin.jsx
test("Header shouldn't be undefined", () => {
  render(
    <MemoryRouter>
      <Pekin />
    </MemoryRouter>
  );
  const header4 = screen.getByTestId("header4");
  expect(header4).not.toBeUndefined();
});
