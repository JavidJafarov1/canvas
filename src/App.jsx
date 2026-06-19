import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Edit from "./pages/Edit";
import Profile from "./pages/Profile";
import GroupDetail from "./pages/GroupDetail";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/group-detail" element={<GroupDetail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;
