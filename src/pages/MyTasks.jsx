import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Play, Check, Pause, SlidersHorizontal, Eye, Zap, Flame, User, Bot, UserPlus, Users } from 'lucide-react';
import Layout from '../components/Layout';
 
// Gram Small Yellow Logo (used in rewards)
const GramIcon = () => (
  <div
    className="w-4 h-4 rounded-full flex items-center justify-center select-none"
    style={{
      background: 'radial-gradient(circle, #F1A80A 0%, #D48C00 100%)',
    }}
  >
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21V3H13.5C16.5 3 18.5 4.8 18.5 7.8C18.5 10.8 16.5 12.6 13.5 12.6H10.5V21H7ZM10.5 9.6H13.3C14.8 9.6 15.6 9 15.6 7.8C15.6 6.6 14.8 6 13.3 6H10.5V9.6Z" fill="#141629" />
    </svg>
  </div>
);
 
const MyTasks = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
 
  const tasksData = [
    {
      id: 1,
      name: 'AI_Celestia_bot',
      progress: 204,
      total: 426,
      status: 'active',
      statusText: 'Активне',
      reward: '100k',
      type: 'bot',
      iconBg: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)',
      iconColor: '#34D399',
    },
    {
      id: 2,
      name: 'Тест канал',
      progress: 14,
      total: 15,
      status: 'ready',
      statusText: 'Готово',
      reward: '100k',
      type: 'view',
      iconBg: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)',
      iconColor: '#60A5FA',
    },
    {
      id: 3,
      name: 'PR GRAM | News',
      progress: 2,
      total: 3,
      status: 'ready',
      statusText: 'Готово',
      reward: '100k',
      type: 'boost',
      iconBg: 'linear-gradient(135deg, #78350F 0%, #451A03 100%)',
      iconColor: '#FBBF24',
    },
    {
      id: 4,
      name: 'Канал',
      progress: 204,
      total: 426,
      status: 'active',
      statusText: 'Активне',
      reward: '100k',
      type: 'user',
      iconBg: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)',
      iconColor: '#38BDF8',
    },
    {
      id: 5,
      name: 'Memes_ua',
      progress: 2,
      total: 3,
      status: 'ready',
      statusText: 'Готово',
      reward: '100k',
      type: 'reaction',
      iconBg: 'linear-gradient(135deg, #701A75 0%, #4A044E 100%)',
      iconColor: '#F472B6',
    },
    {
      id: 6,
      name: 'Memes_ua',
      progress: 2,
      total: 3,
      status: 'paused',
      statusText: 'Пауза',
      reward: '100k',
      type: 'user-violet',
      iconBg: 'linear-gradient(135deg, #3B0764 0%, #1E1B4B 100%)',
      iconColor: '#A78BFA',
    },
    {
      id: 7,
      name: 'PR GRAM | News',
      progress: 2,
      total: 3,
      status: 'ready',
      statusText: 'Готово',
      reward: '100k',
      type: 'boost',
      iconBg: 'linear-gradient(135deg, #78350F 0%, #451A03 100%)',
      iconColor: '#FBBF24',
    },
    {
      id: 8,
      name: 'Канал',
      progress: 204,
      total: 426,
      status: 'active',
      statusText: 'Активне',
      reward: '100k',
      type: 'user',
      iconBg: 'linear-gradient(135deg, #1E3A8A 0%, #172554 100%)',
      iconColor: '#38BDF8',
    },
    {
      id: 9,
      name: 'Memes_ua',
      progress: 2,
      total: 3,
      status: 'ready',
      statusText: 'Готово',
      reward: '100k',
      type: 'reaction',
      iconBg: 'linear-gradient(135deg, #701A75 0%, #4A044E 100%)',
      iconColor: '#F472B6',
    }
  ];
 
  const dropdownTypes = [
    { id: 'all', label: 'Усі типи', icon: <img src="/assets/images/svg/Tuning-gray.svg" /> },
    { id: 'user', label: 'Канали', icon: <img src="/assets/images/svg/User-Plus-Rounded.svg" /> },
    { id: 'group', label: 'Групи', icon: <img src="/assets/images/svg/Users-Group-Rounded.svg" /> },
    { id: 'reaction', label: 'Реакції', icon: <img src="/assets/images/svg/Flame-Red.svg" /> },
    { id: 'bot', label: 'Боти', icon: <img src="/assets/images/svg/Smile-Square-Green.svg" /> },
    { id: 'view', label: 'Перегляди', icon: <img src="/assets/images/svg/Eye-Blue.svg" /> },
    { id: 'boost', label: 'Бусти', icon: <img src="/assets/images/svg/Bolt.svg" /> }
  ];
 
  const getIcon = (type, color) => {
    switch (type) {
      case 'bot':
        return <img src="/assets/images/vector18.png" />;
      case 'view':
        return <img src="/assets/images/vector27.png" />;
      case 'boost':
        return <img src="/assets/images/premium-yellow.png" />;
      case 'reaction':
        return <img src="/assets/images/User-Plus-Blue.png" />;
      case 'user-violet':
        return <img src="/assets/images/User-Double-Purple.png" />;
      case 'user':
      default:
        return <img src="/assets/images/vector5.png" />;
    }
  };
 
  const getStatusDotColor = (status) => {
    if (status === 'active') return '#22C55E'; // green
    if (status === 'ready') return '#60A5FA'; // blue
    return '#EAB308'; // yellow/orange
  };
 
  const getStatusTextColor = (status) => {
    if (status === 'active') return 'text-[#22C55E]';
    if (status === 'ready') return 'text-[#60A5FA]';
    return 'text-[#EAB308]';
  };
 
  const filteredTasks = tasksData.filter(task => {
    const matchesTab = activeTab === 'all' || task.status === activeTab;
   
    let matchesType = false;
    if (selectedType === 'all') {
      matchesType = true;
    } else if (selectedType === 'user') {
      matchesType = task.type === 'user' || task.type === 'user-violet';
    } else {
      matchesType = task.type === selectedType;
    }
   
    return matchesTab && matchesType;
  });
 
  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
       
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-4">
          <Link to="/profile" className="text-[#545664] hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-base font-medium text-white flex-1 text-center mr-5">My tasks</h1>
        </div>
 
        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-4 relative">
         
          {/* Horizontal Filters Bar */}
          <div className="flex items-center justify-between gap-1 py-1 relative">
            {/* Scrollable Tabs Wrapper */}
              {/* All (Усі) */}
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1 transition-all flex-shrink-0 ${
                  activeTab === 'all'
                    ? 'bg-[#87ADF0] text-[#0B0E21] shadow-[0_0_12px_rgba(135,173,240,0.3)]'
                    : 'bg-[#161829]/60 text-[#8A8D9F] border border-white/5'
                }`}
              >
                <span>Усі</span>
                <span className={activeTab === 'all' ? 'text-[#0B0E21]/80' : 'text-[#5A5D72]'}>12</span>
              </button>
 
              {/* Active */}
              <button
                onClick={() => setActiveTab('active')}
                className={`px-3 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all flex-shrink-0 ${
                  activeTab === 'active'
                    ? 'bg-[#87ADF0] text-[#0B0E21] shadow-[0_0_12px_rgba(135,173,240,0.3)]'
                    : 'bg-[#161829]/60 text-[#8A8D9F] border border-white/5'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0`}>
                  <img src="/assets/images/svg/Play-Gray.svg" />
                </div>
                <span>(6)</span>
              </button>
 
              {/* Ready */}
              <button
                onClick={() => setActiveTab('ready')}
                className={`px-3 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all flex-shrink-0 ${
                  activeTab === 'ready'
                    ? 'bg-[#87ADF0] text-[#0B0E21] shadow-[0_0_12px_rgba(135,173,240,0.3)]'
                    : 'bg-[#161829]/60 text-[#8A8D9F] border border-white/5'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0`}>
                  <img src="/assets/images/svg/Check-Square.svg" />
                </div>
                <span>(4)</span>
              </button>
 
              {/* Paused */}
              <button
                onClick={() => setActiveTab('paused')}
                className={`px-3.5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 transition-all flex-shrink-0 ${
                  activeTab === 'paused'
                    ? 'bg-[#87ADF0] text-[#0B0E21] shadow-[0_0_12px_rgba(135,173,240,0.3)]'
                    : 'bg-[#161829]/60 text-[#8A8D9F] border border-white/5'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0`}>
                  <img src="/assets/images/svg/Pause-Gray.svg" />
                </div>
                <span>(3)</span>
              </button>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-all z-10 ${
                showDropdown
                  ? 'bg-[#87ADF0] text-[#0B0E21] border-[#87ADF0]'
                  : 'bg-[#161829]/60 text-[#8A8D9F] border-white/5 hover:text-white'
              }`}
            >
              <img src={showDropdown ? "/assets/images/svg/Tuning-4.svg" : "/assets/images/svg/Tuning-gray.svg"} />
            </button>
 
            {/* Dropdown Menu */}
            {showDropdown && (
              <div
                className="absolute right-0 top-full mt-2 w-[180px] bg-[#161829] border border-[#2A2D40] rounded-[16px] p-1.5 flex flex-col gap-0.5 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                {dropdownTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      setShowDropdown(false);
                    }}
                    className={`flex items-center gap-3.5 px-3 py-2.5 rounded-[12px] text-xs font-medium w-full text-left transition-colors ${
                      selectedType === type.id
                        ? 'bg-white/5 text-white'
                        : 'text-[#8A8D9F] hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex-shrink-0">
                      {type.icon}
                    </div>
                    <span className="flex-1">{type.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
 
          {/* Tasks List */}
          <div className="flex flex-col gap-2.5 mt-2">
            {filteredTasks.map((task) => {
              const progressPercent = Math.min(100, Math.round((task.progress / task.total) * 100));
              return (
                <Link
                  to="/task-detail"
                  state={task}
                  key={task.id}
                  className="gradient-border-card rounded-[12px] p-2.5 flex items-center gap-3.5 hover:opacity-95 transition-opacity cursor-pointer block"
                  style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}
                >
                  {/* Circular Icon */}
                  <div
                    className="w-[44px] h-[44px] rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    {getIcon(task.type, task.iconColor)}
                  </div>
 
                  {/* Right Side Content Container */}
                  <div className="flex-1 flex flex-col justify-center">
                   
                    {/* Top Row: Name, Progress text, and Status */}
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-[12px] font-medium text-white truncate max-w-[120px]">
                        {task.name}
                      </h4>
                      <div className="flex items-center">
                        <span className="text-[12px] text-[#ffffff]/40 font-medium mr-4">
                          {task.progress}/{task.total}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[12px] font-semibold ${getStatusTextColor(task.status)}`}>
                            {task.statusText}
                          </span>
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: getStatusDotColor(task.status) }}
                          ></div>
                        </div>
                      </div>
                    </div>
 
                    {/* Bottom Row: Progress Bar and Reward */}
                    <div className="flex items-center justify-between w-full mt-2">
                      {/* Progress Bar */}
                      <div className="flex-1 h-1 bg-[#0B0E21] rounded-full overflow-hidden mr-4">
                        <div
                          className="h-full bg-[#87ADF0] rounded-full"
                          style={{ width: `${progressPercent}%` }}
                        ></div>
                      </div>
 
                      {/* Reward */}
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="text-xs font-bold text-white">{task.reward}</span>
                        <img src="/assets/images/plogo.png" alt="gram" className='w-4 h-4' />
                      </div>
                    </div>
 
                  </div>
 
                </Link>
              );
            })}
          </div>
 
        </div>
      </div>
    </Layout>
  );
};
 
export default MyTasks;
 