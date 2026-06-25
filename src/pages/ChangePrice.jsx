import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Lightbulb, HelpCircle, Pencil, ChevronsUpDown } from 'lucide-react';
import Layout from '../components/Layout';
import ChangePriceConfirmModal from '../components/modals/ChangePriceConfirmModal';

const ChangePrice = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters if navigated from TaskDetail, otherwise default to mockup details
  const taskState = location.state || {};
  const taskId = taskState.id ? `#804 ${taskState.id}00` : '#804 300';
  
  const [newPrice, setNewPrice] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentPriceVal = 700;

  const handleInputChange = (e) => {
    const val = e.target.value.replace(/\D/g, '');
    setNewPrice(val);
    setErrorMsg('');
  };

  const handleContinue = () => {
    const priceVal = parseInt(newPrice);
    if (!newPrice || isNaN(priceVal)) {
      setErrorMsg('Будь ласка, введіть ціну');
      return;
    }
    if (priceVal < 600 || priceVal > 2000) {
      setErrorMsg('Ціна має бути від 600 до 2000 GRAM');
      return;
    }
    setIsModalOpen(true);
  };

  const handleConfirmPriceChange = () => {
    setIsModalOpen(false);
    alert(`Ціну завдання успішно змінено на ${newPrice} GRAM!`);
    navigate(-1);
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
          <h1 className="text-base font-medium text-white flex-1 text-center mr-5">
            Змінити ціну
          </h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-4">
          
          {/* Recommendation Banner */}
          <div 
            className="flex items-center gap-3 p-4 rounded-[12px]"
            style={{ 
              background: 'rgba(255, 192, 0, 0.1)', 
            }}
          >
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 text-[#FFB800">
              <img src="/assets/images/svg/lightbulb-simple.svg" />
            </div>
            <p className="text-[13px] leading-relaxed text-[#FFF0C4]">
              Рекомендація: якщо Ви хочете потрапити на перші 3 сторінки - встановіть ціну не нижче:{' '}
              <span className="font-bold text-[#FFC000]">800 GRAM.</span>
            </p>
          </div>

          {/* Form Card */}
          <div 
            className="gradient-border-card rounded-[12px] p-4 flex flex-col gap-5"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            
            {/* Header: Change price title */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 text-[#87ADF0]">
                <img src="/assets/images/svg/Question-Square.svg" />
              </div>
              <h3 className="text-[12px] font-medium text-white uppercase">
                ЗМІНИТИ ЦІНУ ДЛЯ ЗАВДАННЯ №{taskId.replace('#', '')}?
              </h3>
            </div>

            {/* Current Price Stat Line */}
            <div className="flex items-center justify-between border-b border-[#2A2D40]/60 text-[14px] pb-3">
              <span className="text-[#ffffff]/40">Поточна ціна:</span>
              <span className="font-medium text-white text-xs">{currentPriceVal} GRAM за 1 од.</span>
            </div>

            {/* Input Block */}
            <div className="flex flex-col gap-2">
              <label className="text-[#ffffff]/40 text-xs pl-1">
                Введіть нову ціну, від 600 до 2000 GRAM
              </label>
              
              <div 
                className="flex items-center justify-between gap-3 rounded-full p-3 gradient-border-card"
                style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'}}
              >
                <div className="flex items-center gap-3 w-full">
                  <img src="/assets/images/svg/Pen-2-Gray.svg" size={15} className="text-[#5A5D72] flex-shrink-0" />
                  <input
                    type="text"
                    value={newPrice}
                    onChange={handleInputChange}
                    placeholder="Введіть ціну"
                    className="bg-transparent border-none outline-none w-full text-white text-[15px] font-semibold placeholder-[#5A5D72]"
                  />
                </div>
                <ChevronsUpDown size={16} className="text-[#5A5D72] flex-shrink-0" />
              </div>
              
              {errorMsg && (
                <span className="text-xs text-[#F43F5E] pl-1 font-medium mt-1">{errorMsg}</span>
              )}
            </div>

            {/* Action Button */}
            <button
              onClick={handleContinue}
              className="w-full py-3.5 rounded-full bg-[#87ADF0] text-[#0B0E21] font-medium text-[14px] transition-all active:scale-[0.98] hover:opacity-95 shadow-[0_0_15px_rgba(135,173,240,0.3)] mt-2"
            >
              Продовжити
            </button>

          </div>

        </div>
      </div>
      <ChangePriceConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmPriceChange}
        newPrice={parseInt(newPrice) || 0}
        currentPrice={currentPriceVal}
        taskId={taskId}
      />
    </Layout>
  );
};

export default ChangePrice;
