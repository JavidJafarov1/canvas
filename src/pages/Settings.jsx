import React, { useState } from 'react';
import {
  ChevronLeft,
  Languages,
  Globe,
  Bot,
  Palette,
  Moon,
  AlarmClock,
  Trash2,
  Clock,
  ChevronRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import LanguageModal from '../components/modals/LanguageModal';
import BotLanguageModal from '../components/modals/BotLanguageModal';

const Settings = () => {
  const navigate = useNavigate();
  const [darkTheme, setDarkTheme] = useState(true);
  const [autoDelete, setAutoDelete] = useState(false);
  const [interval, setInterval] = useState('45s');
  const [interfaceLang, setInterfaceLang] = useState('en');
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [botLang, setBotLang] = useState('en');
  const [showBotLanguageModal, setShowBotLanguageModal] = useState(false);

  const intervals = ['15s', '30s', '45s', '1m', '2m', '3m', '4m', '5m'];

  const languageNames = {
    en: 'English',
    uk: 'Українська',
    ru: 'Русский',
    ar: 'العربية',
    fa: 'فارسی',
    es: 'Español',
    id: 'Indonesia',
    hi: 'Hindi',
    uz: "O'zbekcha",
    tr: 'Türkçe',
    kk: 'Казакша',
    fr: 'Français',
    de: 'Germani',
    pt: 'Português'
  };

  const getFlag = (langCode) => {
    return (
      <img
        src={`https://flagcdn.com/w80/${langCode === 'en' ? 'gb' : langCode === 'kk' ? 'kz' : langCode === 'uk' ? 'ua' : langCode}.png`}
        alt={langCode}
        className='w-5 h-5 rounded-[4px] object-cover'
      />
    );
  };

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full min-h-screen relative font-sans text-white flex flex-col pb-6'>
      {/* Header */}
      <div className='flex items-center justify-center relative p-[22px_15px] border-b border-white/10'>
        <button
          onClick={() => navigate(-1)}
          className='absolute left-4 text-[#8A8D9F] hover:text-white transition-colors cursor-pointer'
        >
          <ChevronLeft size={24} />
        </button>
        <h1 className='text-base font-semibold'>Settings</h1>
      </div>

      <div className='flex-1 overflow-y-auto px-3.5 py-4 flex flex-col gap-6'>

        {/* LANGUAGE SETTINGS */}
        <div>
          <div className='flex items-center gap-1.5 mb-2'>
            <img src='/assets/images/svg/translation.svg' alt='translation' />
            <h2 className='text-[13px] font-semibold text-[#8A8D9F] uppercase tracking-wider'>Language Settings</h2>
          </div>

          <div className='gradient-border-card rounded-2xl flex flex-col' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
            {/* Interface language */}
            <div
              onClick={() => setShowLanguageModal(true)}
              className='flex items-center justify-between p-3 border-b border-[#2A2D3D] cursor-pointer hover:bg-white/[0.02] transition-colors'
            >
              <div className='flex items-center gap-3'>
                <img src='/assets/images/vector16.png' alt='vector16' />
                <div>
                  <h3 className='font-medium text-sm'>Interface language</h3>
                  <p className='text-white/40 text-xs mt-1'>{languageNames[interfaceLang]}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                {getFlag(interfaceLang)}
                <ChevronRight size={18} className='text-[#5A5D72]' />
              </div>
            </div>

            {/* Bot language */}
            <div
              onClick={() => setShowBotLanguageModal(true)}
              className='flex items-center justify-between p-3 cursor-pointer hover:bg-white/[0.02] transition-colors'
            >
              <div className='flex items-center gap-3'>
                <img src='/assets/images/vector18.png' alt='vector18' />
                <div>
                  <h3 className='font-medium text-sm'>Bot language</h3>
                  <p className='text-white/40 text-xs mt-1'>{languageNames[botLang]}</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                {getFlag(botLang)}
                <ChevronRight size={18} className='text-[#5A5D72]' />
              </div>
            </div>
          </div>
        </div>

        {/* INTERFACE THEME */}
        <div>
          <div className='flex items-center gap-1.5 mb-2 px-1'>
            <Palette size={20} className='text-white/30' />
            <h2 className='text-[13px] font-semibold text-white/40 uppercase tracking-wider'>Interface Theme</h2>
          </div>

          <div className='gradient-border-card rounded-xl p-3 flex items-center justify-between' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
            <div className='flex items-center gap-3'>
              <img src='/assets/images/vector19.png' alt='vector19' />
              <h3 className='font-medium text-[15px]'>Dark theme</h3>
            </div>

            {/* Toggle Switch */}
            <div
              className={`w-[42px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors ${darkTheme ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
              onClick={() => setDarkTheme(!darkTheme)}
            >
              <div className={`w-5 h-5 rounded-full bg-white transition-transform ${darkTheme ? 'translate-x-[18px]' : 'translate-x-0'}`} />
            </div>
          </div>
        </div>

        {/* AUTO-DELETE MESSAGES */}
        <div>
          <div className='flex items-center gap-2 mb-2'>
            <AlarmClock size={18} className='text-[#8A8D9F]' />
            <h2 className='text-[13px] font-semibold text-white/40 uppercase tracking-wider'>Auto-delete Messages</h2>
          </div>

          <div className='gradient-border-card rounded-2xl flex flex-col' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
            {/* Auto-delete toggle */}
            <div className='flex items-center justify-between px-2.5 py-3 border-b border-[#2A2D40]/50'>
              <div className='flex items-center gap-3 pr-4'>
                <img src='/assets/images/vector20.png' alt='vector20' />
                <div>
                  <h3 className='font-medium text-[15px]'>Auto-delete</h3>
                  <p className='text-white/40 text-xs mt-1 leading-snug'>PR GRAM messages are automatically deleted after the set time.</p>
                </div>
              </div>

              {/* Toggle Switch */}
              <div
                className={`w-[42px] h-[24px] shrink-0 rounded-full p-[2px] cursor-pointer transition-colors ${autoDelete ? 'bg-[#87ADF0]' : 'bg-[#2A2D40]'}`}
                onClick={() => setAutoDelete(!autoDelete)}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${autoDelete ? 'translate-x-[18px]' : 'translate-x-0'}`} />
              </div>
            </div>

            {/* Deletion interval */}
            <div className='p-3'>
              <div className='flex items-center gap-3 mb-3'>
                <img src='/assets/images/vector21.png' alt='vector21' />
                <h3 className='font-medium text-[15px]'>Deletion interval</h3>
              </div>

              <div className='grid grid-cols-4 gap-1'>
                {intervals.map((item) => (
                  <button
                    key={item}
                    onClick={() => setInterval(item)}
                    className={`py-2 rounded-full text-[13px] font-medium transition-all ${interval === item
                      ? 'text-[#87ADF0] border border-[#87ADF0]'
                      : 'bg-white/5 gradient-border-card text-white border border-transparent hover:bg-[#2A2D40]'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Save Button */}
      <div className='px-4 mt-auto'>
        <button
          onClick={() => navigate(-1)}
          className='w-full bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-medium text-[15px] py-[13px] rounded-full transition-colors'
        >
          Save
        </button>
      </div>

      <LanguageModal
        isOpen={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
        selectedLanguage={interfaceLang}
        onSelectLanguage={setInterfaceLang}
      />

      <BotLanguageModal
        isOpen={showBotLanguageModal}
        onClose={() => setShowBotLanguageModal(false)}
        selectedLanguage={botLang}
        onSelectLanguage={setBotLang}
      />

    </div>
  );
};

export default Settings;
