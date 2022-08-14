import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 8 beats", () => {
  render(<App />);
  const beats = screen.queryAllByTestId("beat");

  expect(beats).toHaveLength(16);
});
