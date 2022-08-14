import React from "react";
import StrumSymbols, { StrumSymbolId } from "../constants/StrumSymbols";

type Props = {
  type: StrumSymbolId;
};

const Beat = ({ type }: Props) => (
  <div data-testid={`beat-${StrumSymbols[type].name}`} className="beat">
    {StrumSymbols[type].symbol}
  </div>
);

export default Beat;
