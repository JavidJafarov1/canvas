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
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="text-[#545664] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-base font-semibold text-white tracking-wider flex-1 text-center mr-5">
            Додати виконання
          </h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-4">
          
          {/* Notification Alert Panel */}
          <div 
            className="flex items-start gap-3 p-4 rounded-[16px]"
            style={{ 
              background: 'rgba(255, 184, 0, 0.05)', 
              border: '1px solid rgba(255, 184, 0, 0.12)' 
            }}
          >
            <div className="w-8 h-8 rounded-full bg-[#FFB800]/10 flex items-center justify-center flex-shrink-0 text-[#FFB800]">
              <Bell size={16} className="fill-[#FFB800]" />
            </div>
            <p className="text-[13px] leading-relaxed text-[#FFB800]">
              Зверніть увагу: при додаванні виконань буде стягнута{' '}
              <span className="font-bold text-[#FFB800]">комісія 15%.</span>
            </p>
          </div>

          {/* Calculator Card */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-5"
            style={{ background: '#161829' }}
          >
            
            {/* Stats Lines */}
            <div className="flex flex-col gap-3 text-[14px] border-b border-[#2A2D40]/60 pb-4">
              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Ваш баланс:</span>
                <span className="font-semibold text-white">{formatGram(userBalance)} GRAM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Ціна:</span>
                <span className="font-semibold text-white">{unitPrice} GRAM за 1 од.</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Максимум, який можна додати:</span>
                <span className="font-semibold text-white">{maxAdd} од.</span>
              </div>
            </div>

            {/* Input field block */}
            <div className="flex flex-col gap-2">
              <label className="text-[#8A8D9F] text-xs pl-1">
                Введіть кількість виконань, яку ви хочете додати:
              </label>
              
              <div 
                className="flex items-center justify-between gap-3 bg-[#0B0E21]/60 border border-[#2A2D40]/60 rounded-[14px] p-3"
              >
                <div className="flex items-center gap-3 w-full">
                  <Pencil size={15} className="text-[#5A5D72] flex-shrink-0" />
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
              <span className="text-[#8A8D9F] text-[14px]">До оплати:</span>
              <span className="text-[14px] font-bold text-[#F43F5E]">
                {formatGram(totalCost)} GRAM
              </span>
            </div>

            {/* If balance is insufficient */}
            {isShortOfBalance && (
              <div className="flex flex-col gap-4 mt-2">
                {/* Danger warning badge */}
                <div 
                  className="flex items-center gap-2.5 px-4 py-3 rounded-[12px] bg-[#E11D48]/10 border border-[#E11D48]/20"
                >
                  <AlertTriangle size={16} className="text-[#F43F5E] fill-[#F43F5E]/10" />
                  <span className="text-[13px] font-bold text-[#F43F5E]">Недостатньо балансу</span>
                </div>

                {/* Shortage Row */}
                <div className="flex items-center justify-between text-[14px]">
                  <span className="text-[#8A8D9F]">Вам не вистачає:</span>
                  <span className="font-bold text-[#F43F5E]">
                    {formatGram(shortageAmount)} GRAM
                  </span>
                </div>

                {/* Redirect Button */}
                <button
                  onClick={() => navigate('/deposit-balance')}
                  className="w-full py-3.5 rounded-[14px] bg-[#87ADF0] text-[#0B0E21] font-bold text-[15px] transition-all active:scale-[0.98] hover:opacity-95 shadow-[0_0_15px_rgba(135,173,240,0.3)]"
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
