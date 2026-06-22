import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Link2, Search, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const SelectChannelPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const channelsList = [
    {
      id: 'crypto_signals',
      title: 'Crypto Signals VIP',
      username: '@crypto_signals_ua',
      subscribers: '12.5k',
      type: 'channel'
    },
    {
      id: 'tech_news',
      title: 'Tech News UA',
      username: '@technews_ua',
      subscribers: '12.5k',
      type: 'group'
    },
    {
      id: 'crypto_signals_id',
      title: 'Crypto Signals VIP',
      username: '-1001987654321',
      subscribers: '12.5k',
      type: 'channel'
    },
    {
      id: 'tech_news_2',
      title: 'Tech News UA',
      username: '@technews_ua',
      subscribers: '12.5k',
      type: 'group'
    }
  ];

  const filteredChannels = channelsList.filter((channel) =>
    channel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    channel.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout showNavbar={false}>
      <div className='px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen'>

        {/* Header */}
        <div className='flex items-center justify-between mb-5 relative'>
          <button
            onClick={() => navigate(-1)}
            className='text-[#8A8D9F] hover:text-white transition-colors cursor-pointer'
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className='text-base font-semibold text-white absolute left-1/2 -translate-x-1/2'>Оберіть канал</h1>
          <div className='w-6' />
        </div>

        {/* Search Bar */}
        <div className='relative w-full mb-5'>
          <Search size={18} className='absolute left-4 top-1/2 -translate-y-1/2 text-white/30' />
          <input
            type='text'
            placeholder='Пошук'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full h-[48px] rounded-full bg-[#0B0E21]/40 border border-white/10 pl-11 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#87ADF0] transition-colors'
          />
        </div>

        {/* Channels List */}
        <div className='flex flex-col gap-3 mb-8'>
          {filteredChannels.map((channel) => (
            <div
              key={channel.id}
              onClick={() => navigate('/audience-setup')}
              className='gradient-border-card rounded-[20px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition-all'
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              <div className='flex items-center gap-3.5'>
                {/* Icon Container */}
                <div className='w-10 h-10 rounded-full bg-[#87ADF0]/10 border border-[#87ADF0]/20 flex items-center justify-center'>
                  {channel.type === 'channel' ? (
                    <img src='/assets/images/vector15.png' alt='vector15' className='w-[44px]' />
                  ) : (
                    <img src='/assets/images/vector16.png' alt='vector16' className='w-[44px]' />
                  )}
                </div>
                <div>
                  <h3 className='font-semibold text-sm text-white leading-tight'>{channel.title}</h3>
                  <p className='text-white/40 text-xs mt-1'>{channel.username}</p>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <span className='text-xs text-white/80 font-medium'>{channel.subscribers}</span>
                <ChevronRight size={16} className='text-[#5A5D72]' />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Continue Button */}
        <div className='mt-auto pt-4'>
          <button
            onClick={() => navigate('/audience-setup')}
            className='w-full h-[48px] bg-[#87ADF0] hover:bg-[#729EE8] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_12px_rgba(135,173,240,0.2)]'
          >
            Продовжити
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default SelectChannelPage;
