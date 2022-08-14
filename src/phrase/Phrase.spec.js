import { render, screen } from "@testing-library/react";
import Phrase from "./Phrase";
import strumSymbols from "../constants/strumSymbols";

const measures = [
  ["up", "down", "rest", "mute"],
  ["down", "rest", "mute", "up"],
  ["rest", "mute", "up", "down"],
  ["mute", "up", "down", "rest"],
];

test("renders 16 beats", () => {
  render(<Phrase measures={measures} />);
  const beats = screen.getAllByTestId(/^beat/);

  expect(beats).toHaveLength(16);
});

test("renders configured beats", () => {
  render(<Phrase measures={measures} />);

  const beats = screen.getAllByTestId(/^beat/);

  expect(beats[0]).toHaveTextContent(strumSymbols.up);
  expect(beats[1]).toHaveTextContent(strumSymbols.down);
  expect(beats[2]).toHaveTextContent(strumSymbols.rest);
  expect(beats[3]).toHaveTextContent(strumSymbols.mute);
  expect(beats[4]).toHaveTextContent(strumSymbols.down);
  expect(beats[5]).toHaveTextContent(strumSymbols.rest);
  expect(beats[6]).toHaveTextContent(strumSymbols.mute);
  expect(beats[7]).toHaveTextContent(strumSymbols.up);
  expect(beats[8]).toHaveTextContent(strumSymbols.rest);
  expect(beats[9]).toHaveTextContent(strumSymbols.mute);
  expect(beats[10]).toHaveTextContent(strumSymbols.up);
  expect(beats[11]).toHaveTextContent(strumSymbols.down);
  expect(beats[12]).toHaveTextContent(strumSymbols.mute);
  expect(beats[13]).toHaveTextContent(strumSymbols.up);
  expect(beats[14]).toHaveTextContent(strumSymbols.down);
  expect(beats[15]).toHaveTextContent(strumSymbols.rest);
});
