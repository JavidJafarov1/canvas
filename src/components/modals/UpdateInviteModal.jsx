import React from 'react';
import { RotateCw } from 'lucide-react';

const UpdateInviteModal = ({ isOpen, onClose, onConfirm, taskId = '804300' }) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[12px] p-6 flex flex-col items-center gradient-border-card relative overflow-hidden'
        style={{
          background: 'linear-gradient(155.83deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 32.55%, rgba(135, 173, 240, 0.02) 61.12%), #0B0E21'
        }}
      >
        {/* Refresh Badge */}
        <div className="w-[58px] h-[58px] flex items-center justify-center text-[#87ADF0] mb-5">
          <img src="/assets/images/Refresh-Blue.png" alt="Refresh" />
        </div>

        {/* Title */}
        <h2 className='text-[15px] font-medium text-white text-center mb-3 px-1'>
          Оновити запрошувальне посилання для завдання №{taskId}?
        </h2>

        {/* Subtext */}
        <p className='text-[12px] text-[#ffffff]/40 text-center leading-relaxed mb-6 px-2'>
          Використовуйте цю функцію, якщо попереднє посилання не працює або ви хочете його замінити.
        </p>

        {/* Buttons */}
        <div className='flex gap-3 w-full'>
          <button
            onClick={onClose}
            className='flex-1 h-[48px] text-[#8A8D9F] font-medium text-[14px] rounded-full gradient-border-card flex items-center justify-center cursor-pointer active:scale-95 transition-all'
            style={{
              background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
            }}
          >
            Скасувати
          </button>
          <button
            onClick={onConfirm}
            className='flex-1 h-[48px] text-[#0B0E21] font-medium text-[14px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all shadow-[0_4px_12px_rgba(135,173,240,0.3)] bg-[#87ADF0]'
          >
            Так, оновити
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateInviteModal;
