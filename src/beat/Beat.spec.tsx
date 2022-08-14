import { render, screen } from "@testing-library/react";
import Beat from "./Beat";
import StrumSymbols, { StrumSymbolId } from "../constants/StrumSymbols";

describe("Beat", () => {
  it("renders a beat", () => {
    render(<Beat type={StrumSymbolId.UP} />);

    const anyBeat = screen.getByTestId(/^beat/);
    expect(anyBeat).toBeInTheDocument();
  });

  it("can display an up arrow", () => {
    render(<Beat type={StrumSymbolId.UP} />);

    const upArrow = screen.getByText(StrumSymbols[StrumSymbolId.UP].symbol);
    expect(upArrow).toBeInTheDocument();
  });

  it("can display a down arrow", () => {
    render(<Beat type={StrumSymbolId.DOWN} />);

    const downArrow = screen.getByText(StrumSymbols[StrumSymbolId.DOWN].symbol);
    expect(downArrow).toBeInTheDocument();
  });

  it("can display a mute", () => {
    render(<Beat type={StrumSymbolId.MUTE} />);

    const mute = screen.getByText(StrumSymbols[StrumSymbolId.MUTE].symbol);
    expect(mute).toBeInTheDocument();
  });

  it("renders an empty beat", () => {
    render(<Beat type={StrumSymbolId.REST} />);

    const rest = screen.getByTestId("beat-REST");
    expect(rest).toBeInTheDocument();
  });
});
