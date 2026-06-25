import React from 'react';
import { Trash } from 'lucide-react';

const DeleteWarningModal = ({ isOpen, onClose, underReviewCount = 2 }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[12px] p-[23px_24px] flex flex-col items-center gradient-border-card relative overflow-hidden'
        style={{
          background: 'linear-gradient(155.83deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 32.55%, rgba(255, 73, 115, 0.02) 61.12%), #0B0E21'
        }}
      >
        {/* Trash Icon Badge */}
        <div className="w-[58px] h-[58px] flex items-center justify-center text-red-400 mb-5">
          <img src="/assets/images/vector23.png" />
        </div>

        {/* Title */}
        <h2 className='text-[16px] font-medium text-white text-center leading-snug tracking-wide mb-3'>
          Видалити завдання
        </h2>

        {/* Subtext */}
        <p className='text-xs text-[#ffffff]/40 text-center leading-relaxed mb-1 px-2'>
          Неможливо видалити завдання, поки є виконання на перевірці. Спершу перевірте їх.
        </p>

        {/* Count under review link */}
        <span className="text-[13px] font-bold text-red-400 mb-6 cursor-pointer hover:underline">
          На перевірці: {underReviewCount}
        </span>

        {/* Close Button */}
        <button
          onClick={onClose}
          className='w-full h-[48px] text-white font-semibold text-[14px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all gradient-border-card'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'}}
        >
          Закрити
        </button>
      </div>
    </div>
  );
};

export default DeleteWarningModal;
