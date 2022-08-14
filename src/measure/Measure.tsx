import React from "react";
import Beat from "../beat/Beat";
import { StrumSymbolId } from "../constants/StrumSymbols";

type Props = {
  beats: StrumSymbolId[];
};
const Measure = ({ beats }: Props) => {
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
