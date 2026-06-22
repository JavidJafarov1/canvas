import React, { useState } from 'react';
import { ChevronLeft, Star, Layers, Link2, Globe, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PremiumCheck = () => {
  const navigate = useNavigate();

  // Local state for selecting options
  const [selectedChannel, setSelectedChannel] = useState(1); // Default selected is Item 1

  const activeChannels = [
    { id: 1, title: 'Crypto Signals VIP', subtitle: '-1001987654321', icon: Link2 },
    { id: 2, title: 'Tech News UA', subtitle: '@technews_ua', icon: Globe },
    { id: 3, title: 'NFT Community', subtitle: '-1001987654321', icon: Link2 },
    { id: 4, title: 'Premium Content', subtitle: '-1001987654321', icon: Crown },
    { id: 5, title: 'Crypto Signals VIP', subtitle: '-1001987654321', icon: Link2 },
  ];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Star Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top Star Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <Star size={20} className='text-[#87ADF0]' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Перевірка для Premium
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-2 leading-relaxed'>
            Механізм перевірки підписки буде діяти виключно для учасників з Telegram Premium. Натисніть на потрібний канал/чат/бот, щоб увімкнути або вимкнути.
          </p>
        </div>

        {/* Active List Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[20px] p-4 flex flex-col gap-3.5' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Card Header Title */}
            <div className='flex items-center gap-2.5 mb-1'>
              <Layers size={18} className='text-[#87ADF0]' />
              <span className='text-sm font-semibold text-white'>Активні ОП (5)</span>
            </div>

            {/* Channels List */}
            <div className='flex flex-col gap-1.5'>
              {activeChannels.map((chan) => {
                const IconComp = chan.icon;
                const isActive = selectedChannel === chan.id;
                return (
                  <div
                    key={chan.id}
                    onClick={() => setSelectedChannel(chan.id)}
                    className='py-3 px-2 flex items-center justify-between rounded-xl hover:bg-white/[0.01] cursor-pointer transition-colors'
                  >
                    <div className='flex items-center gap-3.5'>
                      {/* Icon circles */}
                      <div className='w-[40px] h-[40px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
                        <IconComp size={18} className='text-[#87ADF0]' />
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-sm font-semibold text-white leading-tight'>{chan.title}</span>
                        <span className='text-[#8A8D9F] text-[11px] mt-0.5'>{chan.subtitle}</span>
                      </div>
                    </div>

                    {/* Radio Button */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'
                    }`}>
                      {isActive && <div className='w-2 h-2 rounded-full bg-[#0B0E21]' />}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Check Button */}
      <div className='px-4 mt-8'>
        <button
          onClick={() => navigate(-1)}
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Перевірити
        </button>
      </div>

    </div>
  );
};

export default PremiumCheck;
