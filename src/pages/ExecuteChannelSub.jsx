import { useState } from 'react';
import { ChevronLeft, MoreVertical, Ban, Flag, Check, X, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const INITIAL_CHANNELS = [
  {
    id: 'ch_1',
    name: '@crypto_signals',
    reward: 750,
    status: 'idle', // 'idle' | 'checking' | 'completed' | 'error'
    bannerText: '',
  },
  {
    id: 'ch_2',
    name: '@tech_news_ua',
    reward: 750,
    status: 'completed',
    bannerText: 'Підписку підтверджено! +2000 GRAM нараховано.',
  },
  {
    id: 'ch_3',
    name: '@trading_hub',
    reward: 750,
    status: 'error',
    bannerText: 'Ви не підписані на канал. Підпишіться та спробуйте знову.',
  },
  {
    id: 'ch_4',
    name: '@crypto_signals',
    reward: 750,
    status: 'idle',
    bannerText: '',
  },
];

const ExecuteChannelSub = () => {
  const navigate = useNavigate();
  const [channels, setChannels] = useState(INITIAL_CHANNELS);
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Toggle dots dropdown menu
  const handleDotsClick = (e, id) => {
    e.stopPropagation();
    if (activeMenuId === id) {
      setActiveMenuId(null);
    } else {
      setActiveMenuId(id);
    }
  };

  // Close dropdown menu if open
  const closeMenu = () => {
    setActiveMenuId(null);
  };

  // Simulate verification check
  const handleVerify = (id) => {
    setChannels((prev) =>
      prev.map((ch) => {
        if (ch.id === id) {
          // Toggle between states to make it interactive and fun
          if (ch.status === 'idle') {
            return {
              ...ch,
              status: 'completed',
              bannerText: 'Підписку підтверджено! +2000 GRAM нараховано.',
            };
          } else if (ch.status === 'error') {
            return {
              ...ch,
              status: 'completed',
              bannerText: 'Підписку підтверджено! +2000 GRAM нараховано.',
            };
          }
        }
        return ch;
      })
    );
  };

  // Skip task action (remove it from display list)
  const handleSkip = (id) => {
    setChannels((prev) => prev.filter((ch) => ch.id !== id));
    setActiveMenuId(null);
  };

  // Report task action
  const handleReport = (id) => {
    setChannels((prev) =>
      prev.map((ch) => {
        if (ch.id === id) {
          return {
            ...ch,
            status: 'error',
            bannerText: 'Скаргу надіслано. Завдання відправлено на перевірку.',
          };
        }
        return ch;
      })
    );
    setActiveMenuId(null);
  };

  return (
    <Layout showNavbar={false}>
      <div
        className="flex flex-col font-sans text-white relative min-h-screen bg-[#090B19]"
        onClick={closeMenu}
      >
        {/* Header */}
        <div className="flex flex-col items-center pt-8 pb-5 px-5 relative border-b border-white/10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-5 top-8"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Icon Circle */}
          <div
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img src="/assets/images/vector10.png" alt="sub" className="w-[30px]" />
          </div>

          <h1 className="text-[22px] font-bold text-white leading-tight text-center">
            Підписатись на канал
          </h1>
          <p className="text-sm text-white/40 mt-1 text-center font-medium">
            (605)
          </p>
        </div>

        {/* Warning Alert Box */}
        <div className="px-4 pt-4">
          <div
            className="rounded-[14px] p-3.5 flex gap-3 border border-[#EAB308]/20"
            style={{ background: 'rgba(255, 192, 0, 0.04)' }}
          >
            <AlertTriangle className="w-5 h-5 text-[#EAB308] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#FFF0C4] leading-normal font-medium">
              Відписка від каналів раніше ніж через 7 днів заборонена. Порушення призведе до
              блокування на виконання завдань та анулювання зароблених коштів.
            </p>
          </div>
        </div>

        {/* Tasks List */}
        <div className="px-4 py-4 flex flex-col gap-3">
          {channels.map((ch) => (
            <div key={ch.id} className="flex flex-col gap-2 relative">
              {/* Main Card */}
              <div
                className="gradient-border-card rounded-[16px] p-3 flex items-center justify-between border border-white/[0.06] relative"
                style={{
                  background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)',
                }}
              >
                {/* Left Side */}
                <div className="flex items-center gap-3.5">
                  <img
                    src="/assets/images/vector10.png"
                    alt="channel avatar"
                    className="w-[44px] shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-sm text-white leading-tight">
                      {ch.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1.5">
                      <img src="/assets/images/vector.png" alt="coin" className="w-3.5 h-3.5" />
                      <span className="text-[#FFC000] text-xs font-bold leading-none">
                        {ch.reward}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-1.5">
                  {ch.status === 'completed' ? (
                    <button className="px-4 h-[32px] rounded-full font-bold text-xs flex items-center justify-center transition-all bg-[#102A22] text-[#2EE59D] border border-[#2EE59D]/20 cursor-default">
                      Виконано
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerify(ch.id)}
                      className="px-4 h-[32px] rounded-full font-bold text-xs flex items-center justify-center transition-all bg-[#242F55] hover:bg-[#2A3765] text-[#87ADF0] border border-[#87ADF0]/20 cursor-pointer"
                    >
                      Перевірити
                    </button>
                  )}

                  {/* Three Dots Button */}
                  <button
                    onClick={(e) => handleDotsClick(e, ch.id)}
                    className="text-white/35 hover:text-white cursor-pointer p-1"
                  >
                    <MoreVertical size={20} />
                  </button>
                </div>

                {/* Dropdown Menu Overlay */}
                {activeMenuId === ch.id && (
                  <div
                    className="absolute right-3 top-[52px] w-[140px] bg-[#161829] border border-white/10 rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.5)] py-1.5 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => handleSkip(ch.id)}
                      className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-white/5 text-xs text-white/80 transition-colors"
                    >
                      <Ban size={14} className="text-white/40" />
                      <span>Пропустити</span>
                    </button>
                    <div className="border-b border-white/[0.06] my-1" />
                    <button
                      onClick={() => handleReport(ch.id)}
                      className="flex items-center gap-2 px-3 py-2 w-full text-left hover:bg-white/5 text-xs text-[#FF4973] font-medium transition-colors"
                    >
                      <Flag size={14} className="text-[#FF4973]/70" />
                      <span>Скаржитись</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Status Conditional Banner */}
              {ch.status === 'completed' && ch.bannerText && (
                <div
                  className="rounded-[14px] p-2 px-3 flex items-center gap-2.5 border border-[#2EE59D]/15"
                  style={{ background: 'rgba(46, 229, 157, 0.06)' }}
                >
                  <div className="w-[15px] h-[15px] rounded-full bg-[#2EE59D] flex items-center justify-center text-[#0B0E21]">
                    <Check className="w-2.5 h-2.5 stroke-[4]" />
                  </div>
                  <p className="text-[11px] text-[#2EE59D] font-medium leading-none">
                    {ch.bannerText}
                  </p>
                </div>
              )}

              {ch.status === 'error' && ch.bannerText && (
                <div
                  className="rounded-[14px] p-2.5 px-3 flex items-center gap-2.5 border border-[#FF4973]/15"
                  style={{ background: 'rgba(255, 73, 115, 0.06)' }}
                >
                  <div className="w-[15px] h-[15px] rounded-full bg-[#FF4973] flex items-center justify-center text-white">
                    <X className="w-2.5 h-2.5 stroke-[4]" />
                  </div>
                  <p className="text-[11px] text-[#FFB7C8] font-medium leading-normal">
                    {ch.bannerText}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ExecuteChannelSub;
