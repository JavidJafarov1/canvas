import React, { useState } from 'react';
import { ChevronLeft, Link2, Link2Off } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HideLinks = () => {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(true);

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Link Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
              <img src="assets/images/linkLine.png" />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
            Приховати посилання
          </h1>
          <p className='text-[#ffffff]/40 text-[14px] text-center px-4'>
            Прибирає текстові посилання, залишає лише кнопки
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[20px] p-[24px_16px] flex flex-col gap-4 divide-y divide-white/[0.06]' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Title & Description section */}
            <div className='flex flex-col gap-3 pb-4'>
              <div className='flex items-center gap-2.5'>
                <img src="assets/images/svg/eye-slash.svg" alt="link" />
                <span className='text-sm font-medium text-white'>Приховати посилання</span>
              </div>
              <p className='text-[#ffffff]/40 text-[12px] leading-relaxed pr-2'>
                Автоматично видаляє або приховує посилання у повідомленнях учасників. Адміни не підпадають під обмеження.
              </p>
            </div>

            {/* Toggle Switch row */}
            <div className='flex items-center justify-between'>
              <span className='text-sm text-white'>Статус</span>
              
              {/* Custom Toggle Switch */}
              <div
                onClick={() => setEnabled(!enabled)}
                className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors ${enabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Save Button */}
      <div className='px-4 mt-8'>
        <button
          onClick={() => navigate(-1)}
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-medium text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Зберегти
        </button>
      </div>

    </div>
  );
};

export default HideLinks;
