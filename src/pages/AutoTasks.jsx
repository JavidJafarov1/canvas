import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const DEFAULT_CHANNELS = [
  {
    id: 'pr_gram_news',
    name: 'PR GRAM | NEWS',
    viewsEnabled: true,
    reactionsEnabled: false,
    viewsConfig: { reward: 200, count: 10, audience: 'no_limit', selectedLangs: ['en', 'uk'] },
    reactionsConfig: { reactionType: 'any', selectedEmoji: '🔥', reward: 200, count: 10, audience: 'no_limit', selectedLangs: ['en', 'uk'] }
  }
];

const AutoTasks = () => {
  const navigate = useNavigate();
  const [channels, setChannels] = useState(DEFAULT_CHANNELS);


  const handleChannelClick = (channel) => {
    navigate('/auto-tasks/config', { state: { channel } });
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col font-sans text-white relative min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between relative p-[22px_15px] border-b border-b-white/10 h-[64px]">
          <button
            onClick={() => navigate('/create-task')}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-4"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-semibold text-white absolute left-1/2 -translate-x-1/2">
            Авто-завдання
          </h1>
        </div>
        <div className='p-4'>
          {/* Info Box Banner */}
          <div
            className="rounded-xl p-3 flex items-start gap-3 mb-4 border border-white/5 bg-[#87ADF0]/10"
          >
            <img src='/assets/images/svg/lightbulb.svg' alt='lightbulb' />
            <div className="flex flex-col gap-2">
              <p className="text-xs text-[#D7E6FF] leading-relaxed font-medium">
                Налаштуйте автоматичне створення завдань для ваших каналів. Кожен новий пост у каналі автоматично створить завдання з вказаними параметрами.
              </p>
              <p className="text-xs text-[#D7E6FF] leading-relaxed font-medium">
                Ви можете налаштувати окремо перегляди та реакції для кожного каналу.
              </p>
            </div>
          </div>

          {/* Add Channel Button */}
          <button
            onClick={() => navigate('/auto-tasks/add')}
            className="gradient-border-card rounded-[12px] p-3 flex items-center gap-[13px] mb-3 transition-all hover:brightness-115 active:scale-[0.99] cursor-pointer text-left w-full"
            style={{ background: 'linear-gradient(176deg, rgba(0, 255, 149, 0.2) 0%, rgba(0, 255, 149, 0) 78.11%), linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <img src='/assets/images/vector41.png' alt='vector41' className='w-11' />
            <span className="font-semibold text-sm text-[#2EE59D]">Додати канал</span>
          </button>

          {/* Configured Channels List */}
          <div className="flex flex-col gap-3">
            {channels.map((ch) => (
              <div
                key={ch.id}
                onClick={() => handleChannelClick(ch)}
                className="gradient-border-card rounded-[12px] p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition-all border border-white/5 h-[68px]"
                style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67 %, rgba(255, 255, 255, 0.077) 98 %);' }}
              >
                <div className="flex items-center gap-[13px]">
                  <img src='/assets/images/vector10.png' alt='vector10' className="w-11 h-11" />
                  <div>
                    <h3 className="font-semibold text-sm text-white leading-tight">{ch.name}</h3>
                    <div className="flex items-center gap-3.5 mt-1.5">
                      <span className="text-[11px] font-medium flex items-center gap-1">
                        🔥 <span className={ch.viewsEnabled ? 'text-[#2EE59D]' : 'text-white/30'}>
                          {ch.viewsEnabled ? 'Увімк.' : 'Вимк.'}
                        </span>
                      </span>
                      <span className="text-[11px] font-medium flex items-center gap-1">
                        😂 <span className={ch.reactionsEnabled ? 'text-[#2EE59D]' : 'text-white/30'}>
                          {ch.reactionsEnabled ? 'Увімк.' : 'Вимк.'}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {(ch.viewsEnabled || ch.reactionsEnabled) && (
                    <img src='/assets/images/svg/Play1.svg' alt='play' className='w-4' />
                  )}
                  <ChevronRight size={18} className="text-white/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AutoTasks;
