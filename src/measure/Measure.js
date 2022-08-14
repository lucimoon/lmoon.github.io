import React from "react";
import Beat from "../beat/Beat";

const Measure = ({ beats }) => {
  return (
    <div className="measure">
      <Beat type={beats[0]} />
      <Beat type={beats[1]} />
      <Beat type={beats[2]} />
      <Beat type={beats[3]} />
    </div>
  );
};

export default Measure;
