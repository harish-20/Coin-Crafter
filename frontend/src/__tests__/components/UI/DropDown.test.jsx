import { screen } from "@testing-library/react";

import { render } from "../../../setupTests";

import DropDown from "../../../components/UI/DropDown";

const testOptions = [
  { label: "alpha", value: "alpha text" },
  { label: "beta", value: "beta text" },
  { label: "gamma", value: "gamma text" },
];

describe("Dropdown", () => {
  beforeEach(() => {
    render(<DropDown label="Rays" options={testOptions} />);
  });

  it("renders all options we pass", () => {
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(testOptions.length);
  });

  it("have all the options with correct value", () => {
    const options = screen.getAllByRole("option");
    options.forEach((option, index) => {
      expect(option).toHaveTextContent(testOptions[index].label);
      expect(option).toHaveAttribute("value", testOptions[index].value);
    });
  });
});
