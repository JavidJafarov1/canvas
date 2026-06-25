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
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            <div className='w-[60px] h-[60px] rounded-full  flex items-center justify-center z-10'>
              <img src="assets/images/flagLine.png" />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-[34px]'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
            Промо-текст
          </h1>
          <p className='text-[#ffffff]/40 text-sm text-center px-2 leading-relaxed'>
            Цей текст буде відображатись як рекламний у кожному повідомленні про перевірку підписки.
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-3' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}>
            
            {/* Card Header Title */}
            <div className='flex items-center gap-2'>
              <img src="assets/images/svg/Pen New Square.svg" />
              <span className='text-sm font-medium text-white'>Напишіть текст</span>
            </div>

            {/* Warning Box */}
            <div className='rounded-[12px] p-[10px_16px] flex gap-3 text-[#FFF0C4] items-start backdrop-blur-[2px]'
                 style={{ background: 'rgba(255, 192, 0, 0.1)' }}>
              <img src="assets/images/svg/Danger Triangle.svg" />
              <div className='flex flex-col gap-1'>
                <span className='text-xs font-medium text-[#FFC000]'>Заборонено:</span>
                <p className='text-[12px] font-medium leading-relaxed text-[#FFF0C4]'>
                  18+ контент і еротика, піратство або зламаний контент, скам і фінансові піраміди, будь-які форми обману, фішинг, крадіжка акаунтів і поширення шкідливого ПЗ (malware), доксинг і розповсюдження чужих персональних даних, а також інші порушення правил PR GRAM та Telegram.
                </p>
              </div>
            </div>

            {/* Textarea Input box */}
            <div className='w-full rounded-[12px] gradient-border-card p-4 min-h-[140px] flex items-stretch mt-1'
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}
            >
              <textarea 
                placeholder='Введіть рекламний текст...'
                value={text}
                onChange={(e) => setText(e.target.value)}
                className='w-full bg-transparent text-sm text-white placeholder-white/40 focus:outline-none resize-none'
              />
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

export default PromoText;
