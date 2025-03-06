import MainTile from "../components/MainTile.jsx";
import GoalPercent from "../components/GoalPercent.jsx";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const MyPlanDetailScreen = () => {
  const itemBackgroundColors = [
    "#FFADAD",
    "#FFD6A5",
    "#FDFFB6",
    "#FFC6FF",
    "#fff",
    "#CAFFBF",
    "#BDB2FF",
    "#A0C4FF",
    "#9BF6FF",
  ];

  // grid-item 내용
  const itemTexts = [
    "긴글테스트긴글테스트긴글테스트긴글테스트긴글테스트",
    "1000만원 모으기",
    "텍스트 3",
    "텍스트 4",
    "텍스트 5",
    "텍스트 6",
    "텍스트 7",
    "텍스트 8",
    "텍스트 9",
  ];

  const handleItemClick = (index) => {
    console.log(`Item ${index + 1} clicked!`);
  };

  return (
    <div className="main-wrap">
      <div className="tile-title">
        <span>2025년 계획</span>
        <IconButton
          sx={{
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        >
          <MoreHorizIcon sx={{ color: "black", height: 24 }} />
        </IconButton>
      </div>
      <MainTile
        itemBackgroundColors={itemBackgroundColors}
        itemTexts={itemTexts}
        onItemClick={handleItemClick}
      />
      <GoalPercent itemBackgroundColors={itemBackgroundColors} />
    </div>
  );
};

export default MyPlanDetailScreen;
