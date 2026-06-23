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
        className='w-full max-w-[327px] rounded-[28px] p-6 flex flex-col items-center border border-white/5 justify-between relative overflow-hidden'
        style={{
          background: 'radial-gradient(circle at top left, rgba(16, 185, 129, 0.08) 0%, rgba(11, 14, 33, 0) 50%), radial-gradient(circle at top right, rgba(255, 255, 255, 0.02) 0%, rgba(11, 14, 33, 0) 50%), #131422'
        }}
      >
        {/* Green Check Circle Icon with Glow */}
        <div 
          className='w-[64px] h-[64px] rounded-full flex items-center justify-center border border-[#10B981]/20 text-[#10B981] mb-[18px] relative'
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.03) 100%)',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.12)'
          }}
        >
          <Check size={28} className='text-[#10B981]' />
        </div>

        {/* Title */}
        <h2 className='text-[20px] font-semibold text-white text-center leading-tight mb-1'>
          Промокод створено!
        </h2>

        {/* Subtitle */}
        <p className='text-[#ffffff]/40 text-xs text-center mb-5 max-w-[240px] leading-snug'>
          Промокод готовий до активації у будь-якій групі
        </p>

        {/* Code Input/Box */}
        <div 
          onClick={handleCopyCode}
          className='w-full flex items-center justify-between bg-[#18192a] border border-white/5 rounded-[18px] px-4 py-3.5 mb-5 cursor-pointer hover:bg-[#1c1d32] transition-colors active:scale-[0.99]'
        >
          <span className='text-sm font-semibold text-white tracking-wide'>{promoCode}</span>
          {copiedCode ? (
            <CheckCheck size={18} className='text-[#10B981]' />
          ) : (
            <Copy size={18} className='text-[#5A5D72]' />
          )}
        </div>

        {/* Details List */}
        <div className='w-full flex flex-col mb-5'>
          {/* Duration */}
          <div className='flex items-center justify-between py-3 border-t border-dashed border-[#2A2D40]'>
            <span className='text-[13px] text-[#8A8D9F]'>Тривалість:</span>
            <span className='text-[13px] font-semibold text-white'>{option.duration}</span>
          </div>

          {/* Price */}
          <div className='flex items-center justify-between py-3 border-t border-dashed border-[#2A2D40]'>
            <span className='text-[13px] text-[#8A8D9F]'>Вартість:</span>
            <div className='flex items-center gap-1'>
              <img src='/assets/images/svg/yellow-star.svg' alt='star' className='w-3.5 h-3.5 object-contain' />
              <span className='text-[13px] font-bold text-[#EAB308]'>{option.price}</span>
            </div>
          </div>

          {/* Status */}
          <div className='flex items-center justify-between py-3 border-t border-b border-dashed border-[#2A2D40]'>
            <span className='text-[13px] text-[#8A8D9F]'>Статус:</span>
            <span className='text-[13px] font-semibold text-[#EAB308]'>Очікує активації</span>
          </div>
        </div>

        {/* Command Helper Text */}
        <p className='text-[#8A8D9F] text-[11px] text-left w-full mb-2'>
          Для активації адмін групи відправляє команду:
        </p>

        {/* Command Box */}
        <div 
          onClick={handleCopyCommand}
          className='w-full flex items-center justify-between bg-[#18192a] border border-white/5 rounded-[18px] px-4 py-3.5 mb-6 cursor-pointer hover:bg-[#1c1d32] transition-colors active:scale-[0.99]'
        >
          <span className='text-[12px] font-mono text-white/90 break-all select-all'>{command}</span>
          {copiedCommand ? (
            <CheckCheck size={18} className='text-[#10B981] shrink-0 ml-2' />
          ) : (
            <Copy size={18} className='text-[#5A5D72] shrink-0 ml-2' />
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className='w-full h-[48px] text-white font-medium text-sm rounded-full flex items-center justify-center cursor-pointer active:scale-[0.98] transition-all'
          style={{
            background: 'linear-gradient(180deg, #1C2340 0%, #121526 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default PromoCodeCreatedModal;
