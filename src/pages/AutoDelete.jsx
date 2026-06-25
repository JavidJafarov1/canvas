import React, { useState } from 'react';
import { ChevronLeft, Trash2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AutoDelete = () => {
  const navigate = useNavigate();
  const [enabled, setEnabled] = useState(true);
  const [interval, setInterval] = useState('45s');

  const intervals = ['15s', '30s', '45s', '1m', '2m', '3m', '4m', '5m'];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Trash Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
              <img src="assets/images/trashLine.png" alt="trash" className='text-[#87ADF0]' />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
            Автовидалення повідомлень
          </h1>
          <p className='text-[#ffffff]/40 text-sm text-center px-4'>
            Повідомлення бота зникають через заданий час (15с - 5хв)
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-4 divide-y divide-white/[0.06]' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Toggle Section */}
            <div className='flex flex-col gap-2.5 pb-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2.5'>
                  <img src="assets/images/svg/Trash Bin 2.svg" size={20} className='text-[#FF4973]' />
                  <span className='text-sm font-medium text-white'>Автовидалення</span>
                </div>
                
                {/* Custom Toggle Switch */}
                <div
                  onClick={() => setEnabled(!enabled)}
                  className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors ${enabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${enabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
                </div>
              </div>
              <p className='text-[#ffffff]/40 text-[12px] leading-relaxed pr-6'>
                Повідомлення PR GRAM автоматично видаляються після встановленого часу.
              </p>
            </div>

            {/* Interval Section */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2.5'>
                <img src="assets/images/svg/AlarmBlue.svg" size={20} className='text-[#87ADF0]' />
                <span className='text-sm font-medium text-white'>Інтервал видалення</span>
              </div>

              {/* Grid Selector */}
              <div className='grid grid-cols-4 gap-2'>
                {intervals.map((item) => {
                  const isActive = interval === item;
                  return (
                    <button
                      key={item}
                      onClick={() => setInterval(item)}
                      className={`gradient-border-card h-[36px] rounded-full text-xs flex items-center justify-center transition-all cursor-pointer ${
                        isActive
                          ? 'border border-[#87ADF0] text-[#87ADF0]'
                          : 'text-[#ffffff]'
                      }`}
                      style={{ background: isActive? "transparent" : "rgba(255, 255, 255, 0.05)" }}
                    >
                      {item}
                    </button>
                  );
                })}
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

export default AutoDelete;
