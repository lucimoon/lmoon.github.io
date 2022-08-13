const Beat = function ({ type }) {
  if (type === "up") return <div>⬆️</div>;
  if (type === "down") return <div>⬇️</div>;
  if (type === "mute") return <div>X</div>;
  if (type === "rest") return <div>-</div>;
};

export default Beat;
