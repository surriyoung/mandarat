import React from "react";
import MyAppBar from "./components/AppBar.jsx";
import BottomNav from "./components/BottomNav";
import UserListBox from "./components/UserListBox.jsx";
import MainTile from "./components/MainTile.jsx";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import StarIcon from "@mui/icons-material/Star";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./App.css";

function App() {
  const users = [
    { profileImage: "/assets/profile.jpg", nickname: "치이카와" },
    { profileImage: "/assets/profile2.jpg", nickname: "하치와레" },
    { profileImage: "/assets/profile3.jpg", nickname: "모몽가" },
    { profileImage: "/assets/profile4.jpg", nickname: "시사" },
  ];

  // grid-item 배경색
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

  return (
    <>
      <MyAppBar logo="/assets/profile4.jpg" />
      <main>
        <div className="main-wrap">
          <UserListBox users={users} />
          <div className="tile-title">
            <span>2025년 계획</span>
            <SwapHorizIcon sx={{ color: "black", height: 24 }} />
          </div>
          <MainTile
            itemBackgroundColors={itemBackgroundColors}
            itemTexts={itemTexts}
          />
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
          <ul className="goal-list">
            {itemTexts.map((text, index) => (
              <li key={index}>
                <StarIcon
                  sx={{
                    color: itemBackgroundColors[index], // 색상 변경
                    height: 24,
                  }}
                />
                <span>{text}</span>
                <MoreHorizIcon
                  sx={{
                    color: "black", // 색상 변경
                    height: 15,
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <BottomNav />
    </>
  );
}

export default App;
