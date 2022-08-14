import { render, screen } from "@testing-library/react";
import Beat from "./Beat";

describe("Beat", () => {
  it("renders a beat", () => {
    render(<Beat type="up" />);

    const anyBeat = screen.getByTestId(/^beat/);
    expect(anyBeat).toBeInTheDocument();
  });

  it("can display an up arrow", () => {
    render(<Beat type="up" />);

    const upArrow = screen.getByText("⬆️");
    expect(upArrow).toBeInTheDocument();
  });

  it("can display a down arrow", () => {
    render(<Beat type="down" />);

    const downArrow = screen.getByText("⬇️");
    expect(downArrow).toBeInTheDocument();
  });

  it("can display a mute", () => {
    render(<Beat type="mute" />);

    const mute = screen.getByText("X");
    expect(mute).toBeInTheDocument();
  });

  it("can display a rest", () => {
    render(<Beat type="rest" />);

    const rest = screen.getByText("-");
    expect(rest).toBeInTheDocument();
  });
});
