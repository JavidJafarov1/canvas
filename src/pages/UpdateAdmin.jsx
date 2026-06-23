import React from 'react';
import { ChevronLeft, RefreshCw, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UpdateAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col pb-8 overflow-y-auto hide-scrollbar'>
      
      {/* Top Header Row with Back Button and Refresh Icon */}
      <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
        >
          <ChevronLeft size={24} />
        </button>

        {/* Inner solid circle with shadow */}
        <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
          <img src="assets/images/syncLine.png" />
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className='flex flex-col items-center px-6 mb-8'>
        <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
          Оновити адміна
        </h1>
        <p className='text-[#ffffff]/40 text-sm text-center px-4'>
          Оновіть кеш після зміни адмінів або прав бота
        </p>
      </div>

      {/* Settings Card Wrapper */}
      <div className='px-4'>
        <div className='gradient-border-card rounded-[12px] p-[24px_16px] flex flex-col gap-4' 
             style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
          
          {/* Title & Description section */}
          <div className='flex flex-col gap-2.5'>
            <div className='flex items-center gap-2.5'>
              <img src="assets/images/svg/Refresh.svg" />
              <span className='text-sm font-medium text-white'>Оновити адміністраторів</span>
            </div>
            <p className='text-[#ffffff]/40 text-[12px] leading-relaxed'>
              Якщо виникли проблеми з доступом або правами бота - використайте цю команду для оновлення прав адміністраторів.
            </p>
          </div>

          {/* Code/Command Box */}
          <div className='w-full rounded-[14px] bg-[#87ADF0]/10 p-3 flex gap-3.5 items-start'>
            <img src="assets/images/svg/lightbulb-simple copy.svg" />
            <div className='flex flex-col gap-1.5'>
              <span className='text-[12px] font-medium text-[#D7E6FF] tracking-wider'>Команда:</span>
              <span className='text-xs font-medium text-white leading-relaxed'>
                <span className='text-[#87ADF0] font-semibold'>/reload</span> - оновити список адміністраторів
              </span>
            </div>
          </div>

          {/* Bottom helper text */}
          <p className='text-[#ffffff]/40 text-[12px] leading-relaxedpl-1'>
            Використовуйте цю команду у вашій групі.
          </p>

        </div>
      </div>

    </div>
  );
};

export default UpdateAdmin;
