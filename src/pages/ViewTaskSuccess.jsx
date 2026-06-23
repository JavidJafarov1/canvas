import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const ViewTaskSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state || {};
  const channelLabel = state.postLink || '@trading_hub_pro';
  const accountTypeLabel = state.accountType === 'premium' ? 'Лише Premium' : 'Усі користувачі';

  let audienceLabel = 'Без обмежень';
  if (state.audienceType === 'language') {
    const count = state.selectedLangs ? state.selectedLangs.length : 2;
    audienceLabel = `${count} обрано`;
  }

  const priceLabel = `${(state.price || 1500).toLocaleString()} G`;
  const executionsLabel = `${state.executions || 10}`;
  const totalLabel = `${(state.total || 17250).toLocaleString()} G`;

  const details = [
    { label: 'Тип:', value: 'Перегляд постів', isLink: false },
    { label: 'Канал:', value: channelLabel, isLink: true },
    { label: 'Тип акаунта:', value: accountTypeLabel, isLink: false },
    { label: 'Аудиторія:', value: audienceLabel, isLink: false },
    { label: 'Ціна / од.:', value: priceLabel, isLink: false },
    { label: 'Виконань:', value: executionsLabel, isLink: false },
    { label: 'Оплата:', value: totalLabel, isLink: false },
  ];

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-10 pb-8 flex flex-col items-center font-sans text-white min-h-screen">
        <div className="animate-in zoom-in-50 duration-500 ease-out">
          <img src="/assets/images/vector35.png" alt="vector35" className='w-[100px] mb-3 drop-shadow-[0_0_20px_rgba(46,229,157,0.25)]' />
        </div>
        
        {/* Title */}
        <h1 className="text-xl font-bold text-white text-center mb-2">Завдання створено</h1>
        <p className="text-[#8A8D9F] text-sm mb-10">№ 1 23424</p>

        {/* Details Card */}
        <div
          className="gradient-border-card rounded-[20px] w-full mb-3 p-4 flex flex-col gap-[19px]"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.03) 100%)' }}
        >
          {details.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <span className="text-sm text-[#8A8D9F]">{item.label}</span>
              <span
                className="text-sm font-semibold"
                style={{ color: item.isLink ? '#87ADF0' : 'rgba(255,255,255,0.9)' }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          <button
            onClick={() => navigate('/create-task')}
            className="w-full h-[44px] rounded-full flex items-center justify-center gap-2.5 font-bold text-sm transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)',
              color: '#0B0E21',
              boxShadow: '0 4px 16px rgba(135,173,240,0.3)',
            }}
          >
            <img src='/assets/images/svg/clipboard-add.svg' alt='clipboard-add' className='w-5' />
            Створити ще
          </button>

          <button
            onClick={() => navigate('/task-list')}
            className="gradient-border-card w-full h-[44px] rounded-full flex items-center justify-center gap-2.5 font-bold text-sm transition-all cursor-pointer hover:brightness-110"
            style={{
              background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)',
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            <img src='/assets/images/svg/clipboard-list.svg' alt='clipboard-list' />
            Мої завдання
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ViewTaskSuccess;
