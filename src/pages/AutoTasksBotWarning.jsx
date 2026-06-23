import React from 'react';
import { ChevronLeft, Globe, AlertTriangle, Plus } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const AutoTasksBotWarning = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const channel = location.state?.channel || {
    name: 'Tech News UA',
    username: '@technews_ua',
    subscribers: '12.5k',
    type: 'group'
  };

  const handleAddBotClick = () => {
    // Add the channel to list as simulation and route to config page
    const saved = localStorage.getItem('auto_tasks_channels');
    let current = saved ? JSON.parse(saved) : [];

    const exists = current.find(item => item.id === channel.id);
    let targetCh = exists;

    if (!exists) {
      targetCh = {
        id: channel.id,
        name: channel.name,
        viewsEnabled: false,
        reactionsEnabled: false,
        viewsConfig: { reward: 200, count: 10, audience: 'no_limit', selectedLangs: ['en', 'uk'] },
        reactionsConfig: { reactionType: 'any', selectedEmoji: '🔥', reward: 200, count: 10, audience: 'no_limit', selectedLangs: ['en', 'uk'] }
      };
      current.push(targetCh);
      localStorage.setItem('auto_tasks_channels', JSON.stringify(current));
    }

    navigate('/auto-tasks/config', { state: { channel: targetCh } });
  };

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 relative h-10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-0"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-semibold text-white absolute left-1/2 -translate-x-1/2">
            Додати канал
          </h1>
        </div>

        {/* Selected Channel Card */}
        <div
          className="gradient-border-card rounded-xl p-3 flex items-center justify-between border border-white/5 mb-3"
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className="flex items-center gap-3.5">
            {channel.type === 'channel' ? (
              <img src='/assets/images/vector15.png' alt='channel' className='w-[44px]' />
            ) : (
              <img src='/assets/images/vector16.png' alt='group' className='w-[44px]' />
            )}
            <div>
              <h3 className="font-semibold text-sm text-white leading-tight">{channel.name}</h3>
              <p className="text-white/45 text-[11px] mt-1">{channel.username}</p>
            </div>
          </div>
        </div>

        {/* Amber Alert box */}
        <div
          className="rounded-xl items-start p-4 flex gap-3 border border-[#FFC000]/5"
          style={{ background: 'rgba(234,179,8,0.06)' }}
        >
          <img src='/assets/images/svg/Danger Triangle.svg' alt='Danger Triangle' />
          <div className="">
            <p className="text-[11px] text-[#FFC000] leading-relaxed font-semibold">
              Бот @prgram_bot не додано до цього каналу
            </p>
            <p className="text-[11px] text-[#FFF0C4] leading-relaxed">
              Додайте бота як адміністратора каналу, після чого поверніться та спробуйте знову.
            </p>
          </div>
        </div>
        <div className="pt-4">
          <button
            onClick={handleAddBotClick}
            className="w-full h-[44px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-[0_4px_12px_rgba(135,173,240,0.2)]"
          >
            <img src='/assets/images/svg/AddCircle.svg' alt='AddCircle' />
            Додати бота до каналу
          </button>
        </div>

        {/* Action Button */}
      </div>
    </Layout>
  );
};

export default AutoTasksBotWarning;
