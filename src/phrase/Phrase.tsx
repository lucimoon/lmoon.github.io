import React from "react";
import Measure from "../measure/Measure";

type Props = {
  measures: MeasureData[];
};

const Phrase = ({ measures }: Props) => {
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
