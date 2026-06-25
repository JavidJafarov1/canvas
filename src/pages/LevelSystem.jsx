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
    className="gradient-border-card rounded-[16px] py-3 flex flex-col gap-3"
    style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}
  >
    <div className="flex items-center gap-3 px-4">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
      >
        {iconComponent}
      </div>
      <div>
        <h4 className="text-[14px] font-medium text-white">{title}</h4>
        <p className="text-xs text-[#ffffff]/40">{xpRange}</p>
      </div>
    </div>
 
    <div className="flex flex-col gap-2 pt-1 px-4 border-t border-[#2A2D40]/60">
      <div className="flex items-center justify-between text-xs">
        <span className="text-[#ffffff]/40">Ліміт чеків:</span>
        <span className="text-[#ffffff]/40 font-medium">{limit}</span>
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
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-5">
          <Link to="/profile" className="text-[#545664] hover:text-white transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-base font-medium text-white tracking-wider flex-1 text-center mr-5">Level system</h1>
        </div>
 
        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-5">
         
          {/* Level Stats Header */}
          <div className="flex flex-col items-center mb-2">
            <img src="/assets/images/Pink-Crown.png" className="mb-3 w-[60px] h-[60px]" />
            <h2 className="text-[24px] font-medium tracking-tight">PR master</h2>
            <span className="text-[#ffffff]/40 text-[12px] font-normal mt-1 mb-4">262 824 / ∞ XP</span>
           
            {/* Gradient progress bar */}
            <div className="relative w-[80%] h-2 bg-[#1C1E30] rounded-full">
              {/* Glow shadow */}
              <div
                className="absolute top-0 left-0 h-full rounded-full blur-md opacity-60"
                style={{
                  width: '70%',
                  background: 'linear-gradient(90deg, #A855F7 0%, #EC4899 100%)',
                }}
              ></div>
              {/* Progress bar */}
              <div
                className="relative h-full rounded-full"
                style={{
                  width: '70%',
                  background: 'linear-gradient(90deg, #A855F7 0%, #EC4899 100%)',
                }}
              ></div>
            </div>
          </div>
 
          {/* Points accumulation card */}
          <div
            className="gradient-border-card rounded-[12px] py-3 flex flex-col gap-4"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%)' }}
          >
            <div className="flex items-center gap-3 border-b border-[#2A2D40] pb-3 px-4">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0">
                <img src="/assets/images/Double-Star.png" />
              </div>
              <h3 className="text-[14px] font-medium">Нарахування балів:</h3>
            </div>
 
            <div className="flex flex-col gap-3 px-4">
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/images/svg/Eye-Blue.svg" className="w-[16px] h-[16px]" />
                  <span className="text-[#ffffff]">Перегляди</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+1 XP</span>
              </div>
 
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/images/svg/Users-Group.svg" className="w-[16px] h-[16px]" />
                  <span className="text-[#ffffff]">Підписки <span className="text-xs text-[#5A5D72]">(через 7 діб)</span></span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+5 XP</span>
              </div>
 
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/images/svg/Flame-Blue.svg" className="w-[16px] h-[16px]" />
                  <span className="text-[#ffffff]">Реакції</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+5 XP</span>
              </div>
 
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/images/svg/Smile Square.svg" className="w-[16px] h-[16px]" />
                  <span className="text-[#ffffff]">Запуск ботів</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+5 XP</span>
              </div>
 
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/images/svg/Bolt-Blue.svg" className="w-[16px] h-[16px]" />
                  <span className="text-[#ffffff]">Бусти</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+15 XP</span>
              </div>
 
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/images/svg/User Plus Rounded.svg" className="w-[16px] h-[16px]" />
                  <span className="text-[#ffffff]">Залучення рефералів</span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+25 XP</span>
              </div>
 
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-2.5">
                  <img src="/assets/images/svg/Donut-Blue.svg" className="w-[16px] h-[16px]" />
                  <span className="text-[#ffffff]">За донат <span className="text-xs text-[#5A5D72]">(1 зірка)</span></span>
                </div>
                <span className="font-semibold text-[#87ADF0]">+10 XP</span>
              </div>
 
              {/* Warning Alert Banner */}
              <div
                className="flex items-center gap-3 p-3 rounded-[12px] mt-1"
                style={{ background: 'rgba(255, 192, 0, 0.1)' }}
              >
                <img src="/assets/images/svg/Danger Triangle.svg" className="flex-shrink-0" />
                <p className="text-xs leading-relaxed text-[#FFF0C4]">
                  Ліміти на чеки застосовуються лише якщо ви виконували завдання на підписки в останні 7 днів.
                </p>
              </div>
            </div>
          </div>
 
          {/* All Levels List */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[#ffffff]/40 text-xs font-medium pl-1 tracking-wider">
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
                iconComponent={<img src="/assets/images/snap-blue.png" />}
              />
 
              {/* Activist */}
              <LevelCard
                title="Активіст"
                xpRange="500-1 499 XP"
                limit="до 200 000 день"
                refBonus="10% поповн. / 3% завдань"
                iconBg="rgba(234, 179, 8, 0.1)"
                iconComponent={<img src="/assets/images/premium-yellow.png" />}
              />
 
              {/* Task Master */}
              <LevelCard
                title="Майстер завдань"
                xpRange="1 500-4 999 XP"
                limit="до 500 000 день"
                refBonus="10% поповн. / 5% завдань"
                iconBg="rgba(34, 197, 94, 0.1)"
                iconComponent={<img src="/assets/images/magic.png" />}
              />
 
              {/* Subscription Guru */}
              <LevelCard
                title="Гуру підписок"
                xpRange="5 000-9 999 XP"
                limit="до 2 500 000 день"
                refBonus="10% поповн. / 7% завдань"
                iconBg="rgba(14, 165, 233, 0.1)"
                iconComponent={<img src="/assets/images/hat.png" />}
              />
 
              {/* Coin Master */}
              <LevelCard
                title="Майстер над монетою"
                xpRange="10 000+ XP"
                limit="∞ безлімітно"
                refBonus="10% поповн. / 10% завдань"
                iconBg="rgba(79, 70, 229, 0.1)"
                iconComponent={
                  <img src="/assets/images/cap.png" />
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
                  <img src="/assets/images/purpleRocket.png" />
                }
              />
 
              {/* PR Lord */}
              <LevelCard
                title="Володар піару"
                xpRange="500 рефералів"
                limit="∞ безлімітно"
                refBonus="15% поповн. / 15% завдань"
                iconBg="rgba(236, 72, 153, 0.1)"
                iconComponent={<img src="/assets/images/pinkCrown.png" />}
              />
            </div>
          </div>
 
        </div>
      </div>
    </Layout>
  );
};
 
export default LevelSystem;
 
 