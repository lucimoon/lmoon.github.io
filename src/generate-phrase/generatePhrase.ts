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

const getRandomBeat = () => {
  return validBeats[getRandomBeatIndex()];
};

const generatePhrase = (): PhraseData => {
  return [
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
  ];
};

export default generatePhrase;
