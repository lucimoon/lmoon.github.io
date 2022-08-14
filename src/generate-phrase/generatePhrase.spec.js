import generatePhrase from "./generatePhrase";

const validBeats = ["up", "down", "rest", "mute"];

describe("generatePhrase", () => {
  it("returns 16 beats in groups of 4", () => {
    const pattern = generatePhrase();

    expect(pattern).toHaveLength(4);

    pattern.forEach((measure) => {
      expect(measure).toHaveLength(4);
    });
  });

  it("each beat is valid", () => {
    const pattern = generatePhrase();

    pattern.forEach((measure) => {
      measure.forEach((beat) => {
        expect(validBeats).toContain(beat);
      });
    });
  });

  it("results are random-ish", () => {
    const pattern1 = generatePhrase();
    const pattern2 = generatePhrase();

    expect(pattern1).not.toEqual(pattern2);
  });
});
