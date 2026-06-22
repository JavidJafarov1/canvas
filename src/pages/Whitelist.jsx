import React, { useState } from 'react';
import { ChevronLeft, UserCheck, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Whitelist = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [memberCount, setMemberCount] = useState(0);

  const handleAdd = () => {
    if (inputValue.trim()) {
      setMemberCount((prev) => Math.min(prev + 1, 100));
      setInputValue('');
    }
  };

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Whitelist/User Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top User Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <UserCheck size={20} className='text-[#87ADF0]' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Білий список
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-2 leading-relaxed'>
            Додайте учасників, яких потрібно звільнити від виконання умов обов'язкової підписки. Учасники з білого списку зможуть писати без обмежень.
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[20px] p-5 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Card Header Title */}
            <div className='flex items-center gap-2.5 mb-1'>
              <UserPlus size={18} className='text-[#87ADF0]' />
              <span className='text-sm font-semibold text-white'>Додати учасників</span>
            </div>

            {/* Input Row */}
            <div className='flex gap-2.5 items-center w-full'>
              <div className='gradient-border-card rounded-full flex-1'>
                <input 
                  type='text' 
                  placeholder='@username або User ID'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='w-full h-[44px] rounded-full px-5 text-sm text-white placeholder-white/20 focus:outline-none'
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                />
              </div>
              
              <button 
                onClick={handleAdd}
                className='h-[44px] px-6 rounded-full text-xs font-bold text-[#87ADF0] border border-[#87ADF0]/15 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all shrink-0'
                style={{ background: 'linear-gradient(135deg, rgba(135, 173, 240, 0.15) 0%, rgba(135, 173, 240, 0.03) 100%)' }}
              >
                Додати
              </button>
            </div>

            {/* Counter details */}
            <span className='text-[#8A8D9F] text-[11px] font-medium pl-1'>
              {memberCount} / 100 учасників
            </span>

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

export default Whitelist;
