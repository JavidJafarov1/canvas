import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const botsList = [
  { id: 'crypto_bot', title: 'Crypto Signals VIP', username: '@crypto_signals_ua', subscribers: '12.5k', icon: '/assets/images/vector15.png' },
  { id: 'tech_bot',   title: 'Tech News UA',       username: '@technews_ua',        subscribers: '12.5k', icon: '/assets/images/vector16.png' },
  { id: 'crypto_bot2',title: 'Crypto Signals VIP', username: '-1001987654321',      subscribers: '12.5k', icon: '/assets/images/vector15.png' },
  { id: 'tech_bot2',  title: 'Tech News UA',       username: '@technews_ua',        subscribers: '12.5k', icon: '/assets/images/vector16.png' },
];

const SelectBotPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = botsList.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">

        {/* Header */}
        <div className="flex items-center justify-between mb-5 relative">
          <button onClick={() => navigate(-1)} className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-semibold text-white absolute left-1/2 -translate-x-1/2">Оберіть бота</h1>
          <div className="w-6" />
        </div>

        {/* Search */}
        <div className="relative w-full mb-5">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            type="text"
            placeholder="Пошук"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-[48px] rounded-full bg-[#0B0E21]/40 border border-white/10 pl-11 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#87ADF0] transition-colors"
          />
        </div>

        {/* Bot List */}
        <div className="flex flex-col gap-3 mb-8">
          {filtered.map((bot) => (
            <div
              key={bot.id}
              onClick={() => navigate(-1)}
              className="gradient-border-card rounded-[20px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition-all"
              style={{ background: 'linear-gradient(86.96deg, rgba(255,255,255,0.055) 2.67%, rgba(255,255,255,0.077) 98%)' }}
            >
              <div className="flex items-center gap-3.5">
                <img src={bot.icon} alt="bot" className="w-[44px]" />
                <div>
                  <h3 className="font-semibold text-sm text-white leading-tight">{bot.title}</h3>
                  <p className="text-white/40 text-xs mt-1">{bot.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/80 font-medium">{bot.subscribers}</span>
                <ChevronRight size={16} className="text-[#5A5D72]" />
              </div>
            </div>
          ))}
        </div>

        {/* Continue */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => navigate('/bot-task-type')}
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

export default SelectBotPage;
