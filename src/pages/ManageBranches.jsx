import React, { useState } from 'react';
import { ChevronLeft, Globe, GitBranch, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CursorBubbleIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="6" fill="#FF4973" fillOpacity="0.15" />
    <rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#FF4973" strokeOpacity="0.2" />
    <path d="M7 6L14 9.5L11 11L12.5 14L11 15L9.5 12L7 13V6Z" fill="#FF4973" />
  </svg>
);

const ManageBranches = () => {
  const navigate = useNavigate();
  
  // Local state for each switch
  const [generalEnabled, setGeneralEnabled] = useState(true);
  const [test1Enabled, setTest1Enabled] = useState(false);
  const [test2Enabled, setTest2Enabled] = useState(false);
  const [test3Enabled, setTest3Enabled] = useState(false);

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Branch/Hierarchy Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top Branch Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <GitBranch size={20} className='text-[#87ADF0] rotate-180' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Керування гілками
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-4'>
            Виберіть, у яких топіках перевіряти підписку
          </p>
        </div>

        {/* Settings Card Wrapper */}
        <div className='px-4'>
          <div className='gradient-border-card rounded-[20px] flex flex-col divide-y divide-white/[0.06] overflow-hidden' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Row 1: General */}
            <div className='p-4 flex items-center justify-between hover:bg-white/[0.01] transition-colors'>
              <div className='flex items-center gap-3.5'>
                {/* Icon Container */}
                <div className='w-[44px] h-[44px] rounded-full bg-[#1A1E36] border border-[#87ADF0]/10 flex items-center justify-center shrink-0'>
                  <Globe size={18} className='text-[#87ADF0]' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-white'>General</span>
                  <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Основні новини та оновлення</span>
                </div>
              </div>
              
              {/* Toggle Switch */}
              <div
                onClick={() => setGeneralEnabled(!generalEnabled)}
                className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors shrink-0 ${generalEnabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${generalEnabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* Row 2: TEST 1 */}
            <div className='p-4 flex items-center justify-between hover:bg-white/[0.01] transition-colors'>
              <div className='flex items-center gap-3.5'>
                <CursorBubbleIcon className='w-[44px] h-[44px] shrink-0' />
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-white'>TEST 1</span>
                  <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Тестовий топік 1</span>
                </div>
              </div>
              
              {/* Toggle Switch */}
              <div
                onClick={() => setTest1Enabled(!test1Enabled)}
                className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors shrink-0 ${test1Enabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${test1Enabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* Row 3: TEST 2 */}
            <div className='p-4 flex items-center justify-between hover:bg-white/[0.01] transition-colors'>
              <div className='flex items-center gap-3.5'>
                <CursorBubbleIcon className='w-[44px] h-[44px] shrink-0' />
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-white'>TEST 2</span>
                  <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Тестовий топік 2</span>
                </div>
              </div>
              
              {/* Toggle Switch */}
              <div
                onClick={() => setTest2Enabled(!test2Enabled)}
                className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors shrink-0 ${test2Enabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${test2Enabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* Row 4: TEST 3 */}
            <div className='p-4 flex items-center justify-between hover:bg-white/[0.01] transition-colors'>
              <div className='flex items-center gap-3.5'>
                <CursorBubbleIcon className='w-[44px] h-[44px] shrink-0' />
                <div className='flex flex-col'>
                  <span className='text-sm font-semibold text-white'>TEST 3</span>
                  <span className='text-[#8A8D9F] text-[11px] mt-0.5'>Тестовий топік 3</span>
                </div>
              </div>
              
              {/* Toggle Switch */}
              <div
                onClick={() => setTest3Enabled(!test3Enabled)}
                className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors shrink-0 ${test3Enabled ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${test3Enabled ? 'translate-x-[18px]' : 'translate-x-0'}`} />
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

export default ManageBranches;
