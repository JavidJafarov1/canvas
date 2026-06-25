import React, { useState } from 'react';
import { Check, Copy, CheckCheck } from 'lucide-react';

const PromoCodeCreatedModal = ({ isOpen, onClose, option }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState(false);

  if (!isOpen || !option) return null;

  // Generate a mock code based on option or random, e.g., VIP-BB0TOVG6
  const promoCode = `VIP-${option.id === 1 ? 'BB0TOVG6' : option.id === 2 ? 'K8MN2X4Q' : 'TR7NW9P2'}`;
  const command = `/activate_promo ${promoCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(true);
    setTimeout(() => setCopiedCommand(false), 2000);
  };

  return (
    <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[12px] p-[32px_24px] flex flex-col items-center gradient-border-card justify-between relative overflow-hidden'
        style={{
          background: 'linear-gradient(155.83deg, rgba(0, 255, 149, 0.2) 0%, rgba(0, 255, 149, 0.04) 32.55%, rgba(0, 255, 149, 0.02) 61.12%), #0B0E21'
        }}
      >
        {/* Green Check Circle Icon with Glow */}
        <div 
          className='w-[58px] h-[58px] rounded-full flex items-center justify-center mb-[16px] relative'
        >
          <img src='/assets/images/greenCheck.png' alt='check' />
        </div>

        {/* Title */}
        <h2 className='text-[18px] font-medium text-white text-center leading-tight mb-1'>
          Промокод створено!
        </h2>

        {/* Subtitle */}
        <p className='text-[#ffffff]/40 text-sm text-center mb-4 max-w-[240px] leading-snug'>
          Промокод готовий до активації у будь-якій групі
        </p>

        {/* Code Input/Box */}
        <div 
          onClick={handleCopyCode}
          className='w-full flex items-center justify-between gradient-border-card rounded-full px-4 py-3.5 mb-5 cursor-pointer transition-colors active:scale-[0.99]'
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <span className='text-sm text-white tracking-wide'>{promoCode}</span>
          <img src='/assets/images/svg/Copy.svg' alt='copy' />
        </div>

        {/* Details List */}
        <div className='w-full flex flex-col mb-5'>
          {/* Duration */}
          <div className='flex items-center justify-between pt-3 border-t border-dashed border-[#2A2D40]'>
            <span className='text-[12px] text-[#8A8D9F]'>Тривалість:</span>
            <span className='text-[12px] font-semibold text-white'>{option.duration}</span>
          </div>

          {/* Price */}
          <div className='flex items-center justify-between py-3'>
            <span className='text-[12px] text-[#8A8D9F]'>Вартість:</span>
            <div className='flex items-center gap-1'>
              <img src='/assets/images/svg/Staryellow.svg' alt='star' className='w-3.5 h-3.5 object-contain' />
              <span className='text-[12px] font-bold text-[#EAB308]'>{option.price}</span>
            </div>
          </div>

          {/* Status */}
          <div className='flex items-center justify-between pb-3 border-b border-dashed border-[#2A2D40]'>
            <span className='text-[12px] text-[#8A8D9F]'>Статус:</span>
            <span className='text-[12px] font-semibold text-[#EAB308]'>Очікує активації</span>
          </div>
        </div>

        {/* Command Helper Text */}
        <p className='text-[#FFFFFF]/40 text-[12px] text-left w-full mb-2'>
          Для активації адмін групи відправляє команду:
        </p>

        {/* Command Box */}
        <div 
          onClick={handleCopyCommand}
          className='w-full flex items-center justify-between gradient-border-card rounded-full px-4 py-3.5 mb-4 cursor-pointer transition-colors active:scale-[0.99]'
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <span className='text-[12px] font-mono text-white/90 break-all select-all'>{command}</span>
          <img src='/assets/images/svg/Copy.svg' alt='copy' />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className='w-full h-[48px] text-[#87ADF0] gradient-border-card font-medium text-sm rounded-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-all'
          style={{
            background: 'linear-gradient(180deg, #1C2340 0%, #121526 100%)'
          }}
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default PromoCodeCreatedModal;
