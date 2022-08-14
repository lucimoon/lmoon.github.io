import { render, screen } from "@testing-library/react";
import Measure from "./Measure";
import StrumSymbols, { StrumSymbolId } from "../constants/StrumSymbols";

const setup = (overrides = {}) => {
  return render(
    <Measure
      beats={[
        StrumSymbolId.UP,
        StrumSymbolId.DOWN,
        StrumSymbolId.REST,
        StrumSymbolId.MUTE,
      ]}
      measureNumber={1}
      {...overrides}
    />
  );
};

describe("Measure", () => {
  it("renders 4 beats", () => {
    setup();
    const beats = screen.getAllByTestId(/^beat/);

    expect(beats).toHaveLength(4);
  });

  it("renders configured beats", () => {
    setup();
    const beats = screen.getAllByTestId(/^beat/);

    expect(beats[0]).toHaveTextContent(StrumSymbols[StrumSymbolId.UP].symbol);
    expect(beats[1]).toHaveTextContent(StrumSymbols[StrumSymbolId.DOWN].symbol);
    expect(beats[2]).toHaveAttribute("data-testid", "beat-REST");
    expect(beats[3]).toHaveTextContent(StrumSymbols[StrumSymbolId.MUTE].symbol);
  });

  it("renders a correct count", () => {
    setup({ measureNumber: 2 });
    const beats = screen.getAllByTestId(/^beat/);

    expect(beats[0]).toHaveTextContent("2");
    expect(beats[1]).toHaveTextContent("e");
    expect(beats[2]).toHaveTextContent("&");
    expect(beats[3]).toHaveTextContent("a");
  });
});
