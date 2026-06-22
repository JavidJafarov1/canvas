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
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top Link Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <Link2 size={20} className='text-[#87ADF0]' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Приховати посилання
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-4'>
            Прибирає текстові посилання, залишає лише кнопки
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[20px] p-4 flex flex-col gap-4 divide-y divide-white/[0.06]' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Title & Description section */}
            <div className='flex flex-col gap-2.5 pb-1'>
              <div className='flex items-center gap-2.5'>
                <Link2Off size={18} className='text-[#87ADF0]' />
                <span className='text-sm font-semibold text-white'>Приховати посилання</span>
              </div>
              <p className='text-[#8A8D9F] text-[11px] leading-relaxed pr-2'>
                Автоматично видаляє або приховує посилання у повідомленнях учасників. Адміни не підпадають під обмеження.
              </p>
            </div>

            {/* Toggle Switch row */}
            <div className='pt-4 flex items-center justify-between'>
              <span className='text-sm font-semibold text-white'>Статус</span>
              
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
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Зберегти
        </button>
      </div>

    </div>
  );
};

export default HideLinks;
