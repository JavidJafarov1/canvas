import React, { useState } from 'react';
import { ChevronLeft, Ban, Shield, MessageSquare, Clock, VolumeX, UserMinus, ChevronDown, ChevronsUpDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NonSubscriptionRestriction = () => {
  const navigate = useNavigate();

  // Local interactive state
  const [enabled, setEnabled] = useState(true);
  const [punishmentType, setPunishmentType] = useState('Ban'); // 'Mute', 'Kick', 'Ban'
  const [messageLimit, setMessageLimit] = useState(3);
  const [durationValue, setDurationValue] = useState(28);
  const [durationUnit, setDurationUnit] = useState('Хв'); // 'Хв', 'Год', 'Дн'

  const limits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Ban Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            {/* Inner solid circle with shadow */}
            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
              <img src="assets/images/stopLine.png" alt="stop" />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-[34px]'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight tracking-wide'>
            Обмеження за непідписку
          </h1>
        </div>

        {/* Settings Container */}
        <div className='px-4 flex flex-col gap-3'>
          
          {/* Card 1: Toggle Enabled */}
          <div className='gradient-border-card rounded-[12px] p-[12px_16px] flex flex-col gap-1' 
               style={{ background: 'linear-gradient(128.85deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 53.26%, rgba(255, 73, 115, 0.02) 100%), linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <span className='text-[14px] font-medium text-white'>Обмеження за непідписку</span>
              </div>
              
              {/* Toggle Switch */}
              <div
                onClick={() => setEnabled(!enabled)}
                className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors ${enabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
              </div>
            </div>
            <p className='text-[#ffffff]/40 text-[12px] leading-relaxed pr-6'>
              Автоматичне покарання для користувачів, які не мають обов'язкової підписки.
            </p>
          </div>

          {/* Card 2: Punishment Type */}
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-3' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
              <div className='flex items-center gap-2'>
                <img src="assets/images/svg/Shield Minimalistic.svg" alt="warning" />
                <span className='text-[14px] font-medium text-white'>Тип покарання</span>
              </div>
              <span className='text-[#ffffff]/40 text-[12px]'>Виберіть тип покарання для користувача</span>

            {/* Segmented Selectors */}
            <div className='gradient-border-card rounded-[12px] flex items-stretch overflow-hidden h-[44px] divide-x divide-[#ffffff]/20'>
              {[
                { id: 'Mute', label: 'Mute', icon: "assets/images/svg/Volume Cross.svg"},
                { id: 'Kick', label: 'Kick', icon: "assets/images/svg/User Minus Rounded.svg" },
                { id: 'Ban', label: 'Ban', icon: "assets/images/svg/Forbidden Circle.svg" }
              ].map((item) => {
                const isActive = punishmentType === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPunishmentType(item.id)}
                    className={`flex-1 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isActive ? 'bg-[#87ADF0] text-[#0B0E21] font-semibold' : 'text-white/60'
                    }`}
                  >
                    <img 
                      src={`/${item.icon}`} 
                      alt={item.label} 
                      className={`w-5 h-5 object-contain ${isActive ? 'brightness-0' : 'opacity-60'}`}
                    />
                    <span className='text-xs'>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 3: Message Limit */}
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-3' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
            <div className='flex items-center gap-2'>
              <img src="assets/images/svg/Chat  Square Arrow.svg" alt="Chat Square Arrow" />
              <span className='text-sm font-medium text-white'>Ліміт повідомлень</span>
            </div>
            <span className='text-[#ffffff]/40 text-[12px]'>Встановіть кількість повідомлень до застосування обмеження.</span>

            {/* Limits Grid */}
            <div className='grid grid-cols-6 gap-y-2 gap-x-1'>
              {limits.map((item) => {
                const isActive = messageLimit === item;
                return (
                  <button
                    key={item}
                    onClick={() => setMessageLimit(item)}
                    style={{ background: 'rgba(255, 255, 255, 0.05)'}}
                    className={`h-[32px] rounded-[40px] text-xs flex items-center justify-center transition-all cursor-pointer gradient-border-card ${
                      isActive
                        ? 'border border-[#87ADF0] text-[#87ADF0] bg-transparent'
                        : 'border border-transparent text-[#8A8D9F]'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 4: Punishment Duration */}
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-3' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
            <div className='flex items-center gap-2.5'>
              <img src="assets/images/svg/Alarm Add.svg" alt="Alarm Clock" />
              <span className='text-sm font-medium text-white'>Тривалість покарання</span>
            </div>
            <span className='text-[#ffffff]/40 text-[12px]'>Виберіть тривалість обмеження для користувача</span>

            {/* Duration Input Select */}
            <div className='relative flex items-center justify-between gradient-border-card rounded-full h-[44px] px-4 cursor-pointer hover:border-white/20 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}>
              <div className='flex items-center gap-2.5'>
                <img src="assets/images/svg/Clock Circle.svg" alt="Clock Circle" />
                <input 
                  type='number' 
                  value={durationValue} 
                  onChange={(e) => setDurationValue(Number(e.target.value))}
                  className='w-full bg-transparent text-sm font-semibold text-white focus:outline-none'
                />
              </div>
              <ChevronsUpDown size={15} className='opacity-40 text-white shrink-0' />
            </div>

            {/* Time units segmented selector */}
            <div className='flex gap-6 items-stretch h-[40px]'>
              {['Хв', 'Год', 'Дн'].map((unit) => {
                const isActive = durationUnit === unit;
                return (
                  <button
                    key={unit}
                    onClick={() => setDurationUnit(unit)}
                    className={`flex-1 flex items-center justify-center cursor-pointer transition-all text-xs font-semibold rounded-full ${
                      isActive 
                        ? 'bg-[#87ADF0] text-[#0B0E21]' 
                        : 'text-[#8A8D9F] bg-[#ffffff]/[0.03] border border-white/[0.08] hover:bg-[#ffffff]/[0.08]'
                    }`}
                  >
                    {unit}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Summary Card */}
          <div className='gradient-border-card rounded-[12px] p-[12px_16px] flex items-center gap-4' 
               style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.02) 100%), linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/shield.png" alt="Shield" />
            </div>
            <div className='flex flex-col gap-0.5 text-left'>
              <h4 className='text-sm font-medium text-[#87ADF0]'>
                Покарання: <span className='text-white capitalize'>{punishmentType}</span>
              </h4>
              <p className='text-[#ffffff]/40 text-[12px] leading-tight mt-0.5'>
                • Ліміт повідомлень: {messageLimit === 0 ? 'без ліміту' : `${messageLimit}`}
              </p>
              <p className='text-[#ffffff]/40 text-[12px] leading-tight'>
                • Тривалість: {durationValue} {durationUnit === 'Хв' ? 'хвилин' : durationUnit === 'Год' ? 'годин' : 'днів'}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Save Button */}
      <div className='px-4 mt-8'>
        <button
          onClick={() => navigate(-1)}
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-medium text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Зберегти
        </button>
      </div>

    </div>
  );
};

export default NonSubscriptionRestriction;
