import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Search, Link2, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SelectChannel = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const channels = [
    { id: 1, title: 'Crypto Signals VIP', subtitle: '-1001987654321', type: 'link', icon: Link2 },
    { id: 2, title: 'Tech News UA', subtitle: '@technews_ua', type: 'globe', icon: '/assets/images/svg/Planet 3.svg' },
    { id: 3, title: 'NFT Community', subtitle: '-1001987654321', type: 'link', icon: Link2 },
    { id: 4, title: 'Premium Content', subtitle: '-1001987654321', type: 'crown', icon: '/assets/images/svg/Crown Line.svg' },
    { id: 5, title: 'Crypto Signals VIP', subtitle: '-1001987654321', type: 'link', icon: Link2 },
    { id: 6, title: 'Tech News UA', subtitle: '@technews_ua', type: 'globe', icon: '/assets/images/svg/Planet 3.svg' },
    { id: 7, title: 'NFT Community', subtitle: '-1001987654321', type: 'link', icon: Link2 },
    { id: 8, title: 'Premium Content', subtitle: '-1001987654321', type: 'crown', icon: '/assets/images/svg/Crown Line.svg' },
  ];

  const filteredChannels = channels.filter(channel => 
    channel.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    channel.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (channel) => {
    // Navigate back to LaunchSC, passing the selected channel subtitle/username as state
    navigate('/launch-sc', { state: { selectedChannel: channel.subtitle } });
  };

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen flex flex-col overflow-y-auto hide-scrollbar font-sans text-white pb-6'>
      {/* Header */}
      <div className='flex items-center justify-between p-[22px_15px_12px]'>
        <button onClick={() => navigate('/launch-sc')} className='text-[#545664] hover:text-white transition-colors cursor-pointer'>
          <ChevronLeft size={20} />
        </button>
        <h1 className='text-base font-medium text-white tracking-wider flex-1 text-center mr-5'>Select channel/chat</h1>
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
            className='w-full bg-transparent text-sm text-white/80 placeholder-white/40 focus:outline-none' 
          />
        </div>
      </div>

      {/* Channels List */}
      <div className='flex flex-col gap-3 px-[15px] py-3'>
        {filteredChannels.map((channel, index) => {
          const IconComponent = channel.icon;
          return (
            <div 
              key={`${channel.id}-${index}`}
              onClick={() => handleSelect(channel)}
              className='gradient-border-card rounded-[18px] p-3 flex items-center justify-between cursor-pointer hover:brightness-110 active:scale-[0.99] transition-all'
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.05) 2.67%, rgba(255, 255, 255, 0.02) 98%)' }}
            >
              <div className='flex items-center gap-3.5'>
                {/* Circle Icon with Blue Glow */}
                <div 
                  className='w-[44px] h-[44px] rounded-full flex items-center justify-center border border-[#87ADF0]/15 text-[#87ADF0]'
                  style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
                >
                  {typeof channel.icon === 'string' ? (
                    <img src={channel.icon} alt={channel.title} className="w-5 h-5 object-contain" />
                  ) : (
                    <IconComponent size={20} className='text-[#87ADF0]' />
                  )}
                </div>
                
                {/* Text details */}
                <div>
                  <h3 className='font-medium text-sm text-white'>{channel.title}</h3>
                  <p className='text-xs text-[#ffffff]/40 mt-1'>{channel.subtitle}</p>
                </div>
              </div>

              {/* Chevron Right */}
              <ChevronRight size={18} className='text-white/40' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectChannel;
