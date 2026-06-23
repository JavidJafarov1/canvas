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
  { id: 'pending_bots',      label: 'Боти',    icon: '/assets/images/svg/Clock Circle.svg' },
];

const ExecuteTasksPage = () => {
  const navigate = useNavigate();

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col font-sans text-white relative min-h-screen bg-[#090B19]">

        {/* Header */}
        <div className="flex flex-col items-center pt-8 pb-5 px-5 relative">
          <button
            onClick={() => navigate(-1)}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-5 top-8"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Clipboard icon circle */}
          <div
            className="w-[56px] h-[56px] rounded-full flex items-center justify-center mb-4"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <img src="/assets/images/vector2.png" alt="execute" className="w-[30px]" />
          </div>

          <h1 className="text-[22px] font-bold text-white leading-tight text-center">
            Виконати завдання
          </h1>
          <p className="text-sm text-white/45 mt-1 text-center">
            Обери завдання для виконання
          </p>
        </div>

        {/* Balance Bar */}
        <div className="px-4 mb-5">
          <div
            className="gradient-border-card rounded-[92px] px-4 h-[48px] flex items-center justify-between border border-white/[0.06]"
            style={{ background: 'linear-gradient(86.96deg, rgba(255,255,255,0.055) 2.67%, rgba(255,255,255,0.077) 98%)' }}
          >
            <div className="flex items-center gap-2.5">
              <img src="/assets/images/vector.png" alt="balance" className="w-5" />
              <span className="text-sm text-white/50 font-medium">Your balance</span>
            </div>
            <span className="text-sm font-bold text-white">462 862 GRAM</span>
          </div>
        </div>

        {/* Task Categories */}
        <div className="px-4 flex flex-col gap-2.5 mb-5">
          {taskCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                if (cat.id === 'channel_sub') {
                  navigate('/execute-tasks/channel-sub');
                }
              }}
              className="gradient-border-card w-full rounded-[16px] p-3 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all border border-white/[0.06]"
              style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
            >
              <div className="flex items-center gap-4">
                <img src={cat.icon} alt={cat.label} className="w-[44px] shrink-0" />
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
        <div className="px-4 pb-6">
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
                onClick={() => {}}
                className="gradient-border-card w-full rounded-[16px] p-3 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all border border-white/[0.06]"
                style={{ background: 'linear-gradient(86.96deg, rgba(255,255,255,0.055) 2.67%, rgba(255,255,255,0.077) 98%)' }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-[44px] h-[44px] rounded-full bg-[#87ADF0]/10 border border-[#87ADF0]/20 flex items-center justify-center shrink-0">
                    <img src={task.icon} alt={task.label} className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] font-medium text-white">{task.label}</span>
                </div>
                <ChevronRight size={18} className="text-[#5A5D72]" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default ExecuteTasksPage;
