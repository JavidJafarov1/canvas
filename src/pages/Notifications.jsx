import React from 'react';
import {
  ChevronLeft,
  AlertTriangle,
  Play,
  XCircle,
  CheckCircle2,
  Clock,
  User,
  Calendar,
  Users,
  Globe,
  Bot,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Notifications = () => {
  const newNotifications = [
    {
      id: 1,
      status: 'Cancelled: bot removed',
      statusType: 'danger',
      timeAgo: '5 min ago',
      title: 'VIP Channel',
      link: 't.me/+vip123',
      buttonType: 'invite',
      admin: 'AdminName',
      date: '12.05,11:00',
      plus: '+45',
      minus: '-3',
      members: '22'
    },
    {
      id: 2,
      status: 'SC Launched',
      statusType: 'info',
      timeAgo: '5 min ago',
      title: 'Unlimited Promo',
      link: 't.me/+unlimited9992',
      buttonType: 'invite',
      admin: 'AdminName',
      date: '12.05,11:00',
      members: '∞'
    }
  ];

  const recentNotifications = [
    {
      id: 3,
      status: 'Cancelled',
      statusType: 'cancelled',
      timeAgo: '11.12',
      title: 'Old Channel',
      link: 't.me/+abc123xyz',
      buttonType: 'public',
      admin: 'AdminName',
      date: '12.05,11:00',
      plus: '+45',
      minus: '-3',
      members: '40'
    },
    {
      id: 4,
      status: 'Target reached',
      statusType: 'success',
      timeAgo: '11.12',
      title: 'Crypto Signals VIP',
      link: 't.me/+abc123xyz',
      buttonType: 'invite',
      admin: 'AdminName',
      date: '12.05,11:00',
      plus: '+45',
      minus: '-3',
      members: '22'
    },
    {
      id: 5,
      status: 'Scheduled end',
      statusType: 'scheduled',
      timeAgo: '11.12',
      title: 'Gaming Community',
      link: 't.me/+abc123xyz',
      buttonType: 'bot',
      admin: 'AdminName',
      date: '12.05,11:00',
      endTime: '11.30 18:00'
    }
  ];

  const renderStatusHeader = (item) => {
    switch (item.statusType) {
      case 'danger':
        return (
          <div className='flex items-center gap-1.5 text-[#FF4973] text-xs font-medium'>
            <img src='/assets/images/svg/danger.svg' alt='danger' className='w-4' />
            {item.status}
          </div>
        );
      case 'info':
        return (
          <div className='flex items-center gap-1.5 text-[#87ADF0] text-xs font-semibold'>
            <span className='w-4 h-4 rounded-full bg-[#87ADF0]/20 flex items-center justify-center'><img src='/assets/images/svg/play.svg' alt='play' /></span>
            {item.status}
          </div>
        );
      case 'cancelled':
        return (
          <div className='flex items-center gap-1.5 text-[#FF4973] text-xs font-semibold'>
            <img src='/assets/images/svg/cancel.svg' alt='cancel' />
            {item.status}
          </div>
        );
      case 'success':
        return (
          <div className='flex items-center gap-1.5 text-[#00FF95] text-xs font-semibold'>
            <CheckCircle2 size={14} className='fill-[#00FF95]/10' />
            {item.status}
          </div>
        );
      case 'scheduled':
        return (
          <div className='flex items-center gap-1.5 text-[#22D55E] text-xs font-semibold'>
            <Clock size={14} />
            {item.status}
          </div>
        );
      default:
        return null;
    }
  };

  const renderButton = (type) => {
    switch (type) {
      case 'invite':
        return (
          <button className='text-[#87ADF0] text-xs font-medium rounded-[30px] flex items-center justify-center gap-1.5 cursor-pointer border border-[#87ADF0]/20 h-[28px] w-[77px] hover:brightness-110 transition-all p-[6px_12px]' style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
            <img src='/assets/images/svg/link.svg' alt='link' className='w-4 h-4' />
            Invite
          </button>
        );
      case 'public':
        return (
          <button className='text-[#87ADF0] text-xs font-medium rounded-[30px] flex items-center justify-center gap-1.5 cursor-pointer border border-[#87ADF0]/20 h-[28px] w-[77px] hover:brightness-110 transition-all p-[6px_12px]' style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
            <img src='/assets/images/svg/global.svg' alt='global' className='w-4 h-4' />
            Public
          </button>
        );
      case 'bot':
        return (
          <button className='text-[#87ADF0] text-xs font-medium rounded-[30px] flex items-center justify-center gap-1.5 cursor-pointer border border-[#87ADF0]/20 h-[28px] w-[77px] hover:brightness-110 transition-all p-[6px_12px]' style={{ background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)' }}>
            <img src='/assets/images/svg/bot.svg' alt='bot' className='w-4 h-4' />
            Bot
          </button>
        );
      default:
        return null;
    }
  };

  const renderCard = (item) => (
    <div key={item.id} className='gradient-border-card rounded-xl flex flex-col border border-[#2A2D40]/30' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.03) 2.67%, rgba(255, 255, 255, 0.05) 98%)' }}>
      {/* Header Info */}
      <div className='flex justify-between items-center p-3 pt-3.5 border-b border-b-white/6'>
        {renderStatusHeader(item)}
        <span className='text-white/40 text-xs font-medium'>{item.timeAgo}</span>
      </div>
      <div className='p-3'>
        {/* Main Details */}
        <div className='flex justify-between items-center'>
          <div>
            <div className='flex items-center gap-1.5'>
              <h3 className='font-medium text-sm text-white'>{item.title}</h3>
              <img src='/assets/images/svg/export.svg' alt='export' className='w-3.5 h-3.5' />
            </div>
            <p className='text-white/40 text-[13px] mt-1'>{item.link}</p>
          </div>
          {renderButton(item.buttonType)}
        </div>

        {/* Separator line */}
        <div className='border-t border-white/10 border-dashed my-2'></div>

        {/* Details Row */}
        <div className='text-xs text-white/40'>
          <div className='flex items-center gap-1.5 justify-between mb-3'>
            <div className='flex items-center gap-1'>
              <img src='/assets/images/svg/admin.svg' alt='admin' className='w-4' />
              <span className='text-white text-xs'>Admin</span>
            </div>
            <span className='text-white/40 font-medium ml-1'>{item.admin}</span>
          </div>
          <div className='flex items-center justify-between text-xs'>
            <span className='flex items-center gap-1 text-white'>
              <img src='/assets/images/svg/clock.svg' alt='clock' className='w-4' />
              {item.date}
            </span>
            <div className='flex items-center gap-[1px]'>
              {item.plus && (
                <div className='flex items-center gap-1'>
                  <span className='text-[#00FF95] font-semibold'>{item.plus}</span>
                  <div class="w-[18px] flex justify-center items-center"><div class="bg-white/40 w-1 h-1 rounded-full font-medium"></div></div>
                  <span className='text-[#FF4973] font-semibold'>{item.minus}</span>
                  <div class="w-[18px] flex justify-center items-center"><div class="bg-white/40 w-1 h-1 rounded-full font-medium"></div></div>
                </div>
              )}
              {item.members && (
                <span className='flex items-center gap-1 text-white font-medium'>
                  {item.members === '∞' ? (
                    <img src='/assets/images/svg/infinity.svg' alt='infinity' className='w-4 h-4' />
                  ) : (
                    <>
                      <img src='/assets/images/svg/user.svg' alt='user' className='w-4' />
                      {item.members} <span className='text-white/40'>/</span> 100
                    </>
                  )}
                </span>
              )}
              {item.endTime && (
                <span className='text-white/40'>{item.endTime}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen overflow-y-auto hide-scrollbar font-sans text-white'>

      {/* Back & Title Header */}
      <div className='flex items-center justify-between py-[22px_15px] border-b-white/10 border-b'>
        <Link to="/group-detail" className='text-[#545664] hover:text-white transition-colors p-1'>
          <ChevronLeft size={20} />
        </Link>
        <h1 className='text-sm font-semibold text-white mr-6'>Notification</h1>
        <div />
      </div>
      <div className='p-[13px_15px]'>
        {/* NEW section */}
        <div className='mb-6'>
          <div className='flex items-center gap-1.5 mb-3 px-1'>
            <div className='w-3 h-3 rounded-full bg-[#00FF95]/20 flex items-center justify-center'>
              <div className='w-1.5 h-1.5 rounded-full bg-[#00FF95] shadow-[0_0_8px_#00FF95]'></div>
            </div>
            <h2 className='text-[11px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5'>
              New <span className='text-[#5A5D72]'>(2)</span>
            </h2>
          </div>
          <div className='flex flex-col gap-3'>
            {newNotifications.map(renderCard)}
          </div>
        </div>

        {/* RECENT section */}
        <div className='mb-6'>
          <div className='flex items-center gap-1.5 mb-3 px-1'>
            <div className='w-3 h-3 rounded-full bg-[#87ADF0]/20 flex items-center justify-center'>
              <div className='w-1.5 h-1.5 rounded-full bg-[#87ADF0] shadow-[0_0_8px_#87ADF0]'></div>
            </div>
            <h2 className='text-[11px] font-bold text-white tracking-wider uppercase flex items-center gap-1'>
              Recent <span className='text-[#5A5D72]'>(3)</span>
            </h2>
          </div>
          <div className='flex flex-col gap-3'>
            {recentNotifications.map(renderCard)}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Notifications;
