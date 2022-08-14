import { StrumSymbolId } from "../constants/StrumSymbols";
import generatePhrase from "./generatePhrase";

describe("generatePhrase", () => {
  it("returns 16 beats in groups of 4", () => {
    const phrase = generatePhrase();

    expect(phrase).toHaveLength(4);

    phrase.forEach((measure) => {
      expect(measure).toHaveLength(4);
    });
  });

  it("each beat is valid", () => {
    const phrase = generatePhrase();

    phrase.forEach((measure) => {
      measure.forEach((beat) => {
        expect(Object.keys(StrumSymbolId)).toContain(beat);
      });
    });
  });

  it("results are random-ish", () => {
    const phrase1 = generatePhrase();
    const phrase2 = generatePhrase();

    expect(phrase1).not.toEqual(phrase2);
  });
});
