import { render, screen } from "@testing-library/react";
import Beat from "./Beat";
import StrumSymbols, { StrumSymbolId } from "../constants/StrumSymbols";

const setup = (overrides = {}) => {
  return render(<Beat type={StrumSymbolId.UP} count={1} {...overrides} />);
};

describe("Beat", () => {
  it("renders a beat", () => {
    setup();

    const anyBeat = screen.getByTestId(/^beat/);
    expect(anyBeat).toBeInTheDocument();
  });

  it("can display an up arrow", () => {
    setup();

    const upArrow = screen.getByText(StrumSymbols[StrumSymbolId.UP].symbol);
    expect(upArrow).toBeInTheDocument();
  });

  it("can display a down arrow", () => {
    setup({ type: StrumSymbolId.DOWN });

    const downArrow = screen.getByText(StrumSymbols[StrumSymbolId.DOWN].symbol);
    expect(downArrow).toBeInTheDocument();
  });

  it("can display a mute", () => {
    setup({ type: StrumSymbolId.MUTE });

    const mute = screen.getByText(StrumSymbols[StrumSymbolId.MUTE].symbol);
    expect(mute).toBeInTheDocument();
  });

  it("renders an empty beat", () => {
    setup({ type: StrumSymbolId.REST });

    const rest = screen.getByTestId("beat-REST");
    expect(rest).toBeInTheDocument();
  });

  it("renders a count", () => {
    setup({ count: 2 });

    const count = screen.getByText("2");
    expect(count).toBeInTheDocument();
  });
});
