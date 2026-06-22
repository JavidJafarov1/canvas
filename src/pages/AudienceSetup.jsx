import React, { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const LANGUAGES = [
  { code: 'en', label: 'English', flagSrc: 'https://flagcdn.com/w80/gb.png' },
  { code: 'uk', label: 'Українська', flagSrc: 'https://flagcdn.com/w80/ua.png' },
  { code: 'ru', label: 'Русский', flagSrc: 'https://flagcdn.com/w80/ru.png' },
  { code: 'ar', label: 'العربية', flagSrc: 'https://flagcdn.com/w80/sa.png' },
  { code: 'fa', label: 'فارسی', flagSrc: 'https://flagcdn.com/w80/ir.png' },
  { code: 'es', label: 'Español', flagSrc: 'https://flagcdn.com/w80/es.png' },
  { code: 'id', label: 'Indonesia', flagSrc: 'https://flagcdn.com/w80/id.png' },
  { code: 'hi', label: 'Hindi', flagSrc: 'https://flagcdn.com/w80/in.png' },
  { code: 'uz', label: "O'zbekcha", flagSrc: 'https://flagcdn.com/w80/uz.png' },
  { code: 'tr', label: 'Türkçe', flagSrc: 'https://flagcdn.com/w80/tr.png' },
  { code: 'kk', label: 'Казакша', flagSrc: 'https://flagcdn.com/w80/kz.png' },
  { code: 'fr', label: 'Français', flagSrc: 'https://flagcdn.com/w80/fr.png' },
  { code: 'de', label: 'Deutsch', flagSrc: 'https://flagcdn.com/w80/de.png' },
  { code: 'pt', label: 'Português', flagSrc: 'https://flagcdn.com/w80/pt.png' },
];

const AudienceSetup = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState('all'); // 'all' | 'premium'
  const [audienceType, setAudienceType] = useState('no_limit'); // 'no_limit' | 'language'
  const [selectedLangs, setSelectedLangs] = useState(['en']);

  const toggleLang = (code) => {
    setSelectedLangs((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">
        <div className='flex items-center justify-center mb-4'>
          {/* Header */}
          <div className="flex items-center justify-between absolute left-5">
            <button
              onClick={() => navigate(-1)}
              className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="w-6" />
          </div>

          <img src="/assets/images/vector31.png" alt="vector31" className="w-[60px] h-[60px]" />
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold text-white text-center mb-3">
          Аудиторія та тип аккаунта
        </h1>

        {/* Step Progress */}
        <div className="flex items-center justify-center gap-[5px] mb-6 w-full max-w-[200px] mx-auto">
          {/* Step 1 - done */}
          <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center">
            <Check size={12} className="text-white stroke-[3]" />
          </div>
          <div className="h-[2px] flex-1 rounded-full bg-[#87ADF0]/40" />
          {/* Step 2 - active */}
          <div className="w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0">
            2
          </div>
          <div className="h-[2px] flex-1 rounded-full bg-white/10" />
          {/* Step 3 - inactive */}
          <div className='w-5 h-5 rounded-full shrink-0 flex items-center justify-center'
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className='w-3 h-3 rounded-full bg-white/8' />
          </div>
        </div>

        {/* Account Type Section */}
        <div
          className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-2 mb-3"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
        >
          <p className="text-xs text-[#8A8D9F] font-medium mb-1">Тип акаунта</p>

          {/* All Users Option */}
          <button
            onClick={() => setAccountType('all')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer"
            style={{
              background: accountType === 'all'
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${accountType === 'all' ? 'rgba(135,173,240,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <img src="/assets/images/vector10.png" alt="users" className="w-[44px]" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Усі користувачі</p>
                <p className="text-[11px] text-white/40">Завдання доступне всім</p>
              </div>
            </div>
            {/* Radio */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${accountType === 'all' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {accountType === 'all' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>

          {/* Premium Only Option */}
          <button
            onClick={() => setAccountType('premium')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer"
            style={{
              background: accountType === 'premium'
                ? 'linear-gradient(128.85deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0) 100%), linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'
                : 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)',
              border: `1px solid ${accountType === 'premium' ? 'rgba(255, 192, 0, 0.35)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              {/* vector32-active */}
              <img src={accountType === 'premium' ? '/assets/images/vector32-active.png' : '/assets/images/vector32.png'} alt='vector32-active' className='w-[44px]' />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Лише Telegram Premium</p>
                <p className="text-[11px] text-white/40">Тільки для користувачів із Premium</p>
              </div>
            </div>
            {/* Radio */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${accountType === 'premium' ? 'border-[#FFC000] bg-[#FFC000]' : 'border-white/20'}`}>
              {accountType === 'premium' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>
        </div>

        {/* Audience Section */}
        <div
          className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-2 mb-3"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
        >
          <p className="text-xs text-[#8A8D9F] font-medium mb-1">Аудиторія</p>

          {/* No Limit Option */}
          <button
            onClick={() => setAudienceType('no_limit')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer"
            style={{
              background: audienceType === 'no_limit'
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${audienceType === 'no_limit' ? 'rgba(135,173,240,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <img src='/assets/images/vector33.png' alt='vector33' className='w-[44px]' />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Без обмежень</p>
                <p className="text-[11px] text-white/40">Будь-який користувач може виконати</p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${audienceType === 'no_limit' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {audienceType === 'no_limit' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>

          {/* Language Filter Option */}
          <button
            onClick={() => setAudienceType('language')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer"
            style={{
              background: audienceType === 'language'
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${audienceType === 'language' ? 'rgba(135,173,240,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              {/* <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: audienceType === 'language' ? 'rgba(135,173,240,0.1)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${audienceType === 'language' ? 'rgba(135,173,240,0.2)' : 'rgba(255,255,255,0.1)'}`,
                }}
              >
                <img src="/assets/images/vector34.png" alt="vector34" className="w-[24px]" />
              </div> */}
              <img src='/assets/images/vector33.png' alt='vector33' className='w-[44px]' />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Фільтр за мовою</p>
                <p className="text-[11px] text-white/40">Показувати тільки користувачам<br />з певною мовою Telegram</p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${audienceType === 'language' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {audienceType === 'language' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>

          {/* Price warning banner - shown when language filter active */}
          {audienceType === 'language' && (
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5 mt-1"
              style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(255,192,0,5%)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' />
              <p className="text-[11px] text-[#EAB308]">Фільтр додає +100 G до мінімальної ціни</p>
            </div>
          )}
        </div>

        {/* Language Grid - shown when language filter active */}
        {audienceType === 'language' && (
          <div
            className="gradient-border-card rounded-[20px] p-4 mb-3"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            <p className="text-xs text-[#8A8D9F] font-medium mb-3">Оберіть мови</p>
            <div className="grid grid-cols-2 gap-x-1 gap-y-1.5">
              {LANGUAGES.map((lang) => {
                const isSelected = selectedLangs.includes(lang.code);
                return (
                  <div
                    key={lang.code}
                    onClick={() => toggleLang(lang.code)}
                    className={`flex items-center justify-between p-[8px_12px] rounded-full transition-all cursor-pointer ${isSelected
                        ? 'border border-[#87ADF0] shadow-[0_0_8px_rgba(135,173,240,0.15)]'
                        : 'gradient-border-card bg-[#1A1C2E]/40 hover:bg-[#1A1C2E]/60'
                      }`}
                  >
                    <div className='flex items-center gap-2'>
                      <img
                        src={lang.flagSrc}
                        alt={lang.label}
                        className='w-5 h-5 rounded-[4px] object-cover'
                      />
                      <span className='text-xs font-medium text-white'>{lang.label}</span>
                    </div>
                    {/* Radio dot */}
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
          </div>
        )}

        {/* Continue Button */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => navigate('/task-price')}
            className="w-full h-[48px] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_16px_rgba(135,173,240,0.25)]"
            style={{ background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)', color: '#0B0E21' }}
          >
            Продовжити
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default AudienceSetup;
