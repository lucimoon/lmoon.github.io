import Beat from "../beat/Beat";
import { StrumSymbolId } from "../constants/StrumSymbols";

type Props = {
  beats: StrumSymbolId[];
  measureNumber: number;
};
const Measure = ({ beats, measureNumber }: Props) => {
  return (
    <div className="measure">
      <Beat type={beats[0]} count={measureNumber} />
      <Beat type={beats[1]} count="e" />
      <Beat type={beats[2]} count="&" />
      <Beat type={beats[3]} count="a" />
    </div>
  );
};

export default Measure;
