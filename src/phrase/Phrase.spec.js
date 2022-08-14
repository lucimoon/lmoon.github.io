import { render, screen } from "@testing-library/react";
import Phrase from "./Phrase";

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

  expect(beats[0]).toHaveTextContent("⬆️");
  expect(beats[1]).toHaveTextContent("⬇️");
  expect(beats[2]).toHaveTextContent("-");
  expect(beats[3]).toHaveTextContent("X");
  expect(beats[4]).toHaveTextContent("⬇️");
  expect(beats[5]).toHaveTextContent("-");
  expect(beats[6]).toHaveTextContent("X");
  expect(beats[7]).toHaveTextContent("⬆️");
  expect(beats[8]).toHaveTextContent("-");
  expect(beats[9]).toHaveTextContent("X");
  expect(beats[10]).toHaveTextContent("⬆️");
  expect(beats[11]).toHaveTextContent("⬇️");
  expect(beats[12]).toHaveTextContent("X");
  expect(beats[13]).toHaveTextContent("⬆️");
  expect(beats[14]).toHaveTextContent("⬇️");
  expect(beats[15]).toHaveTextContent("-");
});
