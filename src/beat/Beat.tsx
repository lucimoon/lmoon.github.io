import StrumSymbols, { StrumSymbolId } from "../constants/StrumSymbols";

type Props = {
  type: StrumSymbolId;
  count: Count;
};

const Beat = ({ type, count }: Props) => (
  <div data-testid={`beat-${StrumSymbols[type].name}`} className="beat">
    {StrumSymbols[type].symbol}
    <div>{count}</div>
  </div>
);

export default Beat;
