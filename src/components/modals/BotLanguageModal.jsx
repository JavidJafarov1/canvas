import React, { useState } from 'react';
import { Bot } from 'lucide-react';

const languagesList = [
  {
    code: 'en',
    name: 'English',
    flag: (
      <img src='https://flagcdn.com/w80/gb.png' alt='English' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'uk',
    name: 'Українська',
    flag: (
      <img src='https://flagcdn.com/w80/ua.png' alt='Ukrainian' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'ru',
    name: 'Русский',
    flag: (
      <img src='https://flagcdn.com/w80/ru.png' alt='Russian' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'ar',
    name: 'العربية',
    flag: (
      <img src='https://flagcdn.com/w80/sa.png' alt='Arabic' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'fa',
    name: 'فارسی',
    flag: (
      <img src='https://flagcdn.com/w80/ir.png' alt='Persian' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'es',
    name: 'Español',
    flag: (
      <img src='https://flagcdn.com/w80/es.png' alt='Spanish' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'id',
    name: 'Indonesia',
    flag: (
      <img src='https://flagcdn.com/w80/id.png' alt='Indonesian' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'hi',
    name: 'Hindi',
    flag: (
      <img src='https://flagcdn.com/w80/in.png' alt='Hindi' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'uz',
    name: 'O\'zbekcha',
    flag: (
      <img src='https://flagcdn.com/w80/uz.png' alt='Uzbek' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'tr',
    name: 'Türkçe',
    flag: (
      <img src='https://flagcdn.com/w80/tr.png' alt='Turkish' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'kk',
    name: 'Казакша',
    flag: (
      <img src='https://flagcdn.com/w80/kz.png' alt='Kazakh' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'fr',
    name: 'Français',
    flag: (
      <img src='https://flagcdn.com/w80/fr.png' alt='French' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'de',
    name: 'Germani',
    flag: (
      <img src='https://flagcdn.com/w80/de.png' alt='German' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  },
  {
    code: 'pt',
    name: 'Português',
    flag: (
      <img src='https://flagcdn.com/w80/pt.png' alt='Portuguese' className='w-5 h-5 rounded-[4px] object-cover' />
    )
  }
];

const BotLanguageModal = ({ isOpen, onClose, selectedLanguage, onSelectLanguage }) => {
  const [tempLang, setTempLang] = useState(selectedLanguage || 'en');

  if (!isOpen) return null;

  const handleSelect = () => {
    onSelectLanguage(tempLang);
    onClose();
  };

  return (
    <div className='fixed inset-y-0 left-1/2 -translate-x-1/2 max-w-[375px] w-full bg-[#0B0E21]/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn'>
      <div
        className='w-full max-w-[335px] rounded-[24px] py-8 px-5 flex flex-col items-center border border-white/5 justify-between relative overflow-hidden'
        style={{
          background: 'linear-gradient(155.83deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 32.55%, rgba(135, 173, 240, 0.02) 61.12%), #0B0E21'
        }}
      >
        {/* Bot Icon Circle */}
        <img src='/assets/images/vector18.png' alt='vector18' className='' />

        {/* Title & Subtitle */}
        <h2 className='text-lg font-medium text-white text-center tracking-wide mb-1'>Bot language</h2>
        <p className='text-xs text-white/40 text-center mb-4'>Select bot messages language</p>

        {/* Language Grid */}
        <div className='grid grid-cols-2 gap-x-1 gap-y-1.5 w-full mb-4 max-h-[300px] overflow-y-auto pr-1 hide-scrollbar'>
          {languagesList.map((lang) => {
            const isSelected = tempLang === lang.code;
            return (
              <div
                key={lang.code}
                onClick={() => setTempLang(lang.code)}
                className={`flex items-center justify-between p-[8px_12px] rounded-full transition-all cursor-pointer ${isSelected
                  ? 'border border-[#87ADF0] bg-[#87ADF0]/10 shadow-[0_0_8px_rgba(135,173,240,0.15)]'
                  : 'gradient-border-card bg-[#1A1C2E]/40 hover:bg-[#1A1C2E]/60'
                  }`}
              >
                <div className='flex items-center gap-2'>
                  {lang.flag}
                  <span className='text-xs font-medium transition-colors text-white'>
                    {lang.name}
                  </span>
                </div>

                {/* Radio Circle */}
                <div
                  className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${isSelected ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20 bg-transparent'
                    }`}
                >
                  {isSelected && <div className='w-1.5 h-1.5 rounded-full bg-white' />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Select Button */}
        <button
          onClick={handleSelect}
          className='w-full h-[44px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center active:scale-95 transition-all shadow-[0_4px_12px_rgba(135,173,240,0.2)]'
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default BotLanguageModal;
