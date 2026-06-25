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
    <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#01061C]/70 backdrop-blur-[7px] z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[12px] p-[32px_24px] flex flex-col items-center gradient-border-card justify-between relative overflow-hidden'
        style={{
          background: 'linear-gradient(155.83deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0.04) 32.55%, rgba(255, 192, 0, 0.02) 61.12%), #0B0E21'
        }}
      >
        {/* Yellow Zap Circle Icon with Outer Glow */}
        <div 
          className='w-[58px] h-[58px] flex items-center justify-center mb-[16px] relative'
        >
          <img src='/assets/images/premium.png' />
        </div>

        {/* Title */}
        <h2 className='text-[18px] font-medium text-white text-center leading-tight mb-4 max-w-[240px]'>
          Оберіть термін продовження підписки:
        </h2>

        {/* Options List */}
        <div className='flex flex-col gap-2 w-full mb-4'>
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            return (
              <div
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                className={`gradient-border-card rounded-[12px] p-2.5 flex items-center justify-between cursor-pointer transition-all active:scale-[0.99] ${
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
                    className='w-11 h-11flex items-center justify-center'
                  >
                    <img src='/assets/images/vector14.png' alt='crown' />
                  </div>
                  <span className='text-sm font-medium text-white'>{option.duration}</span>
                </div>

                {/* Price Badge */}
                <div 
                  className='flex items-center gap-1 rounded-full px-3 py-1 gradient-border-card'
                  style={{ background: 'linear-gradient(128.85deg, rgba(255, 208, 0, 0.2) 0%, rgba(255, 208, 0, 0.04) 53.26%, rgba(255, 208, 0, 0.02) 100%)'}}
                >
                  <img src='/assets/images/svg/Staryellow.svg' alt='star' />
                  <span className='text-[13px] font-medium text-[#EAB308]'>{option.price}</span>
                </div>
              </div>
            );
          })}
        </div>

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
  );
};

export default PremiumExtendModal;
