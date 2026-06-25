import React, { useState } from 'react';
import { ChevronLeft, Globe, Lock, Link2, Bot, Calendar, Clock, ChevronsUpDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PlanetIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3337 9.99999C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 9.99999C1.66699 5.39762 5.39795 1.66666 10.0003 1.66666C14.6027 1.66666 18.3337 5.39762 18.3337 9.99999Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2.5 6.67308C2.5 6.67308 4.94764 9.16663 8.69764 9.16663C11.25 9.16663 12.6047 7.68906 13.75 7.29644C15.9024 6.55856 17.5 6.67308 17.5 6.67308" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M2.50046 11.6731C2.50046 11.6731 4.24119 11.5586 6.58648 12.2965C7.83438 12.6891 9.31049 14.1667 12.0916 14.1667C14.6014 14.1667 16.5758 13.2258 17.7256 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const LockPasswordIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.66699 13.3333C1.66699 10.9763 1.66699 9.79781 2.39923 9.06558C3.13146 8.33334 4.30997 8.33334 6.66699 8.33334H13.3337C15.6907 8.33334 16.8692 8.33334 17.6014 9.06558C18.3337 9.79781 18.3337 10.9763 18.3337 13.3333C18.3337 15.6904 18.3337 16.8689 17.6014 17.6011C16.8692 18.3333 15.6907 18.3333 13.3337 18.3333H6.66699C4.30997 18.3333 3.13146 18.3333 2.39923 17.6011C1.66699 16.8689 1.66699 15.6904 1.66699 13.3333Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M5 8.33332V6.66666C5 3.90523 7.23858 1.66666 10 1.66666C12.7614 1.66666 15 3.90523 15 6.66666V8.33332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6.66699 13.3333H6.67449M9.99283 13.3333H10.0003M13.3262 13.3333H13.3337" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SmileSquareIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12.5003" cy="10.4167" rx="0.833333" ry="1.25" fill="currentColor"/>
    <ellipse cx="7.50033" cy="10.4167" rx="0.833333" ry="1.25" fill="currentColor"/>
    <path d="M3.33301 10.8333C3.33301 8.08347 3.33301 6.70854 4.30932 5.85427C5.28563 5 6.85698 5 9.99967 5C13.1424 5 14.7137 5 15.69 5.85427C16.6663 6.70854 16.6663 8.08347 16.6663 10.8333C16.6663 13.5832 16.6663 14.9581 15.69 15.8124C14.7137 16.6667 13.1424 16.6667 9.99967 16.6667C6.85698 16.6667 5.28563 16.6667 4.30932 15.8124C3.33301 14.9581 3.33301 13.5832 3.33301 10.8333Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M3.33296 8.16803L2.54244 8.43154C1.71739 8.70655 1.30487 8.84406 1.06892 9.17143C0.832973 9.4988 0.832985 9.93364 0.833008 10.8033L0.83301 10.8638C0.833029 11.581 0.833039 11.9397 1.0057 12.2331C1.17835 12.5265 1.49187 12.7007 2.11888 13.0491L3.33296 13.75" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16.667 8.16803L17.4576 8.43154C18.2826 8.70655 18.6951 8.84406 18.9311 9.17143C19.167 9.4988 19.167 9.93364 19.167 10.8033L19.167 10.8638C19.167 11.581 19.167 11.9397 18.9943 12.2331C18.8216 12.5265 18.5081 12.7007 17.8811 13.0491L16.667 13.75" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6.66699 5L6.66699 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12.5 5L12.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PlayIcon = ({ className }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00001C14.6668 4.31811 11.6821 1.33334 8.00016 1.33334C4.31826 1.33334 1.3335 4.31811 1.3335 8.00001C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" fill="currentColor" fillOpacity="0.15"/>
    <path d="M10.2758 8.70599L7.12899 10.5639C6.62247 10.8629 6 10.4737 6 9.85791V6.14212C6 5.52633 6.62247 5.13708 7.12899 5.43614L10.2758 7.29403C10.797 7.60174 10.797 8.39828 10.2758 8.70599Z" fill="currentColor"/>
  </svg>
);

const CalendarMinimalisticIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3">
      <path d="M5.78389 1.66669C6.13044 1.66669 6.41138 1.93686 6.41138 2.27014V3.48741C6.96797 3.47703 7.59185 3.47703 8.29382 3.47703H11.6404C12.3424 3.47703 12.9662 3.47703 13.5228 3.48741V2.27014C13.5228 1.93686 13.8038 1.66669 14.1503 1.66669C14.4969 1.66669 14.7778 1.93686 14.7778 2.27014V3.5408C15.982 3.63354 16.7725 3.86113 17.3533 4.41968C17.9341 4.97823 18.1708 5.73849 18.2672 6.89657L18.3337 7.50002H2.43745H1.66699V6.89657C1.76342 5.73849 2.00007 4.97823 2.58087 4.41968C3.16167 3.86113 3.95221 3.63354 5.15641 3.5408V2.27014C5.15641 1.93686 5.43735 1.66669 5.78389 1.66669Z" fill="currentColor"/>
      <path opacity="0.5" d="M18.3331 11.6667V10C18.3331 9.30081 18.3304 8.05433 18.3196 7.49994H1.67447C1.66372 8.05433 1.66643 9.30081 1.66643 10V11.6667C1.66643 14.8094 1.66643 16.3807 2.64274 17.357C3.61906 18.3333 5.1904 18.3333 8.3331 18.3333H11.6664C14.8091 18.3333 16.3805 18.3333 17.3568 17.357C18.3331 16.3807 18.3331 14.8094 18.3331 11.6667Z" fill="currentColor"/>
    </g>
  </svg>
);

const ClockCircleIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z" fill="currentColor" fillOpacity="0.3"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10 6.04169C10.3452 6.04169 10.625 6.32151 10.625 6.66669V9.74114L12.5253 11.6414C12.7694 11.8855 12.7694 12.2812 12.5253 12.5253C12.2812 12.7694 11.8855 12.7694 11.6414 12.5253L9.55806 10.442C9.44085 10.3248 9.375 10.1658 9.375 10V6.66669C9.375 6.32151 9.65482 6.04169 10 6.04169Z" fill="currentColor" fillOpacity="0.3"/>
  </svg>
);


const DangerTriangleIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.5" d="M10.0003 2.5C8.0747 2.5 6.85872 4.65597 4.42675 8.96791L4.1237 9.50523C2.10275 13.0884 1.09228 14.88 2.00554 16.19C2.9188 17.5 5.17829 17.5 9.69727 17.5H10.3034C14.8224 17.5 17.0818 17.5 17.9951 16.19C18.9084 14.88 17.8979 13.0884 15.8769 9.50522L15.5739 8.96791C13.1419 4.65597 11.9259 2.5 10.0003 2.5Z" fill="currentColor"/>
    <path d="M10.0003 6.04166C10.3455 6.04166 10.6253 6.32148 10.6253 6.66666V10.8333C10.6253 11.1785 10.3455 11.4583 10.0003 11.4583C9.65515 11.4583 9.37533 11.1785 9.37533 10.8333V6.66666C9.37533 6.32148 9.65515 6.04166 10.0003 6.04166Z" fill="currentColor"/>
    <path d="M10.0003 14.1667C10.4606 14.1667 10.8337 13.7936 10.8337 13.3333C10.8337 12.8731 10.4606 12.5 10.0003 12.5C9.54009 12.5 9.16699 12.8731 9.16699 13.3333C9.16699 13.7936 9.54009 14.1667 10.0003 14.1667Z" fill="currentColor"/>
  </svg>
);

const XMarkOctagonIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M7.70253 1.04166C6.87372 1.04166 6.07887 1.3709 5.49282 1.95695L1.95728 5.49248C1.37123 6.07853 1.04199 6.87339 1.04199 7.70219V12.2978C1.04199 13.1266 1.37123 13.9214 1.95728 14.5075L5.49282 18.043C6.07887 18.6291 6.87372 18.9583 7.70253 18.9583H12.2981C13.1269 18.9583 13.9218 18.6291 14.5078 18.043L18.0434 14.5075C18.6294 13.9214 18.9587 13.1266 18.9587 12.2978V7.70219C18.9587 6.87339 18.6294 6.07853 18.0434 5.49248L14.5078 1.95695C13.9218 1.3709 13.1269 1.04166 12.2981 1.04166H7.70253Z" fill="currentColor"/>
    <path d="M7.05806 12.0581C6.81398 12.3021 6.81398 12.6979 7.05806 12.9419C7.30214 13.186 7.69786 13.186 7.94194 12.9419L10 10.8839L12.0581 12.9419C12.3021 13.186 12.6979 13.186 12.9419 12.9419C13.186 12.6979 13.186 12.3021 12.9419 12.0581L10.8839 10L12.9419 7.94194C13.186 7.69786 13.186 7.30214 12.9419 7.05806C12.6979 6.81398 12.3021 6.81398 12.0581 7.05806L10 9.11612L7.94195 7.05807C7.69787 6.81399 7.30214 6.81399 7.05807 7.05807C6.81399 7.30214 6.81399 7.69787 7.05807 7.94195L9.11612 10L7.05806 12.0581Z" fill="currentColor"/>
  </svg>
);

const LaunchSC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [linkType, setLinkType] = useState('public'); // 'public', 'private', 'invite', 'bot'
  const [channelUsername, setChannelUsername] = useState(location.state?.selectedChannel || '@username');
  const [launchTime, setLaunchTime] = useState('schedule'); // 'now', 'schedule'
  const [scheduleDate, setScheduleDate] = useState('01.03.2026');
  const [scheduleTime, setScheduleTime] = useState('16:30');
  const [endCondition, setEndCondition] = useState('count'); // 'nolimit', 'date', 'count'
  
  const [countDate, setCountDate] = useState('01.03.2026');
  const [countTime, setCountTime] = useState('16:30');
  const [inviteLink, setInviteLink] = useState('https://t.me/+5aSzC8x-8F9iZTYy');
  const [botLink, setBotLink] = useState('https://t.me/bot_name?start=ref123');

  const changeLinkType = (type) => {
    setLinkType(type);
    if (type === 'private' || type === 'invite') {
      if (channelUsername === '@username' || channelUsername === '@support_helper_bot') {
        setChannelUsername('-1001987654321');
      }
    } else if (type === 'bot') {
      if (channelUsername === '@username' || channelUsername === '-1001987654321') {
        setChannelUsername('@support_helper_bot');
      }
    } else {
      if (channelUsername === '-1001987654321' || channelUsername === '@support_helper_bot') {
        setChannelUsername('@username');
      }
    }
  };

  const handleLaunchTimeChange = (time) => {
    setLaunchTime(time);
    if (time === 'now') {
      setEndCondition('nolimit');
    }
  };

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen flex flex-col justify-between overflow-y-auto hide-scrollbar font-sans text-white pb-6'>
      
      {/* Top Header */}
      <div>
        <div className='flex items-center justify-between border-b border-b-[#232637] p-[22px_15px]'>
          <Link to="/group-detail" className='text-[#545664] hover:text-white transition-colors'>
            <ChevronLeft size={20} />
          </Link>
          <h1 className='text-base font-semibold text-white tracking-wider flex-1 text-center mr-5'>Launch new SC</h1>
        </div>

        {/* Form Container */}
        <div className='px-[15px] py-[18px] flex flex-col gap-4'>
          
          {/* Section 01: Select Link Type */}
          <div 
            className='rounded-2xl p-3 flex flex-col gap-3'
            style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%), #141629' }}
          >
            {/* Title with Number */}
            <div className='flex items-center gap-3'>
              <div 
                className='w-[44px] h-[44px] rounded-full flex items-center justify-center border border-[#87ADF0]/15 text-sm text-[#87ADF0] font-bold'
                style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
              >
                01
              </div>
              <h2 className='text-[15px] font-semibold text-white tracking-wide'>Select link type</h2>
            </div>

            {/* Segmented control of link types */}
            <div className='bg-[#16182C]/50 border border-white/[0.06] rounded-[18px] flex items-stretch relative overflow-hidden'>
              {[
                { id: 'public', label: 'Public', icon: PlanetIcon },
                { id: 'private', label: 'Private', icon: LockPasswordIcon },
                { id: 'invite', label: 'Invite', icon: Link2 },
                { id: 'bot', label: 'Bot', icon: SmileSquareIcon }
              ].map((item, idx, arr) => {
                const IconComponent = item.icon;
                const isActive = linkType === item.id;
                const prevActive = idx > 0 && linkType === arr[idx - 1].id;
                
                return (
                  <React.Fragment key={item.id}>
                    {/* Divider: Show if not first, and neither current nor previous is active */}
                    {idx > 0 && !isActive && !prevActive && (
                      <div className='w-[1px] bg-white/[0.08] self-stretch' />
                    )}
                    
                    <button 
                      onClick={() => changeLinkType(item.id)}
                      className={`flex-1 py-3 flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        isActive
                          ? 'bg-[#87ADF0] text-[#0B0E21] font-semibold'
                          : 'hover:bg-white/[0.02]'
                      }`}
                    >
                      <IconComponent size={20} className={isActive ? 'text-[#0B0E21]' : 'text-[#87ADF0]'} />
                      <span className={`text-[14px] font-semibold ${isActive ? 'text-[#0B0E21]' : 'text-white'}`}>{item.label}</span>
                    </button>
                  </React.Fragment>
                );
              })}
            </div>

            {/* Input Channel */}
            <div className='flex flex-col'>
              <label className='text-xs font-medium text-[#ffffff]/40 mb-[6px] tracking-wide'>
                {linkType === 'bot' ? 'Bot username' : (linkType === 'private' || linkType === 'invite' ? 'Channel/chat ID' : 'Channel to subscribe')}
              </label>
              <div className='flex gap-2 items-center justify-between'>
                <div className="gradient-border-card rounded-full">
                  <input 
                  type='text' 
                  value={channelUsername}
                  onChange={(e) => setChannelUsername(e.target.value)}
                  className='flex-1 h-[44px] rounded-full px-5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#87ADF0]/30'
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                />
                </div>
                <button 
                  onClick={() => navigate(linkType === 'bot' ? '/select-bot' : '/select-channel')}
                  className='h-[44px] px-6 rounded-full text-xs font-bold text-[#87ADF0] border border-[#87ADF0]/15 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all'
                  style={{ background: 'linear-gradient(135deg, rgba(135, 173, 240, 0.15) 0%, rgba(135, 173, 240, 0.03) 100%)' }}
                >
                  Select
                </button>
              </div>
            </div>

            {/* Invite Link input field */}
            {linkType === 'invite' && (
              <div className='flex flex-col'>
                <label className='text-xs font-medium text-[#ffffff]/40 mb-[6px] tracking-wide'>Invite link</label>
                <div className="gradient-border-card rounded-full">
                  <input 
                    type='text' 
                    value={inviteLink}
                    onChange={(e) => setInviteLink(e.target.value)}
                    className='w-full h-[48px] rounded-full px-5 text-sm font-medium text-white placeholder-white/20 focus:outline-none focus:border-[#87ADF0]' style={{background: 'rgba(255, 255, 255, 0.05)'}}
                  />
                </div>
              </div>
            )}

            {/* Bot Link (optional) field */}
            {linkType === 'bot' && (
              <div className='flex flex-col'>
                <label className='text-xs font-medium text-[#ffffff]/40 mb-[6px] tracking-wide'>Link (optional)</label>
                <div className="gradient-border-card rounded-full">
                  <input 
                    type='text' 
                    value={botLink}
                    onChange={(e) => setBotLink(e.target.value)}
                    className='w-full h-[48px] rounded-full px-5 text-sm font-medium text-white placeholder-white/20 focus:outline-none focus:border-[#87ADF0]' style={{background: 'rgba(255, 255, 255, 0.05)'}}
                  />
                </div>
              </div>
            )}

            {/* Warning Banner */}
            {channelUsername === '@technews_ua' ? (
              <div 
                className='border border-[#FF4973]/10 rounded-full px-5 py-3 flex gap-3 text-white items-center'
                style={{ background: 'rgba(255, 73, 115, 0.08)' }}
              >
                <XMarkOctagonIcon className='shrink-0 text-[#FF4973] w-[20px] h-[20px]' />
                <p className='text-xs font-medium leading-tight text-[#FFB7C8]'>
                  Bot is not added to this channel/chat. Add @prgram_bot as administrator.
                </p>
              </div>
            ) : linkType === 'private' ? (
              <div 
                className='border border-[#FFC000]/10 rounded-full px-5 py-2.5 flex gap-3 text-[#FFF0C4] items-center'
                style={{ background: 'rgba(255, 192, 0, 0.05)' }}
              >
                <DangerTriangleIcon className='shrink-0 text-[#FFD166] w-[20px] h-[20px]' />
                <p className='text-xs font-medium leading-tight'>
                  Bot has insufficient permissions. Required: delete messages, add members.
                </p>
              </div>
            ) : linkType === 'invite' ? (
              <div 
                className='border border-[#FFC000]/10 rounded-full px-5 py-2.5 flex gap-3 text-[#FFF0C4] items-center'
                style={{ background: 'rgba(255, 192, 0, 0.05)' }}
              >
                <DangerTriangleIcon className='shrink-0 text-[#FFD166] w-[20px] h-[20px]' />
                <p className='text-xs font-medium leading-tight'>
                  Link must be from the selected channel/chat
                </p>
              </div>
            ) : linkType === 'bot' ? (
              <div 
                className='border border-[#FFC000]/10 rounded-[18px] px-5 py-2.5 flex gap-3 text-[#FFF0C4] items-center'
                style={{ background: 'rgba(255, 192, 0, 0.05)' }}
              >
                <DangerTriangleIcon className='shrink-0 text-[#FFD166] w-[20px] h-[20px] mt-0.5' />
                <p className='text-xs font-medium leading-relaxed'>
                  A Bot token for Support Bot ({channelUsername}) has not been added. Go to Settings &rarr; Bots to add the token.
                </p>
              </div>
            ) : (
              <div 
                className='border border-[#FFC000]/10 rounded-full px-5 py-2.5 flex gap-3 text-[#FFF0C4] items-center'
                style={{ background: 'rgba(255, 192, 0, 0.05)' }}
              >
                <DangerTriangleIcon className='shrink-0 text-[#FFD166] w-[18px] h-[18px]' />
                <p className='text-xs font-medium leading-tight'>
                  A Bot has insufficient permissions. Required: add members.
                </p>
              </div>
            )}

          </div>

          {/* Section 02: Launch settings */}
          <div 
            className='rounded-2xl p-3 flex flex-col gap-4'
            style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%), #141629' }}
          >
            {/* Title with Number */}
            <div className='flex items-center gap-3'>
              <div 
                className='w-[44px] h-[44px] rounded-full flex items-center justify-center border border-[#87ADF0]/15 text-sm text-[#87ADF0] font-bold'
                style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
              >
                02
              </div>
              <h2 className='text-[15px] font-semibold text-white tracking-wide'>Launch settings</h2>
            </div>

            {/* Toggle Tabs (Now / Schedule) */}
            <div className='gradient-border-card rounded-[12px] flex items-stretch relative overflow-hidden h-[46px]' style={{background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'}}>
              <button 
                onClick={() => handleLaunchTimeChange('now')}
                className={`flex-1 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  launchTime === 'now' 
                    ? 'bg-[#87ADF0] text-[#0B0E21] font-medium' 
                    : 'text-white hover:bg-white/[0.02]'
                }`}
              >
                <PlayIcon 
                  className={`w-[20px] h-[20px] transition-all ${launchTime === 'now' ? 'text-[#0B0E21]' : 'text-[#87ADF0]'}`}
                />
                <span className={`text-[14px] font-semibold ${launchTime === 'now' ? 'text-[#0B0E21]' : 'text-white'}`}>Now</span>
              </button>

              <button 
                onClick={() => handleLaunchTimeChange('schedule')}
                className={`flex-1 flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  launchTime === 'schedule' 
                    ? 'bg-[#87ADF0] text-[#0B0E21] font-semibold' 
                    : 'text-white hover:bg-white/[0.02]'
                }`}
              >
                <img 
                  src='/assets/images/svg/calendar.svg' 
                  alt='calendar' 
                  className={`w-[20px] h-[20px] transition-all ${launchTime === 'schedule' ? 'brightness-0' : ''}`}
                />
                <span className={`text-[14px] font-semibold ${launchTime === 'schedule' ? 'text-[#0B0E21]' : 'text-white'}`}>Schedule</span>
              </button>
            </div>
            {/* Scheduled Date/Time Input */}
            {launchTime === 'schedule' && (
              <div className='flex gap-3'>
                <div className='flex-[1.6] gradient-border-card relative flex items-center rounded-full h-[44px] px-4 cursor-pointer hover:border-white/20 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                  <CalendarMinimalisticIcon className='w-5 h-5 text-white mr-2 shrink-0' />
                  <input 
                    type='text' 
                    value={scheduleDate} 
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className='w-full bg-transparent text-xs font-semibold text-white/80 focus:outline-none'
                  />
                </div>
                
                <div className='flex-[1] gradient-border-card relative flex items-center rounded-full h-[44px] px-4 cursor-pointer hover:border-white/20 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                  <ClockCircleIcon className='w-5 h-5 text-white mr-2 shrink-0' />
                  <input 
                    type='text' 
                    value={scheduleTime} 
                    onChange={(e) => setScheduleTime(e.target.value)}
                    className='w-full bg-transparent text-xs font-semibold text-white/80 focus:outline-none'
                  />
                </div>
              </div>
            )}

            {/* SC End Condition Label */}
            <div className='flex items-center gap-2 mt-2 text-[11px] font-semibold text-[#ffffff66] uppercase tracking-wider'>
              <img src='/assets/images/svg/history.svg' alt='history' className='w-4' />
              SC END CONDITION
            </div>

            {/* Radio Choices */}
            <div className='flex flex-col gap-2'>
              {/* Option 1: No Limit */}
              <div 
                onClick={() => setEndCondition('nolimit')}
                className='flex items-center gap-3 gradient-border-card rounded-full h-[48px] px-4 cursor-pointer hover:bg-white/[0.01] transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  endCondition === 'nolimit' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'
                }`}>
                  {endCondition === 'nolimit' ? (
                    <div className='w-2 h-2 rounded-full bg-[#ffffff]' />
                  ) : (
                    <div className='w-2 h-2 rounded-full border border-white/20 bg-transparent' />
                  )}
                </div>
                <span className='text-xs font-bold text-white/85'>No Limit</span>
              </div>

              {/* Option 2: By Date */}
              <div 
                onClick={() => setEndCondition('date')}
                className='flex items-center gap-3 gradient-border-card rounded-full h-[48px] px-4 cursor-pointer hover:bg-white/[0.01] transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}
              >
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  endCondition === 'date' ? 'border-[#87ADF0] bg-transparent' : 'border-white/20'
                }`}>
                  {endCondition === 'date' ? (
                    <div className='w-2 h-2 rounded-full bg-[#87ADF0]' />
                  ) : (
                    <div className='w-2 h-2 rounded-full border border-white/20 bg-transparent' />
                  )}
                </div>
                <span className='text-xs font-bold text-white/85'>By Date</span>
              </div>

              {/* Option 3: By Count */}
              {launchTime !== 'now' && (
                endCondition === 'count' ? (
                  <div 
                    className='gradient-border-card rounded-[18px] p-4 flex flex-col gap-3.5 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}
                  >
                    {/* Top Header Row */}
                    <div 
                      onClick={() => setEndCondition('count')}
                      className='flex items-center gap-3 cursor-pointer'
                    >
                      <div className='w-5 h-5 rounded-full border-2 border-[#87ADF0] bg-[#87ADF0] flex items-center justify-center transition-all'>
                        <div className='w-2 h-2 rounded-full bg-[#ffffff]' />
                      </div>
                      <span className='text-xs font-bold text-white/85'>By Count</span>
                    </div>

                    {/* Nested Bottom Input Section */}
                    {linkType === 'invite' ? (
                      <div className='relative flex items-center justify-between gradient-border-card rounded-full h-[46px] px-4 cursor-pointer hover:border-white/20 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                        <div className='flex items-center gap-2.5'>
                          <img src='/assets/images/svg/user.svg' className='w-5 opacity-40' alt='user' />
                          <span className='text-[#8A8D9F] text-xs font-semibold'>Add subscribers</span>
                        </div>
                        <ChevronsUpDown size={15} className='opacity-40 text-white shrink-0' />
                      </div>
                    ) : (
                      <div className='flex gap-3'>
                        <div className='flex-[1.6] relative flex items-center gradient-border-card rounded-full h-[44px] px-4 cursor-pointer hover:border-white/20 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                          <CalendarMinimalisticIcon className='w-5 h-5 text-white mr-2 shrink-0' />
                          <input 
                            type='text' 
                            value={countDate} 
                            onChange={(e) => setCountDate(e.target.value)}
                            className='w-full bg-transparent text-xs font-semibold text-white/80 focus:outline-none'
                          />
                        </div>
                        
                        <div className='flex-[1] relative flex items-center gradient-border-card rounded-full h-[44px] px-4 cursor-pointer hover:border-white/20 transition-all' style={{background: 'rgba(255, 255, 255, 0.05)'}}>
                          <ClockCircleIcon className='w-5 h-5 text-white mr-2 shrink-0' />
                          <input 
                            type='text' 
                            value={countTime} 
                            onChange={(e) => setCountTime(e.target.value)}
                            className='w-full bg-transparent text-xs font-semibold text-white/80 focus:outline-none'
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div 
                    onClick={() => setEndCondition('count')}
                    className='gradient-border-card flex items-center gap-3 bg-[#121424] border border-[#23263B] rounded-full h-[48px] px-4 cursor-pointer hover:bg-white/[0.01] transition-all'
                    style={{ background: 'rgba(255, 255, 255, 0.05)'}}
                  >
                    <div className='w-5 h-5 rounded-full border-2 border-white/20 flex items-center justify-center transition-all'>
                      <div className='w-2 h-2 rounded-full border border-white/20 bg-transparent' />
                    </div>
                    <span className='text-xs font-bold text-white/85'>By Count</span>
                  </div>
                )
              )}

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Launch Button */}
      <div className='px-[15px] pt-4'>
        <button 
          className='w-full h-[48px] bg-[#87ADF0] text-[#0B0E21] font-bold text-sm rounded-full flex items-center justify-center gap-2 cursor-pointer hover:bg-[#729EE8] transition-all shadow-[0_4px_20px_rgba(135,173,240,0.25)]'
        >
          <PlayIcon 
            className="w-[20px] h-[20px] transition-all"
          />
          Launch
        </button>
      </div>

    </div>
  );
};

export default LaunchSC;
