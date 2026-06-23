import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Star, User, Calendar, PieChart, TrendingUp, BarChart3, Link2, Copy, Check } from 'lucide-react';
import Layout from '../components/Layout';

// Bowler Hat and Glasses (Detective) SVG Component
const DetectiveIcon = ({ size = 48, className = "" }) => (
  <div 
    className={`rounded-full flex items-center justify-center flex-shrink-0 select-none ${className}`}
    style={{ 
      width: size, 
      height: size,
      background: 'linear-gradient(180deg, #1B355A 0%, #0D1B2D 100%)',
      border: '2px solid rgba(135, 173, 240, 0.15)',
      boxShadow: '0 0 20px rgba(27, 53, 90, 0.4)'
    }}
  >
    <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bowler Hat */}
      <path d="M12 4C9.5 4 7.5 5.5 7.1 7.7C8.5 7.9 9.5 9 9.5 10.3C9.5 10.5 9.5 10.6 9.4 10.8C10.2 11.2 11.1 11.5 12 11.5C12.9 11.5 13.8 11.2 14.6 10.8C14.5 10.6 14.5 10.5 14.5 10.3C14.5 9 15.5 7.9 16.9 7.7C16.5 5.5 14.5 4 12 4Z" fill="#38BDF8" />
      <path d="M4 12C4 11.4 4.4 11 5 11H19C19.6 11 20 11.4 20 12C20 12.6 19.6 13 19 13H5C4.4 13 4 12.6 4 12Z" fill="#38BDF8" />
      {/* Glasses */}
      <circle cx="8.5" cy="16.5" r="2.5" stroke="#38BDF8" strokeWidth="1.5" />
      <circle cx="15.5" cy="16.5" r="2.5" stroke="#38BDF8" strokeWidth="1.5" />
      <path d="M11 16.5H13" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

// Money Bag SVG Icon
const MoneyBagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#87ADF0]">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const ReferralSystem = () => {
  const [copied, setCopied] = useState(false);
  const referralLink = 't.me/gram_piarbot?start=7193701006';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-8">
          <Link to="/profile" className="text-[#545664] hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-base font-semibold text-white tracking-wider flex-1 text-center mr-5">Referral system</h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-5">
          
          {/* User Level & XP Tracker */}
          <div className="flex flex-col items-center mb-2">
            <DetectiveIcon size={64} className="mb-4" />
            <span className="text-[#8A8D9F] text-[13px] font-normal mb-1">Гуру підписок</span>
            <h2 className="text-[28px] font-semibold tracking-tight">6 072 / 10 000 XP</h2>
          </div>

          {/* Card 1: Reward for Invitation */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-4"
            style={{ background: '#161829' }}
          >
            <div className="flex items-center gap-3 border-b border-[#2A2D40] pb-3">
              <div className="w-9 h-9 rounded-full bg-[#87ADF0]/10 flex items-center justify-center flex-shrink-0">
                <MoneyBagIcon />
              </div>
              <h3 className="text-[15px] font-semibold">Винагорода за запрошення</h3>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Star size={16} className="text-[#87ADF0] fill-[#87ADF0]/30" />
                  <span className="text-[14px] text-[#8A8D9F]">3 Telegram Premium</span>
                </div>
                <span className="text-[14px] font-semibold text-[#87ADF0]">+10 000 GRAM</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <User size={16} className="text-[#8A8D9F]" />
                  <span className="text-[14px] text-[#8A8D9F]">Без Premium</span>
                </div>
                <span className="text-[14px] font-semibold text-[#87ADF0]">+5 000 GRAM</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Calendar size={16} className="text-[#8A8D9F]" />
                  <span className="text-[14px] text-[#8A8D9F]">Через функцію ОП</span>
                </div>
                <span className="text-[14px] font-semibold text-[#87ADF0]">+3 000 GRAM</span>
              </div>
            </div>
          </div>

          {/* Card 2: Passive Income */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-4"
            style={{ background: '#161829' }}
          >
            <div className="flex items-center gap-3 border-b border-[#2A2D40] pb-3">
              <div className="w-9 h-9 rounded-full bg-[#87ADF0]/10 flex items-center justify-center flex-shrink-0">
                <PieChart size={18} className="text-[#87ADF0]" />
              </div>
              <h3 className="text-[15px] font-semibold">Постійний дохід від активності:</h3>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Star size={16} className="text-[#8A8D9F]" />
                  <span className="text-[14px] text-[#8A8D9F]">Від поповнень</span>
                </div>
                <span className="text-[14px] font-semibold text-[#87ADF0]">+15%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Calendar size={16} className="text-[#8A8D9F]" />
                  <span className="text-[14px] text-[#8A8D9F]">Від виконання завдань</span>
                </div>
                <span className="text-[14px] font-semibold text-[#87ADF0]">+15%</span>
              </div>

              <div 
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-full mt-1"
                style={{ background: 'rgba(255, 184, 0, 0.08)', border: '1px solid rgba(255, 184, 0, 0.15)' }}
              >
                <TrendingUp size={14} className="text-[#FFB800]" />
                <span className="text-xs font-semibold text-[#FFB800]">Підвищуйте рівень для збільшення винагороди</span>
              </div>
            </div>
          </div>

          {/* Card 3: All-time Stats */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-4"
            style={{ background: '#161829' }}
          >
            <div className="flex items-center gap-3 border-b border-[#2A2D40] pb-3">
              <div className="w-9 h-9 rounded-full bg-[#87ADF0]/10 flex items-center justify-center flex-shrink-0">
                <BarChart3 size={18} className="text-[#87ADF0]" />
              </div>
              <h3 className="text-[15px] font-semibold">Статистика за весь час:</h3>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#8A8D9F]">Ви запросили</span>
                <span className="text-[14px] font-semibold text-[#87ADF0]">7 376 чол.</span>
              </div>

              {/* Dotted Divider */}
              <div className="border-t border-dotted border-[#2A2D40]"></div>

              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#8A8D9F]">Від поповнень</span>
                <span className="text-[14px] font-semibold text-white">1 798 248 GRAM</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[14px] text-[#8A8D9F]">Від завдань</span>
                <span className="text-[14px] font-semibold text-white">13 397 346 GRAM</span>
              </div>

              {/* Dotted Divider */}
              <div className="border-t border-dotted border-[#2A2D40]"></div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[14px] font-semibold text-white">Загальний заробіток</span>
                <span className="text-[15px] font-bold text-[#FFB800]">15 195 594 GRAM</span>
              </div>
            </div>
          </div>

          {/* Card 4: Referral Link */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-3"
            style={{ background: '#161829' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#87ADF0]/10 flex items-center justify-center flex-shrink-0">
                <Link2 size={18} className="text-[#87ADF0]" />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold">Ваше реферальне посилання:</h3>
                <p className="text-xs text-[#8A8D9F]">Скопіюй та відправ своїм рефералам</p>
              </div>
            </div>

            <div 
              onClick={handleCopy}
              className="flex items-center justify-between bg-[#0B0E21] rounded-[12px] p-3.5 border border-[#2A2D40]/60 cursor-pointer hover:border-[#87ADF0]/40 transition-colors"
            >
              <span className="text-[13px] font-medium text-white truncate mr-4">
                {referralLink}
              </span>
              <button className="text-[#5A5D72] hover:text-white transition-colors flex-shrink-0">
                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ReferralSystem;
