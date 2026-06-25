import React, { useState, useEffect } from 'react';
import { ChevronLeft, Trash2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const AutoTasksConfigDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define screenshot defaults for standalone rendering or when channel is missing
  const defaultChannel = {
    id: 'mock_channel_1',
    name: 'Канал',
    viewsEnabled: true,
    reactionsEnabled: false,
    reward: 200,
    amount: 10,
    audience: 'без обмежень'
  };

  const [channel, setChannel] = useState(location.state?.channel || defaultChannel);

  useEffect(() => {
    if (!channel || channel.id === 'mock_channel_1') return;
    const saved = localStorage.getItem('auto_tasks_channels');
    if (saved) {
      const current = JSON.parse(saved);
      const found = current.find(item => item.id === channel.id);
      if (found) {
        setChannel(found);
      }
    }
  }, [location.state]);

  const saveChannel = (updatedCh) => {
    setChannel(updatedCh);
    if (updatedCh.id === 'mock_channel_1') return;
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

  const toggleViews = () => {
    const updated = { ...channel, viewsEnabled: !channel.viewsEnabled };
    saveChannel(updated);
  };

  const toggleReactions = () => {
    const updated = { ...channel, reactionsEnabled: !channel.reactionsEnabled };
    saveChannel(updated);
  };

  const handleDelete = () => {
    if (channel.id === 'mock_channel_1') {
      navigate('/auto-tasks');
      return;
    }
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
            onClick={() => navigate('/auto-tasks/config', { state: { channel } })}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-5"
          >
            <ChevronLeft size={24} className="stroke-[1.5px]" />
          </button>
          <h1 className="text-[17px] font-semibold text-white absolute left-1/2 -translate-x-1/2">
            Додати канал
          </h1>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-4 gap-4 justify-between">

          <div className="flex flex-col gap-4">
            {/* Card 1: Views Config Detail */}
            <div
              className="gradient-border-card rounded-xl flex flex-col"
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              <div className="flex items-center gap-[14px] p-3 border-b border-b-white/10">
                <img src="/assets/images/vector27.png" alt="views" className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[15px] text-white leading-tight">Перегляди</h3>
                  <p className={`text-[13px] font-medium mt-1 ${channel.viewsEnabled ? 'text-[#00FF95]' : 'text-[#8A8D9F]'}`}>
                    {channel.viewsEnabled ? 'Увімкненно' : 'Вимкненно'}
                  </p>
                </div>
              </div>

              {/* Detail fields */}
              <div className="text-xs pt-1 border-t border-[#21243A]/40 mt-1 p-[12px_16px]">
                <div className='flex flex-col gap-3'>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Винагорода:</span>
                    <span className="font-medium text-white">200 GRAM/од.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Кількість:</span>
                    <span className="font-medium text-white">10 переглядів</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Аудиторія:</span>
                    <span className="font-medium text-white">1 без обмежень</span>
                  </div>
                </div>
                {/* Card button toggle */}
                <div className='mt-3'>
                  {channel.viewsEnabled ? (
                    <button
                      onClick={toggleViews}
                      className="w-full h-11 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2.5 transition-all cursor-pointer gradient-border-card text-[#FFB200] text-center hover:brightness-110 active:scale-[0.98]"
                      style={{ background: 'linear-gradient(170deg, rgba(255, 178, 0, 0.15) 0%, rgba(255, 178, 0, 0.02) 100%)' }}
                    >
                      <img src='/assets/images/svg/Pause.svg' alt='Pause' />
                      Призупинити
                    </button>
                  ) : (
                    <button
                      onClick={toggleViews}
                      className="w-full h-[50px] rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#00FF95]/30 text-[#00FF95] text-center hover:brightness-110 active:scale-[0.98]"
                      style={{ background: 'linear-gradient(180deg, rgba(0, 255, 149, 0.15) 0%, rgba(0, 255, 149, 0.02) 100%)' }}
                    >
                      <img src='/assets/images/svg/Play1.svg' alt='play' />
                      Відновити
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Card 2: Reactions Config Detail */}
            <div
              className="gradient-border-card rounded-xl flex flex-col"
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              <div className="flex items-center gap-[14px] border-b border-b-white/10 p-3">
                <img src="/assets/images/vector29.png" alt="reactions" className="w-12 h-12 shrink-0" />
                <div>
                  <h3 className="font-semibold text-[15px] text-white leading-tight">Реакції</h3>
                  <p className={`text-[13px] font-medium mt-1 ${channel.reactionsEnabled ? 'text-[#00FF95]' : 'text-[#8A8D9F]'}`}>
                    {channel.reactionsEnabled ? 'Увімкненно' : 'Вимкненно'}
                  </p>
                </div>
              </div>

              {/* Detail fields */}
              <div className="text-xs pt-1 border-t border-[#21243A]/40 mt-1 p-[12px_16px]">
                <div className='flex flex-col gap-3'>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Винагорода:</span>
                    <span className="font-medium text-white">200 GRAM/од.</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Кількість:</span>
                    <span className="font-medium text-white">10 переглядів</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Аудиторія:</span>
                    <span className="font-medium text-white">1 без обмежень</span>
                  </div>
                </div>
                <div className='mt-3'>
                  {/* Card button toggle */}
                  {channel.reactionsEnabled ? (
                    <button
                      onClick={toggleReactions}
                      className="w-full h-[50px] rounded-full font-semibold text-[15px] flex items-center justify-center gap-2.5 transition-all cursor-pointer border border-[#FFB200]/30 text-[#FFB200] text-center hover:brightness-110 active:scale-[0.98]"
                      style={{ background: 'linear-gradient(180deg, rgba(255, 178, 0, 0.15) 0%, rgba(255, 178, 0, 0.02) 100%)' }}
                    >
                      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2.5" height="12" rx="0.5" fill="#FFB200" />
                        <rect x="5.5" width="2.5" height="12" rx="0.5" fill="#FFB200" />
                      </svg>
                      Призупинити
                    </button>
                  ) : (
                    <button
                      onClick={toggleReactions}
                      className="w-full h-11 rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 transition-all cursor-pointer gradient-border-card text-[#00FF95] text-center hover:brightness-110 active:scale-[0.98]"
                      style={{ background: 'linear-gradient(180deg, rgba(0, 255, 149, 0.15) 0%, rgba(0, 255, 149, 0.02) 100%)' }}
                    >
                      <img src='/assets/images/svg/Play1.svg' alt='play' />
                      Відновити
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* Full Width Bottom Delete Button */}
            <div className="pb-2">
              <button
                onClick={handleDelete}
                className="w-full h-[50px] rounded-full font-semibold text-[15px] flex items-center justify-center gap-2 transition-all cursor-pointer text-[#EF4444] text-center hover:brightness-110 active:scale-[0.98] gradient-border-card"
                style={{ background: 'linear-gradient(180deg, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0.02) 100%)' }}
              >
                <img src='/assets/images/svg/Trash Bin 2.svg' alt='Trash Bin 2' />
                Видалити
              </button>
            </div>
          </div>


        </div>
      </div>
    </Layout>
  );
};

export default AutoTasksConfigDetail;
