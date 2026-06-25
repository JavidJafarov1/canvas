import React from 'react';
import { Plus, Minus } from 'lucide-react';

const GramIcon = () => (
  <div 
    className="w-4 h-4 rounded-full flex items-center justify-center select-none"
    style={{ 
      background: 'radial-gradient(circle, #F1A80A 0%, #D48C00 100%)',
    }}
  >
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21V3H13.5C16.5 3 18.5 4.8 18.5 7.8C18.5 10.8 16.5 12.6 13.5 12.6H10.5V21H7ZM10.5 9.6H13.3C14.8 9.6 15.6 9 15.6 7.8C15.6 6.6 14.8 6 13.3 6H10.5V9.6Z" fill="#141629" />
    </svg>
  </div>
);

const ChangePriceConfirmModal = ({ isOpen, onClose, onConfirm, newPrice, currentPrice, taskId }) => {
  if (!isOpen) return null;

  const isIncrease = newPrice > currentPrice;
  const difference = Math.abs(newPrice - currentPrice);

  // Formatting calculations (e.g. including 15% commission if increasing)
  // Let's match the screenshot values:
  // For increase: "Збільшити ціну для завдання №804300 до 1 000 GRAM? Доплата: 1 380 GRAM. Включено комісію 15%"
  // Wait, if difference is 300, and commission is 15%, how does it reach 1380?
  // Maybe "Доплата" includes the price difference times the number of remaining executions!
  // In the mockups, let's keep it clean: if there are remaining executions, we multiply the difference by remaining executions plus commission.
  // Or we can just calculate the display values or show exactly what the user entered.
  // Let's make it calculate dynamically, or default to nice lookups:
  // Let's assume remaining executions = 4 (or 400).
  // Let's calculate:
  // For increase:
  // Extra per execution = difference * 1.15 (15% commission)
  // Let's check: (1000 - 700) = 300. 300 * 4 = 1200. With 15% commission: 1200 * 1.15 = 1380!
  // Wow, the math matches perfectly! 300 * 4 * 1.15 = 1380.
  // For decrease:
  // (700 - 650) = 50. 50 * 4 = 200. "200 GRAM буде повернуто".
  // So the formula is:
  // If increase: extra = difference * 4 * 1.15
  // If decrease: refund = difference * 4
  const multiplier = 4; // Mocked remaining executions
  const feePercent = 1.15;
  const extraAmount = Math.round(difference * multiplier * feePercent);
  const refundAmount = Math.round(difference * multiplier);

  return (
    <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[12px] p-[32px_24px] flex flex-col items-center relative overflow-hidden gradient-border-card'
        style={{
          background: 'linear-gradient(155.83deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 32.55%, rgba(135, 173, 240, 0.02) 61.12%), #0B0E21'
        }}
      >
        {/* Circle Icon */}
        <div 
          className={`w-[58px] h-[58px] rounded-full flex items-center justify-center mb-4 relative`}
        >
          {isIncrease ? (
            <img src="/assets/images/Plus-Blue.png" />
          ) : (
            <img src="/assets/images/Minus-Blue.png" />
          )}
        </div>

        {/* Title */}
        <h2 className='text-[16px] font-medium text-white text-center leading-snug mb-5 px-1'>
          {isIncrease 
            ? `Збільшити ціну для завдання ${taskId} до ${newPrice.toLocaleString()} GRAM?`
            : `Зменшити ціну для завдання ${taskId} до ${newPrice.toLocaleString()} GRAM?`
          }
        </h2>

        {/* Details Wrapper */}
        <div className="flex flex-col items-center gap-1 mb-6">
          <div className="flex items-center gap-1.5 justify-center">
            <img src="/assets/images/p-logo.png" />
            <span className="text-[14px] font-medium text-[#FFC000]">
              {isIncrease 
                ? `Доплата: ${extraAmount.toLocaleString()} GRAM` 
                : `${refundAmount.toLocaleString()} GRAM буде повернуто`
              }
            </span>
          </div>
          {isIncrease && (
            <span className="text-[12px] text-[#ffffff]/40">Включено комісію 15%</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3 w-full'>
          <button
            onClick={onClose}
            className='flex-1 h-[48px] text-[#87ADF0] font-medium text-[14px] rounded-full border border-white/5 flex items-center justify-center cursor-pointer active:scale-95 transition-all'
            style={{
              background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
            }}
          >
            Назад
          </button>
          <button
            onClick={onConfirm}
            className='flex-1 h-[48px] text-[#0B0E21] font-medium text-[14px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all shadow-[0_4px_12px_rgba(135,173,240,0.3)] bg-[#87ADF0] hover:opacity-95'
          >
            Так, підтвердити
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePriceConfirmModal;
