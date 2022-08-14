import { render, screen } from "@testing-library/react";
import Measure from "./Measure";

describe("Measure", () => {
  it("renders 4 beats", () => {
    render(<Measure beats={["up", "down", "rest", "mute"]} />);
    const beats = screen.queryAllByTestId("beat");

    expect(beats).toHaveLength(4);
  });

  it("configured beats", () => {
    render(<Measure beats={["up", "down", "rest", "mute"]} />);
    const beats = screen.queryAllByTestId("beat");

    expect(beats[0]).toHaveTextContent("⬆️");
    expect(beats[1]).toHaveTextContent("⬇️");
    expect(beats[2]).toHaveTextContent("-");
    expect(beats[3]).toHaveTextContent("X");
  });
});
