import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, Gift, Ban, Clock, Palette, Star, UserCheck, Flag, Eye, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PremiumExtendModal from '../components/modals/PremiumExtendModal';
import PromoCodesModal from '../components/modals/PromoCodesModal';

const Premium = () => {
  const navigate = useNavigate();
  
  // Local state for toggles or active indicators
  const [restrictionActive, setRestrictionActive] = useState(true);
  const [delayedRequestActive, setDelayedRequestActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPromoModalOpen, setIsPromoModalOpen] = useState(false);

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col pb-8 overflow-y-auto hide-scrollbar'>
      
      {/* Top Header Row with Back Button and Crown Icon */}
      <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
        >
          <ChevronLeft size={24} />
        </button>

          <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center  z-10'>
            <img src="assets/images/crownLine.png" alt="crown" />
          </div>
      </div>

      {/* Title & Subtitle */}
      <div className='flex flex-col items-center px-6 mb-3'>
        <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
          PR GRAM Giveaway
        </h1>
        <div className='flex items-center gap-1.5 justify-center'>
          <div className='w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]' />
          <p className='text-[#ffffff]/40 text-[14px]'>
            Активна до 18.05.2026
          </p>
        </div>
      </div>

      {/* Action Buttons (Extend / Gift) */}
      <div className='flex gap-3 px-4 mb-[34px]'>
        {/* Extend Button (Yellow themed) */}
        <button
          onClick={() => setIsModalOpen(true)}
          className='flex-1 h-[44px] rounded-full gradient-border-card flex items-center justify-center gap-2 cursor-pointer font-medium text-sm text-[#FFC000]'
          style={{ background: 'linear-gradient(128.85deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0.04) 53.26%, rgba(255, 192, 0, 0.2) 100%)' }}
        >
          <img src="assets/images/svg/Bolt.svg" alt="zap" />
          <span>Продовжити</span>
        </button>

        {/* Gift Button (Blue themed) */}
        <button
          onClick={() => setIsPromoModalOpen(true)}
          className='flex-1 h-[44px] rounded-full gradient-border-card flex items-center justify-center gap-2 cursor-pointer font-medium text-sm text-[#87ADF0]'
          style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
        >
          <img src="assets/images/svg/gift.svg" alt="gift" />
          <span>Подарувати</span>
        </button>
      </div>

      {/* Settings List */}
      <div className='px-4 flex flex-col gap-2'>
        
        {/* Item 1: Обмеження за непідписку */}
        <div 
          onClick={() => navigate('/non-subscription-restriction')}
          className='gradient-border-card w-full rounded-[12px] p-[10px_12px] flex items-center justify-between cursor-pointer'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/stop.png" alt="ban" />
            </div>
            <span className='text-[14px] font-medium text-white'>Обмеження за непідписку</span>
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
          className='gradient-border-card w-full rounded-[12px] p-[10px_12px] flex items-center justify-between cursor-pointer'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/clock.png" alt="clock" />
            </div>
            <span className='text-[14px] font-medium text-white'>Відкладений запит підписки</span>
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
          className='gradient-border-card w-full rounded-[12px] p-[10px_12px] flex items-center justify-between cursor-pointer'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/edit.png" alt="edit" />
            </div>
            <span className='text-[14px] font-medium text-white'>Кастомізація кнопок</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 4: Перевірка для Premium */}
        <div 
          onClick={() => navigate('/premium-check')}
          className='gradient-border-card w-full rounded-[12px] p-[10px_12px] flex items-center justify-between cursor-pointer'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/star.png" alt="star" />
            </div>
            <span className='text-[14px] font-medium text-white'>Перевірка для Premium</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 5: Білий список */}
        <div 
          onClick={() => navigate('/whitelist')}
          className='gradient-border-card w-full rounded-[12px] p-[10px_12px] flex items-center justify-between cursor-pointer'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/user.png" alt="user" />
            </div>
            <span className='text-[14px] font-medium text-white'>Білий список</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 6: Промо-текст */}
        <div 
          onClick={() => navigate('/promo-text')}
          className='gradient-border-card w-full rounded-[12px] p-[10px_12px] flex items-center justify-between cursor-pointer'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/flag.png" alt="flag" />
            </div>
            <span className='text-[14px] font-medium text-white'>Промо-текст</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

        {/* Item 7: Перевірка при вході */}
        <div 
          onClick={() => navigate('/entry-check')}
          className='gradient-border-card w-full rounded-[12px] p-[10px_12px] flex items-center justify-between cursor-pointer'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-3.5'>
            <div className='w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0'>
              <img src="assets/images/vector27.png" alt="eye" />
            </div>
            <span className='text-[14px] font-medium text-white'>Перевірка при вході</span>
          </div>
          <ChevronRight size={18} className='text-white/30 shrink-0' />
        </div>

      </div>

      <PremiumExtendModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <PromoCodesModal isOpen={isPromoModalOpen} onClose={() => setIsPromoModalOpen(false)} />
    </div>
  );
};

export default Premium;
