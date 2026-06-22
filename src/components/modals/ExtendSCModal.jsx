import React from 'react';
import { Calendar, ChevronsUpDown } from 'lucide-react';

const ExtendSCModal = ({
  isOpen,
  onClose,
  selectedSC,
  selectedDuration,
  setSelectedDuration
}) => {
  if (!isOpen || !selectedSC) return null;

  return (
    <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[327px] rounded-xl p-8 flex flex-col items-center border border-white/10 justify-between'
        style={{ background: 'linear-gradient(155.83deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 32.55%, rgba(135, 173, 240, 0.02) 61.12%), #0B0E21' }}
      >
        <div className='flex flex-col items-center w-full'>
          {/* Top Indicator plus ring */}
          <img src='/assets/images/vector22.png' alt='vector22' className='w-[58px] mb-4' />

          {/* Title & Subtitle */}
          <h2 className='text-lg font-medium text-white text-center leading-tight mb-1'>Extend SC</h2>
          <p className='text-xs text-white/40 text-center mb-4'>{selectedSC.title}</p>

          {/* Separator line */}
          <div className='w-full border-t border-white/10 border-dashed mb-4' />

          {selectedSC.type === 'end_by_data' ? (
            <>
              {/* Current End Information */}
              <div className='flex items-center gap-2 mb-5'>
                <img src='/assets/images/svg/calendar.svg' className='w-[20px] opacity-40' alt='calendar' />
                <span className='text-sm text-white'>Current End: 12:30, 11.01</span>
              </div>

              {/* Duration Selector Buttons */}
              <div className='grid grid-cols-4 gap-2 w-full mb-4'>
                {['1h', '3h', '6h', '12h', '1d', '2d', '3d', '7d'].map((duration) => (
                  <button
                    key={duration}
                    onClick={() => setSelectedDuration(duration)}
                    className={`py-1.5 rounded-full text-[13px] font-medium transition-all ${selectedDuration === duration
                      ? 'text-[#87ADF0] border border-[#87ADF0]'
                      : 'bg-white/5 gradient-border-card text-white border border-transparent hover:bg-[#2A2D40]'
                      }`}
                  >
                    {duration}
                  </button>
                ))}
              </div>

              {/* Select Date Link */}
              <button className='text-sm font-semibold text-[#87ADF0] hover:text-[#729EE8] transition-colors cursor-pointer mb-2'>
                Select date and time
              </button>
            </>
          ) : (
            <>
              {/* Current Target Information */}
              <div className='flex items-center gap-2.5 mb-4'>
                <img src='/assets/images/svg/star.svg' className='w-5 opacity-70' alt='star' />
                <span className='text-sm text-white'>Current target: {selectedSC.totalUserCount || '150'} subscribers</span>
              </div>

              {/* Add Subscribers Dropdown Selector */}
              <div className='flex items-center justify-between bg-[#0B0E21]/20 border border-white/10 rounded-full h-[44px] px-4 text-sm text-white/40 w-full mb-4 cursor-pointer hover:bg-[#0b0e21]/40 transition-colors'>
                <div className='flex items-center gap-2.5'>
                  <img src='/assets/images/svg/user.svg' className='w-5 opacity-40' alt='user' />
                  <span className='text-white/60 font-medium'>Add subscribers</span>
                </div>
                <ChevronsUpDown size={15} className='opacity-40 text-white shrink-0' />
              </div>
            </>
          )}
        </div>

        {/* Bottom Actions */}
        <div className='flex gap-3 w-full'>
          <button
            onClick={onClose}
            className='flex-1 h-[44px] text-white font-semibold text-[15px] rounded-[30px] border border-white/10 flex items-center justify-center cursor-pointer active:scale-95 transition-all'
            style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className='flex-1 h-[44px] text-[#0B0E21] font-bold text-[15px] rounded-[30px] bg-[#87ADF0] hover:bg-[#729EE8] flex items-center justify-center cursor-pointer active:scale-95 transition-all'
          >
            Extend
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtendSCModal;
