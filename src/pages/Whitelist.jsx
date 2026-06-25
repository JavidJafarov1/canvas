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
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
              <img src="assets/images/userLine.png" alt="user" />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-[34px]'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
            Білий список
          </h1>
          <p className='text-[#ffffff]/40 text-sm text-center px-2'>
            Додайте учасників, яких потрібно звільнити від виконання умов обов'язкової підписки. Учасники з білого списку зможуть писати без обмежень.
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-3' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}>
            
            {/* Card Header Title */}
            <div className='flex items-center gap-2 mb-1'>
              <img src="assets/images/svg/User Plus Rounded.svg" alt="user" />
              <span className='text-sm font-medium text-white'>Додати учасників</span>
            </div>

            {/* Input Row */}
            <div className='flex gap-2.5 items-center w-full'>
              <div className='gradient-border-card rounded-full flex-1'>
                <input 
                  type='text' 
                  placeholder='@username або User ID'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='w-full h-[44px] rounded-full px-5 text-sm text-white placeholder-white/40 focus:outline-none'
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                />
              </div>
              
              <button 
                onClick={handleAdd}
                className='h-[44px] px-6 rounded-full text-sm font-medium text-[#87ADF0] gradient-border-card flex items-center justify-center cursor-pointer shrink-0'
                style={{ background: 'linear-gradient(135deg, rgba(135, 173, 240, 0.15) 0%, rgba(135, 173, 240, 0.03) 100%)' }}
              >
                Додати
              </button>
            </div>

            {/* Counter details */}
            <span className='text-[#ffffff]/40 text-[12px] pl-1'>
              {memberCount} / 100 учасників
            </span>

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

export default Whitelist;
