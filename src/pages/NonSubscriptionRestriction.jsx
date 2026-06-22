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
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top Ban Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <Ban size={20} className='text-[#87ADF0]' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Обмеження за непідписку
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-4'>
            Автоматичне покарання для користувачів, які не мають обов'язкової підписки.
          </p>
        </div>

        {/* Settings Container */}
        <div className='px-4 flex flex-col gap-4'>
          
          {/* Card 1: Toggle Enabled */}
          <div className='gradient-border-card rounded-[20px] p-4 flex flex-col gap-2.5' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2.5'>
                <Ban size={18} className='text-[#87ADF0]' />
                <span className='text-sm font-semibold text-white'>Обмеження за непідписку</span>
              </div>
              
              {/* Toggle Switch */}
              <div
                onClick={() => setEnabled(!enabled)}
                className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors ${enabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
              </div>
            </div>
            <p className='text-[#8A8D9F] text-[11px] leading-relaxed pr-6'>
              Автоматичне покарання для користувачів, які не мають обов'язкової підписки.
            </p>
          </div>

          {/* Card 2: Punishment Type */}
          <div className='gradient-border-card rounded-[20px] p-4 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            <div className='flex items-center gap-2.5'>
              <Shield size={18} className='text-[#87ADF0]' />
              <div className='flex flex-col'>
                <span className='text-sm font-semibold text-white'>Тип покарання</span>
                <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Виберіть тип покарання для користувача</span>
              </div>
            </div>

            {/* Segmented Selectors */}
            <div className='bg-[#16182C]/50 border border-white/[0.06] rounded-[14px] flex items-stretch overflow-hidden h-[44px]'>
              {[
                { id: 'Mute', label: 'Mute', icon: VolumeX },
                { id: 'Kick', label: 'Kick', icon: UserMinus },
                { id: 'Ban', label: 'Ban', icon: Ban }
              ].map((item) => {
                const IconComponent = item.icon;
                const isActive = punishmentType === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setPunishmentType(item.id)}
                    className={`flex-1 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isActive ? 'bg-[#87ADF0] text-[#0B0E21] font-semibold' : 'text-white/60 hover:bg-white/[0.02]'
                    }`}
                  >
                    <IconComponent size={16} className={isActive ? 'text-[#0B0E21]' : 'text-white/60'} />
                    <span className='text-xs'>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 3: Message Limit */}
          <div className='gradient-border-card rounded-[20px] p-4 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            <div className='flex items-center gap-2.5'>
              <MessageSquare size={18} className='text-[#87ADF0]' />
              <div className='flex flex-col'>
                <span className='text-sm font-semibold text-white'>Ліміт повідомлень</span>
                <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Встановіть кількість повідомлень до застосування обмеження.</span>
              </div>
            </div>

            {/* Limits Grid */}
            <div className='grid grid-cols-6 gap-2'>
              {limits.map((item) => {
                const isActive = messageLimit === item;
                return (
                  <button
                    key={item}
                    onClick={() => setMessageLimit(item)}
                    className={`h-[36px] rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                      isActive
                        ? 'border border-[#87ADF0] text-[#87ADF0] bg-[#87ADF0]/5 shadow-[0_0_10px_rgba(135,173,240,0.15)]'
                        : 'bg-white/[0.03] border border-transparent text-[#8A8D9F] hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 4: Punishment Duration */}
          <div className='gradient-border-card rounded-[20px] p-4 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            <div className='flex items-center gap-2.5'>
              <Clock size={18} className='text-[#87ADF0]' />
              <div className='flex flex-col'>
                <span className='text-sm font-semibold text-white'>Тривалість покарання</span>
                <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Виберіть тривалість обмеження для користувача</span>
              </div>
            </div>

            {/* Duration Input Select */}
            <div className='relative flex items-center justify-between gradient-border-card rounded-xl h-[44px] px-4 cursor-pointer hover:border-white/20 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}>
              <div className='flex items-center gap-2.5'>
                <Clock size={16} className='text-white/40 shrink-0' />
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
            <div className='bg-[#16182C]/50 border border-white/[0.06] rounded-[14px] flex items-stretch overflow-hidden h-[40px]'>
              {['Хв', 'Год', 'Дн'].map((unit) => {
                const isActive = durationUnit === unit;
                return (
                  <button
                    key={unit}
                    onClick={() => setDurationUnit(unit)}
                    className={`flex-1 flex items-center justify-center cursor-pointer transition-all text-xs font-semibold ${
                      isActive ? 'bg-[#87ADF0] text-[#0B0E21]' : 'text-[#8A8D9F] hover:bg-white/[0.02]'
                    }`}
                  >
                    {unit}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Summary Card */}
          <div className='gradient-border-card rounded-[20px] p-4 flex items-center gap-4' 
               style={{ background: 'linear-gradient(86.96deg, rgba(135, 173, 240, 0.06) 2.67%, rgba(135, 173, 240, 0.01) 98%), #131526' }}>
            <div className='w-[40px] h-[40px] rounded-full bg-[#1F2A45] border border-[#87ADF0]/20 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(135,173,240,0.1)]'>
              <Shield size={18} className='text-[#87ADF0]' />
            </div>
            <div className='flex flex-col gap-0.5 text-left'>
              <h4 className='text-xs font-bold text-[#87ADF0] uppercase tracking-wider'>
                Покарання: <span className='text-white capitalize'>{punishmentType}</span>
              </h4>
              <p className='text-[#8A8D9F] text-[11px] leading-tight mt-0.5'>
                • Ліміт повідомлень: {messageLimit === 0 ? 'без ліміту' : `${messageLimit}`}
              </p>
              <p className='text-[#8A8D9F] text-[11px] leading-tight'>
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
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Зберегти
        </button>
      </div>

    </div>
  );
};

export default NonSubscriptionRestriction;
