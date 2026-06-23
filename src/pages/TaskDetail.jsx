import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ClipboardList, CheckSquare, Plus, Pencil, User, Globe, RotateCw, Trash } from 'lucide-react';
import Layout from '../components/Layout';

const TaskDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters if navigated from MyTasks, otherwise default to mockup details
  const taskState = location.state || {};
  const taskId = taskState.id ? `#804 ${taskState.id}00` : '#804 300';
  const taskName = taskState.name || 'Канал';
  const taskProgress = taskState.progress !== undefined ? taskState.progress : 96;
  const taskTotal = taskState.total !== undefined ? taskState.total : 100;
  
  // Format rewards
  const rewardText = taskState.reward ? `${taskState.reward} GRAM/од.` : '700 GRAM/од.';

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
        
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="text-[#545664] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-base font-semibold text-white tracking-wider flex-1 text-center mr-5">
            Завдання {taskId}
          </h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-4">
          
          {/* Status Row */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex items-center justify-between"
            style={{ background: '#161829' }}
          >
            <span className="text-[15px] font-semibold text-[#8A8D9F]">Статус:</span>
            
            <div 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-[12px] bg-[#1E293B] border border-blue-500/20"
            >
              <CheckSquare size={16} className="text-blue-400 fill-blue-400/20" />
              <span className="text-[13px] font-bold text-blue-400">Завершено</span>
            </div>
          </div>

          {/* Details Summary Card */}
          <div 
            className="gradient-border-card rounded-[16px] p-4 flex flex-col gap-4"
            style={{ background: '#161829' }}
          >
            <div className="flex items-center gap-3 border-b border-[#2A2D40] pb-3">
              <div className="w-9 h-9 rounded-full bg-[#87ADF0]/10 flex items-center justify-center flex-shrink-0">
                <ClipboardList size={18} className="text-[#87ADF0]" />
              </div>
              <h3 className="text-[15px] font-semibold tracking-wider">ДЕТАЛІ ЗАВДАННЯ:</h3>
            </div>

            <div className="flex flex-col gap-3.5 text-[14px]">
              
              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Номер завдання:</span>
                <span className="font-semibold text-white">{taskId}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Канал:</span>
                <span className="font-semibold text-white">{taskName}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Підписок:</span>
                <span className="font-semibold text-white">{taskTotal}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Винагорода:</span>
                <span className="font-semibold text-white">{rewardText}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Виконано:</span>
                <span className="font-semibold text-white">{taskProgress}/{taskTotal}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">В процесі виконання:</span>
                <span className="font-semibold text-white">0</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8A8D9F]">Повернуто за відписки:</span>
                <span className="font-semibold text-white">4</span>
              </div>

            </div>
          </div>

          {/* Action List Settings Card */}
          <div 
            className="gradient-border-card rounded-[16px] divide-y divide-[#2A2D40]/50 overflow-hidden"
            style={{ background: '#161829' }}
          >
            
            {/* Row 1: Add executions */}
            <div 
              onClick={() => navigate('/add-executions')}
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Plus size={16} strokeWidth={3} />
                </div>
                <span className="text-[14px] font-semibold text-white">Додати виконання</span>
              </div>
              <ChevronRight size={16} className="text-[#5A5D72]" />
            </div>

            {/* Row 2: Change price */}
            <div 
              onClick={() => navigate('/change-price')}
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Pencil size={14} />
                </div>
                <span className="text-[14px] font-semibold text-white">Змінити ціну</span>
              </div>
              <ChevronRight size={16} className="text-[#5A5D72]" />
            </div>

            {/* Row 3: Account type */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <User size={15} />
                </div>
                <span className="text-[14px] font-semibold text-white">Тип акаунту: Усі користувачі</span>
              </div>
              <ChevronRight size={16} className="text-[#5A5D72]" />
            </div>

            {/* Row 4: Audience limit */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Globe size={15} />
                </div>
                <span className="text-[14px] font-semibold text-white">Аудиторія: без обмежень</span>
              </div>
              <ChevronRight size={16} className="text-[#5A5D72]" />
            </div>

            {/* Row 5: Refresh invite link */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <RotateCw size={14} />
                </div>
                <span className="text-[14px] font-semibold text-white">Оновити запрошувальне посилання</span>
              </div>
              <ChevronRight size={16} className="text-[#5A5D72]" />
            </div>

            {/* Row 6: Delete task */}
            <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-400">
                  <Trash size={14} />
                </div>
                <span className="text-[14px] font-semibold text-white">Видалити завдання</span>
              </div>
              <ChevronRight size={16} className="text-[#5A5D72]" />
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
};

export default TaskDetail;
