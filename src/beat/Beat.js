const Beat = function ({ type }) {
  let content = "";
  switch (type) {
    case "up":
      content = "⬆️";
      break;

    case "down":
      content = "⬇️";
      break;
    case "mute":
      content = "X";
      break;
    case "rest":
      content = "-";
      break;
    default:
      break;
  }

  return (
    <div data-testid="beat" className="beat">
      {content}
    </div>
  );
};

export default Beat;
