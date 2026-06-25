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
import BotSetupPage from "./pages/BotSetupPage";
import SelectBotPage from "./pages/SelectBotPage";
import BotTaskTypePage from "./pages/BotTaskTypePage";
import DepositBalance from "./pages/DepositBalance";
import ReferralSystem from "./pages/ReferralSystem";
import LevelSystem from "./pages/LevelSystem";
import MyTasks from "./pages/MyTasks";
import TaskDetail from "./pages/TaskDetail";
import AddExecutions from "./pages/AddExecutions";
import ChangePrice from "./pages/ChangePrice";

// Bot Flow
import BotAudienceSetup from "./pages/BotAudienceSetup";
import BotTaskPricePage from "./pages/BotTaskPricePage";
import BotTaskSuccess from "./pages/BotTaskSuccess";

// Views Flow
import ViewPostLinkPage from "./pages/ViewPostLinkPage";
import ViewAudienceSetup from "./pages/ViewAudienceSetup";
import ViewTaskPricePage from "./pages/ViewTaskPricePage";
import ViewTaskSuccess from "./pages/ViewTaskSuccess";

// Reactions Flow
import ReactionPostLinkPage from "./pages/ReactionPostLinkPage";
import ReactionAudienceSetup from "./pages/ReactionAudienceSetup";
import ReactionTaskPricePage from "./pages/ReactionTaskPricePage";
import ReactionTaskSuccess from "./pages/ReactionTaskSuccess";

// Channel Subscription Flow
import ChannelAudienceSetup from "./pages/ChannelAudienceSetup";
import ChannelTaskPricePage from "./pages/ChannelTaskPricePage";
import ChannelTaskSuccess from "./pages/ChannelTaskSuccess";

// Premium Boost Flow
import PremiumBoostSub from "./pages/PremiumBoostSub";
import PremiumBoostDuration from "./pages/PremiumBoostDuration";
import PremiumBoostAudience from "./pages/PremiumBoostAudience";
import PremiumBoostPrice from "./pages/PremiumBoostPrice";
import PremiumBoostSuccess from "./pages/PremiumBoostSuccess";
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
import ReactionSetupPage from "./pages/ReactionSetupPage";
import DurationSetupPage from "./pages/DurationSetupPage";
import AutoTasks from "./pages/AutoTasks";
import AutoTasksAddChannel from "./pages/AutoTasksAddChannel";
import AutoTasksBotWarning from "./pages/AutoTasksBotWarning";
import AutoTasksConfig from "./pages/AutoTasksConfig";
import AutoTasksConfigViews from "./pages/AutoTasksConfigViews";
import AutoTasksConfigReactions from "./pages/AutoTasksConfigReactions";
import AutoTasksConfigDetail from "./pages/AutoTasksConfigDetail";
import ExecuteTasksPage from "./pages/ExecuteTasksPage";
import ExecuteChannelSub from "./pages/ExecuteChannelSub";
import ExecuteBot from "./pages/ExecuteBot";
import ExecuteReactions from "./pages/ExecuteReactions";
import ExecutePremiumBoost from "./pages/ExecutePremiumBoost";
import ExecutePendingReactions from "./pages/ExecutePendingReactions";
import VerifyExecutions from "./pages/VerifyExecutions";
import VerifyTaskReview from "./pages/VerifyTaskReview";
import ChangeAudience from "./pages/ChangeAudience";
import EditAudience from "./pages/EditAudience";


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
        <Route path="/reaction-setup" element={<ReactionSetupPage />} />
        <Route path="/duration-setup" element={<DurationSetupPage />} />
        <Route path="/auto-tasks" element={<AutoTasks />} />
        <Route path="/auto-tasks/add" element={<AutoTasksAddChannel />} />
        <Route path="/auto-tasks/warning" element={<AutoTasksBotWarning />} />
        <Route path="/auto-tasks/config" element={<AutoTasksConfig />} />
        <Route path="/auto-tasks/config/detail" element={<AutoTasksConfigDetail />} />
        <Route path="/auto-tasks/config/views" element={<AutoTasksConfigViews />} />
        <Route path="/auto-tasks/config/reactions" element={<AutoTasksConfigReactions />} />
        <Route path="/execute-tasks" element={<ExecuteTasksPage />} />
        <Route path="/execute-tasks/channel-sub" element={<ExecuteChannelSub />} />
        <Route path="/execute-tasks/bot" element={<ExecuteBot />} />
        <Route path="/execute-tasks/reactions" element={<ExecuteReactions />} />
        <Route path="/execute-tasks/premium-boost" element={<ExecutePremiumBoost />} />
        <Route path="/execute-tasks/pending-reactions" element={<ExecutePendingReactions />} />
        <Route path="/channel-sub" element={<ChannelSub />} />
        <Route path="/select-channel-page" element={<SelectChannelPage />} />
        {/* Views Flow */}
        <Route path="/view-post-link" element={<ViewPostLinkPage />} />
        <Route path="/view-audience-setup" element={<ViewAudienceSetup />} />
        <Route path="/view-task-price" element={<ViewTaskPricePage />} />
        <Route path="/view-task-success" element={<ViewTaskSuccess />} />

        {/* Reactions Flow */}
        <Route path="/reaction-post-link" element={<ReactionPostLinkPage />} />
        <Route path="/reaction-audience-setup" element={<ReactionAudienceSetup />} />
        <Route path="/reaction-task-price" element={<ReactionTaskPricePage />} />
        <Route path="/reaction-task-success" element={<ReactionTaskSuccess />} />

        {/* Channel Subscription Flow */}
        <Route path="/channel-audience-setup" element={<ChannelAudienceSetup />} />
        <Route path="/channel-task-price" element={<ChannelTaskPricePage />} />
        <Route path="/channel-task-success" element={<ChannelTaskSuccess />} />

        {/* Premium Boost Flow */}
        <Route path="/premium-boost" element={<PremiumBoostSub />} />
        <Route path="/premium-boost/duration" element={<PremiumBoostDuration />} />
        <Route path="/premium-boost/audience" element={<PremiumBoostAudience />} />
        <Route path="/premium-boost/price" element={<PremiumBoostPrice />} />
        <Route path="/premium-boost/success" element={<PremiumBoostSuccess />} />

        <Route path="/bot-setup" element={<BotSetupPage />} />
        <Route path="/select-bot-page" element={<SelectBotPage />} />
        <Route path="/bot-task-type" element={<BotTaskTypePage />} />

        {/* Bot Flow */}
        <Route path="/bot-audience-setup" element={<BotAudienceSetup />} />
        <Route path="/bot-task-price" element={<BotTaskPricePage />} />
        <Route path="/bot-task-success" element={<BotTaskSuccess />} />

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
        <Route path="/deposit-balance" element={<DepositBalance />} />
        <Route path="/referral-system" element={<ReferralSystem />} />
        <Route path="/level-system" element={<LevelSystem />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/task-detail" element={<TaskDetail />} />
        <Route path="/add-executions" element={<AddExecutions />} />
        <Route path="/change-price" element={<ChangePrice />} />
        <Route path="/change-audience" element={<ChangeAudience />} />
        <Route path="/edit-audience" element={<EditAudience />} />
        <Route path="/verify-executions" element={<VerifyExecutions />} />
        <Route path="/verify-task-review" element={<VerifyTaskReview />} />
      </Routes>
    </Router>
  );
}

export default App;
