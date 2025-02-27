import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function BottomNav() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          backgroundColor: "white", // 하단 네비게이션 배경 투명화
          boxShadow: "none", // 그림자 없애기
          width: "100vw",
        }}
      >
        <BottomNavigationAction label="홈" icon={<HomeIcon />} />
        <BottomNavigationAction label="나의 계획표" icon={<ListIcon />} />
        <BottomNavigationAction label="마이" icon={<EmojiEmotionsIcon />} />
      </BottomNavigation>
    </AppBar>
  );
}
