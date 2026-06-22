import React, { useState } from 'react';
import { ChevronLeft, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Custom Up/Down arrows icon for quantity selection
const SortArrowsIcon = ({ className }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 4.16666V15.8333M7.5 4.16666L4.16666 7.5M7.5 4.16666L10.8333 7.5M12.5 15.8333V4.16666M12.5 15.8333L9.16666 12.5M12.5 15.8333L15.8333 12.5" stroke="#87ADF0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DelayedSubscription = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState(3);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Clock Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top Clock Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <Clock size={20} className='text-[#87ADF0]' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Гнучкий запит підписки
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-2 leading-relaxed'>
            Бот попросить підписатися не одразу, а після N-го повідомлення користувача. Лічильник скидається через 24 год.
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[20px] p-5 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Card Header */}
            <div className='flex items-center gap-2.5 mb-1'>
              <div className='w-7 h-7 rounded-lg bg-[#87ADF0]/10 flex items-center justify-center shrink-0'>
                <SortArrowsIcon className='text-[#87ADF0]' />
              </div>
              <div className='flex flex-col'>
                <span className='text-sm font-semibold text-white'>Виберіть кількість</span>
                <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Поточне значення:</span>
              </div>
            </div>

            {/* Grid Selector */}
            <div className='grid grid-cols-5 gap-2.5 mt-1'>
              {numbers.map((num) => {
                const isActive = selectedValue === num;
                return (
                  <button
                    key={num}
                    onClick={() => setSelectedValue(num)}
                    className={`h-[36px] rounded-full text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${
                      isActive
                        ? 'border border-[#87ADF0] text-[#87ADF0] bg-[#87ADF0]/5 shadow-[0_0_10px_rgba(135,173,240,0.15)]'
                        : 'bg-white/[0.03] border border-transparent text-[#8A8D9F] hover:bg-white/[0.06] hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Save Button */}
      <div className='px-4 mt-8'>
        <button
          onClick={() => navigate(-1)}
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Зберегти
        </button>
      </div>

    </div>
  );
};

export default DelayedSubscription;
