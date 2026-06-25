import React, { useState } from 'react';
import { Gift, ChevronRight } from 'lucide-react';
import GiftPremiumModal from './GiftPremiumModal';

const PromoCodesModal = ({ isOpen, onClose }) => {
  const [isGiftOpen, setIsGiftOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#01061C]/70 backdrop-blur-[7px] z-50 flex items-center justify-center p-4 animate-fadeIn'>
        <div
          className='w-full max-w-[327px] rounded-[12px] p-6 flex flex-col items-center gradient-border-card justify-between relative overflow-hidden'
          style={{
            background: 'linear-gradient(155.83deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 32.55%, rgba(135, 173, 240, 0.02) 61.12%), #0B0E21'
          }}
        >
          {/* Blue Gift Circle Icon with Outer Glow */}
          <div 
            className='w-[58px] h-[58px] rounded-full flex items-center justify-center mb-[16px] relative'
          >
            {/* Box/Gift Icon */}
            <img src='/assets/images/gift.png' alt='gift' />
          </div>

          {/* Title */}
          <h2 className='text-[16px] font-medium text-white text-center leading-tight mb-1'>
            Мої промокоди
          </h2>

          {/* Subtitle */}
          <p className='text-[#ffffff]/40 text-sm text-center mb-4 max-w-[240px] leading-snug'>
            Придбані промокоди для активації Premium у будь-якій групі.
          </p>

          {/* Promo Codes List */}
          <div className='w-full flex flex-col gap-3 mb-4'>
            <div
              onClick={() => setIsGiftOpen(true)}
              className='gradient-border-card rounded-[12px] p-2.5 flex items-center justify-between cursor-pointer transition-all active:scale-[0.99]'
              style={{
                background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.03) 2.67%, rgba(255, 255, 255, 0.01) 98%)'
              }}
            >
              <div className='flex items-center gap-3.5'>
                {/* Gold Box Container */}
                <div
                  className='w-11 h-11 rounded-full flex items-center justify-center shrink-0'
                >
                  <img src='/assets/images/yellowGift.png' alt='gift' />
                </div>
                <div className='flex flex-col gap-0.5'>
                  <span className='text-xs font-medium text-white tracking-wide'>VIP-K8MN2X4Q</span>
                  <span className='text-xs'>
                    <span className='text-[#EAB308]'>Очікує</span>
                    <span className='text-[#ffffff]/40'> • 3 міс.</span>
                  </span>
                </div>
              </div>

              <ChevronRight size={18} className='text-white/30' />
            </div>
          </div>

          {/* Buy Promo Code Button (Yellow themed) */}
          <button
            onClick={() => setIsGiftOpen(true)}
            className='w-full h-[48px] rounded-full gradient-border-card flex items-center justify-center gap-2 cursor-pointer hover:brightness-110 active:scale-[0.98] transition-all font-bold text-sm text-[#EAB308] mb-3'
            style={{ background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.03) 100%)' }}
          >
            <span className='w-4 h-4 rounded-full bg-[#EAB308] text-[#0B0E21] flex items-center justify-center font-bold text-xs shrink-0'>+</span>
            <span>Купити промокод</span>
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className='w-full h-[48px] gradient-border-card text-[#87ADF0] font-medium text-sm rounded-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-all'
            style={{
              background: 'linear-gradient(180deg, #1C2340 0%, #121526 100%)',
            }}
          >
            Закрити
          </button>
        </div>
      </div>

      <GiftPremiumModal isOpen={isGiftOpen} onClose={() => setIsGiftOpen(false)} />
    </>
  );
};

export default PromoCodesModal;
