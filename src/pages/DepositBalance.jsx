import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronsUpDown, Star, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';

// Gram Coin Logo Component
const GramLogo = ({ size = 48, className = "" }) => (
  <div 
    className={`rounded-full flex items-center justify-center flex-shrink-0 select-none ${className}`}
    style={{ 
      width: size, 
      height: size,
      background: 'radial-gradient(circle, #F1A80A 0%, #D48C00 100%)',
      boxShadow: '0 0 16px rgba(241, 168, 10, 0.3)'
    }}
  >
    <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21V3H13.5C16.5 3 18.5 4.8 18.5 7.8C18.5 10.8 16.5 12.6 13.5 12.6H10.5V21H7ZM10.5 9.6H13.3C14.8 9.6 15.6 9 15.6 7.8C15.6 6.6 14.8 6 13.3 6H10.5V9.6Z" fill="#141629" />
    </svg>
  </div>
);

// Gram Coin Blue Logo (used in package list)
const GramLogoBlue = ({ size = 40, className = "" }) => (
  <div 
    className={`rounded-full flex items-center justify-center flex-shrink-0 select-none ${className}`}
    style={{ 
      width: size, 
      height: size,
      background: 'linear-gradient(180deg, #2D3E75 0%, #171E36 100%)',
      border: '1px solid rgba(255, 255, 255, 0.05)'
    }}
  >
    <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 21V3H13.5C16.5 3 18.5 4.8 18.5 7.8C18.5 10.8 16.5 12.6 13.5 12.6H10.5V21H7ZM10.5 9.6H13.3C14.8 9.6 15.6 9 15.6 7.8C15.6 6.6 14.8 6 13.3 6H10.5V9.6Z" fill="#87ADF0" />
    </svg>
  </div>
);

const DepositBalance = () => {
  const navigate = useNavigate();
  const [starsCount, setStarsCount] = useState('');

  const packages = [
    { gram: '90 000', stars: 50 },
    { gram: '180 000', stars: 100 },
    { gram: '450 000', stars: 250 },
    { gram: '1 350 000', stars: 750 },
    { gram: '2 700 000', stars: 1499 },
    { gram: '4 500 000', stars: 2499 },
  ];

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-8">
          <Link to="/profile" className="text-[#545664] hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-base font-semibold text-white tracking-wider flex-1 text-center mr-5">Deposit balance</h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col">

        {/* Balance Display */}
        <div className="flex flex-col items-center mb-8">
          <GramLogo size={64} className="mb-4" />
          <span className="text-[#8A8D9F] text-[13px] font-normal mb-1">Your balance</span>
          <h2 className="text-[28px] font-semibold tracking-tight">462 862 GRAM</h2>
        </div>

        {/* Input section */}
        <div className="flex flex-col gap-2 mb-6">
          <label className="text-[#8A8D9F] text-xs font-normal pl-1">
            Введіть кількість зірок:
          </label>
          <div 
            className="gradient-border-card rounded-[16px] p-3 flex items-center justify-between gap-3"
            style={{ background: '#161829' }}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="w-9 h-9 rounded-full bg-[#FFB800]/10 flex items-center justify-center flex-shrink-0">
                <Star size={18} className="text-[#FFB800] fill-[#FFB800]" />
              </div>
              <input
                type="text"
                value={starsCount}
                onChange={(e) => setStarsCount(e.target.value)}
                placeholder="Кількість зірок"
                className="bg-transparent border-none outline-none w-full text-white text-[15px] placeholder-[#5A5D72] font-medium"
              />
            </div>
            <ChevronsUpDown size={18} className="text-[#5A5D72] flex-shrink-0" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-[#2A2D40] my-4 w-full"></div>

        {/* Packages Section */}
        <div className="flex flex-col gap-3 mb-6">
          <label className="text-[#8A8D9F] text-xs font-normal pl-1">
            Або оберіть пакет:
          </label>

          <div className="flex flex-col gap-2">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className="gradient-border-card rounded-[16px] p-3 flex items-center justify-between"
                style={{ background: '#161829' }}
              >
                <div className="flex items-center gap-4">
                  <GramLogoBlue size={36} />
                  <span className="text-[15px] font-semibold">
                    {pkg.gram} <span className="text-[#5A5D72] font-medium">GRAM</span>
                  </span>
                </div>

                <button 
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all active:scale-95"
                  style={{
                    background: 'rgba(255, 184, 0, 0.1)',
                    border: '1px solid rgba(255, 184, 0, 0.2)',
                    color: '#FFB800'
                  }}
                >
                  <Star size={12} className="fill-[#FFB800] text-[#FFB800]" />
                  <span>{pkg.stars}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div 
          className="gradient-border-card rounded-full p-4 flex items-start gap-3 mt-auto"
          style={{ background: 'rgba(22, 24, 41, 0.6)', border: '1px solid rgba(255, 255, 255, 0.02)' }}
        >
          <div className="w-10 h-10 rounded-full bg-[#1F2C4C] flex items-center justify-center flex-shrink-0">
            <MessageSquare size={20} className="text-[#87ADF0]" />
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-[13px] leading-relaxed text-[#8A8D9F]">
              Виникли проблеми з поповненням? Пишіть у чат підтримки{' '}
              <a 
                href="https://t.me/prgram_help" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#87ADF0] font-medium hover:underline"
              >
                @prgram_help
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  );
};

export default DepositBalance;
