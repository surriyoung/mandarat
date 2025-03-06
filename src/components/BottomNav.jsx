import { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router에서 useNavigate 임포트
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 사용

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // 선택된 값에 따라 페이지 이동
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/my-plan");
    } else if (newValue === 2) {
      navigate("/my-page");
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <BottomNavigation
        value={value}
        onChange={handleChange}
        showLabels
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          width: "100vw",
        }}
      >
        <BottomNavigationAction
          label="홈"
          icon={<HomeIcon />}
          sx={{
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        />
        <BottomNavigationAction
          label="나의 계획표"
          icon={<ListIcon />}
          sx={{
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        />
        <BottomNavigationAction
          label="마이"
          icon={<EmojiEmotionsIcon />}
          sx={{
            "&:focus": {
              outline: "none",
              boxShadow: "none",
            },
          }}
        />
      </BottomNavigation>
    </AppBar>
  );
}
