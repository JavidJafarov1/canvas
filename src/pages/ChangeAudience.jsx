import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Users, Star, Info } from 'lucide-react';
import Layout from '../components/Layout';

const ChangeAudience = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters if navigated from TaskDetail
  const taskState = location.state || {};

  const [audience, setAudience] = useState('all'); // 'all' | 'premium'

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-4">
          <button 
            onClick={() => navigate(-1)} 
            className="text-[#545664] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-base font-medium text-white flex-1 text-center mr-5">
            Зміна аудиторії
          </h1>
        </div>

        {/* Content */}
        <div className="px-5 flex-1 flex flex-col gap-2">
          
          {/* Currently Configured Access Card */}
          <div 
            className="gradient-border-card rounded-[12px] p-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <span className="text-[12px] text-[#8A8D9F] font-medium">Встановлений доступ:</span>
            <span className="text-[12px] font-medium text-[#87ADF0]">
              {audience === 'all' ? 'Усім користувачам' : 'Telegram Premium'}
            </span>
          </div>

          {/* Option: All Users */}
          <div 
            onClick={() => setAudience('all')}
            className={`gradient-border-card rounded-[12px] p-3 flex items-center justify-between cursor-pointer transition-all`}
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center">
                <img src='/assets/images/vector10.png'/>
              </div>
              <div className="flex flex-col gap-1 max-w-[200px]">
                <span className="text-[14px] font-medium text-white">Усі користувачі</span>
                <span className="text-[12px] text-[#ffffff]/40 leading-normal">
                  Завдання зможуть виконувати всі користувачі PR GRAM.
                </span>
              </div>
            </div>
            
            {/* Custom Radio Button */}
            <div 
              className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center transition-all ${
                audience === 'all' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'
              }`}
            >
              {audience === 'all' && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffffff]" />
              )}
            </div>
          </div>

          {/* Option: Telegram Premium */}
          <div 
            onClick={() => setAudience('premium')}
            className={`gradient-border-card rounded-[12px] p-3 flex items-center justify-between cursor-pointer transition-all`}
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 flex items-center justify-center">
                <img src='/assets/images/vector32.png'/>
              </div>
              <div className="flex flex-col gap-1 max-w-[200px]">
                <span className="text-[14px] font-medium text-white">Telegram Premium</span>
                <span className="text-[12px] text-[#ffffff]/40 leading-normal">
                  Завдання доступне лише для користувачів із Telegram Premium.
                </span>
              </div>
            </div>
            
            {/* Custom Radio Button */}
            <div 
              className={`w-[20px] h-[20px] rounded-full border-2 flex items-center justify-center transition-all ${
                audience === 'premium' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'
              }`}
            >
              {audience === 'premium' && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffffff]" />
              )}
            </div>
          </div>

          {/* Bottom Info Warnings */}
          <div className="mt-auto flex flex-col gap-3">
            {/* Warning Banner 1 */}
            <div 
              className="flex items-center gap-2 p-2.5 rounded-full"
              style={{ 
                background: 'rgba(255, 192, 0, 0.1)', 
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <img src='/assets/images/svg/Info-Square-Yellow.svg' />
              </div>
              <p className="text-[12px] text-medium text-[#FFF0C4]">
                Для зміни доступу спочатку потрібно підвищити ціну.
              </p>
            </div>

            {/* Warning Banner 2 */}
            <div 
              className="flex items-center gap-2 p-2.5 rounded-full"
              style={{ 
                background: 'rgba(255, 73, 115, 0.1)', 
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                <img src='/assets/images/svg/Info-Square-Red.svg' />
              </div>
              <p className="text-[12px] text-medium text-[#FFB7C8]">
                Мінімальна ціна за підписників з Telegram Premium <span className="text-[#FF4973] font-bold">1 400 GRAM.</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default ChangeAudience;
