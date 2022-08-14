import Measure from "../measure/Measure";

type Props = {
  measures: MeasureData[];
};

const Phrase = ({ measures }: Props) => {
  return (
    <div className="phrase">
      <Measure beats={measures[0]} measureNumber={1} />
      <Measure beats={measures[1]} measureNumber={2} />
      <Measure beats={measures[2]} measureNumber={3} />
      <Measure beats={measures[3]} measureNumber={4} />
    </div>
  );
};

export default Phrase;
