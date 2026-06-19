import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Tasks = () => {
  return (
    <Layout>
      <div className='px-5 pt-7 pb-4'>

        {/* Header Profile */}
        <div className='mb-7'>
          <img src='/assets/images/manage-function1.png' alt='manage-function1' className='w-[60px]' />
        </div>

        {/* Title */}
        <div className='mb-8'>
          <h1 className='text-[32px] font-bold leading-tight text-white'>Управління<br />функцією ОП</h1>
        </div>

        {/* Start Card */}
        <div className='gradient-border-card rounded-2xl p-2.5 flex items-center gap-3 mb-6' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%), #161829' }}>
          <img src='/assets/images/vector6.png' alt='vector6' />
          <div>
            <h3 className='text-sm font-medium text-white mb-1'>Start by selecting a group</h3>
            <p className='text-[#fff6] text-[13px]'>Select a group or chat to configure SC</p>
          </div>
        </div>

        {/* Groups Section */}
        <div className='border-t border-dashed border-[#2A2D40] pt-6 mb-4'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-[13px] tracking-wider font-semibold text-[#E5E5E5] uppercase'>Your Groups</h2>
            <button className='flex items-center gap-1 text-[#8A8D9F] text-xs cursor-pointer'>
              <img src='/assets/images/svg/plus.svg' alt='plus' className='w-4' />
              <span>Add group</span>
            </button>
          </div>

          <div className='flex flex-col gap-3'>
            {/* Group 1 */}
            <Link to='/group-detail' className='gradient-border-card rounded-xl p-3 flex items-center justify-between cursor-pointer block' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
              <div className='flex items-center gap-3'>
                <img src='/assets/images/vector4.png' alt='vector4' className='w-[44px]' />
                <div>
                  <h3 className='font-semibold text-[15px] text-white'>PR GRAM Givea...</h3>
                  <p className='text-[#fff6] text-xs mt-0.5'>2 852 members</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <span className='bg-[#0A261D] text-[#22C55E] text-[10px] font-semibold px-2 py-1 rounded-md'>3 active</span>
                <ChevronRight size={18} className='text-[#5A5D72]' />
              </div>
            </Link>

            {/* Group 2 */}
            <div className='gradient-border-card rounded-xl p-3 flex items-center justify-between' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
              <div className='flex items-center gap-3'>
                <img src='/assets/images/vector5.png' alt='vector5' className='w-[44px]' />
                <div>
                  <h3 className='font-medium text-[15px] text-white'>Celestia test</h3>
                  <p className='text-[#fff6] text-xs mt-1'>8 members</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <span className='bg-[#00ff951a] text-[#00FF95] text-[10px] font-semibold px-2 py-1 rounded-full'>1 active</span>
                <ChevronRight size={16} className='text-[#5A5D72]' />
              </div>
            </div>

            {/* Group 3 */}
            <div className='gradient-border-card rounded-xl p-3 flex items-center justify-between' style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}>
              <div className='flex items-center gap-3'>
                <div className='w-[44px] h-[44px] rounded-full bg-gradient-to-br from-[#2D3045] to-[#141629] flex items-center justify-center p-[1px]'>
                  <img src='/assets/images/vector7.png' alt='vector7' className='w-[44px]' />
                </div>
                <div>
                  <h3 className='font-medium text-[15px] text-white'>PR GRAM | SUPPORT</h3>
                  <p className='text-[#fff6] text-xs mt-1'>5 852 members</p>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <ChevronRight size={16} className='text-[#5A5D72]' />
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
