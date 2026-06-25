import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const taskCategories = [
  {
    id: 'channel_sub',
    label: 'Підписка на канал',
    count: 605,
    icon: '/assets/images/vector10.png',
  },
  {
    id: 'group_join',
    label: 'Вступ у групу',
    count: 109,
    icon: '/assets/images/vector26.png',
  },
  {
    id: 'view_posts',
    label: 'Перегляд постів',
    count: 864,
    icon: '/assets/images/vector27.png',
  },
  {
    id: 'bot_visit',
    label: 'Перейти в бота',
    count: 423,
    icon: '/assets/images/vector28.png',
  },
  {
    id: 'reactions',
    label: 'Поставити реакції',
    count: 84,
    icon: '/assets/images/vector29.png',
  },
  {
    id: 'premium_boost',
    label: 'Premium boost',
    count: 5,
    icon: '/assets/images/vector30.png',
  },
];

const pendingTasks = [
  { id: 'pending_reactions', label: 'Реакції', icon: '/assets/images/svg/Clock Circle.svg' },
  { id: 'pending_bots', label: 'Боти', icon: '/assets/images/svg/Clock Circle.svg' },
];

const ExecuteTasksPage = () => {
  const navigate = useNavigate();

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col font-sans text-white relative min-h-screen bg-[#090B19]">

        {/* Header */}
        <div className="p-[10px_15px_22px_15px] border-b border-b-white/10">
          <button
            onClick={() => navigate('/task-list')}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-5 top-8"
          >
            <ChevronLeft size={16} />
          </button>
          <div className='flex justify-center'>
            {/* Clipboard icon circle */}
            <img src="/assets/images/vector42.png" alt="execute" className="w-[60px]" />
          </div>

          <h1 className="text-2xl font-bold text-white leading-tight text-center mt-3">
            Виконати завдання
          </h1>
          <p className="text-sm text-white/45 mt-1 text-center mb-3">
            Обери завдання для виконання
          </p>
          {/* Balance Bar */}
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
        <div className='px-5 py-4'>
          {/* Task Categories */}
          <div className="flex flex-col gap-2.5 mb-4 border-dashed border-b border-b-white/10 pb-4">
            {taskCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'channel_sub') {
                    navigate('/execute-tasks/channel-sub');
                  } else if (cat.id === 'bot_visit') {
                    navigate('/execute-tasks/bot');
                  } else if (cat.id === 'reactions') {
                    navigate('/execute-tasks/reactions');
                  } else if (cat.id === 'premium_boost') {
                    navigate('/execute-tasks/premium-boost');
                  }
                }}
                className="gradient-border-card w-full rounded-[16px] p-3 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all"
                style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={cat.icon}
                    alt={cat.label}
                    className="w-[44px] shrink-0"
                    style={cat.filter ? { filter: cat.filter } : undefined}
                  />
                  <span className="text-[15px] font-medium text-white">{cat.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[15px] font-medium text-white/60">{cat.count}</span>
                  <ChevronRight size={18} className="text-[#5A5D72]" />
                </div>
              </button>
            ))}
          </div>

          {/* Pending Tasks Section */}
          <div>
            {/* Section header */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#5E82FF] shrink-0" />
              <span className="text-sm font-semibold text-white/80">
                Завдання на доопрацювання
              </span>
              <span className="text-sm text-white/40 font-medium">(3)</span>
            </div>

            <div className="flex flex-col gap-2.5">
              {pendingTasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => {
                    if (task.id === 'pending_reactions') {
                      navigate('/execute-tasks/pending-reactions');
                    }
                  }}
                  className="gradient-border-card w-full rounded-[16px] p-3 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all"
                  style={{ background: 'linear-gradient(86.96deg, rgba(255,255,255,0.055) 2.67%, rgba(255,255,255,0.077) 98%)' }}
                >
                  <div className="flex items-center gap-4">
                    <img src='/assets/images/vector43.png' alt='vector43' className="w-[44px]" />
                    <span className="text-[15px] font-medium text-white">{task.label}</span>
                  </div>
                  <ChevronRight size={18} className="text-[#5A5D72]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExecuteTasksPage;
