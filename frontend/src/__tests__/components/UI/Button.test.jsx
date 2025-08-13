import { screen } from "@testing-library/react";

import { render } from "../../../setupTests";

import Button from "../../../components/UI/Button";

describe("Button should be dynamic when href if prop passed", () => {
  it("should render <button> when no href", () => {
    render(<Button>Test</Button>);

    const button = screen.getByRole("button", { name: /test/i });
    expect(button).toBeInTheDocument();
  });

  it("should render an <a> when href is passes", () => {
    render(<Button href="/test">Link</Button>);

    const link = screen.getByRole("link", { name: /link/i });
    expect(link).toHaveAttribute("href", "/test");
  });
});
