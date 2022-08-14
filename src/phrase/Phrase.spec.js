import { render, screen } from "@testing-library/react";
import Phrase from "./Phrase";

test("renders 16 beats", () => {
  render(<Phrase />);
  const beats = screen.queryAllByTestId("beat");

  expect(beats).toHaveLength(16);
});

test("renders configured beats", () => {
  const measures = [
    ["up", "down", "rest", "mute"],
    ["up", "down", "rest", "mute"],
    ["up", "down", "rest", "mute"],
    ["up", "down", "rest", "mute"],
  ];

  render(<Phrase measures={measures} />);

  const beats = screen.queryAllByTestId("beat");

  expect(beats[0]).toHaveTextContent("⬆️");
  expect(beats[1]).toHaveTextContent("⬇️");
  expect(beats[2]).toHaveTextContent("-");
  expect(beats[3]).toHaveTextContent("X");
  expect(beats[4]).toHaveTextContent("⬆️");
  expect(beats[5]).toHaveTextContent("⬇️");
  expect(beats[6]).toHaveTextContent("-");
  expect(beats[7]).toHaveTextContent("X");
  expect(beats[8]).toHaveTextContent("⬆️");
  expect(beats[9]).toHaveTextContent("⬇️");
  expect(beats[10]).toHaveTextContent("-");
  expect(beats[11]).toHaveTextContent("X");
  expect(beats[12]).toHaveTextContent("⬆️");
  expect(beats[13]).toHaveTextContent("⬇️");
  expect(beats[14]).toHaveTextContent("-");
  expect(beats[15]).toHaveTextContent("X");
});
