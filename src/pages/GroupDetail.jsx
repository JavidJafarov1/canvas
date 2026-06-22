import React, { useState } from 'react';
import {
  ChevronLeft,
  Bell,
  Settings,
  ChevronRight,
  Trash2,
  Edit2,
  Calendar,
  Clock,
  Link2,
  Globe,
  Crown,
  Users,
  Compass,
  Sliders,
  Star,
  ChevronsUpDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ExtendSCModal from '../components/modals/ExtendSCModal';
import DisableSCModal from '../components/modals/DisableSCModal';
import DisableAllModal from '../components/modals/DisableAllModal';

const GroupDetail = () => {
  const [activeTab, setActiveTab] = useState('MON 12');
  const [showExtendModal, setShowExtendModal] = useState(false);
  const [showDisableModal, setShowDisableModal] = useState(false);
  const [showDisableAllModal, setShowDisableAllModal] = useState(false);
  const [selectedSC, setSelectedSC] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState('6h');

  const days = [
    { name: 'MON', date: '12', dot: true },
    { name: 'TUE', date: '13', dot: false },
    { name: 'WED', date: '14', dot: true },
    { name: 'THU', date: '15', dot: false },
    { name: 'FRI', date: '16', dot: true },
    { name: 'SAT', date: '17', dot: false },
    { name: 'SUN', date: '18', dot: false }
  ];

  const activeSCs = [
    {
      id: 1,
      title: 'Crypto Signals VIP',
      avatar: '/assets/images/vector15.png',
      hasExport: true,
      subtitle: '-1001987654321',
      actions: ['edit', 'delete'],
      type: 'subscriber_target',
      plusCount: '+45',
      minusCount: '-3',
      currentUserCount: 40,
      totalUserCount: 100,
      progress: '45%',
      time: '11.30, 11:30'
    },
    {
      id: 2,
      title: 'Tech News UA',
      avatar: '/assets/images/vector16.png',
      hasExport: false,
      subtitle: '@technews_ua',
      actions: ['edit', 'delete'],
      type: 'end_by_data',
      timeLeft: '-32 min',
      progress: '45%',
      time: '11.30, 11:30'
    },
    {
      id: 3,
      title: 'NFT Community',
      avatar: '/assets/images/vector15.png',
      hasExport: true,
      subtitle: '-1001987654321',
      actions: ['delete'],
      type: 'summary_stats',
      plusCount: '+45',
      minusCount: '-3',
      currentUserCount: 40,
      totalUserCount: 100,
      time: '11.30, 11:30'
    },
    {
      id: 4,
      title: 'Premium Content',
      avatar: '/assets/images/vector17.png',
      hasExport: true,
      subtitle: '-1001987654321',
      actions: ['delete'],
      type: 'no_limits',
      limitText: 'No limits',
      time: '11.30, 11:30'
    }
  ];

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen overflow-y-auto hide-scrollbar font-sans text-white'>

      {/* Header */}
      <div className='flex items-center justify-between border-b border-b-[#232637] p-[10px_15px]'>
        <div className='flex items-center gap-3'>
          <Link to="/tasks" className='text-[#545664] hover:text-white transition-colors'>
            <ChevronLeft size={20} />
          </Link>

          {/* Group avatar */}
          <div className='relative w-[54px] h-[54px] rounded-full overflow-hidden flex items-center justify-center'>
            <img src='/assets/images/vector4.png' alt='group-avatar' className='w-full h-full object-cover' />
          </div>

          <div>
            <h1 className='text-sm font-semibold text-white leading-tight'>PR GRAM Giveaway</h1>
            <p className='text-[#fff6] text-xs mt-1'>2 852 members</p>
          </div>
        </div>

        <div className='flex items-center gap-[19px]'>
          <Link to={'/settings'}><img src='/assets/images/svg/settings.svg' alt='setting' className='w-6 h-6' /></Link>
          <Link to={'/notifications'}><img src='/assets/images/svg/bell.svg' alt='bell' className='w-6 h-6' /></Link>
        </div>
      </div>
      <div className='px-[15px] py-[18px]'>
        {/* Launch new SC Button */}
        <Link to={'/launch-sc'} className='w-full gradient-border-card rounded-xl p-2.5 flex items-center justify-between mb-3 text-left cursor-pointer transition-all hover:brightness-110' style={{ background: 'linear-gradient(163deg, rgba(0, 255, 149, 0.2) 0%, rgba(0, 255, 149, 0.04) 53.26%, rgba(0, 255, 149, 0.02) 100%), linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
          <div className='flex items-center gap-3'>
            <img src='/assets/images/vector12.png' alt='vector12' />
            <div>
              <h3 className='text-sm font-semibold text-white'>Launch new SC</h3>
            </div>
          </div>
          <ChevronRight size={18} className='text-[#ffffff4d]' />
        </Link>

        {/* Dual Info Card (General / Premium) */}
        <div className='gradient-border-card rounded-xl mb-6 flex justify-between overflow-hidden divide-x divide-[#313444]' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
          {/* General */}
          <Link to={'/general'} className='p-2.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer w-[49%]'>
            <img src='/assets/images/vector13.png' alt='vector13' className='w-10' />
            <div>
              <h4 className='text-sm font-semibold text-white leading-tight'>General</h4>
              <p className='text-[#8A8D9F] text-[11px] mt-0.5'>Basics</p>
            </div>
          </Link>

          {/* Premium */}
          <Link to={'/premium'} className='p-2.5 flex items-center gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer justify-between'>
            <div className='flex items-center gap-3'>
              <img src='/assets/images/vector14.png' alt='vector14' className='w-10' />
              <div>
                <div className='flex items-center gap-1.5'>
                  <h4 className='text-sm font-semibold text-white leading-tight'>Premium</h4>
                  <span className='bg-[#EAB308]/20 text-[#EAB308] text-[9px] font-bold px-1 rounded'>PRO</span>
                </div>
                <p className='text-[#8A8D9F] text-[11px] mt-0.5'>Customization</p>
              </div>
            </div>
          </Link>
        </div>

        {/* ACTIVE Section Header */}
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-1.5'>
            <div className='w-3 h-3 rounded-full bg-[#00FF95]/20 flex items-center justify-center'>
              <div className='w-1.5 h-1.5 rounded-full bg-[#00FF95] shadow-[0_0_8px_#00FF95]'></div>
            </div>
            <h2 className='text-[13px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5'>
              Active <span className='text-[#5A5D72]'>(5)</span>
            </h2>
          </div>
          <button
            onClick={() => setShowDisableAllModal(true)}
            className='text-xs text-[#fff]/40 flex items-center gap-1 cursor-pointer'
          >
            <img src='/assets/images/svg/plus.svg' alt='plus' />
            Disable all
          </button>
        </div>

        {/* ACTIVE Cards List */}
        <div className='flex flex-col gap-3 mb-6'>
          {activeSCs.map((sc) => (
            <div
              key={sc.id}
              onClick={() => {
                if (sc.type === 'end_by_data' || sc.type === 'subscriber_target') {
                  setSelectedSC(sc);
                  setShowExtendModal(true);
                }
              }}
              className={`gradient-border-card rounded-xl p-4 flex flex-col gap-[13px] ${sc.type === 'end_by_data' || sc.type === 'subscriber_target' ? 'cursor-pointer hover:brightness-110 active:scale-[0.99] transition-all' : ''
                }`}
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              <div className='flex justify-between items-start'>
                <div className='flex gap-3'>
                  <img src={sc.avatar} alt={sc.title} className='w-[44px]' />
                  <div>
                    <div className='flex items-center gap-2'>
                      <h3 className='font-semibold text-sm text-white'>{sc.title}</h3>
                      {sc.hasExport && <img src='/assets/images/svg/export.svg' alt='export' />}
                    </div>
                    <p className='text-[#fff]/40 text-[13px] mt-1'>{sc.subtitle}</p>
                  </div>
                </div>
                <div className='flex gap-4 text-[#5A5D72]'>
                  {sc.actions.includes('edit') && (
                    <Link to="/edit-sc" onClick={(e) => e.stopPropagation()} className='p-1 hover:text-white cursor-pointer transition-colors'>
                      <img src='/assets/images/svg/edit.svg' alt='edit' />
                    </Link>
                  )}
                  {sc.actions.includes('delete') && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSC(sc);
                        setShowDisableModal(true);
                      }}
                      className='p-1 hover:text-red-400 cursor-pointer transition-colors'
                    >
                      <img src='/assets/images/svg/trash.svg' alt='delete' />
                    </button>
                  )}
                </div>
              </div>

              {/* Detail Section */}
              <div className='border-t border-[#FFFFFF]/10 border-dashed pt-[13px] flex flex-col gap-[13px]'>
                {sc.type === 'subscriber_target' && (
                  <>
                    <div className='flex justify-between items-center text-xs'>
                      <div className='flex items-center gap-1 text-[#fff]/40'>
                        <img src='/assets/images/svg/star.svg' alt='star' className='w-4' />
                        Subscriber target
                      </div>
                      <div className='flex items-center gap-2'>
                        <div className='flex gap-1'>
                          <span className='text-[#00FF95] font-medium'>{sc.plusCount}</span>
                          <span className='font-medium text-white/20 text-xs'>/</span>
                          <span className='text-[#FF4973] font-medium'>{sc.minusCount}</span>
                        </div>
                        <div className='w-[18px] flex justify-center items-center'>
                          <div className='bg-white/40 w-1 h-1 rounded-full font-medium'></div>
                        </div>
                        <span className='text-white font-medium flex items-center gap-1 ml-[7px]'>
                          <img src='/assets/images/svg/user.svg' alt='user' />
                          {sc.currentUserCount}
                          <span className='font-medium text-white/20 text-xs'>/</span>
                          {sc.totalUserCount}
                        </span>
                      </div>
                    </div>
                    <div className='w-full bg-[#FFFFFF]/10 h-1.5 rounded-full overflow-hidden'>
                      <div className='bg-[#87ADF0] h-full rounded-full' style={{ width: sc.progress }}></div>
                    </div>
                    <div className='flex justify-between text-xs text-white/40 mt-0.5'>
                      <span>{sc.time}</span>
                      <span className='text-white/40'>{sc.progress}</span>
                    </div>
                  </>
                )}

                {sc.type === 'end_by_data' && (
                  <>
                    <div className='flex justify-between items-center text-xs'>
                      <div className='flex items-center gap-1.5 text-[#fff]/40'>
                        <Calendar size={14} className='text-blue-400' />
                        End by Data
                      </div>
                      <div className='flex items-center gap-2 text-white text-xs'>
                        <img src='/assets/images/svg/alarm.svg' alt='clock' />
                        {sc.timeLeft}
                      </div>
                    </div>
                    <div className='flex justify-between text-[11px] text-[#5A5D72] mt-0.5'>
                      <span>{sc.time}</span>
                      <span>{sc.progress}</span>
                    </div>
                  </>
                )}

                {sc.type === 'summary_stats' && (
                  <div className='flex justify-between items-center text-xs text-[#5A5D72]'>
                    <span>{sc.time}</span>
                    <div className='flex items-center gap-[7px] font-medium'>
                      <span className='text-[#22C55E]'>{sc.plusCount}</span>
                      <span className='text-[#EF4444]'>{sc.minusCount}</span>
                      <span className='text-[#8A8D9F] flex items-center gap-0.5 ml-1'>
                        <img src='/assets/images/svg/user.svg' alt='user' /> {sc.currentUserCount} / {sc.totalUserCount}
                      </span>
                    </div>
                  </div>
                )}

                {sc.type === 'no_limits' && (
                  <div className='flex justify-between items-center text-xs text-[#5A5D72]'>
                    <span>{sc.time}</span>
                    <span className='text-[#8A8D9F] font-medium'>{sc.limitText}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scheduled SC Section Card */}
        <div className='gradient-border-card rounded-xl flex flex-col border border-[#2A2D40]/30' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.03) 2.67%, rgba(255, 255, 255, 0.05) 98%)' }}>
          <div className='flex items-center gap-2 mb-3.5 p-3 border-b border-b-[#FFFFFF]/6'>
            <img src='/assets/images/svg/calendar.svg' alt='calendar' />
            <h2 className='text-xs font-medium text-white'>
              Scheduled SC <span className='text-white/40'>(3)</span>
            </h2>
          </div>
          <div className='p-3'>
            {/* Day Selector Carousel */}
            <div className='flex items-center justify-between gap-1'>
              <button className='text-[#5A5D72] hover:text-white cursor-pointer'>
                <ChevronLeft size={16} />
              </button>

              <div className='flex gap-[3px] flex-1 justify-between'>
                {days.map((d) => {
                  const isSelected = activeTab === `${d.name} ${d.date}`;
                  return (
                    <button
                      key={`${d.name}-${d.date}`}
                      onClick={() => setActiveTab(`${d.name} ${d.date}`)}
                      className={`flex flex-col items-center p-[7px] rounded-[8px] cursor-pointer min-w-[38px] border transition-all ${isSelected
                        ? 'bg-[#87ADF0] border-[#87ADF0] text-white font-semibold'
                        : d.dot
                          ? 'border-[#23263B] text-white'
                          : 'bg-[#121426]/50 border-[#23263B] text-[#5A5D72] hover:text-white'
                        }`}
                      style={
                        !isSelected && d.dot
                          ? { background: 'linear-gradient(158.89deg, rgba(135, 173, 240, 0.5) 0.11%, rgba(135, 173, 240, 0) 67.36%), rgba(255, 255, 255, 0.05)' }
                          : {}
                      }
                    >
                      <span className={`text-[10px] tracking-wider uppercase ${isSelected ? 'text-white/80' : d.dot ? 'text-[#87ADF0]/70' : 'text-white/40'}`}>{d.name}</span>
                      <span className='text-xs font-semibold mt-0.5'>{d.date}</span>
                      {d.dot && (
                        <span className={`w-[3px] h-[3px] rounded-full mt-1 ${isSelected ? 'bg-white' : 'bg-[#87ADF0]'}`}></span>
                      )}
                    </button>
                  );
                })}
              </div>

              <button className='text-[#5A5D72] hover:text-white cursor-pointer px-1'>
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Dotted Divider line */}
            <div className='border-t border-[#FFFFFF]/10 border-dashed my-3'></div>

            {/* Scheduled Card */}
            <div className='bg-[#16182C]/50 rounded-xl border border-[#23263B] flex flex-col gap-3 p-3' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.02) 2.67%, rgba(255, 255, 255, 0.04) 98%)' }}>
              <div className='flex justify-between items-start'>
                <div className='flex gap-3 items-center'>
                  <div className='w-11 h-11 rounded-[8px] border border-[#87ADF0]/20 flex flex-col items-center justify-center p-1 min-w-[44px]' style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
                    <span className='text-[8px] font-bold text-[#8A8D9F] uppercase'>MAR</span>
                    <span className='text-sm font-black text-white leading-tight'>2</span>
                  </div>
                  <div>
                    <div className='flex items-center gap-2'>
                      <h3 className='font-semibold text-sm text-white'>Crypto Signals VIP</h3>
                      <img src='/assets/images/svg/export.svg' alt='export' />
                    </div>
                    <p className='text-[#fff]/40 text-[13px] mt-1'>t.me/cryptonews</p>
                  </div>
                </div>

                <div className='flex gap-4 text-[#5A5D72]'>
                  <button className='p-1 hover:text-white cursor-pointer transition-colors'><img src='/assets/images/svg/edit.svg' alt='edit' /></button>
                  <button className='p-1 hover:text-red-400 cursor-pointer transition-colors'><img src='/assets/images/svg/trash.svg' alt='delete' /></button>
                </div>
              </div>

              {/* Dotted Divider line */}
              <div className='border-t border-[#FFFFFF]/10 border-dashed pt-3.5 flex justify-between items-center'>
                <div className='flex items-center gap-1.5 text-white text-xs font-semibold'>
                  <img src='/assets/images/svg/star.svg' alt='star' className='w-[14px]' />
                  200 subscribers
                </div>
                <div className='flex items-center gap-1.5 text-white text-xs font-semibold'>
                  <img src='/assets/images/svg/clock.svg' alt='clock' className='w-[14px]' />
                  16:30
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ExtendSCModal
        isOpen={showExtendModal}
        onClose={() => setShowExtendModal(false)}
        selectedSC={selectedSC}
        selectedDuration={selectedDuration}
        setSelectedDuration={setSelectedDuration}
      />

      <DisableSCModal
        isOpen={showDisableModal}
        onClose={() => setShowDisableModal(false)}
        selectedSC={selectedSC}
      />

      <DisableAllModal
        isOpen={showDisableAllModal}
        onClose={() => setShowDisableAllModal(false)}
        count={5}
      />

    </div>
  );
};

export default GroupDetail;
