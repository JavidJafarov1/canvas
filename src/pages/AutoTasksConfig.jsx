import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const AutoTasksConfig = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [channel, setChannel] = useState(location.state?.channel || null);

  useEffect(() => {
    if (!channel) return;
    const saved = localStorage.getItem('auto_tasks_channels');
    if (saved) {
      const current = JSON.parse(saved);
      const found = current.find(item => item.id === channel.id);
      if (found) {
        setChannel(found);
      }
    }
  }, [location.state]);

  if (!channel) {
    return (
      <div className="p-5 text-white">
        <button onClick={() => navigate('/auto-tasks')}>Back</button>
        <p>No channel selected.</p>
      </div>
    );
  }

  const saveChannel = (updatedCh) => {
    setChannel(updatedCh);
    const saved = localStorage.getItem('auto_tasks_channels');
    if (saved) {
      const current = JSON.parse(saved);
      const idx = current.findIndex(item => item.id === updatedCh.id);
      if (idx !== -1) {
        current[idx] = updatedCh;
        localStorage.setItem('auto_tasks_channels', JSON.stringify(current));
      }
    }
  };

  const toggleViews = (e) => {
    e.stopPropagation();
    const updated = { ...channel, viewsEnabled: !channel.viewsEnabled };
    saveChannel(updated);
  };

  const toggleReactions = (e) => {
    e.stopPropagation();
    const updated = { ...channel, reactionsEnabled: !channel.reactionsEnabled };
    saveChannel(updated);
  };

  const handleDelete = () => {
    const saved = localStorage.getItem('auto_tasks_channels');
    if (saved) {
      const current = JSON.parse(saved);
      const filtered = current.filter(item => item.id !== channel.id);
      localStorage.setItem('auto_tasks_channels', JSON.stringify(filtered));
    }
    navigate('/auto-tasks');
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col font-sans text-white relative min-h-[calc(100vh-24px)] bg-[#0B0E21]">
        {/* Header */}
        <div className="flex items-center justify-between relative px-5 h-[64px] border-b border-[#1C1F37]">
          <button
            onClick={() => navigate('/auto-tasks')}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-5"
          >
            <ChevronLeft size={24} className="stroke-[1.5px]" />
          </button>
          <h1 className="text-[17px] font-semibold text-white absolute left-1/2 -translate-x-1/2">
            Додати канал
          </h1>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4">
          {/* Configurations List */}
          <div className="flex flex-col gap-3">
            {/* Card 1: Views Config */}
            <div
              onClick={() => navigate('/auto-tasks/config/views', { state: { channel } })}
              className="gradient-border-card rounded-[16px] p-4 flex items-center justify-between transition-all hover:bg-white/[0.01] cursor-pointer border border-white/5 h-[78px]"
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.04) 2.67%, rgba(255, 255, 255, 0.06) 98%)' }}
            >
              <div className="flex items-center gap-[14px]">
                <img src="/assets/images/vector27.png" alt="views" className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[15px] text-white leading-tight">Перегляди</h3>
                  <p className="text-[#8A8D9F] text-[13px] mt-1">Налаштуйте перегляди</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-[#8A8D9F] stroke-[1.5px]" />
            </div>

            {/* Card 2: Reactions Config */}
            <div
              onClick={() => navigate('/auto-tasks/config/reactions', { state: { channel } })}
              className="gradient-border-card rounded-[16px] p-4 flex items-center justify-between transition-all hover:bg-white/[0.01] cursor-pointer border border-white/5 h-[78px]"
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.04) 2.67%, rgba(255, 255, 255, 0.06) 98%)' }}
            >
              <div className="flex items-center gap-[14px]">
                <img src="/assets/images/vector29.png" alt="reactions" className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[15px] text-white leading-tight">Реакції</h3>
                  <p className="text-[#8A8D9F] text-[13px] mt-1">Налаштуйте реакції</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-[#8A8D9F] stroke-[1.5px]" />
            </div>
          </div>

          {/* Bottom Actions Row */}
          <div className="flex items-center gap-[14px] pt-3">
            <button
              onClick={() => {
                // Simulate recovery/resume action
              }}
              className="flex-grow h-[50px] rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 transition-all cursor-pointer gradient-border-card text-[#00FF95] text-center hover:brightness-110 active:scale-[0.98]"
              style={{ background: 'linear-gradient(170deg, rgba(0, 255, 149, 0.2) 0%, rgba(0, 255, 149, 0.04) 53.26%, rgba(0, 255, 149, 0.02) 100%)' }}
            >
              <img src='/assets/images/svg/Play1.svg' alt='play1' />
              Відновити
            </button>

            <button
              onClick={handleDelete}
            >
              <img src='/assets/images/vector20.png' alt='vector20' />
            </button>
          </div>

          {/* New navigation button matching red box in mockup */}
          <div className="pt-3">
            <button
              onClick={() => navigate('/auto-tasks/config/detail', { state: { channel } })}
              className="w-full h-[50px] rounded-[16px] font-semibold text-[15px] flex items-center justify-center gap-2 transition-all cursor-pointer border border-white/10 text-white text-center hover:bg-white/[0.02] active:scale-[0.98]"
              style={{ background: 'rgba(255, 255, 255, 0.03)' }}
            >
              Деталі конфігурації
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AutoTasksConfig;

