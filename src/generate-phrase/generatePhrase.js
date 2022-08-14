const validBeats = ["up", "down", "rest", "mute"];

const getRandomBeatIndex = () => {
  return Math.floor(Math.random() * 4);
};

const getRandomBeat = () => {
  return validBeats[getRandomBeatIndex()];
};

const generatePhrase = () => {
  return [
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
    [getRandomBeat(), getRandomBeat(), getRandomBeat(), getRandomBeat()],
  ];
};

export default generatePhrase;
