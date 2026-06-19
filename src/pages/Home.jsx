import React from 'react';
import { ChevronRight, Star, Flame, CheckSquare, ClipboardList } from 'lucide-react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className='px-5 pt-7 pb-4'>
        
        {/* Header */}
        <div className='flex flex-col gap-8 mb-7'>
          <img src='/assets/images/home1.png' alt='home1' className='w-[60px]' />
          <div>
            <h1 className='text-[32px] font-bold leading-tight'>Hello, <br /> Alexander</h1>
          </div>
        </div>

        {/* Balance Card */}
        <div 
          className='gradient-border-card box-border flex flex-row justify-between items-center px-[17px] py-[10px] gap-3 w-full max-w-[334px] h-[48px] rounded-[92px] flex-none order-0 self-stretch grow-0 mb-4 mx-auto'
          style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
        >
          <div className='flex items-center gap-2'>
            <img src='/assets/images/vector.png' alt='vector' />
            <span className='text-[#8A8D9F] text-sm'>Your balance</span>
          </div>
          <span className='font-bold text-sm'>462 862 GRAM</span>
        </div>

        {/* Task Statistics */}
        <div className='mb-4 border-t border-dashed border-[#2A2D40] pt-4'>
          <h2 className='text-[13px] tracking-wider font-semibold text-[#fff] mb-3 uppercase'>Task Statistics</h2>
          <div className='grid grid-cols-2 gap-3'>
            {/* Card 1 */}
            <div 
              className='gradient-border-card rounded-2xl p-3 flex flex-col justify-between h-[120px]'
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
             <img src='/assets/images/vector2.png' alt='vector2' className='w-[44px]' />
              <div>
                <p className='text-[#fff6] text-[11px] mt-3 mb-1'>Виконані завдання</p>
                <p className='text-xl font-medium'>324</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className='gradient-border-card rounded-2xl p-3 flex flex-col justify-between h-[120px]' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
              <div className='w-10 h-10 rounded-full bg-[#24273A] flex items-center justify-center shadow-inner'>
                <img src='/assets/images/vector3.png' alt='vector2' className='w-[44px]' />
              </div>
              <div>
                <p className='text-[#fff6] text-[11px] mt-3 mb-1'>Мої завдання</p>
                <p className='text-xl font-medium'>24</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Groups */}
        <div className='border-t border-dashed border-[#2A2D40] pt-6 mb-4'>
          <h2 className='text-[13px] tracking-wider font-semibold text-[#E5E5E5] mb-3 uppercase'>Your Groups</h2>
          <div className='flex flex-col gap-3'>
            {/* Group 1 */}
            <div className='gradient-border-card rounded-xl p-3 flex items-center justify-between' style={{background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'}}>
              <div className='flex items-center gap-3'>
                  <img src='/assets/images/vector4.png' alt='vector4' className='w-[44px]' />
                <div>
                  <h3 className='font-semibold text-[15px]'>PR GRAM Givea...</h3>
                  <p className='text-[#fff6] text-xs mt-0.5'>2 852 members</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <span className='bg-[#0A261D] text-[#22C55E] text-[10px] font-semibold px-2 py-1 rounded-md'>3 active</span>
                <ChevronRight size={18} className='text-[#5A5D72]' />
              </div>
            </div>

            {/* Group 2 */}
            <div className='gradient-border-card rounded-xl p-3 flex items-center justify-between' style={{background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'}}>
              <div className='flex items-center gap-3'>
                  <img src='/assets/images/vector5.png' alt='vector5' className='w-[44px]' />
                <div>
                  <h3 className='font-medium text-[15px]'>Celestia test</h3>
                  <p className='text-[#fff6] text-xs mt-1'>8 members</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <span className='bg-[#00ff951a] text-[#00FF95] text-[10px] font-semibold px-2 py-1 rounded-full'>1 active</span>
                <ChevronRight size={16} className='text-[#5A5D72]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
