import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import Box from "@mui/material/Box";
import logo from "/assets/logo.svg"; // 로고 파일 import

export default function MyAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* 왼쪽 - 로고 */}
        <Box component="img" src={logo} alt="Logo" sx={{ height: 24 }} />

        {/* 오른쪽 - 알람 & 메시지 아이콘 */}
        <Box>
          <IconButton>
            <NotificationsIcon sx={{ color: "black", height: 24 }} />
          </IconButton>
          <IconButton>
            <MessageIcon sx={{ color: "black", height: 24 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
