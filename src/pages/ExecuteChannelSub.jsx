import { useState } from 'react';
import { ChevronLeft, MoreVertical, Ban, Flag, Check, X, AlertTriangle, Clock, Star, ExternalLink } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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

const WARNING_CHANNELS = [
  { id: 'warn_1', name: '@crypto_signals', reward: 750, count: '27.5k' },
  { id: 'warn_2', name: '@crypto_signals', reward: 750, count: '27.5k' },
  { id: 'warn_3', name: '@crypto_signals', reward: 750, count: '27.5k' },
];

const BANNED_CHANNELS = [
  { id: 'ban_1', name: '@crypto_signals', penalty: -1500, count: '27.5k' },
  { id: 'ban_2', name: '@crypto_signals', penalty: -1500, count: '27.5k' },
  { id: 'ban_3', name: '@crypto_signals', penalty: -1500, count: '27.5k' },
];

const ExecuteChannelSub = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const viewState = searchParams.get('status') || 'active'; // 'active' is default, can also be 'banned' or 'warning'
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

  // Handlers for mock recovery actions
  const handleResolveWarning = () => {
    alert("Компенсацію сплачено! Обмеження знято.");
    setSearchParams({});
  };

  const handleResolveBan = () => {
    alert("Розблокування виконано за 3 зірок! Бан знято.");
    setSearchParams({});
  };

  const handleCheckRestore = () => {
    alert("Підписки перевірено! Обмеження знято.");
    setSearchParams({});
  };

  const handleBack = () => {
    if (viewState === 'warning' || viewState === 'banned') {
      setSearchParams({});
    } else {
      navigate('/execute-tasks');
    }
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
            onClick={handleBack}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-5 top-8"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Icon Circle */}
          <img src="/assets/images/vector10.png" alt="sub" className="w-[60px] mb-3" />

          <h1 className="text-[22px] font-bold text-white leading-tight text-center">
            Підписатись на канал
          </h1>
          <p className="text-sm text-white/40 mt-1 text-center font-medium">
            (605)
          </p>
        </div>



        {/* View Layout Conditional Render */}
        {viewState === 'active' && (
          <>
            {/* Warning Alert Box */}
            <div className="px-4 pb-4">
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
            <div className="px-4 flex flex-col gap-3">
              {channels.map((ch) => (
                <div
                  key={ch.id}
                  className="gradient-border-card rounded-xl p-3.5 flex flex-col gap-3 relative"
                  style={{
                    background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)',
                  }}
                >
                  {/* Card Header Row */}
                  <div className="flex items-center justify-between w-full">
                    {/* Left Side */}
                    <div className="flex items-center gap-3">
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
                          <img src="/assets/images/vector.png" alt="coin" className="w-4 h-4" />
                          <span className="text-[#FFC000] text-xs font-medium leading-none">
                            {ch.reward}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center gap-1.5">
                      {ch.status === 'completed' ? (
                        <button
                          className="w-[97px] h-[32px] rounded-[30px] font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-[#2EE59D] border border-[#2EE59D]/25 cursor-default flex-none"
                          style={{ background: 'linear-gradient(128.85deg, rgba(0, 255, 149, 0.2) 0%, rgba(0, 255, 149, 0.04) 53.26%, rgba(0, 255, 149, 0.2) 100%)' }}
                        >
                          Виконано
                        </button>
                      ) : (
                        <button
                          onClick={() => handleVerify(ch.id)}
                          className="w-[97px] h-[32px] rounded-[30px] font-bold text-xs flex items-center justify-center gap-1.5 transition-all text-[#87ADF0] border border-[#87ADF0]/25 cursor-pointer flex-none hover:brightness-110 active:scale-[0.98]"
                          style={{ background: 'linear-gradient(135deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
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
                  </div>

                  {/* Dropdown Menu Overlay */}
                  {activeMenuId === ch.id && (
                    <div
                      className="absolute right-3 top-[52px] mt-1 w-[144px] bg-[#131629] border border-white/5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-3 z-20 flex flex-col gap-0.5"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() => handleSkip(ch.id)}
                        className="flex items-center gap-2.5 py-1 w-full text-left hover:bg-white/[0.03] rounded-xl text-sm font-medium text-white transition-all cursor-pointer"
                      >
                        <img src='/assets/images/svg/eye-slash1.svg' alt='eye-slash1' />
                        <span>Пропустити</span>
                      </button>
                      <div className="h-[1px] w-full bg-white/[0.06] my-2" />
                      <button
                        onClick={() => handleReport(ch.id)}
                        className="flex items-center gap-2.5 py-1 w-full text-left hover:bg-[#FF4973]/5 rounded-xl text-sm font-medium text-[#FF4973] transition-all cursor-pointer"
                      >
                        <img src='/assets/images/svg/Flag.svg' alt='Flag' />
                        <span>Скаржитись</span>
                      </button>
                    </div>
                  )}

                  {/* Status Conditional Banner */}
                  {ch.status === 'completed' && ch.bannerText && (
                    <div
                      className="rounded-full p-2.5 px-3 flex items-center gap-2.5 border border-[#00FF95]/5 animate-fade-in"
                      style={{ background: 'rgba(46, 229, 157, 0.06)' }}
                    >
                      <div className="w-5 h-5 rounded-full bg-[#0A9766] flex items-center justify-center text-[#00FF95] shrink-0 animate-scale-up">
                        <Check className="w-2.5 h-2.5 stroke-[4]" />
                      </div>
                      <p className="text-xs text-[#C1FFE5] font-medium leading-none">
                        {ch.bannerText}
                      </p>
                    </div>
                  )}

                  {ch.status === 'error' && ch.bannerText && (
                    <div
                      className="rounded-full p-2.5 px-3 flex items-center gap-2.5 border border-[#FF4973]/3 animate-fade-in bg-[#FF4973]/10"
                    >
                      <img src='/assets/images/svg/xmark-octagon.svg' alt='xmark-octagon' />
                      <p className="text-[11px] text-[#FFB7C8] font-medium leading-normal">
                        {ch.bannerText}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Demo Trigger Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setSearchParams({ status: 'warning' })}
                  className="flex-1 h-11 rounded-xl font-bold text-xs flex items-center justify-center border border-[#FFC000]/30 text-[#FFC000] cursor-pointer transition-all hover:bg-[#FFC000]/5 active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, rgba(255, 192, 0, 0.1) 0%, rgba(255, 192, 0, 0.02) 100%)' }}
                >
                  Попередження (Warning)
                </button>
                <button
                  onClick={() => setSearchParams({ status: 'banned' })}
                  className="flex-1 h-11 rounded-xl font-bold text-xs flex items-center justify-center border border-[#FF4973]/30 text-[#FF4973] cursor-pointer transition-all hover:bg-[#FF4973]/5 active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, rgba(255, 73, 115, 0.1) 0%, rgba(255, 73, 115, 0.02) 100%)' }}
                >
                  Блокування (Banned)
                </button>
              </div>
            </div>
          </>
        )}

        {viewState === 'warning' && (
          <>
            {/* Warning Main Card */}
            <div className="px-4 py-4">
              <div
                className="gradient-border-card rounded-xl p-4 flex flex-col items-center gap-4 relative"
                style={{
                  background: 'linear-gradient(155.83deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0.04) 32.55%, rgba(255, 192, 0, 0.02) 61.12%), #0B0E21'
                }}
              >
                {/* Warning Icon Circle */}
                <img src='/assets/images/vector46.png' alt='vector46' />

                <h2 className="text-base font-medium text-white text-center leading-none">
                  Завдання обмежено
                </h2>
                <p className="text-xs text-white/40 text-center leading-normal max-w-[280px]">
                  Виявлено відписки від груп. Відновіть підписки або поверніть монети.
                </p>

                {/* Inner progress and action container */}
                <div className="w-full rounded-xl p-3 flex flex-col gap-3 border border-white/5" style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#FFC000]" />
                      <span className="text-xs font-semibold text-white/70">Час на вирішення</span>
                    </div>
                    <span className="text-xs font-medium text-[#FFC000]">6 д 23 год 0 хв</span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-1.5">
                    {/* Glowing blur background (Rectangle 1455) */}
                    <div
                      className="absolute rounded-[40px] pointer-events-none"
                      style={{
                        width: '75%',
                        height: '6px',
                        left: '0px',
                        top: '0px',
                        background: '#FFC000',
                        filter: 'blur(9.5px)',
                      }}
                    />
                    {/* Actual progress bar */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                      <div className="h-full rounded-full bg-[#FFC000]" style={{ width: '75%' }} />
                    </div>
                  </div>

                  <p className="text-[11px] text-white/40 leading-normal">
                    Відновіть підписки або поверніть монети до закінчення часу
                  </p>

                  {/* Return Coin Action Button */}
                  <button
                    onClick={handleResolveWarning}
                    className="w-full h-11 rounded-[30px] font-semibold text-sm flex items-center justify-center gap-1.5 text-[#FFC000] border border-[#FFC000]/15 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                    style={{
                      background: 'linear-gradient(175deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0.04) 53.26%, rgba(255, 192, 0, 0.2) 100%)'
                    }}
                  >
                    <img src="/assets/images/vector.png" className="w-4 h-4" alt="coin" />
                    Повернути 2650 GRAM
                  </button>
                </div>
              </div>
            </div>

            {/* Amber Warning Box */}
            <div className="px-4 pb-4">
              <div
                className="rounded-[14px] p-[10px_12px] flex gap-3 items-center border border-[#FFC000]/5 bg-[#FFC000]/10"
              >
                <img src='/assets/images/svg/Danger Triangle.svg' alt='Danger Triangle' />
                <p className="text-[11px] text-[#FFF0C4] leading-normal font-medium">
                  Відновіть підписки або поверніть монети до закінчення таймера. Інакше буде застосовано <span className="text-[#FFC000]">бан на 7 днів</span> та заблоковано виконання завдань.
                </p>
              </div>
            </div>

            {/* Warning Channels List */}
            <div>
              <div className="flex items-center gap-2.5 px-4 mb-3">
                <div className="w-[18px] h-[18px] rounded-full bg-[#FFC000]/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FFC000]" />
                </div>
                <span className="text-[13px] font-semibold text-white">Відновити підписку</span>
                <span className="text-[13px] text-white/40 font-medium">(3)</span>
              </div>

              <div className="px-4 flex flex-col gap-3">
                {WARNING_CHANNELS.map((ch) => (
                  <div
                    key={ch.id}
                    className="gradient-border-card rounded-xl p-3 flex items-center justify-between border border-white/5"
                    style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.04) 2.67%, rgba(255, 255, 255, 0.05) 98%)' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center bg-[#FFC000]/10 border border-[#FFC000]/20 shrink-0">
                        <img src="/assets/images/vector47.png" alt="vector47" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[15px] text-white leading-tight">
                          {ch.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <img src="/assets/images/vector.png" alt="coin" className="w-3.5 h-3.5" />
                          <span className="text-[#FFC000] text-xs font-semibold leading-none">
                            -1500
                          </span>
                        </div>
                      </div>
                    </div>

                    <img src='/assets/images/svg/export.svg' alt='export' className="w-5 mr-1 text-white/40 hover:text-white cursor-pointer transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky Bottom Check Button */}
            <div className="sticky bottom-0 left-0 right-0 w-full p-4 bg-[#090B19]/90 backdrop-blur-md border-t border-white/5 z-30 flex justify-center">
              <button
                onClick={handleCheckRestore}
                className="w-full max-w-[344px] h-11 rounded-[30px] font-medium text-sm flex items-center justify-center gap-2 text-white border border-[#87ADF0]/25 hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(175deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
                }}
              >
                <div className="w-[18px] h-[18px] rounded-[4px] bg-[#87ADF0] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#0B0E21] stroke-[4]" />
                </div>
                Перевірити підписку
              </button>
            </div>
          </>
        )}

        {viewState === 'banned' && (
          <>
            {/* Banned Main Card */}
            <div className="px-4 pb-6">
              <div
                className="gradient-border-card rounded-xl p-4 flex flex-col items-center gap-4 relative"
                style={{
                  background: 'linear-gradient(155.83deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 32.55%, rgba(255, 73, 115, 0.02) 61.12%), #0B0E21'
                }}
              >
                {/* Forbidden Icon Circle */}
                <img src='/assets/images/vector44.png' alt='vector44' />

                <h2 className="text-base font-medium text-white text-center leading-none">
                  Бан на 7 днів
                </h2>
                <p className="text-xs text-white/40 text-center leading-normal max-w-[280px]">
                  Відписка від каналів - виконання завдань заблоковано. Оплатіть зірками для розблокування або очікуйте.
                </p>

                {/* Inner progress and action container */}
                <div className="w-full rounded-xl p-3 flex flex-col gap-3 border border-white/5" style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <img src='/assets/images/svg/Alarm-red.svg' alt='Alarm-red' className='w-4 h-4' />
                      <span className="text-xs font-semibold text-white/70">Бан до</span>
                    </div>
                    <span className="text-xs font-medium text-[#FF4973]">6 д 23 год 0 хв</span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-1.5">
                    {/* Glowing blur background (Rectangle 1455 - red) */}
                    <div
                      className="absolute rounded-[40px] pointer-events-none"
                      style={{
                        width: '75%',
                        height: '6px',
                        left: '0px',
                        top: '0px',
                        background: '#FF4973',
                        filter: 'blur(9.5px)',
                      }}
                    />
                    {/* Actual progress bar */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                      <div className="h-full rounded-full bg-[#FF4973]" style={{ width: '75%' }} />
                    </div>
                  </div>

                  {/* Deduction row */}
                  <div className="flex items-center justify-between w-full text-xs font-semibold">
                    <span className="text-white/40">Списано коштів:</span>
                    <div className="flex items-center gap-1">
                      <img
                        src="/assets/images/svg/vector2.svg"
                        alt="coin"
                        className="w-4 h-4"
                      />
                      <span className="text-[#FF4973]">-1500 GRAM</span>
                    </div>
                  </div>

                  {/* Unlock stars button */}
                  <button
                    onClick={handleResolveBan}
                    className="w-full h-11 rounded-full font-medium text-sm flex items-center justify-center gap-1.5 text-white bg-[#FF4973] hover:bg-[#FF5C82] active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_16px_rgba(255,73,115,0.3)]"
                  >
                    <img src='/assets/images/svg/start-white.svg' alt='start-white' className='w-5' />
                    Розблокувати за 3 зірок
                  </button>

                  <p className="text-[11px] text-white/30 text-center font-medium leading-none">
                    або очікуйте закінчення бану
                  </p>
                </div>
              </div>
            </div>

            {/* Unsubscribed Channels List */}
            <div>
              <div className="flex items-center gap-2.5 px-4 mb-3">
                <div className="w-[18px] h-[18px] rounded-full bg-[#FF4973]/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#FF4973]" />
                </div>
                <span className="text-[15px] font-semibold text-white">Відписки від каналів</span>
                <span className="text-[15px] text-white/30 font-medium">(3)</span>
              </div>

              <div className="px-4 flex flex-col gap-3">
                {BANNED_CHANNELS.map((ch) => (
                  <div
                    key={ch.id}
                    className="gradient-border-card rounded-xl p-3 flex items-center justify-between border border-white/5"
                    style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.04) 2.67%, rgba(255, 255, 255, 0.05) 98%)' }}
                  >
                    <div className="flex items-center gap-3">
                      <img src='/assets/images/vector45.png' alt='vector45' className='w-[44px]' />
                      <div>
                        <h3 className="font-semibold text-[15px] text-white leading-tight">
                          {ch.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <img
                            src="/assets/images/svg/vector2.svg"
                            alt="coin"
                            className="w-3.5 h-3.5"
                          />
                          <span className="text-[#FF4973] text-xs font-semibold leading-none">
                            {ch.penalty}
                          </span>
                          <span className="text-white/20 text-[13px]">•</span>
                          <span className="text-xs text-white/40 font-medium leading-none">
                            {ch.count}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default ExecuteChannelSub;

