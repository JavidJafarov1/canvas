import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Gift, Ban, Clock, Palette, Star, UserCheck, Flag, Eye, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Premium = () => {
  const navigate = useNavigate();
  
  // Local state for toggles or active indicators
  const [restrictionActive, setRestrictionActive] = useState(true);
  const [delayedRequestActive, setDelayedRequestActive] = useState(true);

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col pb-8 overflow-y-auto hide-scrollbar'>
      
      {/* Top Header Row with Back Button and Crown Icon */}
      <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
        >
          <ChevronLeft size={24} />
        </button>

        {/* Top Crown Icon with concentric circles */}
        <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
          {/* Glowing outer circle */}
          <div className='absolute w-[76px] h-[76px] rounded-full border border-[#EAB308]/10 flex items-center justify-center'
               style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(234, 179, 8, 0.08) 0%, rgba(234, 179, 8, 0) 100%)' }} />
          {/* Middle border circle */}
          <div className='absolute w-[60px] h-[60px] rounded-full border border-[#EAB308]/20 flex items-center justify-center' />
          {/* Inner solid circle with shadow */}
          <div className='w-[48px] h-[48px] rounded-full bg-[#201D1A] border border-[#EAB308]/30 flex items-center justify-center shadow-[0_0_15px_rgba(234,179,8,0.25)] z-10'>
            <Crown size={20} className='text-[#EAB308] fill-[#EAB308]/10' />
          </div>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className='flex flex-col items-center px-6 mb-5'>
        <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
          PR GRAM Giveaway
        </h1>
        <div className='flex items-center gap-1.5 justify-center'>
          <div className='w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]' />
          <p className='text-[#8A8D9F] text-xs font-semibold'>
            Активна до 18.05.2026
          </p>
        </div>
      </div>

      {/* Action Buttons (Extend / Gift) */}
      <div className='flex gap-3 px-4 mb-8'>
        {/* Extend Button (Yellow themed) */}
        <button
          className='flex-1 h-[44px] rounded-full border border-[#EAB308]/20 flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 transition-all font-bold text-sm text-[#EAB308]'
          style={{ background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.03) 100%)' }}
        >
          <Zap size={16} className='fill-[#EAB308]/20' />
          <span>Продовжити</span>
        </button>

        {/* Gift Button (Blue themed) */}
        <button
          className='flex-1 h-[44px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 transition-all font-bold text-sm text-[#87ADF0]'
          style={{ background: 'linear-gradient(135deg, rgba(135, 173, 240, 0.15) 0%, rgba(135, 173, 240, 0.03) 100%)' }}
        >
          <Gift size={16} className='fill-[#87ADF0]/20' />
          <span>Подарувати</span>
        </button>
      </div>

      {/* Settings List */}
      <div className='px-4 flex flex-col gap-3.5'>
        
        {/* Item 1: Обмеження за непідписку */}
        <div 
          onClick={() => navigate('/non-subscription-restriction')}
          className='gradient-border-card w-full rounded-[18px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
              <Ban size={18} className='text-[#87ADF0]' />
            </div>
            <span className='text-[14px] font-semibold text-white'>Обмеження за непідписку</span>
          </div>
          <div className='flex items-center gap-2 shrink-0'>
            {restrictionActive && (
              <div className='w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]' />
            )}
            <ChevronRight size={18} className='text-white/30' />
          </div>
        </div>

        {/* Item 2: Відкладений запит підписки */}
        <div 
          onClick={() => navigate('/delayed-subscription')}
          className='gradient-border-card w-full rounded-[18px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
              <Clock size={18} className='text-[#87ADF0]' />
            </div>
            <span className='text-[14px] font-semibold text-white'>Відкладений запит підписки</span>
          </div>
          <div className='flex items-center gap-2 shrink-0'>
            {delayedRequestActive && (
              <div className='w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]' />
            )}
            <ChevronRight size={18} className='text-white/30' />
          </div>
        </div>

        {/* Item 3: Кастомізація кнопок */}
        <div 
          onClick={() => navigate('/button-customization')}
          className='gradient-border-card w-full rounded-[18px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
              <Palette size={18} className='text-[#87ADF0]' />
            </div>
            <span className='text-[14px] font-semibold text-white'>Кастомізація кнопок</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 4: Перевірка для Premium */}
        <div 
          onClick={() => navigate('/premium-check')}
          className='gradient-border-card w-full rounded-[18px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
              <Star size={18} className='text-[#87ADF0]' />
            </div>
            <span className='text-[14px] font-semibold text-white'>Перевірка для Premium</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 5: Білий список */}
        <div 
          onClick={() => navigate('/whitelist')}
          className='gradient-border-card w-full rounded-[18px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
              <UserCheck size={18} className='text-[#87ADF0]' />
            </div>
            <span className='text-[14px] font-semibold text-white'>Білий список</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 6: Промо-текст */}
        <div 
          onClick={() => navigate('/promo-text')}
          className='gradient-border-card w-full rounded-[18px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
              <Flag size={18} className='text-[#87ADF0]' />
            </div>
            <span className='text-[14px] font-semibold text-white'>Промо-текст</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 7: Перевірка при вході */}
        <div 
          onClick={() => navigate('/entry-check')}
          className='gradient-border-card w-full rounded-[18px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
              <Eye size={18} className='text-[#87ADF0]' />
            </div>
            <span className='text-[14px] font-semibold text-white'>Перевірка при вході</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

      </div>

    </div>
  );
};

export default Premium;
