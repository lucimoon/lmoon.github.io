export enum StrumSymbolId {
  UP = "UP",
  DOWN = "DOWN",
  MUTE = "MUTE",
  REST = "REST",
}

const StrumSymbols: Record<StrumSymbolId, StrumSymbolData> = {
  [StrumSymbolId.UP]: {
    name: StrumSymbolId.UP,
    symbol: "↑",
  },
  [StrumSymbolId.DOWN]: {
    name: StrumSymbolId.DOWN,
    symbol: "↓",
  },
  [StrumSymbolId.MUTE]: {
    name: StrumSymbolId.MUTE,
    symbol: "X",
  },
  [StrumSymbolId.REST]: {
    name: StrumSymbolId.REST,
    symbol: "",
  },
};

export default StrumSymbols;
