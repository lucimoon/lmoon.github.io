import { render, screen } from "@testing-library/react";
import Beat from "./Beat";
import strumSymbols from "../constants/strumSymbols";

describe("Beat", () => {
  it("renders a beat", () => {
    render(<Beat type="up" />);

    const anyBeat = screen.getByTestId(/^beat/);
    expect(anyBeat).toBeInTheDocument();
  });

  it("can display an up arrow", () => {
    render(<Beat type="up" />);

    const upArrow = screen.getByText(strumSymbols.up);
    expect(upArrow).toBeInTheDocument();
  });

  it("can display a down arrow", () => {
    render(<Beat type="down" />);

    const downArrow = screen.getByText(strumSymbols.down);
    expect(downArrow).toBeInTheDocument();
  });

  it("can display a mute", () => {
    render(<Beat type="mute" />);

    const mute = screen.getByText(strumSymbols.mute);
    expect(mute).toBeInTheDocument();
  });

  it("renders an empty beat", () => {
    render(<Beat type="rest" />);

    const rest = screen.getByTestId("beat-rest");
    expect(rest).toBeInTheDocument();
  });
});
