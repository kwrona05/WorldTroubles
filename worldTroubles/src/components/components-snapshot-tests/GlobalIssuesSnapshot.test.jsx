import React from "react";

import Amazonia from "../header-components/global-issues/Amazonia";
import Bangladesh from "../header-components/global-issues/Bangladesh";
import OzoneHole from "../header-components/global-issues/OzoneHole";
import Pekin from "../header-components/global-issues/Pekin";
import SouthAfrica from "../header-components/global-issues/RPA";
import Spain from "../header-components/global-issues/Spain";
import Syria from "../header-components/global-issues/Syria";
import Ukraine from "../header-components/global-issues/Ukraine";

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Amazonia />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Bangladesh />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <OzoneHole />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Pekin />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <SouthAfrica />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Spain />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Syria />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

test("Matches snapshot", () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Ukraine />
    </MemoryRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
