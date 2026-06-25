import React, { useState } from 'react';
import { ChevronLeft, Star, Layers, Link2, Globe, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PremiumCheck = () => {
  const navigate = useNavigate();

  // Local state for selecting options
  const [selectedChannel, setSelectedChannel] = useState(1); // Default selected is Item 1

  const activeChannels = [
    { id: 1, title: 'Crypto Signals VIP', subtitle: '-1001987654321', icon: 'assets/images/vector15.png' },
    { id: 2, title: 'Tech News UA', subtitle: '@technews_ua', icon: 'assets/images/vector16.png' },
    { id: 3, title: 'NFT Community', subtitle: '-1001987654321', icon: 'assets/images/vector15.png' },
    { id: 4, title: 'Premium Content', subtitle: '-1001987654321', icon: 'assets/images/vector17.png' },
    { id: 5, title: 'Crypto Signals VIP', subtitle: '-1001987654321', icon: 'assets/images/vector15.png' },
  ];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Star Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
              <img src="assets/images/starLine.png" alt="starLine" />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-[34px]'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
            Перевірка для Premium
          </h1>
          <p className='text-[#ffffff]/40 text-sm text-center px-2'>
            Механізм перевірки підписки буде діяти виключно для учасників з Telegram Premium. Натисніть на потрібний канал/чат/бот, щоб увімкнути або вимкнути.
          </p>
        </div>

        {/* Active List Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-3' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}>
            
            {/* Card Header Title */}
            <div className='flex items-center gap-2'>
              <img src="assets/images/svg/Layers.svg" alt="layersLine" />
              <span className='text-sm font-medium text-white'>Активні ОП (5)</span>
            </div>

            {/* Channels List */}
            <div className='flex flex-col'>
              {activeChannels.map((chan) => {
                const IconComp = chan.icon;
                const isActive = selectedChannel === chan.id;
                return (
                  <div
                    key={chan.id}
                    onClick={() => setSelectedChannel(chan.id)}
                    className='py-3 flex items-center justify-between rounded-xl hover:bg-white/[0.01] cursor-pointer transition-colors'
                  >
                    <div className='flex items-center gap-3.5'>
                      {/* Icon circles */}
                      <div className='w-[44px] h-[44px] flex items-center justify-center shrink-0'>
                        <img src={chan.icon} alt="layersLine" />
                      </div>
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium text-white'>{chan.title}</span>
                        <span className='text-[#ffffff]/40 text-[12px] mt-0.5'>{chan.subtitle}</span>
                      </div>
                    </div>

                    {/* Radio Button */}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'
                    }`}>
                      {isActive && <div className='w-2 h-2 rounded-full bg-[#ffffff]' />}
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
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-medium text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Перевірити
        </button>
      </div>

    </div>
  );
};

export default PremiumCheck;
