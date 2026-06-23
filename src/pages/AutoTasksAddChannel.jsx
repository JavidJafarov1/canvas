import React, { useState } from 'react';
import { ChevronLeft, Search, Lightbulb, ChevronRight, Check, Link2, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const AutoTasksAddChannel = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const channelsList = [
    {
      id: 'crypto_signals_ua',
      name: 'Crypto Signals VIP',
      username: '@crypto_signals_ua',
      subscribers: '12.5k',
      type: 'channel',
      isConfigured: true // Show active indicator/checkmark
    },
    {
      id: 'tech_news_ua_warning',
      name: 'Tech News UA',
      username: '@technews_ua',
      subscribers: '12.5k',
      type: 'group',
      isConfigured: false
    },
    {
      id: 'crypto_signals_id',
      name: 'Crypto Signals VIP',
      username: '-1001987654321',
      subscribers: '12.5k',
      type: 'channel',
      isConfigured: false
    },
    {
      id: 'tech_news_ua_2',
      name: 'Tech News UA',
      username: '@technews_ua',
      subscribers: '12.5k',
      type: 'group',
      isConfigured: false
    }
  ];

  const filteredChannels = channelsList.filter((channel) =>
    channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    channel.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChannelClick = (ch) => {
    if (ch.id === 'tech_news_ua_warning') {
      // Simulate warning outcome
      navigate('/auto-tasks/warning', { state: { channel: ch } });
    } else {
      // Simulate success channel configuration add
      const saved = localStorage.getItem('auto_tasks_channels');
      let current = saved ? JSON.parse(saved) : [];

      // Check if already in list
      const exists = current.find(item => item.id === ch.id);
      let targetCh = exists;

      if (!exists) {
        targetCh = {
          id: ch.id,
          name: ch.name,
          viewsEnabled: false,
          reactionsEnabled: false,
          viewsConfig: { reward: 200, count: 10, audience: 'no_limit', selectedLangs: ['en', 'uk'] },
          reactionsConfig: { reactionType: 'any', selectedEmoji: '🔥', reward: 200, count: 10, audience: 'no_limit', selectedLangs: ['en', 'uk'] }
        };
        current.push(targetCh);
        localStorage.setItem('auto_tasks_channels', JSON.stringify(current));
      }

      navigate('/auto-tasks/config', { state: { channel: targetCh } });
    }
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col font-sans text-white relative min-h-screen">
        <div className='border-b border-b-white/10 p-[22px_15px_12px_15px]'>
          {/* Header */}
          <div className="flex items-center justify-between mb-2 relative h-10">
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

          {/* Search Bar */}
          <div className="relative w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              placeholder="Пошук"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[48px] rounded-full bg-[#0B0E21]/40 border border-white/10 pl-11 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#87ADF0] transition-colors"
            />
          </div>
        </div>
        <div className='p-[12px_14px]'>
          {/* Info Box */}
          <div
            className="rounded-[18px] p-3 flex gap-3 mb-4 border border-white/5 items-start"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%), #131526' }}
          >
            <img src='/assets/images/svg/lightbulb.svg' alt='lightbulb' />
            <div className="flex flex-col gap-1.5">
              <p className="text-xs text-[#D7E6FF] leading-relaxed font-medium">
                Виберіть канал, для якого хочете налаштувати автоматичне створення завдань. Бот має бути адміністратором цього каналу.
              </p>
              <p className="text-xs text-[#87ADF0] leading-relaxed">
                Переконайтеся, що бот має права адміністратора.
              </p>
            </div>
          </div>

          {/* Channels List */}
          <div className="flex flex-col gap-3">
            {filteredChannels.map((channel) => (
              <div
                key={channel.id}
                onClick={() => handleChannelClick(channel)}
                className="gradient-border-card rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition-all border border-white/5"
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

                <div className="flex items-center gap-2">
                  {channel.isConfigured ? (
                    <div className="w-[18px] h-[18px] rounded-full bg-[#87ADF0] flex items-center justify-center shadow-[0_0_6px_rgba(135,173,240,0.4)]">
                      <Check className="w-3 h-3 text-[#0B0E21] stroke-[4]" />
                    </div>
                  ) : (
                    <>
                      <span className="text-sm text-white font-medium">{channel.subscribers}</span>
                      <ChevronRight size={16} className="text-[#5A5D72]" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AutoTasksAddChannel;
