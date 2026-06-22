import React from 'react';
import { ChevronRight, FilePlus, FileCheck, ClipboardList } from 'lucide-react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const TaskList = () => {
    return (
        <Layout>
            <div className='px-5 pt-7 pb-4'>

                {/* Header Profile */}
                <div className='mb-7'>
                    <img src='/assets/images/tasks1.png' alt='tasks1' className='w-[60px]' />
                </div>

                {/* Title */}
                <div className='mb-8'>
                    <h1 className='text-[32px] font-bold leading-tight text-white'>Керування<br />завданнями</h1>
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
                <div className='flex flex-col gap-2 border-t border-dashed border-[#2A2D40] pt-6 mb-4'>

                    {/* Card 1: Створити завдання */}
                    <Link to="/create-task" className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between cursor-pointer block' style={{ background: '#161829' }}>
                        <div className='flex items-center gap-4'>
                            <img src='/assets/images/vector8.png' alt='vector8' className='w-[44px]' />
                            <h3 className='font-medium text-[15px] text-white'>Створити завдання</h3>
                        </div>
                        <ChevronRight size={18} className='text-[#5A5D72]' />
                    </Link>

                    {/* Card 2: Виконати завдання */}
                    <div className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between' style={{ background: '#161829' }}>
                        <div className='flex items-center gap-4'>
                            <img src='/assets/images/vector2.png' alt='vector2' className='w-[44px]' />
                            <h3 className='font-medium text-[15px] text-white'>Виконати завдання</h3>
                        </div>
                        <ChevronRight size={18} className='text-[#5A5D72]' />
                    </div>

                    {/* Card 3: Мої завдання */}
                    <div className='gradient-border-card rounded-[16px] p-3 flex items-center justify-between' style={{ background: '#161829' }}>
                        <div className='flex items-center gap-4'>
                            <img src='/assets/images/vector3.png' alt='vector3' className='w-[44px]' />
                            <h3 className='font-medium text-[15px] text-white'>Мої завдання</h3>
                        </div>
                        <ChevronRight size={18} className='text-[#5A5D72]' />
                    </div>

                </div>

            </div>
        </Layout>
    );
};

export default TaskList;
