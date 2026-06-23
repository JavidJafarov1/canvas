import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  FolderPlus,
  Settings,
  ClipboardList,
  Users,
  UserPlus,
  Eye,
  Bot,
  Flame,
  Zap
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';

const CreateTask = () => {
  const navigate = useNavigate();

  const taskOptions = [
    {
      id: 'auto_settings',
      title: 'Налаштування Авто-завдань',
      icon: <img src='/assets/images/vector13.png' alt='vector13' className='w-[44px]' />,
      hasSeparatorAfter: false,
      to: '/auto-tasks'
    },
    {
      id: 'my_tasks',
      title: 'Мої завдання',
      icon: <img src='/assets/images/vector3.png' alt='vector3' className='w-[44px]' />,
      hasSeparatorAfter: true,
      to: '#'
    },
    {
      id: 'sub_channel',
      title: 'Підписка на канал',
      icon: <img src='/assets/images/vector10.png' alt='vector10' className='w-[44px]' />,
      hasSeparatorAfter: false,
      to: '/channel-sub'
    },
    {
      id: 'join_group',
      title: 'Вступ у групу',
      icon: <img src='/assets/images/vector26.png' alt='vector13' className='w-[44px]' />,
      hasSeparatorAfter: false,
      to: '#'
    },
    {
      id: 'view_posts',
      title: 'Перегляд постів',
      icon: <img src='/assets/images/vector27.png' alt='vector13' className='w-[44px]' />,
      hasSeparatorAfter: false,
      to: '/view-post-link'
    },
    {
      id: 'go_to_bot',
      title: 'Перейти в бота',
      icon: <img src='/assets/images/vector28.png' alt='vector13' className='w-[44px]' />,
      hasSeparatorAfter: false,
      to: '/bot-setup'
    },
    {
      id: 'set_reactions',
      title: 'Поставити реакції',
      icon: <img src='/assets/images/vector29.png' alt='vector13' className='w-[44px]' />,
      hasSeparatorAfter: false,
      to: '/reaction-post-link'
    },
    {
      id: 'premium_boost',
      title: 'Premium boost',
      icon: <img src='/assets/images/vector30.png' alt='vector13' className='w-[44px]' />,
      hasSeparatorAfter: false,
      to: '/premium-boost'
    }
  ];

  return (
    <Layout showNavbar={false}>
      <div className='flex flex-col font-sans text-white relative min-h-screen'>
        <div className='p-[10px_15px_22px_15px] border-b border-b-white/10'>
          {/* Header Back Button */}
          <div className='flex items-center justify-center mb-3'>
            <button
              onClick={() => navigate(-1)}
              className='text-[#8A8D9F] absolute left-5 hover:text-white transition-colors cursor-pointer'
            >
              <ChevronLeft size={16} />
            </button>
            <img src='/assets/images/vector25.png' alt='vector25' className='w-[60px]' />
          </div>


          {/* Title & Subtitle */}
          <h1 className='text-2xl font-bold text-white text-center mb-1'>Створення завдань</h1>
          <p className='text-xs text-white/40 text-center mb-3'>Створи задачу за кілька секунд</p>

          {/* Balance Card */}
          <div
            className='gradient-border-card flex items-center justify-between px-[17px] py-[10px] w-full rounded-full mx-auto h-[48px]'
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <div className='flex items-center gap-2'>
              <img src='/assets/images/vector.png' alt='vector' className='w-4 h-4' />
              <span className='text-[#8A8D9F] text-xs font-medium'>Your balance</span>
            </div>
            <span className='font-bold text-xs text-white'>462 862 GRAM</span>
          </div>
        </div>

        {/* Tasks List */}
        <div className='flex flex-col gap-3 pt-4 px-[22px]'>
          {taskOptions.map((option) => {
            const CardWrapper = option.to && option.to !== '#' ? Link : 'div';
            return (
              <React.Fragment key={option.id}>
                <CardWrapper
                  to={option.to !== '#' ? option.to : undefined}
                  state={option.state}
                  className='gradient-border-card rounded-2xl p-2.5 flex items-center justify-between cursor-pointer hover:brightness-110 active:scale-[0.99] transition-all block text-left'
                  style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
                >
                  <div className='flex items-center gap-3'>
                    {option.icon}
                    <span className='font-medium text-[15px] text-white'>{option.title}</span>
                  </div>
                  <ChevronRight size={18} className='text-white/30' />
                </CardWrapper>

                {option.hasSeparatorAfter && (
                  <div className='border-b border-dashed border-b-white/10 my-2 w-full' />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </Layout>
  );
};

export default CreateTask;
