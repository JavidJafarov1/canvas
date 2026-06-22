import React from 'react';

const DisableSCModal = ({ isOpen, onClose, selectedSC }) => {
  if (!isOpen || !selectedSC) return null;

  return (
    <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-[24px] p-6 flex flex-col items-center border border-white/5 justify-between relative overflow-hidden'
        style={{
          background: 'radial-gradient(circle at top left, rgba(255, 73, 115, 0.15) 0%, rgba(11, 14, 33, 0) 50%), radial-gradient(circle at top right, rgba(135, 173, 240, 0.05) 0%, rgba(11, 14, 33, 0) 50%), #141522'
        }}
      >
        {/* Trash Icon Circle */}
        <img src='/assets/images/vector23.png' alt='vector23' className='w-[58px] mb-4' />

        {/* Title & Subtitle */}
        <h2 className='text-lg font-bold text-white text-center tracking-wide mb-1'>Disable SC?</h2>
        <p className='text-xs text-white/40 text-center mb-4'>{selectedSC.title}</p>

        {/* Launched & End Info Box */}
        <div className='w-full bg-[#1A1C2E] border border-white/[0.04] rounded-xl p-4 flex flex-col gap-3.5 mb-6'>
          <div className='flex items-center justify-between text-sm'>
            <div className='flex items-center gap-1.5 text-[#8A8D9F]'>
              <img src='/assets/images/svg/history.svg' alt='history' className='w-5' />
              <span>Launched</span>
            </div>
            <span className='text-white'>11.30 12:00</span>
          </div>
          <div className='flex items-center justify-between text-sm'>
            <div className='flex items-center gap-1.5 text-[#8A8D9F]'>
              <img src='/assets/images/svg/history2.svg' alt='history' className='w-5' />
              <span>End</span>
            </div>
            <span className='text-white'>12.01 12:00</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex gap-3.5 w-full'>
          <button
            onClick={onClose}
            className='flex-1 h-[48px] text-white font-semibold text-[14px] rounded-full border border-[#2F3249] flex items-center justify-center cursor-pointer active:scale-95 transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
            style={{
              background: 'linear-gradient(180deg, #202235 0%, #151624 100%)'
            }}
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className='flex-1 h-[48px] text-white font-semibold text-[14px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all shadow-[0_4px_12px_rgba(255,73,115,0.2)]'
            style={{
              background: 'linear-gradient(135deg, #FF5E85 0%, #FF416C 100%)'
            }}
          >
            Extend
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisableSCModal;
