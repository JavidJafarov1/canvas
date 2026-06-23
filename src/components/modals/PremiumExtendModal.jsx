import React, { useState } from 'react';
import { Zap } from 'lucide-react';

const PremiumExtendModal = ({ isOpen, onClose }) => {
  const [selectedId, setSelectedId] = useState(1);

  if (!isOpen) return null;

  const options = [
    { id: 1, duration: '1 місяць', price: '499' },
    { id: 2, duration: '3 місяці', price: '1350' },
    { id: 3, duration: '6 місяців', price: '2250' },
  ];

  return (
    <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[28px] p-6 flex flex-col items-center border border-white/5 justify-between relative overflow-hidden'
        style={{
          background: 'radial-gradient(circle at top left, rgba(234, 179, 8, 0.12) 0%, rgba(11, 14, 33, 0) 50%), radial-gradient(circle at top right, rgba(135, 173, 240, 0.03) 0%, rgba(11, 14, 33, 0) 50%), #131422'
        }}
      >
        {/* Yellow Zap Circle Icon with Outer Glow */}
        <div 
          className='w-[64px] h-[64px] rounded-full flex items-center justify-center border border-[#EAB308]/20 text-[#EAB308] mb-[18px] relative'
          style={{
            background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.03) 100%)',
            boxShadow: '0 0 20px rgba(234, 179, 8, 0.12)'
          }}
        >
          <Zap size={24} className='fill-[#EAB308] text-[#EAB308]' />
        </div>

        {/* Title */}
        <h2 className='text-[16px] font-medium text-white text-center leading-tight mb-5 max-w-[240px]'>
          Оберіть термін продовження підписки:
        </h2>

        {/* Options List */}
        <div className='flex flex-col gap-3 w-full mb-6'>
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            return (
              <div
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`gradient-border-card rounded-[18px] p-3 flex items-center justify-between cursor-pointer transition-all active:scale-[0.99] ${
                  isSelected ? 'border border-[#EAB308]/30 shadow-[0_0_12px_rgba(234,179,8,0.06)]' : 'border border-transparent'
                }`}
                style={{
                  background: isSelected 
                    ? 'linear-gradient(86.96deg, rgba(234, 179, 8, 0.08) 2.67%, rgba(234, 179, 8, 0.02) 98%)'
                    : 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.03) 2.67%, rgba(255, 255, 255, 0.01) 98%)'
                }}
              >
                <div className='flex items-center gap-3'>
                  {/* Crown Icon Circle */}
                  <div
                    className='w-10 h-10 rounded-full flex items-center justify-center border border-[#EAB308]/20'
                    style={{
                      background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(234, 179, 8, 0.03) 100%)'
                    }}
                  >
                    <img src='/assets/images/svg/crown.svg' alt='crown' className='w-[18px] h-[18px] object-contain' />
                  </div>
                  <span className='text-sm font-medium text-white'>{option.duration}</span>
                </div>

                {/* Price Badge */}
                <div 
                  className='flex items-center gap-1 bg-[#EAB308]/10 border border-[#EAB308]/20 rounded-full px-3 py-1'
                >
                  <img src='/assets/images/svg/yellow-star.svg' alt='star' className='w-3.5 h-3.5 object-contain' />
                  <span className='text-[13px] font-medium text-[#EAB308]'>{option.price}</span>
                </div>
              </div>
            );
          })}
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

export default PremiumExtendModal;
