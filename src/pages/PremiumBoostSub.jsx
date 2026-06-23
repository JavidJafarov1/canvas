import React, { useState } from 'react';
import { ChevronLeft, X, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const StepDot = ({ stepNum, status }) => {
  if (status === 'done') {
    return (
      <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === 'active') {
    return (
      <div
        className="w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0"
        style={{ boxShadow: '0 0 8px rgba(135,173,240,0.3)' }}
      >
        {stepNum}
      </div>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
    </div>
  );
};

const PremiumBoostSub = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isChannelSelected, setIsChannelSelected] = useState(false);

  const handleSelect = () => {
    if (username.trim()) {
      setIsChannelSelected(true);
    }
  };

  const handleRemove = () => {
    setIsChannelSelected(false);
    setUsername('');
  };

  return (
    <Layout showNavbar={false}>
      <div className='flex flex-col font-sans text-white relative min-h-screen'>
        <div className='p-[10px_15px_22px_15px] border-b border-b-white/10'>
          <div className='flex items-center justify-center mb-4 relative h-[50px]'>
            <button
              onClick={() => navigate(-1)}
              className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-0"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Lightning Bolt Icon Container with Glow */}
            <div className="w-[50px] h-[50px] rounded-full bg-[#182347] border border-[#3C64BA]/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(58,100,186,0.3)]">
              <Zap className="w-5 h-5 text-[#87ADF0] fill-[#87ADF0]/20" />
            </div>
          </div>

          {/* Title & Subtitle */}
          <h1 className='text-lg font-bold text-white text-center mb-3'>Ресурс</h1>

          {/* Steps Progress Indicator - 4 Steps */}
          <div className='flex items-center justify-center gap-[5px] w-full max-w-[220px] mx-auto'>
            <StepDot stepNum={1} status="active" />
            <div className='h-[1px] flex-1 rounded-full bg-white/10' />
            <StepDot stepNum={2} status="inactive" />
            <div className='h-[1px] flex-1 rounded-full bg-white/10' />
            <StepDot stepNum={3} status="inactive" />
            <div className='h-[1px] flex-1 rounded-full bg-white/10' />
            <StepDot stepNum={4} status="inactive" />
          </div>
        </div>

        {/* Main Content Box Card */}
        <div className='pt-4 px-[22px]'>
          <div className='gradient-border-card rounded-[24px] p-4 flex flex-col gap-4' style={{ background: '#131524' }}>
            <div className='flex flex-col gap-3'>
              <label className='text-xs text-[#8A8D9F] font-medium px-1'>
                Оберіть канал, який хочете рекламувати
              </label>

              <div className='flex gap-2.5 w-full'>
                <input
                  type='text'
                  placeholder='@username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isChannelSelected}
                  className='flex-1 h-[44px] rounded-full bg-[#0B0E21]/40 border border-white/10 px-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#87ADF0] transition-colors disabled:opacity-50'
                />
                <button
                  onClick={handleSelect}
                  disabled={isChannelSelected || !username.trim()}
                  className='w-[90px] h-[44px] rounded-full border border-white/10 hover:bg-white/5 active:scale-95 text-[#87ADF0] font-semibold text-sm flex items-center justify-center transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none'
                  style={{ background: 'linear-gradient(180deg, #202235 0%, #151624 100%)' }}
                >
                  Обрати
                </button>
              </div>
            </div>

            {/* Selected Channel State */}
            {isChannelSelected && (
              <div className='flex flex-col gap-3 animate-fadeIn'>
                <div className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
                  <div className='flex items-center gap-3'>
                    <img src='/assets/images/vector15.png' alt='vector15' className='w-[44px]' />
                    <div>
                      <h4 className='font-semibold text-sm text-white'>Crypto Signals VIP</h4>
                      <p className='text-white/40 text-xs mt-0.5'>12.5K підписників</p>
                    </div>
                  </div>
                  <button
                    onClick={handleRemove}
                    className='p-1 hover:bg-white/5 rounded-full transition-colors cursor-pointer text-white/40 hover:text-white'
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Bot Administrator Warning Box */}
                <div className='bg-[#FF4973]/10 border border-[#FF4973]/5 rounded-full py-2.5 px-4 flex items-center gap-2.5 text-[11px] leading-relaxed'>
                  <img src='/assets/images/svg/xmark-octagon.svg' alt='xmark-octagon' />
                  <span className='text-[#FFB7C8] font-medium'>
                    Bot is not added to this channel/chat. Add @prgram_bot as administrator.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className='mt-auto px-[18px_32px] pb-8'>
          <button
            onClick={() => {
              navigate('/premium-boost/duration', { state: { taskType: 'premium_boost', channel: username || '@crypto_signals_ua' } });
            }}
            disabled={!isChannelSelected}
            className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_12px_rgba(135,173,240,0.2)] disabled:opacity-40 disabled:pointer-events-none'
          >
            Продовжити
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default PremiumBoostSub;
