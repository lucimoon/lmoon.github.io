import StrumSymbols from "../constants/StrumSymbols";

export {};

declare global {
  type BeatData = StrumSymbols;
  type MeasureData = BeatData[];
  type PhraseData = MeasureData[];

  type StrumSymbolData = {
    name: string;
    symbol: string;
  };

  type Count = number | "e" | "&" | "a";
}
