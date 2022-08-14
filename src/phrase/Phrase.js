import React from "react";
import Measure from "../measure/Measure";

const Phrase = ({ measures }) => {
  return (
    <div className="phrase">
      <Measure beats={measures[0]} />
      <Measure beats={measures[1]} />
      <Measure beats={measures[2]} />
      <Measure beats={measures[3]} />
    </div>
  );
};

export default Phrase;
