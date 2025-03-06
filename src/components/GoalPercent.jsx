import StarIcon from "@mui/icons-material/Star";

const GoalPercent = ({ itemBackgroundColors }) => {
  return (
    <div className="goal-percent">
      <p>최종 목표까지 n퍼센트</p>
      <div className="star-wrap">
        {itemBackgroundColors.map((color, index) => (
          <StarIcon
            key={index}
            sx={{
              color: color,
              height: 24,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GoalPercent;
