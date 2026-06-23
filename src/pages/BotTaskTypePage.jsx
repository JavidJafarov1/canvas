import React, { useState } from 'react';
import { ChevronLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const BOT_ICON = '/assets/images/vector28.png';

const PROHIBITED = [
  'Введення особистих даних (ім\'я, телефон, email)',
  'Поповнення рахунку в будь-якій формі',
  'Умови, що потребують понад 10 хв',
  'Підключення до сторонніх сервісів (OAuth, AP1)',
  'Завантаження будь-яких файлів',
  'Залучення третіх осіб (друзів, рефералів)',
  'Проходження верифікації або КУС',
  'Запуск платних ботів / сервісів',
  'Переходи за підозрілими посиланнями',
];

const BotTaskTypePage = () => {
  const navigate = useNavigate();
  const [taskType, setTaskType] = useState('simple'); // 'simple' | 'conditions'
  const [conditionsText, setConditionsText] = useState('');

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">

        {/* Header + Icon */}
        <div className='flex items-center justify-center mb-4'>
          <div className="flex items-center justify-between absolute left-5">
            <button onClick={() => navigate(-1)} className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer">
              <ChevronLeft size={16} />
            </button>
            <div className="w-6" />
          </div>
          <img src={BOT_ICON} alt="bot-icon" className="w-[60px] h-[60px]" />
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold text-white text-center mb-3">Тип завдання</h1>

        {/* 4-Step Progress — Step 2 active, Step 1 done */}
        <div className="flex items-center justify-center gap-[5px] mb-6 w-full max-w-[220px] mx-auto">
          {/* Step 1 — done */}
          <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center shrink-0">
            <Check size={11} className="text-white stroke-[3]" />
          </div>
          <div className="h-[2px] flex-1 rounded-full bg-[#87ADF0]/50" />
          {/* Step 2 — active */}
          <div
            className="w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0"
            style={{ boxShadow: '0 0 8px rgba(135,173,240,0.3)' }}
          >
            2
          </div>
          <div className="h-[1px] flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          {/* Step 3 — inactive */}
          <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>
          <div className="h-[1px] flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          {/* Step 4 — inactive */}
          <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>
        </div>

        {/* Task Type Cards */}
        <div
          className="gradient-border-card rounded-[20px] p-3 flex flex-col gap-2 mb-3"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
        >
          {/* Simple launch option */}
          <button
            onClick={() => setTaskType('simple')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer gradient-border-card"
            style={{
              background: taskType === 'simple'
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
            }}
          >
            <div className="flex items-center gap-3">
              <img src="/assets/images/vector36.png" alt="bot" className="w-[44px]" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Запуск бота</p>
                <p className="text-[11px] text-white/40">Користувач натискає /start у вашому боті</p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${taskType === 'simple' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {taskType === 'simple' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>

          {/* With conditions option */}
          <button
            onClick={() => setTaskType('conditions')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer gradient-border-card"
            style={{
              background: taskType === 'conditions'
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
            }}
          >
            <div className="flex items-center gap-3">
              <img src="/assets/images/vector37.png" alt="vector37" className="w-[44px]" />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">З додатковими умовами</p>
                <p className="text-[11px] text-white/40">Запуск бота + виконання додаткових дій</p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${taskType === 'conditions' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {taskType === 'conditions' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>
          {/* Conditions section — shown when 'conditions' selected */}
          {taskType === 'conditions' && (
            <div className="flex flex-col gap-3">
              {/* Textarea */}
              <div
                className="flex flex-col gap-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white mb-1 mt-3">Опишіть умови виконання завдання</p>
                  <p className="text-[11px] text-white/40 leading-relaxed">
                    - що саме має зробити виконавець після запуску бота.<br />
                    Наприклад: натиснути кнопку, пройти капчу, виконати просту дію ТОЩО.
                  </p>
                </div>
                <textarea
                  value={conditionsText}
                  onChange={(e) => setConditionsText(e.target.value)}
                  placeholder="Вкажіть причину відмови...."
                  rows={4}
                  className="w-full bg-white/5 text-sm text-white placeholder-white/40 focus:outline-none resize-none px-4 py-2.5 rounded-xl"
                />
              </div>

              {/* Prohibited box */}
              <div
                className="gradient-border-card rounded-xl px-4 py-2.5 flex flex-col"
                style={{ background: 'rgba(229,57,53,0.08)', border: '1px solid rgba(229,57,53,0.2)' }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <img src='/assets/images/svg/xmark-octagon.svg' alt='xmark-octagon' />
                  <p className="text-xs font-semibold text-[#FFB7C8]">Заборонено вимагати:</p>
                </div>
                {PROHIBITED.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-white/40 text-xs mt-0.5">•</span>
                    <p className="text-[11px] text-white/40 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>


        {/* Continue Button */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => navigate('/bot-audience-setup', { state: { taskType: 'go_to_bot' } })}
            className="w-full h-[44px] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)',
              color: '#0B0E21',
              boxShadow: '0 4px 16px rgba(135,173,240,0.25)',
            }}
          >
            Продовжити
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default BotTaskTypePage;
