import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Settings, User, Crown, Wallet, Users, Trophy, ClipboardList, ClipboardCheck } from 'lucide-react';
import Layout from '../components/Layout';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className='px-5 pt-7 pb-4'>
        
        {/* Header (Profile Icon + Settings) */}
        <div className='flex items-center justify-between mb-6'>
          <div className='w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#2D3045] to-[#141629] p-[2px] shadow-[0_0_20px_rgba(45,48,69,0.3)]'>
            <img src='/assets/images/profile1.png' alt='profile1' />
          </div>
          <button>
            <img src='/assets/images/setting.png' alt='setting' />
          </button>
        </div>

        {/* Profile Info */}
        <div className='mb-4'>
          <div className='flex items-center gap-3 mb-3'>
            <h1 className='text-[28px] font-semibold leading-[36px] bg-gradient-to-r from-white to-[#999999] bg-clip-text text-transparent inline-block'>Alexander</h1>
            <div className='flex items-center gap-1.5 bg-[#423318] px-3 py-1.5 rounded-full'>
              <img src='/assets/images/svg/crown.svg' alt='crown' />
              <span className='text-[#FFB800] text-sm font-semibold'>PR master</span>
            </div>
          </div>
          <p className='text-[#fff6] text-sm'>ID: 7193701006 <span className='mx-2'>•</span> 262 824 / ∞ XP</p>
        </div>

        {/* Balance Card */}
        <div 
          className='gradient-border-card box-border flex flex-row justify-between items-center px-[17px] py-[10px] gap-3 w-full max-w-[334px] h-[48px] rounded-[92px] flex-none order-0 self-stretch grow-0 mb-5 mx-auto'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-2'>
            <img src='/assets/images/vector.png' alt='vector' />
            <span className='text-[#8A8D9F] text-sm'>Your balance</span>
          </div>
          <span className='font-medium text-sm'>462 862 GRAM</span>
        </div>

        {/* Action Cards */}
        <div className='flex flex-col gap-3 border-t border-dashed border-[#2A2D40] pt-5'>
          
          {/* Card 1: Deposit balance */}
          <div 
            onClick={() => navigate('/deposit-balance')}
            className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity' 
            style={{background: '#161829'}}
          >
            <div className='flex items-center gap-4'>
              <img src='/assets/images/vector9.png' alt='vector9' />
              <h3 className='font-medium text-[15px] text-white'>Deposit balance</h3>
            </div>
            <ChevronRight size={18} className='text-[#5A5D72]' />
          </div>

          {/* Card 2: Referral system */}
          <div 
            onClick={() => navigate('/referral-system')}
            className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity' 
            style={{background: '#161829'}}
          >
            <div className='flex items-center gap-4'>
              <img src='/assets/images/vector10.png' alt='vector10' />
              <h3 className='font-medium text-[15px] text-white'>Referral system</h3>
            </div>
            <ChevronRight size={18} className='text-[#5A5D72]' />
          </div>

          {/* Card 3: Level system */}
          <div 
            onClick={() => navigate('/level-system')}
            className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity' 
            style={{background: '#161829'}}
          >
            <div className='flex items-center gap-4'>
              <img src='/assets/images/vector11.png' alt='vector11' />
              <h3 className='font-medium text-[15px] text-white'>Level system</h3>
            </div>
            <ChevronRight size={18} className='text-[#5A5D72]' />
          </div>

          {/* Card 4: My tasks */}
          <div 
            onClick={() => navigate('/my-tasks')}
            className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity' 
            style={{background: '#161829'}}
          >
            <div className='flex items-center gap-4'>
              <img src='/assets/images/vector3.png' alt='vector3' />
              <h3 className='font-medium text-[15px] text-white'>My tasks</h3>
            </div>
            <ChevronRight size={18} className='text-[#5A5D72]' />
          </div>

          {/* Card 5: Checking executions */}
          <div className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between' style={{background: '#161829'}}>
            <div className='flex items-center gap-4'>
              <img src='/assets/images/vector2.png' alt='vector2' />
              <h3 className='font-medium text-[15px] text-white'>Checking executions</h3>
            </div>
            <ChevronRight size={18} className='text-[#5A5D72]' />
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default Profile;
