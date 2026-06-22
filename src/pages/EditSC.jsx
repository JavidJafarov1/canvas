import React, { useState } from 'react';
import {
  ChevronLeft,
  Clock,
  Calendar,
  User,
  ChevronsUpDown,
  ExternalLink
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EditSC = () => {
  const navigate = useNavigate();

  // State for Launch Time toggle ('now' or 'schedule')
  const [launchTime, setLaunchTime] = useState('schedule');

  // State for SC End Condition ('no_limit', 'by_date', 'by_count')
  const [endCondition, setEndCondition] = useState('by_count');

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen relative font-sans text-white flex flex-col hide-scrollbar overflow-y-auto'>

      {/* Header */}
      <div className='flex items-center justify-between p-[22px_15px] border-b border-white/10 shrink-0'>
        <button
          onClick={() => navigate(-1)}
          className='text-[#8A8D9F] hover:text-white transition-colors cursor-pointer'
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className='text-base font-semibold text-white'>Edit SC</h1>
        <div className='w-7' /> {/* Placeholder for alignment */}
      </div>

      {/* Body Container */}
      <div className='flex-1 px-4 py-5 flex flex-col gap-4 hide-scrollbar overflow-y-auto pb-[100px]'>

        {/* Top Info Card */}
        <div
          className='gradient-border-card rounded-xl flex justify-between overflow-hidden p-3 gap-3'
          style={{ background: 'background: linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.08) 98%);' }}
        >
          <img src='/assets/images/vector15.png' alt='link' className='w-11' />
          <div className='flex-1 min-w-0'>
            <div className='flex items-center gap-1.5'>
              <h3 className='font-semibold text-sm text-white truncate'>Crypto Signals VIP</h3>
              <ExternalLink size={14} className='text-white/40 cursor-pointer hover:text-white shrink-0' />
            </div>
            <p className='text-white/30 text-xs mt-1.5 font-medium'>-1001987654321</p>
          </div>
        </div>

        {/* Launch Time Section */}
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2 px-1 text-white/40'>
            <img src='/assets/images/svg/history.svg' alt='history' className='w-4' />
            <span className='text-[11px] font-bold tracking-wider uppercase'>Launch Time</span>
          </div>

          {/* Toggle Switch */}
          <div className='bg-white/5 rounded-xl flex w-full relative border border-white/5'>
            <button
              onClick={() => setLaunchTime('now')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-[12px_0_0_12px] transition-all cursor-pointer ${launchTime === 'now'
                ? 'bg-white/5 text-white shadow-sm'
                : 'text-white/50 hover:text-white'
                }`}
            >
              <img src='/assets/images/svg/play.svg' className='w-5' alt='play' />
              Now
            </button>
            <button
              onClick={() => setLaunchTime('schedule')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-[0_12px_12px_0] transition-all cursor-pointer ${launchTime === 'schedule'
                ? 'bg-[#87ADF0] text-[#0B0E21]'
                : 'text-white/50 hover:text-white'
                }`}
            >
              <img
                src='/assets/images/svg/calendar.svg'
                className={`w-5 ${launchTime === 'schedule' ? 'filter brightness-0' : 'filter brightness-100 opacity-50'}`}
                alt='calendar'
              />
              Schedule
            </button>
          </div>

          {/* Date & Time fields when Schedule is selected */}
          {launchTime === 'schedule' && (
            <div className='flex gap-2.5 mt-0.5 animate-fadeIn'>
              {/* Date Input Box */}
              <div className='flex-1 h-[44px] flex items-center gap-2.5 bg-white/5 gradient-border-card rounded-full px-4 text-sm text-white/40'>
                <img src='/assets/images/svg/calendar.svg' className='w-[16px] h-[16px] opacity-40' alt='calendar' />
                <span className='text-white/40'>01.03.2026</span>
              </div>
              {/* Time Input Box */}
              <div className='w-[110px] h-[44px] flex items-center gap-2.5 bg-white/5 gradient-border-card rounded-full px-4 text-sm text-white/40 shrink-0'>
                <img src='/assets/images/svg/clock.svg' className='w-[16px] h-[16px] opacity-40' alt='clock' />
                <span className='text-white/40'>16:30</span>
              </div>
            </div>
          )}
        </div>

        {/* SC End Condition Section */}
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-2 px-1 text-white/40'>
            <img src='/assets/images/svg/history.svg' alt='history' className='w-4' />
            <span className='text-[11px] font-bold tracking-wider uppercase'>SC End Condition</span>
          </div>

          {/* Choice Options List */}
          <div className='flex flex-col gap-2.5'>

            {/* No Limit Choice */}
            <div
              onClick={() => setEndCondition('no_limit')}
              className={`gradient-border-card rounded-full h-[54px] px-4 flex items-center gap-3.5 cursor-pointer transition-all`}
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              {/* Custom Radio Button */}
              <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${endCondition === 'no_limit'
                ? 'border-white bg-transparent'
                : 'border-white/10 bg-transparent'
                }`}>
                <div className={`w-2.5 h-2.5 rounded-full transition-all ${endCondition === 'no_limit' ? 'bg-[#87ADF0]' : 'bg-white/5'
                  }`} />
              </div>
              <span className='text-[15px] font-medium text-white/80'>No Limit</span>
            </div>

            {/* By Date Choice */}
            <div
              onClick={() => setEndCondition('by_date')}
              className={`gradient-border-card rounded-full h-[54px] px-4 flex items-center gap-3.5 cursor-pointer transition-all`}
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${endCondition === 'by_date'
                ? 'border-white bg-transparent'
                : 'border-white/10 bg-transparent'
                }`}>
                <div className={`w-2.5 h-2.5 rounded-full transition-all ${endCondition === 'by_date' ? 'bg-[#87ADF0]' : 'bg-white/5'
                  }`} />
              </div>
              <span className='text-[15px] font-medium text-white/80'>By Date</span>
            </div>

            {/* By Count Choice */}
            <div
              onClick={() => setEndCondition('by_count')}
              className={`gradient-border-card rounded-2xl p-4 flex flex-col gap-3.5 cursor-pointer border transition-all ${endCondition === 'by_count' ? 'border-[#87ADF0]/50' : 'border-white/10'
                }`}
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              <div className='flex items-center gap-3.5'>
                <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all ${endCondition === 'by_count'
                  ? 'border-white bg-transparent'
                  : 'border-white/10 bg-transparent'
                  }`}>
                  <div className={`w-2.5 h-2.5 rounded-full transition-all ${endCondition === 'by_count' ? 'bg-[#87ADF0]' : 'bg-white/5'
                    }`} />
                </div>
                <span className='text-[15px] font-medium text-white/80'>By Count</span>
              </div>

              {/* Nested Input field when By Count is selected */}
              {endCondition === 'by_count' && (
                <div className='flex items-center justify-between bg-[#0B0E21]/20 border border-white/10 rounded-full h-[44px] px-4 text-sm text-white/40 w-full animate-fadeIn'>
                  <div className='flex items-center gap-2.5'>
                    <img src='/assets/images/svg/user.svg' className='w-5 opacity-40' alt='user' />
                    <span className='text-white/60 font-medium'>Add subscribers</span>
                  </div>
                  <ChevronsUpDown size={15} className='opacity-40 text-white shrink-0' />
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Action Cancel Button */}
      <div className='px-4 pb-6 mt-auto shrink-0'>
        <button
          onClick={() => navigate(-1)}
          className='w-full h-[44px] text-white font-semibold text-[15px] rounded-[30px] transition-all border border-white/10 cursor-pointer active:scale-95 flex items-center justify-center'
          style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}
        >
          Cancel
        </button>
      </div>

    </div>
  );
};

export default EditSC;
