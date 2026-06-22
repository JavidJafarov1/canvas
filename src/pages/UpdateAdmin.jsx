import React from 'react';
import { ChevronLeft, RefreshCw, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UpdateAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col pb-8 overflow-y-auto hide-scrollbar'>
      
      {/* Top Header Row with Back Button and Refresh Icon */}
      <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
        >
          <ChevronLeft size={24} />
        </button>

        {/* Top Refresh Icon with concentric circles */}
        <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
          {/* Glowing outer circle */}
          <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
               style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
          {/* Middle border circle */}
          <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
          {/* Inner solid circle with shadow */}
          <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
            <RefreshCw size={18} className='text-[#87ADF0]' />
          </div>
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className='flex flex-col items-center px-6 mb-8'>
        <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
          Оновити адміна
        </h1>
        <p className='text-[#8A8D9F] text-xs text-center px-4'>
          Оновіть кеш після зміни адмінів або прав бота
        </p>
      </div>

      {/* Settings Card Wrapper */}
      <div className='px-4'>
        <div className='gradient-border-card rounded-[20px] p-5 flex flex-col gap-4' 
             style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
          
          {/* Title & Description section */}
          <div className='flex flex-col gap-2.5'>
            <div className='flex items-center gap-2.5'>
              <RefreshCw size={18} className='text-[#87ADF0]' />
              <span className='text-sm font-semibold text-white'>Оновити адміністраторів</span>
            </div>
            <p className='text-[#8A8D9F] text-[11px] leading-relaxed'>
              Якщо виникли проблеми з доступом або правами бота - використайте цю команду для оновлення прав адміністраторів.
            </p>
          </div>

          {/* Code/Command Box */}
          <div className='w-full rounded-[14px] bg-[#171A2F] border border-white/[0.04] p-4 flex gap-3.5 items-start mt-2'>
            <Lightbulb size={20} className='text-[#87ADF0] shrink-0 mt-0.5' />
            <div className='flex flex-col gap-1.5'>
              <span className='text-[11px] font-semibold text-[#8A8D9F] uppercase tracking-wider'>Команда:</span>
              <span className='text-xs font-medium text-white leading-relaxed'>
                <span className='text-[#87ADF0] font-semibold'>/reload</span> - оновити список адміністраторів
              </span>
            </div>
          </div>

          {/* Bottom helper text */}
          <p className='text-[#8A8D9F] text-[11px] leading-relaxed mt-2 pl-1'>
            Використовуйте цю команду у вашій групі.
          </p>

        </div>
      </div>

    </div>
  );
};

export default UpdateAdmin;
