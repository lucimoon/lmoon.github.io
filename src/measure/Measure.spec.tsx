import { render, screen } from "@testing-library/react";
import Measure from "./Measure";
import StrumSymbols, { StrumSymbolId } from "../constants/StrumSymbols";

describe("Measure", () => {
  it("renders 4 beats", () => {
    render(
      <Measure
        beats={[
          StrumSymbolId.UP,
          StrumSymbolId.DOWN,
          StrumSymbolId.REST,
          StrumSymbolId.MUTE,
        ]}
      />
    );
    const beats = screen.getAllByTestId(/^beat/);

    expect(beats).toHaveLength(4);
  });

  it("configured beats", () => {
    render(
      <Measure
        beats={[
          StrumSymbolId.UP,
          StrumSymbolId.DOWN,
          StrumSymbolId.REST,
          StrumSymbolId.MUTE,
        ]}
      />
    );
    const beats = screen.getAllByTestId(/^beat/);

    expect(beats[0]).toHaveTextContent(StrumSymbols[StrumSymbolId.UP].symbol);
    expect(beats[1]).toHaveTextContent(StrumSymbols[StrumSymbolId.DOWN].symbol);
    expect(beats[2]).toHaveTextContent(StrumSymbols[StrumSymbolId.REST].symbol);
    expect(beats[3]).toHaveTextContent(StrumSymbols[StrumSymbolId.MUTE].symbol);
  });
});
