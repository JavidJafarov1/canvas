import React, { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const BOT_ICON = '/assets/images/vector28.png';

const StepDot = ({ active, done }) => {
  if (done) return (
    <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center shrink-0">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="#0B0E21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
  if (active) return (
    <div
      className="w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0"
      style={{ boxShadow: '0 0 8px rgba(135,173,240,0.3)' }}
    >
      1
    </div>
  );
  return (
    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
    </div>
  );
};

const BotSetupPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [selectedBot, setSelectedBot] = useState(null);
  const [refLink, setRefLink] = useState('');

  const handleObrat = () => {
    if (username.trim()) {
      navigate('/select-bot-page');
    }
  };

  const handleRemove = () => {
    setSelectedBot(null);
    setUsername('');
  };

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">

        {/* Header + Icon */}
        <div className='flex items-center justify-center mb-4'>
          <div className="flex items-center justify-between absolute left-5">
            <button onClick={() => navigate(-1)} className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer">
              <ChevronLeft size={16} />
            </button>
            <div className="w-6" />
          </div>
          <img src={BOT_ICON} alt="bot-icon" className="w-[60px] h-[60px]" />
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold text-white text-center mb-3">Бот</h1>

        {/* 4-Step Progress — Step 1 active */}
        <div className="flex items-center justify-center gap-[5px] mb-6 w-full max-w-[220px] mx-auto">
          <StepDot active />
          <div className="h-[1px] flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <StepDot />
          <div className="h-[1px] flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <StepDot />
          <div className="h-[1px] flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <StepDot />
        </div>

        {/* Main Card */}
        <div
          className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3 mb-3"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
        >
          <p className="text-xs text-[#8A8D9F]">Оберіть бот, який хочете рекламувати</p>

          {/* Input + Обрати */}
          <div className="flex gap-2.5 w-full">
            <div
              className="flex-1 h-[44px] rounded-full flex items-center px-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                type="text"
                placeholder="@username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={!!selectedBot}
                className="bg-transparent text-sm text-white placeholder-white/25 w-full focus:outline-none disabled:opacity-50"
              />
            </div>
            <button
              onClick={handleObrat}
              disabled={!!selectedBot || !username.trim()}
              className="h-[44px] px-5 rounded-full text-sm font-semibold text-[#87ADF0] transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)',
                border: '1px solid rgba(135,173,240,0.25)',
              }}
            >
              Обрати
            </button>
          </div>

          {/* Selected bot row */}
          {selectedBot && (
            <div
              className="gradient-border-card rounded-[16px] p-3 flex items-center justify-between"
              style={{ background: 'linear-gradient(86.96deg, rgba(255,255,255,0.055) 2.67%, rgba(255,255,255,0.077) 98%)' }}
            >
              <div className="flex items-center gap-3">
                <img src={selectedBot.icon} alt="bot" className="w-[44px]" />
                <div>
                  <p className="text-sm font-semibold text-white">{selectedBot.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{selectedBot.subscribers} підписників</p>
                </div>
              </div>
              <button onClick={handleRemove} className="text-white/40 hover:text-white transition-colors cursor-pointer p-1">
                <X size={16} />
              </button>
            </div>
          )}

          {/* Referral link section — visible after bot selected */}
          {selectedBot && (
            <>
              <p className="text-xs text-[#8A8D9F] mt-1">
                Реферальне посилання <span className="text-white/30">(необов'язково)</span>
              </p>
              <div
                className="flex items-center rounded-full px-4 h-[44px]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <input
                  type="url"
                  placeholder="https://t.me/bot_name?start=ref123"
                  value={refLink}
                  onChange={(e) => setRefLink(e.target.value)}
                  className="bg-transparent text-sm text-white placeholder-white/25 w-full focus:outline-none"
                />
              </div>

              {/* Tip */}
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2.5"
                style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(255,192,0,0.1)' }}
              >
                <img src="/assets/images/svg/lightbulb-simple.svg" alt="tip" />
                <p className="text-[11px] text-[#FFF0C4]">
                  Користувач перейде за цим посиланням замість @my_earn_bot
                </p>
              </div>
            </>
          )}
        </div>

        {/* Continue Button */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => navigate('/bot-task-type')}
            className="w-full h-[44px] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)',
              color: '#0B0E21',
              boxShadow: '0 4px 16px rgba(135,173,240,0.25)',
            }}
          >
            Продовжити
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default BotSetupPage;
