import React, { useState } from 'react';
import { ChevronLeft, Flag, Edit, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PromoText = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Flag Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top Flag Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <Flag size={20} className='text-[#87ADF0]' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Промо-текст
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-2 leading-relaxed'>
            Цей текст буде відображатись як рекламний у кожному повідомленні про перевірку підписки.
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[20px] p-5 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Card Header Title */}
            <div className='flex items-center gap-2.5 mb-1'>
              <Edit size={18} className='text-[#87ADF0]' />
              <span className='text-sm font-semibold text-white'>Напишіть текст</span>
            </div>

            {/* Warning Box */}
            <div className='border border-[#FFC000]/10 rounded-[14px] p-4 flex gap-3 text-[#FFF0C4] items-start'
                 style={{ background: 'rgba(255, 192, 0, 0.04)' }}>
              <AlertTriangle size={18} className='shrink-0 text-[#FFD166] mt-0.5' />
              <div className='flex flex-col gap-1'>
                <span className='text-xs font-bold text-[#FFD166]'>Заборонено:</span>
                <p className='text-[10px] font-medium leading-relaxed text-[#FFF0C4]/80'>
                  18+ контент і еротика, піратство або зламаний контент, скам і фінансові піраміди, будь-які форми обману, фішинг, крадіжка акаунтів і поширення шкідливого ПЗ (malware), доксинг і розповсюдження чужих персональних даних, а також інші порушення правил PR GRAM та Telegram.
                </p>
              </div>
            </div>

            {/* Textarea Input box */}
            <div className='w-full rounded-[14px] bg-[#171A2F] border border-white/[0.04] p-4 min-h-[140px] flex items-stretch mt-1'>
              <textarea 
                placeholder='Введіть рекламний текст...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='w-full bg-transparent text-xs font-medium text-white placeholder-white/20 focus:outline-none resize-none'
              />
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

export default PromoText;
