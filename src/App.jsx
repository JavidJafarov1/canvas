import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import GroupDetail from "./pages/GroupDetail";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import EditSC from "./pages/EditSC";
import TaskList from "./pages/TaskList";
import CreateTask from "./pages/CreateTask";
import ChannelSub from "./pages/ChannelSub";
import SelectChannelPage from "./pages/SelectChannelPage";
import AudienceSetup from "./pages/AudienceSetup";
import TaskPricePage from "./pages/TaskPricePage";
import PostLinkPage from "./pages/PostLinkPage";
import BotSetupPage from "./pages/BotSetupPage";
import SelectBotPage from "./pages/SelectBotPage";
import BotTaskTypePage from "./pages/BotTaskTypePage";
import TaskSuccess from "./pages/TaskSuccess";
import LaunchSC from "./pages/LaunchSC";
import SelectChannel from "./pages/SelectChannel";
import SelectBot from "./pages/SelectBot";
import General from "./pages/General";
import AutoDelete from "./pages/AutoDelete";
import HideLinks from "./pages/HideLinks";
import ManageBranches from "./pages/ManageBranches";
import UpdateAdmin from "./pages/UpdateAdmin";
import Premium from "./pages/Premium";
import NonSubscriptionRestriction from "./pages/NonSubscriptionRestriction";
import DelayedSubscription from "./pages/DelayedSubscription";
import ButtonCustomization from "./pages/ButtonCustomization";
import PremiumCheck from "./pages/PremiumCheck";
import Whitelist from "./pages/Whitelist";
import PromoText from "./pages/PromoText";
import EntryCheck from "./pages/EntryCheck";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/edit-sc" element={<EditSC />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/group-detail" element={<GroupDetail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/task-list" element={<TaskList />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/channel-sub" element={<ChannelSub />} />
        <Route path="/select-channel-page" element={<SelectChannelPage />} />
        <Route path="/audience-setup" element={<AudienceSetup />} />
        <Route path="/task-price" element={<TaskPricePage />} />
        <Route path="/post-link" element={<PostLinkPage />} />
        <Route path="/bot-setup" element={<BotSetupPage />} />
        <Route path="/select-bot-page" element={<SelectBotPage />} />
        <Route path="/bot-task-type" element={<BotTaskTypePage />} />
        <Route path="/task-success" element={<TaskSuccess />} />
        <Route path="/launch-sc" element={<LaunchSC />} />
        <Route path="/select-channel" element={<SelectChannel />} />
        <Route path="/select-bot" element={<SelectBot />} />
        <Route path="/general" element={<General />} />
        <Route path="/auto-delete" element={<AutoDelete />} />
        <Route path="/hide-links" element={<HideLinks />} />
        <Route path="/manage-branches" element={<ManageBranches />} />
        <Route path="/update-admin" element={<UpdateAdmin />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/non-subscription-restriction" element={<NonSubscriptionRestriction />} />
        <Route path="/delayed-subscription" element={<DelayedSubscription />} />
        <Route path="/button-customization" element={<ButtonCustomization />} />
        <Route path="/premium-check" element={<PremiumCheck />} />
        <Route path="/whitelist" element={<Whitelist />} />
        <Route path="/promo-text" element={<PromoText />} />
        <Route path="/entry-check" element={<EntryCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
