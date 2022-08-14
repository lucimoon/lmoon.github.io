import React from "react";
import Measure from "../measure/Measure";

const Phrase = () => {
  return (
    <div>
      <Measure beats={["up", "down", "rest", "mute"]} />
      <Measure beats={["up", "down", "rest", "mute"]} />
      <Measure beats={["up", "down", "rest", "mute"]} />
      <Measure beats={["up", "down", "rest", "mute"]} />
    </div>
  );
};

export default Phrase;
