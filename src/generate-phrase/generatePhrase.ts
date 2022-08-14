import { StrumSymbolId } from "../constants/StrumSymbols";
const validBeats = [
  StrumSymbolId.UP,
  StrumSymbolId.DOWN,
  StrumSymbolId.REST,
  StrumSymbolId.MUTE,
];

const getRandomBeatIndex = () => {
  return Math.floor(Math.random() * 4);
};

export const getRandomBeat = (previousBeat?: StrumSymbolId) => {
  let validBeatSubset = [...validBeats];

  if (previousBeat === StrumSymbolId.UP) {
    validBeatSubset = [
      StrumSymbolId.DOWN,
      StrumSymbolId.REST,
      StrumSymbolId.MUTE,
    ];
  }

  if (previousBeat === StrumSymbolId.DOWN) {
    validBeatSubset = [
      StrumSymbolId.UP,
      StrumSymbolId.REST,
      StrumSymbolId.MUTE,
    ];
  }

  return validBeatSubset[getRandomBeatIndex()];
};

const generatePhrase = (): PhraseData => {
  return [
    [
      StrumSymbolId.DOWN,
      StrumSymbolId.REST,
      getRandomBeat(),
      StrumSymbolId.REST,
    ],
    [getRandomBeat(), StrumSymbolId.REST, getRandomBeat(), StrumSymbolId.REST],
    [getRandomBeat(), StrumSymbolId.REST, getRandomBeat(), StrumSymbolId.REST],
    [getRandomBeat(), StrumSymbolId.REST, getRandomBeat(), StrumSymbolId.REST],
  ];
};

export default generatePhrase;
