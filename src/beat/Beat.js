import strumSymbols from "../constants/strumSymbols";

const Beat = function ({ type }) {
  return (
    <div data-testid={`beat-${type}`} className="beat">
      {strumSymbols[type]}
    </div>
  );
};

export default Beat;
