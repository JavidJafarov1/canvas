import React, { useState } from 'react';
import { ChevronLeft, Eye, X, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Custom Up/Down arrows icon for status
const SortArrowsIcon = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 4.16666V15.8333M7.5 4.16666L4.16666 7.5M7.5 4.16666L10.8333 7.5M12.5 15.8333V4.16666M12.5 15.8333L9.16666 12.5M12.5 15.8333L15.8333 12.5" stroke="#87ADF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EntryCheck = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Eye Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
              <img src="assets/images/eyeLine.png" />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-[34px]'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
            Перевірка при вході
          </h1>
          <p className='text-[#ffffff]/40 text-sm text-center px-2 leading-relaxed'>
            Кожен новий учасник буде перевірений на підписку одразу при вході. Доступ до повідомлень відкриється автоматично після виконання всіх умов.
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}>
            
            {/* Card Header Status Row */}
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center gap-2'>
                <div className='flex items-center justify-center shrink-0'>
                  <img src="assets/images/svg/Square Transfer Vertical.svg" />
                </div>
                <span className='text-sm font-medium text-white'>Статус</span>
              </div>

              {/* Status indicator pill */}
              <div className='flex items-center gap-1.5'>
                <span className={`text-sm ${isActive ? 'text-[#10B981]' : 'text-[#FF4973]'}`}>
                  {isActive ? 'Увімкнено' : 'Вимкнено'}
                </span>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-[#10B981]/20 text-[#10B981]' : 'bg-[#FF4973]/40 text-[#FF4973]'
                }`}>
                  {isActive ? <Check size={12} strokeWidth={3} /> : <X size={12} strokeWidth={3} />}
                </div>
              </div>
            </div>

            {/* Enable/Disable Action Button inside card */}
            <button
              onClick={() => setIsActive(!isActive)}
              className={`w-full h-[46px] font-medium text-sm rounded-full flex items-center justify-center cursor-pointer transition-all ${
                isActive 
                  ? 'border border-[#FF4973]/20 text-[#FF4973] hover:bg-[#FF4973]/5' 
                  : 'bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
              }`}
            >
              {isActive ? 'Вимкнути' : 'Увімкнути'}
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default EntryCheck;
