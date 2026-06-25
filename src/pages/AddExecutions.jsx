import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, Bell, Pencil, ChevronsUpDown, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';

const AddExecutions = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(700);

  // Constants based on mockup
  const userBalance = 491145.35;
  const unitPrice = 700;
  const feePercent = 0.15;

  // Derived calculations
  const rawCost = quantity * unitPrice;
  const fee = rawCost * feePercent;
  const totalCost = rawCost + fee;
  
  // Max possible additions based on balance (balance / (700 * 1.15)) => 491145.35 / 805 = 610.11
  const maxAdd = Math.floor(userBalance / (unitPrice * (1 + feePercent)));

  const isShortOfBalance = totalCost > userBalance;
  const shortageAmount = totalCost - userBalance;

  // Format currency helpers
  const formatGram = (amount) => {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).replace(/,/g, ' '); // Ukrainian spacing: e.g. 491 145.35
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value.replace(/\D/g, '')) || 0;
    setQuantity(val);
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-4">
          <button 
            onClick={() => navigate(-1)} 
            className="text-[#545664] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-base font-medium text-white flex-1 text-center mr-5">
            Додати виконання
          </h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-4">
          
          {/* Notification Alert Panel */}
          <div 
            className="flex items-center gap-3 p-2.5 rounded-full"
            style={{ 
              background: 'rgba(255, 192, 0, 0.1)',
            }}
          >
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <img src="/assets/images/svg/Bell-Yellow.svg" />
            </div>
            <p className="text-[13px] leading-relaxed text-[#FFF0C4]">
              Зверніть увагу: при додаванні виконань буде стягнута{' '}
              <span className="font-bold text-[#FFB800]">комісія 15%.</span>
            </p>
          </div>

          {/* Calculator Card */}
          <div 
            className="gradient-border-card rounded-[12px] p-4 flex flex-col gap-4"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            
            {/* Stats Lines */}
            <div className="flex flex-col gap-3 text-[14px] border-b border-[#2A2D40]/60 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[#ffffff]/40 text-xs">Ваш баланс:</span>
                <span className="font-medium text-white text-xs">{formatGram(userBalance)} GRAM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#ffffff]/40 text-xs">Ціна:</span>
                <span className="font-medium text-white text-xs">{unitPrice} GRAM за 1 од.</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#ffffff]/40 text-xs">Максимум, який можна додати:</span>
                <span className="font-medium text-white text-xs">{maxAdd} од.</span>
              </div>
            </div>

            {/* Input field block */}
            <div className="flex flex-col gap-2">
              <label className="text-[#ffffff]/40 text-xs pl-1">
                Введіть кількість виконань, яку ви хочете додати:
              </label>
              
              <div 
                className="flex items-center justify-between gap-3 gradient-border-card rounded-full p-3"
                style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'}}
              >
                <div className="flex items-center gap-3 w-full">
                  <img src="/assets/images/svg/Pen-2-Gray.svg" size={15} className="text-[#5A5D72] flex-shrink-0" />
                  <input
                    type="text"
                    value={quantity || ''}
                    onChange={handleInputChange}
                    className="bg-transparent border-none outline-none w-full text-white text-[15px] font-semibold"
                  />
                </div>
                <ChevronsUpDown size={16} className="text-[#5A5D72] flex-shrink-0" />
              </div>
            </div>

            {/* Total Cost Row */}
            <div className="flex items-center justify-between border-t border-[#2A2D40]/60 pt-4">
              <span className="text-[#8A8D9F] text-[12px]">До оплати:</span>
              <span className="text-[12px] font-medium text-[#FF4973]">
                {formatGram(totalCost)} GRAM
              </span>
            </div>

            {/* If balance is insufficient */}
            {isShortOfBalance && (
              <div className="flex flex-col gap-4 mt-2">
                {/* Danger warning badge */}
                <div 
                  className="flex items-center gap-2.5 px-4 py-3 rounded-full"
                  style={{ background: 'rgba(255, 73, 115, 0.1)'}}
                >
                  <img src="/assets/images/svg/danger.svg" />
                  <span className="text-[12px] font-medium text-[#FFD7E0]">Недостатньо балансу</span>
                </div>

                {/* Shortage Row */}
                <div className="flex items-center justify-between text-[12px]">
                  <span className="text-[#ffffff]/40">Вам не вистачає:</span>
                  <span className="font-medium text-[#FF4973]">
                    {formatGram(shortageAmount)} GRAM
                  </span>
                </div>

                {/* Redirect Button */}
                <button
                  onClick={() => navigate('/deposit-balance')}
                  className="w-full py-3.5 rounded-full bg-[#87ADF0] text-[#0B0E21] font-medium text-[15px] transition-all active:scale-[0.98] hover:opacity-95 shadow-[0_0_15px_rgba(135,173,240,0.3)]"
                >
                  Поповнити баланс
                </button>
              </div>
            )}

            {/* If balance is sufficient, show confirmation button */}
            {!isShortOfBalance && (
              <button
                onClick={() => {
                  alert('Виконання додано успішно!');
                  navigate(-1);
                }}
                className="w-full py-3.5 rounded-[14px] bg-green-500 text-white font-bold text-[15px] transition-all active:scale-[0.98] hover:opacity-95 shadow-[0_0_15px_rgba(34,197,94,0.3)] mt-2"
              >
                Підтвердити
              </button>
            )}

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AddExecutions;
