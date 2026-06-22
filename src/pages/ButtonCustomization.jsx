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
      icon: Rocket,
      iconBg: 'bg-[#7C3AED]/20 border border-[#7C3AED]/15',
      iconColor: 'text-[#C084FC]',
      btn1: 'Підписатися',
      btn2: 'Запустити'
    },
    {
      id: 'Option2',
      label: 'Назва каналу/бота',
      icon: MessageSquare,
      iconBg: 'bg-[#D97706]/20 border border-[#D97706]/15',
      iconColor: 'text-[#FBBF24]',
      btn1: 'Канал 1',
      btn2: 'Бот 1'
    },
    {
      id: 'Option3',
      label: 'Підписатися 1, 2... (за замовч.)',
      icon: Check,
      iconBg: 'bg-[#059669]/20 border border-[#059669]/15',
      iconColor: 'text-[#34D399]',
      btn1: 'Підписатися 1',
      btn2: 'Підписатися 2'
    },
    {
      id: 'Option4',
      label: 'Перейти',
      icon: ArrowUpRight,
      iconBg: 'bg-[#2563EB]/20 border border-[#2563EB]/15',
      iconColor: 'text-[#60A5FA]',
      btn1: 'Перейти 1',
      btn2: 'Перейти 2'
    }
  ];

  const currentActive = options.find((opt) => opt.id === selectedOption) || options[0];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col justify-between pb-8 overflow-y-auto hide-scrollbar'>
      
      <div>
        {/* Top Header Row with Back Button and Paint/Edit Icon */}
        <div className='relative w-full flex items-center justify-center mt-6 mb-6 px-4'>
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className='absolute left-4 text-[#545664] hover:text-white transition-colors cursor-pointer z-10'
          >
            <ChevronLeft size={24} />
          </button>

          {/* Top Customization Icon with concentric circles */}
          <div className='relative flex items-center justify-center w-[76px] h-[76px]'>
            {/* Glowing outer circle */}
            <div className='absolute w-[76px] h-[76px] rounded-full border border-[#87ADF0]/10 flex items-center justify-center'
                 style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(135, 173, 240, 0.08) 0%, rgba(135, 173, 240, 0) 100%)' }} />
            {/* Middle border circle */}
            <div className='absolute w-[60px] h-[60px] rounded-full border border-[#87ADF0]/20 flex items-center justify-center' />
            {/* Inner solid circle with shadow */}
            <div className='w-[48px] h-[48px] rounded-full bg-[#181D38] border border-[#87ADF0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(135,173,240,0.25)] z-10'>
              <Palette size={20} className='text-[#87ADF0]' />
            </div>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className='flex flex-col items-center px-6 mb-8'>
          <h1 className='text-[20px] font-bold text-white text-center leading-tight mb-2 tracking-wide'>
            Кастомізація кнопок
          </h1>
          <p className='text-[#8A8D9F] text-xs text-center px-4 leading-relaxed'>
            Оберіть стиль кнопок підписки.<br />
            Поточний: {currentActive.label}
          </p>
        </div>

        {/* Settings Cards Container */}
        <div className='px-4 flex flex-col gap-4'>
          
          {/* Card 1: Buttons Preview */}
          <div className='gradient-border-card rounded-[20px] p-5 flex flex-col gap-4' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {/* Card Header */}
            <div className='flex items-center gap-2.5 mb-1.5'>
              <div className='w-7 h-7 rounded-lg bg-[#87ADF0]/10 flex items-center justify-center shrink-0'>
                <Palette size={16} className='text-[#87ADF0]' />
              </div>
              <div className='flex flex-col'>
                <span className='text-xs font-semibold text-white'>Поточний стиль кнопок</span>
                <span className='text-[#8A8D9F] text-[10px] mt-0.5'>Ім'я, щоб писати в чат, необхідно підписатись на канал:</span>
              </div>
            </div>

            {/* Buttons UI Previews */}
            <div className='flex flex-col gap-2.5 w-full'>
              <div className='w-full h-[44px] rounded-full border border-white/[0.08] flex items-center justify-center text-sm font-semibold text-[#87ADF0]'
                   style={{ background: 'linear-gradient(180deg, rgba(135,173,240,0.06) 0%, rgba(135,173,240,0.02) 100%)' }}>
                {currentActive.btn1}
              </div>
              <div className='w-full h-[44px] rounded-full border border-white/[0.08] flex items-center justify-center text-sm font-semibold text-[#87ADF0]'
                   style={{ background: 'linear-gradient(180deg, rgba(135,173,240,0.06) 0%, rgba(135,173,240,0.02) 100%)' }}>
                {currentActive.btn2}
              </div>
            </div>

          </div>

          {/* Card 2: Options List */}
          <div className='gradient-border-card rounded-[20px] p-2 flex flex-col gap-1.5' 
               style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%), #131526' }}>
            
            {options.map((opt) => {
              const IconComp = opt.icon;
              const isActive = selectedOption === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedOption(opt.id)}
                  className='p-3.5 flex items-center justify-between hover:bg-white/[0.01] rounded-2xl cursor-pointer transition-colors'
                >
                  <div className='flex items-center gap-3.5'>
                    {/* Circle icon wrapping */}
                    <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center shrink-0 ${opt.iconBg}`}>
                      <IconComp size={18} className={opt.iconColor} />
                    </div>
                    <span className='text-[14px] font-semibold text-white'>{opt.label}</span>
                  </div>

                  {/* Radio control */}
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isActive ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'
                  }`}>
                    {isActive && <div className='w-2 h-2 rounded-full bg-[#0B0E21]' />}
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
          className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center cursor-pointer transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          Зберегти
        </button>
      </div>

    </div>
  );
};

export default ButtonCustomization;
