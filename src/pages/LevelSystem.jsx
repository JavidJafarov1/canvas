import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Sparkles, Eye, User, Droplet, Zap, UserPlus, Target, AlertTriangle, Crown, HelpCircle } from 'lucide-react';
import Layout from '../components/Layout';

// Crown Icon Wrapper
const CrownIconWrapper = ({ size = 48, className = "" }) => (
  <div 
    className={`rounded-full flex items-center justify-center flex-shrink-0 select-none ${className}`}
    style={{ 
      width: size, 
      height: size,
      background: 'linear-gradient(180deg, #3A1F4C 0%, #1D0F28 100%)',
      border: '2px solid rgba(236, 72, 153, 0.15)',
      boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)'
    }}
  >
    <Crown size={size * 0.45} className="text-pink-500 fill-pink-500" />
  </div>
);

// Level list helper component
const LevelCard = ({ title, xpRange, limit, refBonus, iconBg, iconComponent }) => (
  <div 
    className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-3"
    style={{ background: '#161829' }}
  >
    <div className="flex items-center gap-3">
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: iconBg }}
      >
        {iconComponent}
      </div>
      <div>
        <h4 className="text-[15px] font-semibold text-white">{title}</h4>
        <p className="text-xs text-[#8A8D9F]">{xpRange}</p>
      </div>
    </div>

    <div className="flex flex-col gap-2 pt-1 border-t border-[#2A2D40]/60">
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#8A8D9F]">Ліміт чеків:</span>
        <span className="text-white font-medium">{limit}</span>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#8A8D9F]">Реф. бонус:</span>
        <span className="text-white font-medium">{refBonus}</span>
      </div>
    </div>
  </div>
);

const LevelSystem = () => {
  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-8">
          <Link to="/profile" className="text-[#545664] hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-base font-semibold text-white tracking-wider flex-1 text-center mr-5">Level system</h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-5">
          
          {/* Level Stats Header */}
          <div className="flex flex-col items-center mb-2">
            <CrownIconWrapper size={64} className="mb-4" />
            <h2 className="text-[24px] font-semibold tracking-tight">PR master</h2>
            <span className="text-[#8A8D9F] text-[13px] font-normal mt-1 mb-4">262 824 / ∞ XP</span>
            
            {/* Gradient progress bar */}
            <div className="w-[80%] h-2 bg-[#1C1E30] rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full"
                style={{ 
                  width: '70%', 
                  background: 'linear-gradient(90deg, #A855F7 0%, #EC4899 100%)',
                  boxShadow: '0 0 10px rgba(236, 72, 153, 0.5)'
                }}
              ></div>
            </div>
          </div>

          {/* Points accumulation card */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-4"
            style={{ background: '#161829' }}
          >
            <div className="flex items-center gap-3 border-b border-[#2A2D40] pb-3">
              <div className="w-9 h-9 rounded-full bg-[#87ADF0]/10 flex items-center justify-center flex-shrink-0">
                <Sparkles size={18} className="text-[#87ADF0] fill-[#87ADF0]/20" />
              </div>
              <h3 className="text-[15px] font-semibold">Нарахування балів:</h3>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2.5">
                  <Eye size={16} className="text-[#87ADF0]" />
                  <span className="text-[#8A8D9F]">Перегляди</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+1 XP</span>
              </div>

              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2.5">
                  <User size={16} className="text-[#87ADF0]" />
                  <span className="text-[#8A8D9F]">Підписки <span className="text-xs text-[#5A5D72]">(через 7 діб)</span></span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+5 XP</span>
              </div>

              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2.5">
                  <Droplet size={16} className="text-[#87ADF0]" />
                  <span className="text-[#8A8D9F]">Реакції</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+5 XP</span>
              </div>

              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2.5">
                  <HelpCircle size={16} className="text-[#87ADF0]" />
                  <span className="text-[#8A8D9F]">Запуск ботів</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+5 XP</span>
              </div>

              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2.5">
                  <Zap size={16} className="text-[#87ADF0] fill-[#87ADF0]/10" />
                  <span className="text-[#8A8D9F]">Бусти</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+15 XP</span>
              </div>

              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2.5">
                  <UserPlus size={16} className="text-[#87ADF0]" />
                  <span className="text-[#8A8D9F]">Залучення рефералів</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+25 XP</span>
              </div>

              <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-2.5">
                  <Target size={16} className="text-[#87ADF0]" />
                  <span className="text-[#8A8D9F]">За донат <span className="text-xs text-[#5A5D72]">(1 зірка)</span></span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+10 XP</span>
              </div>

              {/* Warning Alert Banner */}
              <div 
                className="flex items-start gap-3 p-3 rounded-[12px] mt-1"
                style={{ background: 'rgba(255, 184, 0, 0.05)', border: '1px solid rgba(255, 184, 0, 0.12)' }}
              >
                <AlertTriangle size={18} className="text-[#FFB800] flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed text-[#FFB800]">
                  Ліміти на чеки застосовуються лише якщо ви виконували завдання на підписки в останні 7 днів.
                </p>
              </div>
            </div>
          </div>

          {/* All Levels List */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#8A8D9F] text-xs font-semibold pl-1 uppercase tracking-wider">
              Всі рівні:
            </h3>

            <div className="flex flex-col gap-3">
              {/* Beginner */}
              <LevelCard 
                title="Новачок"
                xpRange="0-499 XP"
                limit="Недоступно"
                refBonus="10% поповн. / 3% завдань"
                iconBg="rgba(148, 163, 184, 0.1)"
                iconComponent={<User size={18} className="text-[#94A3B8]" />}
              />

              {/* Activist */}
              <LevelCard 
                title="Активіст"
                xpRange="500-1 499 XP"
                limit="до 200 000 день"
                refBonus="10% поповн. / 3% завдань"
                iconBg="rgba(234, 179, 8, 0.1)"
                iconComponent={<Zap size={18} className="text-yellow-500 fill-yellow-500/10" />}
              />

              {/* Task Master */}
              <LevelCard 
                title="Майстер завдань"
                xpRange="1 500-4 999 XP"
                limit="до 500 000 день"
                refBonus="10% поповн. / 5% завдань"
                iconBg="rgba(34, 197, 94, 0.1)"
                iconComponent={<Target size={18} className="text-green-500" />}
              />

              {/* Subscription Guru */}
              <LevelCard 
                title="Гуру підписок"
                xpRange="5 000-9 999 XP"
                limit="до 2 500 000 день"
                refBonus="10% поповн. / 7% завдань"
                iconBg="rgba(14, 165, 233, 0.1)"
                iconComponent={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-sky-500">
                    <path d="M12 4C9.5 4 7.5 5.5 7.1 7.7C8.5 7.9 9.5 9 9.5 10.3C9.5 10.5 9.5 10.6 9.4 10.8C10.2 11.2 11.1 11.5 12 11.5C12.9 11.5 13.8 11.2 14.6 10.8C14.5 10.6 14.5 10.5 14.5 10.3C14.5 9 15.5 7.9 16.9 7.7C16.5 5.5 14.5 4 12 4Z" fill="currentColor" />
                    <path d="M4 12C4 11.4 4.4 11 5 11H19C19.6 11 20 11.4 20 12C20 12.6 19.6 13 19 13H5C4.4 13 4 12.6 4 12Z" fill="currentColor" />
                    <circle cx="8.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="15.5" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11 16.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
              />

              {/* Coin Master */}
              <LevelCard 
                title="Майстер над монетою"
                xpRange="10 000+ XP"
                limit="∞ безлімітно"
                refBonus="10% поповн. / 10% завдань"
                iconBg="rgba(79, 70, 229, 0.1)"
                iconComponent={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                  </svg>
                }
              />

              {/* Referral Specialist */}
              <LevelCard 
                title="Реферальний спеціаліст"
                xpRange="100 рефералів"
                limit="∞ безлімітно"
                refBonus="12.5% поповн. / 12.5% завдань"
                iconBg="rgba(139, 92, 246, 0.1)"
                iconComponent={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-500">
                    <path d="M4.5 16.5c-1.5 1.26-2 3.38-2 3.38s2.12-.5 3.38-2c.67-.8 2-3.38 2-3.38s-2.71-1.33-3.38-2M12 12l9-9M19 11l2-2M13 5l2-2M9 18l3-3M16 11l-3 3M9 6v6H3" />
                  </svg>
                }
              />

              {/* PR Lord */}
              <LevelCard 
                title="Володар піару"
                xpRange="500 рефералів"
                limit="∞ безлімітно"
                refBonus="15% поповн. / 15% завдань"
                iconBg="rgba(236, 72, 153, 0.1)"
                iconComponent={<Crown size={18} className="text-pink-500 fill-pink-500/10" />}
              />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default LevelSystem;
