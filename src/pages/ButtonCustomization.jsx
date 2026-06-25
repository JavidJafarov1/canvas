import React, { useState } from 'react';
import { ChevronLeft, Palette, Rocket, MessageSquare, Check, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ButtonCustomization = () => {
  const navigate = useNavigate();

  // Local state for selecting options
  const [selectedOption, setSelectedOption] = useState('Option1'); // Option1, Option2, Option3, Option4

  // Option labels and preview texts
  const options = [
    {
      id: 'Option1',
      label: 'Підписатися / Запустити',
      icon: '/assets/images/purpleRocket.png',
      btn1: 'Підписатися',
      btn2: 'Запустити'
    },
    {
      id: 'Option2',
      label: 'Назва каналу/бота',
      icon: '/assets/images/yellowMsg.png',
      btn1: 'Канал 1',
      btn2: 'Бот 1'
    },
    {
      id: 'Option3',
      label: 'Підписатися 1, 2... (за замовч.)',
      icon: '/assets/images/vector6.png',
      btn1: 'Підписатися 1',
      btn2: 'Підписатися 2'
    },
    {
      id: 'Option4',
      label: 'Перейти',
      icon: '/assets/images/blueArrow.png',
      btn1: 'Перейти 1',
      btn2: 'Перейти 2'
    }
  ];

  const currentActive = options.find((opt) => opt.id === selectedOption) || options[0];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Paint/Edit Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-3 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

            <div className='w-[60px] h-[60px] rounded-full flex items-center justify-center z-10'>
              <img src="assets/images/editLine.png" alt="editLine" />
            </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-[34px]'>
          <h1 className='text-[16px] font-medium text-white text-center leading-tight mb-1 tracking-wide'>
            Кастомізація кнопок
          </h1>
          <p className='text-[#ffffff]/40 text-sm text-center px-2 leading-relaxed'>
            Оберіть стиль кнопок підписки.<br />
            Поточний: {currentActive.label}
          </p>
        </div>

        {/* Settings Cards Container */}
        <div className='px-4 flex flex-col gap-3'>
          
          {/* Card 1: Buttons Preview */}
          <div className='gradient-border-card rounded-[12px] p-4 flex flex-col gap-3' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}>
            
            {/* Card Header */}
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center gap-2'>
                <img src="assets/images/svg/Palette.svg" alt="paletteLine" />
                <span className='text-sm font-medium text-white'>Поточний стиль кнопок</span>
              </div>
            </div>
            <span className='text-[#ffffff]/40 text-[12px]'>Ім'я, щоб писати в чат, необхідно підписатись на канал:</span>

            {/* Buttons UI Previews */}
            <div className='flex flex-col gap-2.5 w-full'>
              <div className='w-full h-[44px] rounded-full flex items-center justify-center text-sm font-medium text-[#87ADF0] gradient-border-card'
                   style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
                {currentActive.btn1}
              </div>
              <div className='w-full h-[44px] rounded-full flex items-center justify-center text-sm font-medium text-[#87ADF0] gradient-border-card'
                   style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
                {currentActive.btn2}
              </div>
            </div>

          </div>

          {/* Card 2: Options List */}
          <div className='gradient-border-card rounded-[12px] p-3 flex flex-col gap-1.5' 
               style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}>
            
            {options.map((opt) => {
              const IconComp = opt.icon;
              const isActive = selectedOption === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedOption(opt.id)}
                  className={`p-3 flex items-center justify-between rounded-[12px] cursor-pointer transition-colors ${isActive ? 'gradient-border-card' : 'border-none'}`}
                  style={{ background: isActive ? 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' : 'transparent' }}
                >
                  <div className='flex items-center gap-3.5'>
                    {/* Circle icon wrapping */}
                    <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 ${opt.iconBg}`}>
                      <img src={opt.icon} alt="icon" />
                    </div>
                    <span className='text-[14px] font-medium text-white'>{opt.label}</span>
                  </div>

                  {/* Radio control */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isActive ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'
                  }`}>
                    {isActive && <div className='w-2 h-2 rounded-full bg-[#ffffff]' />}
                  </div>
                </div>
              );
            })}

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

export default ButtonCustomization;
