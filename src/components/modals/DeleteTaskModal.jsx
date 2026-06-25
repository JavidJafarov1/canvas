import React from 'react';
import { Trash } from 'lucide-react';

const DeleteTaskModal = ({ isOpen, onClose, onConfirm, taskId = '804300', refundAmount = '2 600' }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[12px] p-[23px_24px] flex flex-col items-center gradient-border-card relative overflow-hidden'
        style={{
          background: 'linear-gradient(155.83deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 32.55%, rgba(255, 73, 115, 0.02) 61.12%), #0B0E21'
        }}
      >
        {/* Trash Icon Circle */}
        <div className="w-[58px] h-[58px] flex items-center justify-center mb-5 ">
          <img src="/assets/images/vector23.png" />
        </div>

        {/* Title */}
        <h2 className='text-[16px] font-medium text-white text-center leading-snug tracking-wide mb-3 px-1'>
          Видалити завдання №{taskId}?
        </h2>

        {/* Coins Refund Row */}
        <div className="flex items-center gap-2 px-4 py-1.5 mb-4">
          <img src="/assets/images/P-Frame.png" alt="coin" className="w-[14px] h-[14px]" />
          <span className="text-[13px] font-medium text-[#FDF7D2]">{refundAmount} GRAM буде повернуто</span>
        </div>

        {/* Subtext */}
        <p className='text-[12px] text-[#ffffff]/40 text-center leading-relaxed mb-6 px-2'>
          У разі видалення завдання повернення монет не відбуватиметься за користувачів, які відписалися раніше 7 діб.
        </p>

        {/* Action Buttons */}
        <div className='flex gap-3 w-full'>
          <button
            onClick={onClose}
            className='flex-1 h-[48px] text-[#87ADF0] hover:text-white font-semibold text-[14px] rounded-full gradient-border-card flex items-center justify-center cursor-pointer active:scale-95 transition-all'
            style={{
              background: 'linear-gradient(180deg, #1E2035 0%, #131422 100%)'
            }}
          >
            Скасувати
          </button>
          <button
            onClick={onConfirm}
            className='flex-1 h-[48px] text-white font-semibold text-[14px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all bg-[#FF4973]'
          >
            Видалити
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
