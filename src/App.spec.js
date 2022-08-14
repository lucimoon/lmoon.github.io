import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders 16 beats", () => {
    render(<App />);
    const beats = screen.getAllByTestId(/^beat/);

    expect(beats).toHaveLength(16);
  });

  it("renders valid beats", () => {
    render(<App />);
    const ups = screen.getAllByTestId("beat-up");
    const downs = screen.getAllByTestId("beat-down");
    const mutes = screen.getAllByTestId("beat-mute");
    const rests = screen.getAllByTestId("beat-rest");

    expect(ups.length + downs.length + mutes.length + rests.length).toEqual(16);
  });
});
