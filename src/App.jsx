import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyAppBar from "./components/AppBar.jsx";
import BottomNav from "./components/BottomNav.jsx";
import HomeScreen from "./home/HomeScreen.jsx";
import MyPlanScreen from "./myPlan/MyPlanScreen.jsx";
import MyPlanDetailScreen from "./myPlan/MyPlanDetailScreen.jsx";
import MyPageScreen from "./myPage/myPageScreen.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <MyAppBar logo="/assets/profile4.jpg" />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/my-plan" element={<MyPlanScreen />} />
          <Route
            path="/my-plan/my-plan-detail"
            element={<MyPlanDetailScreen />}
          />
          <Route path="/my-page" element={<MyPageScreen />} />
        </Routes>
      </main>
      <BottomNav />
    </Router>
  );
}

export default App;
