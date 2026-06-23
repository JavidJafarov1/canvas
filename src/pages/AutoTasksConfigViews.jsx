import React, { useState } from 'react';
import { ChevronLeft, ChevronUp, ChevronDown, Lightbulb, Check } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const LANGUAGES = [
  { code: 'en', label: 'English', flagSrc: 'https://flagcdn.com/w80/gb.png' },
  { code: 'uk', label: 'Українська', flagSrc: 'https://flagcdn.com/w80/ua.png' },
  { code: 'ru', label: 'Русский', flagSrc: 'https://flagcdn.com/w80/ru.png' },
  { code: 'ar', label: 'العربية', flagSrc: 'https://flagcdn.com/w80/sa.png' },
  { code: 'fa', label: 'فарсі', flagSrc: 'https://flagcdn.com/w80/ir.png' },
  { code: 'es', label: 'Español', flagSrc: 'https://flagcdn.com/w80/es.png' },
  { code: 'id', label: 'Indonesia', flagSrc: 'https://flagcdn.com/w80/id.png' },
  { code: 'hi', label: 'Hindi', flagSrc: 'https://flagcdn.com/w80/in.png' },
  { code: 'uz', label: "O'zbekcha", flagSrc: 'https://flagcdn.com/w80/uz.png' },
  { code: 'tr', label: 'Türkçe', flagSrc: 'https://flagcdn.com/w80/tr.png' },
  { code: 'kk', label: 'Казакша', flagSrc: 'https://flagcdn.com/w80/kz.png' },
  { code: 'fr', label: 'Français', flagSrc: 'https://flagcdn.com/w80/fr.png' },
  { code: 'de', label: 'Germani', flagSrc: 'https://flagcdn.com/w80/de.png' },
  { code: 'pt', label: 'Português', flagSrc: 'https://flagcdn.com/w80/pt.png' },
];

const QUICK_AMOUNTS = [10, 50, 100, 500];

const AutoTasksConfigViews = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const channel = location.state?.channel || null;

  const currentConfig = channel?.viewsConfig || {
    reward: 100,
    count: 100,
    audience: 'no_limit',
    selectedLangs: ['en']
  };

  const [audience, setAudience] = useState(currentConfig.audience === 'language' ? 'select' : 'all'); // 'all' | 'select'
  const [selectedLangs, setSelectedLangs] = useState(currentConfig.selectedLangs || ['en']);
  const [reward, setReward] = useState(String(currentConfig.reward || 100));
  const [count, setCount] = useState(String(currentConfig.count || 100));

  const toggleLang = (code) => {
    setSelectedLangs((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const handleRewardStep = (dir) => {
    setReward((prev) => {
      const n = (parseInt(prev) || 0) + dir * 10;
      return String(Math.max(0, n));
    });
  };

  const handleCountStep = (dir) => {
    setCount((prev) => {
      const n = (parseInt(prev) || 0) + dir * 10;
      return String(Math.max(0, n));
    });
  };

  const handleSave = () => {
    if (!channel) return;

    const updatedConfig = {
      reward: parseInt(reward) || 100,
      count: parseInt(count) || 100,
      audience: audience === 'select' ? 'language' : 'no_limit',
      selectedLangs: selectedLangs
    };

    const updatedChannel = {
      ...channel,
      viewsEnabled: true,
      viewsConfig: updatedConfig
    };

    const saved = localStorage.getItem('auto_tasks_channels');
    if (saved) {
      const current = JSON.parse(saved);
      const idx = current.findIndex(item => item.id === channel.id);
      if (idx !== -1) {
        current[idx] = updatedChannel;
        localStorage.setItem('auto_tasks_channels', JSON.stringify(current));
      }
    }

    navigate('/auto-tasks/config', { state: { channel: updatedChannel } });
  };

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 relative h-10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-0"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-semibold text-white absolute left-1/2 -translate-x-1/2">
            Перегляди
          </h1>
        </div>

        <div className="flex flex-col gap-3.5 mb-20">
          {/* Card 1: Audience Selector */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3.5 border border-white/5"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            <p className="text-[11px] text-white/50 leading-relaxed">
              Оберіть цільову аудиторію завдання
            </p>

            {/* Slider Switcher */}
            <div className="w-full h-11 bg-black/30 border border-white/5 rounded-full p-1 flex items-center relative overflow-hidden">
              <button
                onClick={() => setAudience('all')}
                className={`flex-1 h-full font-bold text-xs rounded-full transition-all cursor-pointer relative z-10 ${audience === 'all' ? 'text-[#0B0E21]' : 'text-white/60'}`}
              >
                Дозволити усім
              </button>
              <button
                onClick={() => setAudience('select')}
                className={`flex-1 h-full font-bold text-xs rounded-full transition-all cursor-pointer relative z-10 ${audience === 'select' ? 'text-[#0B0E21]' : 'text-white/60'}`}
              >
                Обрати аудиторію
              </button>
              {/* Sliding overlay block */}
              <div
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#87ADF0] rounded-full transition-all duration-300"
                style={{
                  left: audience === 'all' ? '4px' : 'calc(50%)'
                }}
              />
            </div>

            {/* Price Warning banner */}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5"
              style={{ background: 'rgba(255,192,0,0.08)', border: '1px solid rgba(255,192,0,0.1)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' className="w-4 h-4" />
              <p className="text-[11px] text-[#FFF0C4]">+25 GRAM до мін. ціни при застосуванні фільтра</p>
            </div>
          </div>

          {/* Card 2: Language Selector (visible if filter is set) */}
          {audience === 'select' && (
            <div
              className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3.5 border border-white/5"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
            >
              <p className="text-xs text-[#8A8D9F] font-semibold">Оберіть мови</p>
              <div className="grid grid-cols-2 gap-x-1.5 gap-y-2">
                {LANGUAGES.map((lang) => {
                  const isChecked = selectedLangs.includes(lang.code);
                  return (
                    <button
                      key={lang.code}
                      onClick={() => toggleLang(lang.code)}
                      className={`flex items-center justify-between p-[8px_12px] rounded-full transition-all cursor-pointer text-left ${isChecked
                        ? 'border border-[#87ADF0] shadow-[0_0_8px_rgba(135,173,240,0.15)] bg-[#1A1C2E]'
                        : 'gradient-border-card bg-[#1A1C2E]/40 border border-transparent hover:bg-[#1A1C2E]/60'
                        }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src={lang.flagSrc}
                          alt={lang.label}
                          className="w-5 h-5 rounded-[4px] object-cover"
                        />
                        <span className="text-[11px] font-medium text-white">{lang.label}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center border transition-all ${isChecked ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20 bg-transparent'
                          }`}
                      >
                        {isChecked && <Check className="w-2.5 h-2.5 text-white stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Card 3: Price View */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3 border border-white/5"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            <p className="text-[11px] text-white/50 leading-normal">
              Встановіть вартість за 1 перегляд посту
            </p>

            {/* Price Spinner input */}
            <div
              className="flex items-center justify-between rounded-full px-4 h-[44px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                type="number"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                className="bg-transparent text-white text-sm font-semibold w-full focus:outline-none"
              />
              <div className="flex flex-col ml-2">
                <button onClick={() => handleRewardStep(1)} className="text-white/40 hover:text-white cursor-pointer"><ChevronUp size={14} /></button>
                <button onClick={() => handleRewardStep(-1)} className="text-white/40 hover:text-white cursor-pointer"><ChevronDown size={14} /></button>
              </div>
            </div>

            {/* Recommendation info banner */}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5"
              style={{ background: 'rgba(255,192,0,0.08)', border: '1px solid rgba(255,192,0,0.1)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' className="w-4 h-4" />
              <p className="text-[10px] text-[#FFF0C4] leading-normal font-medium">
                <span className="text-[#FFC000] font-semibold">Рекомендація:</span> встановіть не нижче 300 GRAM для перших сторінок
              </p>
            </div>
          </div>

          {/* Card 4: Quantity input */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3.5 border border-white/5"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            <p className="text-[11px] text-white/50 leading-normal">
              Кількість виконань для кожного нового посту (1-10 000)
            </p>

            {/* Count Spinner input */}
            <div
              className="flex items-center justify-between rounded-full px-4 h-[44px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="bg-transparent text-white text-sm font-semibold w-full focus:outline-none"
              />
              <div className="flex flex-col ml-2">
                <button onClick={() => handleCountStep(1)} className="text-white/40 hover:text-white cursor-pointer"><ChevronUp size={14} /></button>
                <button onClick={() => handleCountStep(-1)} className="text-white/40 hover:text-white cursor-pointer"><ChevronDown size={14} /></button>
              </div>
            </div>

            {/* Quick Pills */}
            <div className="flex items-center gap-2">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setCount(String(amt))}
                  className="h-8 px-4 rounded-full text-xs font-semibold transition-all cursor-pointer"
                  style={{
                    background: parseInt(count) === amt ? 'rgba(135,173,240,0.15)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${parseInt(count) === amt ? '#87ADF0' : 'rgba(255,255,255,0.06)'}`,
                    color: parseInt(count) === amt ? '#87ADF0' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {amt}
                </button>
              ))}
              <button
                onClick={() => setCount('10000')}
                className="h-8 px-4 rounded-full text-xs font-semibold bg-white/5 border border-white/8 transition-all hover:bg-white/10 cursor-pointer text-white/50"
              >
                Макс
              </button>
            </div>

            {/* Balance banner row */}
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-white/40">Баланс:</span>
              <span className="font-semibold text-white/95 flex items-center gap-1">
                2 759 438,15 <img src='/assets/images/vector.png' alt='vector' className='w-3.5 h-3.5' />
              </span>
            </div>
          </div>
        </div>

        {/* Action button at the bottom */}
        <div className="mt-auto pt-4">
          <button
            onClick={handleSave}
            className="w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_16px_rgba(135,173,240,0.25)]"
          >
            Увімкнути перегляди
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AutoTasksConfigViews;
