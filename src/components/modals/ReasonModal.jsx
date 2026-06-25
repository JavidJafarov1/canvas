import React, { useState } from 'react';
import { X, RotateCw } from 'lucide-react';

const ReasonModal = ({ isOpen, onClose, onConfirm, type }) => {
  const [text, setText] = useState('');

  if (!isOpen) return null;

  const isRework = type === 'rework';
  const title = isRework ? 'Причина доопрацювання' : 'Причина відмови';
  const placeholder = isRework
    ? 'Вкажіть що потрібно виправити...'
    : 'Вкажіть причину відмови....';

  const confirmText = isRework ? 'Доопрацювати' : 'Відмовити';

  // Existing modals style configuration
  const headerIconBg = isRework
    ? 'rgba(241, 168, 10, 0.1)'
    : 'rgba(239, 68, 68, 0.1)';

  const headerIconBorder = isRework
    ? 'rgba(241, 168, 10, 0.2)'
    : 'rgba(239, 68, 68, 0.2)';

  const headerIconColor = isRework ? '#F1A80A' : '#FF4A6B';

  const radialGradient = isRework
    ? 'radial-gradient(circle at top left, rgba(241, 168, 10, 0.12) 0%, rgba(11, 14, 33, 0) 50%), #141522'
    : 'radial-gradient(circle at top left, rgba(239, 68, 68, 0.12) 0%, rgba(11, 14, 33, 0) 50%), #141522';

  const confirmBtnBg = isRework ? '#F1A80A' : '#FF4A6B';
  const confirmBtnTextColor = isRework ? '#161829' : '#FFFFFF';
  const shadowColor = isRework ? 'rgba(241, 168, 10, 0.3)' : 'rgba(255, 74, 107, 0.3)';

  const handleConfirm = () => {
    if (!text.trim()) {
      alert('Будь ласка, введіть причину.');
      return;
    }
    onConfirm(text);
    setText('');
  };

  return (
    <div className='fixed inset-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-xl py-8 px-6 flex flex-col items-center gradient-border-card relative overflow-hidden'
        style={{
          background: radialGradient
        }}
      >
        {/* Header Icon Circle */}
        {!isRework ?
          <img src='/assets/images/vector58.png' alt='vector58' className='mb-4' />
          :
          <img src='/assets/images/vector59.png' alt='vector58' className='mb-4' />
        }
        {/* Title */}
        <h2 className='text-base font-medium text-white text-center leading-snug tracking-wide mb-2'>
          {title}
        </h2>

        {/* Text Area */}
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-[16px] bg-[#0E101F] border border-[#2A2D40] p-4 text-[13px] text-white placeholder-[#5A5D72] focus:outline-none focus:border-[#87ADF0] transition-colors resize-none mb-6"
        />

        {/* Action Buttons */}
        <div className='flex gap-3 w-full'>
          <button
            onClick={() => {
              setText('');
              onClose();
            }}
            className='flex-1 h-[44px] text-[#87ADF0] font-semibold text-[14px] rounded-[30px] border border-[#87ADF0]/20 flex items-center justify-center cursor-pointer active:scale-95 transition-all'
            style={{
              background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
            }}
          >
            Скасувати
          </button>

          <button
            onClick={handleConfirm}
            className='flex-1 h-[44px] font-semibold text-[14px] rounded-[30px] flex items-center justify-center cursor-pointer active:scale-95 transition-all'
            style={{
              backgroundColor: confirmBtnBg,
              color: confirmBtnTextColor,
              boxShadow: `0 4px 12px ${shadowColor}`
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReasonModal;
