import React, { useState } from 'react';
import { ChevronLeft, Link2, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ChannelSub = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [isChannelSelected, setIsChannelSelected] = useState(false);

  const handleSelect = () => {
    if (username.trim()) {
      navigate('/select-channel-page');
    }
  };

  const handleRemove = () => {
    setIsChannelSelected(false);
    setUsername('');
  };

  return (
    <Layout showNavbar={false}>
      <div className='px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen'>
        <div className='flex items-center justify-center mb-4'>
          {/* Header */}
          <div className="flex items-center justify-between absolute left-5">
            <button
              onClick={() => navigate(-1)}
              className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="w-6" />
          </div>

          <img src="/assets/images/vector31.png" alt="vector31" className="w-[60px] h-[60px]" />
        </div>

        {/* Title & Subtitle */}
        <h1 className='text-lg font-bold text-white text-center mb-3'>Підписка на канал</h1>

        {/* Steps Progress Indicator */}
        <div className='flex items-center justify-center gap-[5px] mb-6 w-full max-w-[200px] mx-auto'>
          {/* Step 1 - Active */}
          <div className='w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0'
            style={{ boxShadow: '0 0 10px rgba(135,173,240,0.25)' }}>
            1
          </div>
          {/* Connector */}
          <div className='h-[1px] flex-1 rounded-full' style={{ background: 'linear-gradient(90deg, rgba(135,173,240,0.3) 0%, rgba(255,255,255,0.06) 100%)' }} />
          {/* Step 2 - Inactive dot */}
          <div className='w-5 h-5 rounded-full shrink-0 flex items-center justify-center'
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className='w-3 h-3 rounded-full bg-white/8' />
          </div>
          {/* Connector */}
          <div className='h-[1px] flex-1 rounded-full bg-white/06' style={{ background: 'rgba(255,255,255,0.06)' }} />
          {/* Step 3 - Inactive dot */}
          <div className='w-5 h-5 rounded-full shrink-0 flex items-center justify-center'
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className='w-3 h-3 rounded-full bg-white/8' />
          </div>
        </div>

        {/* Main Content Box Card */}
        <div className='gradient-border-card rounded-[24px] p-4 flex flex-col gap-4 mb-8' style={{ background: '#131524' }}>
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

          {/* Conditional selected state */}
          {/* {isChannelSelected && ( */}
          <div className='flex flex-col gap-3 animate-fadeIn'>
            {/* Selected Channel row info */}
            <div className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between border border-white/5' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
              <div className='flex items-center gap-3'>
                <img src='/assets/images/vector15.png' alt='vector10' className='w-[44px]' />
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
            <div className='bg-[#FF4973]/10 border border-[#FF4973]/5 rounded-[16px] py-2.5 px-4 flex items-center gap-2.5 text-[11px] leading-relaxed'>
              <img src='/assets/images/svg/xmark-octagon.svg' alt='xmark-octagon' />
              <span className='text-[#FFB7C8] font-medium'>
                Bot is not added to this channel/chat. Add @prgram_bot as administrator.
              </span>
            </div>
          </div>
          {/* )} */}
        </div>

        {/* Bottom Action Button */}
        <div className='mt-auto pt-4'>
          <button
            onClick={() => {
              if (isChannelSelected) {
                navigate('/audience-setup');
              }
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

export default ChannelSub;
