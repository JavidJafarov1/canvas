import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SelectBot = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const bots = [
    { id: 1, title: 'PR GRAM Bot', subtitle: '@prgram_bot' },
    { id: 2, title: 'Support Bot', subtitle: '@support_helper_bot' },
  ];

  const filteredBots = bots.filter(bot => 
    bot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bot.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (bot) => {
    navigate('/launch-sc', { state: { selectedChannel: bot.subtitle } });
  };

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen flex flex-col overflow-y-auto hide-scrollbar font-sans text-white pb-6'>
      {/* Header */}
      <div className='flex items-center justify-between p-[22px_15px_12px]'>
        <button onClick={() => navigate('/launch-sc')} className='text-[#545664] hover:text-white transition-colors cursor-pointer'>
          <ChevronLeft size={20} />
        </button>
        <h1 className='text-base font-medium text-white tracking-wider flex-1 text-center mr-5'>Select bot</h1>
      </div>

      {/* Search Input Box */}
      <div className='px-[15px] pb-3 border-b border-[#232637]'>
        <div className='gradient-border-card relative flex items-center rounded-full h-[44px] px-4' style={{background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'}}>
          <Search size={20} className='text-white/40 mr-2 shrink-0' />
          <input 
            type='text' 
            placeholder='Search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-transparent text-sm font-semibold text-white/80 placeholder-white/20 focus:outline-none'
          />
        </div>
      </div>

      {/* Bots List */}
      <div className='flex flex-col gap-3 px-[15px] py-3'>
        {filteredBots.map((bot) => (
          <div 
            key={bot.id}
            onClick={() => handleSelect(bot)}
            className='gradient-border-card rounded-[12px] p-3 flex items-center justify-between cursor-pointer hover:brightness-110 active:scale-[0.99] transition-all'
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.05) 2.67%, rgba(255, 255, 255, 0.02) 98%)' }}
          >
            <div className='flex items-center gap-3.5'>
              {/* Circle Icon with Blue Glow */}
              <div 
                className='w-[44px] h-[44px] rounded-full flex items-center justify-center border border-[#87ADF0]/15 text-[#87ADF0]'
                style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
              >
                <Bot size={20} className='text-[#87ADF0]' />
              </div>
              
              {/* Text details */}
              <div>
                <h3 className='font-medium text-sm text-white'>{bot.title}</h3>
                <p className='text-xs text-[#ffffff]/40 mt-1'>{bot.subtitle}</p>
              </div>
            </div>

            {/* Chevron Right */}
            <ChevronRight size={18} className='text-white/40' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBot;
