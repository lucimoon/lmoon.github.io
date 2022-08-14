import { render, screen } from "@testing-library/react";
import Phrase from "./Phrase";
import StrumSymbols, { StrumSymbolId } from "../constants/StrumSymbols";

const measures = [
  [
    StrumSymbolId.UP,
    StrumSymbolId.DOWN,
    StrumSymbolId.REST,
    StrumSymbolId.MUTE,
  ],
  [
    StrumSymbolId.DOWN,
    StrumSymbolId.REST,
    StrumSymbolId.MUTE,
    StrumSymbolId.UP,
  ],
  [
    StrumSymbolId.REST,
    StrumSymbolId.MUTE,
    StrumSymbolId.UP,
    StrumSymbolId.DOWN,
  ],
  [
    StrumSymbolId.MUTE,
    StrumSymbolId.UP,
    StrumSymbolId.DOWN,
    StrumSymbolId.REST,
  ],
];

test("renders 16 beats", () => {
  render(<Phrase measures={measures} />);
  const beats = screen.getAllByTestId(/^beat/);

  expect(beats).toHaveLength(16);
});

test("renders configured beats", () => {
  render(<Phrase measures={measures} />);

  const beats = screen.getAllByTestId(/^beat/);

  expect(beats[0]).toHaveTextContent(StrumSymbols[StrumSymbolId.UP].symbol);
  expect(beats[1]).toHaveTextContent(StrumSymbols[StrumSymbolId.DOWN].symbol);
  expect(beats[2]).toHaveAttribute("data-testid", "beat-REST");
  expect(beats[3]).toHaveTextContent(StrumSymbols[StrumSymbolId.MUTE].symbol);
  expect(beats[4]).toHaveTextContent(StrumSymbols[StrumSymbolId.DOWN].symbol);
  expect(beats[5]).toHaveAttribute("data-testid", "beat-REST");
  expect(beats[6]).toHaveTextContent(StrumSymbols[StrumSymbolId.MUTE].symbol);
  expect(beats[7]).toHaveTextContent(StrumSymbols[StrumSymbolId.UP].symbol);
  expect(beats[8]).toHaveAttribute("data-testid", "beat-REST");
  expect(beats[9]).toHaveTextContent(StrumSymbols[StrumSymbolId.MUTE].symbol);
  expect(beats[10]).toHaveTextContent(StrumSymbols[StrumSymbolId.UP].symbol);
  expect(beats[11]).toHaveTextContent(StrumSymbols[StrumSymbolId.DOWN].symbol);
  expect(beats[12]).toHaveTextContent(StrumSymbols[StrumSymbolId.MUTE].symbol);
  expect(beats[13]).toHaveTextContent(StrumSymbols[StrumSymbolId.UP].symbol);
  expect(beats[14]).toHaveTextContent(StrumSymbols[StrumSymbolId.DOWN].symbol);
  expect(beats[15]).toHaveAttribute("data-testid", "beat-REST");
});
