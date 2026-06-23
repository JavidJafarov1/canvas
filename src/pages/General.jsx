import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Trash2, Link2, GitBranch, RefreshCw, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const General = () => {
  const navigate = useNavigate();
  
  // Local state for interactive elements
  const [autoDelete, setAutoDelete] = useState(true);
  const [hideLinks, setHideLinks] = useState(true);

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col pb-8 overflow-y-auto hide-scrollbar'>
      
      {/* Top Header Row with Back Button and Gear Icon */}
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
          <img src="assets/images/settingLine.png" alt="settings" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex flex-col items-center px-4 flex-1'>

        {/* Title & Subtitle */}
        <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
          General PR GRAM Giveaway
        </h1>
        <p className='text-[#ffffff]/40 text-sm text-center mb-8 px-4'>
          Керуйте параметрами бота у вашій групі
        </p>

        {/* Settings List */}
        <div className='w-full flex flex-col gap-3.5'>
          {/* Item 1: Автовидалення повідомлень */}
          <div 
            onClick={() => navigate('/auto-delete')}
            className='gradient-border-card w-full rounded-[18px] p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
          >
            <div className='flex items-center gap-3.5'>
              {/* Icon Container */}
              <div className='w-[44px] h-[44px] rounded-full gradient-border-card flex items-center justify-center shrink-0'
              style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
                <img src="assets/images/trash.png" alt="trash" className='text-[#87ADF0]' />
              </div>
              <div className='flex flex-col pr-2'>
                <h3 className='text-[14px] font-medium text-white leading-tight mb-1'>
                  Автовидалення повідомлень
                </h3>
                <p className='text-[#ffffff]/40 text-[12px] leading-tight'>
                  Повідомлення бота зникають через заданий час (15с - 5хв)
                </p>
              </div>
            </div>
            
            <div className='flex items-center gap-2 shrink-0'>
              {autoDelete && (
                <div className='w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]' />
              )}
              <ChevronRight size={18} className='text-white/30' />
            </div>
          </div>

          {/* Item 2: Приховати посилання */}
          <div 
            onClick={() => navigate('/hide-links')}
            className='gradient-border-card w-full rounded-[18px] p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
          >
            <div className='flex items-center gap-3.5'>
              {/* Icon Container */}
              <div className='w-[44px] h-[44px] rounded-full gradient-border-card flex items-center justify-center shrink-0'
              style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
                <img src="assets/images/vector15.png" alt="link icon" className='text-[#87ADF0]' />
              </div>
              <div className='flex flex-col pr-2'>
                <h3 className='text-[14px] font-semibold text-white leading-tight mb-1'>
                  Приховати посилання
                </h3>
                <p className='text-[#8A8D9F] text-[11px] leading-tight'>
                  Прибирає текстові посилання, залишає лише кнопки
                </p>
              </div>
            </div>
            
            <div className='flex items-center gap-2 shrink-0'>
              {hideLinks && (
                <div className='w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]' />
              )}
              <ChevronRight size={18} className='text-white/30' />
            </div>
          </div>

          {/* Item 3: Керування гілками */}
          <div 
            onClick={() => navigate('/manage-branches')}
            className='gradient-border-card w-full rounded-[18px] p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
          >
            <div className='flex items-center gap-3.5'>
              {/* Icon Container */}
              <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'
              style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
                <img src="assets/images/group.png" alt="group" className='text-[#87ADF0] rotate-180' />
              </div>
              <div className='flex flex-col pr-2'>
                <h3 className='text-[16px] font-medium text-white leading-tight mb-1'>
                  Керування гілками
                </h3>
                <p className='text-[#ffffff]/40 text-[12px] leading-tight'>
                  Перевірка підписки окремо для кожної гілки форуму
                </p>
              </div>
            </div>
            
            <div className='flex items-center gap-2 shrink-0'>
              <ChevronRight size={18} className='text-white/30' />
            </div>
          </div>

          {/* Item 4: Оновити адміна */}
          <div 
            onClick={() => navigate('/update-admin')}
            className='gradient-border-card w-full rounded-[18px] p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all'
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.035) 2.67%, rgba(255, 255, 255, 0.05) 98%), #131526' }}
          >
            <div className='flex items-center gap-3.5'>
              {/* Icon Container */}
              <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'
              style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
                <img src="assets/images/sync.png" alt="update icon" className='text-[#87ADF0]' />
              </div>
              <div className='flex flex-col pr-2'>
                <h3 className='text-[14px] font-semibold text-white leading-tight mb-1'>
                  Оновити адміна
                </h3>
                <p className='text-[#8A8D9F] text-[11px] leading-tight'>
                  Оновіть кеш після зміни адмінів або прав бота
                </p>
              </div>
            </div>
            
            <div className='flex items-center gap-2 shrink-0'>
              <ChevronRight size={18} className='text-white/30' />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default General;
