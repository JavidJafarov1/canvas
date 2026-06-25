import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ClipboardList, CheckSquare, Plus, Pencil, User, Globe, RotateCw, Trash, FileText } from 'lucide-react';
import Layout from '../components/Layout';
import UpdateInviteModal from '../components/modals/UpdateInviteModal';
import DeleteTaskModal from '../components/modals/DeleteTaskModal';
import DeleteWarningModal from '../components/modals/DeleteWarningModal';

const TaskDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters if navigated from MyTasks, otherwise default to mockup details
  const taskState = location.state || {};
  const taskId = taskState.id ? `#804 ${taskState.id}00` : '#804 300';
  const taskName = taskState.name || 'Канал';

  // Set defaults to match the screenshot details when navigated directly
  const taskProgress = taskState.progress !== undefined ? taskState.progress : 25;
  const taskTotal = taskState.total !== undefined ? taskState.total : 50;
  const taskType = taskState.type || 'bot'; // 'bot', 'reaction', 'view', 'boost', 'user'

  // Local state to manage status dynamically for interactive demo/preview (initialized from taskState.status or 'paused')
  const [taskStatus, setTaskStatus] = useState(taskState.status || 'paused');

  // Modal open states
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleteWarningModalOpen, setIsDeleteWarningModalOpen] = useState(false);

  // Simulated pending executions under review count (set to 4 to match screenshot 'На перевірці: 4')
  const underReviewCount = taskState.underReview !== undefined ? taskState.underReview : 4;

  // Format rewards (500 GRAM/од. to match screenshot)
  const rewardText = taskState.reward ? `${taskState.reward} GRAM/од.` : '500 GRAM/од.';

  // Other screenshot defaults
  const startsInBot = taskState.startsInBot !== undefined ? taskState.startsInBot : 50;
  const appealsCount = taskState.appeals !== undefined ? taskState.appeals : 1;
  const inProgressCount = taskState.inProgress !== undefined ? taskState.inProgress : 0;

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6 bg-[#0B0E21]">

        {/* Top Header */}
        <div className="flex items-center justify-center p-[16px_15px] relative border-b border-[#21243A]/60 mb-5">
          <button
            onClick={() => navigate(-1)}
            className="text-[#8F94A8] hover:text-white transition-colors absolute left-[15px]"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-[17px] font-bold text-white tracking-wide">
            Завдання {taskId}
          </h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-3">

          {/* Status Row */}
          <div
            className=" gradient-border-card rounded-xl p-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <span className="text-[14px] text-[#8F94A8]">Статус:</span>

            {taskStatus === 'ready' && (
              <div className="flex items-center gap-2">
                <CheckSquare size={16} className="text-[#87ADF0]" />
                <span className="text-[14px] font-bold text-[#87ADF0]">Завершено</span>
              </div>
            )}

            {taskStatus === 'paused' && (
              <div className="flex items-center gap-2">
                <img src='/assets/images/svg/Pause.svg' alt='Clipboard' />
                <span className="text-[14px] font-bold text-[#FFAE00] tracking-wide">Призупинено</span>
              </div>
            )}

            {taskStatus === 'active' && (
              <div className="flex items-center gap-2">
                <img src='/assets/images/svg/Play1.svg' alt='Play1' />
                <span className="text-[14px] font-bold text-[#22C55E]">Виконується</span>
              </div>
            )}
          </div>

          {/* Details Summary Card */}
          <div
            className=" gradient-border-card rounded-xl p-4 flex flex-col gap-4"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <div className="flex items-center gap-3">
              <img src='/assets/images/svg/Clipboard.svg' alt='Clipboard' />
              <h3 className="text-xs font-semibold tracking-wider text-white">ДЕТАЛІ ЗАВДАННЯ:</h3>
            </div>

            <div className="flex flex-col gap-3 text-xs pt-1">

              <div className="flex items-center justify-between">
                <span className="text-[#8F94A8]">Номер завдання:</span>
                <span className="font-medium text-white">
                  {taskState.id ? `#804 ${taskState.id}00` : (taskType === 'bot' ? '#8' : taskId)}
                </span>
              </div>

              {/* Bot Specific Fields */}
              {taskType === 'bot' ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Стартів у боті:</span>
                    <span className="font-semibold text-white">
                      {startsInBot}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Канал:</span>
                    <span className="font-semibold text-white">
                      {taskStatus === 'active' ? 'premium_channel' : taskName}
                    </span>
                  </div>

                  {taskStatus === 'active' && taskType === 'reaction' && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#8F94A8]">Реакції:</span>
                      <span className="font-semibold text-white">10</span>
                    </div>
                  )}

                  {taskStatus !== 'active' && (
                    <div className="flex items-center justify-between">
                      <span className="text-[#8F94A8]">Підписок:</span>
                      <span className="font-semibold text-white">{taskTotal}</span>
                    </div>
                  )}
                </>
              )}

              <div className="flex items-center justify-between">
                <span className="text-[#8F94A8]">Винагорода:</span>
                <span className="font-semibold text-white">
                  {rewardText}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8F94A8]">Виконано:</span>
                {taskType === 'bot' ? (
                  <span className="font-semibold text-white">{taskProgress}/{taskTotal}</span>
                ) : taskStatus === 'paused' ? (
                  <span className="font-semibold text-white">25/50</span>
                ) : taskStatus === 'active' ? (
                  <span className="font-semibold text-white">0/10</span>
                ) : (
                  <span className="font-semibold text-white">{taskProgress}/{taskTotal}</span>
                )}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#8F94A8]">В процесі виконання:</span>
                <span className="font-semibold text-white">{inProgressCount}</span>
              </div>

              {/* Bot specific returned for subscription */}
              {taskType === 'bot' && (
                <div className="flex items-center justify-between">
                  <span className="text-[#8F94A8]">Повернуто за відписки:</span>
                  <span className="font-semibold text-white">4</span>
                </div>
              )}

              {/* Unique fields for Paused and Active */}
              {(taskStatus === 'paused' || taskStatus === 'active') && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">На перевірці:</span>
                    <span className="font-semibold text-white">{underReviewCount}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#8F94A8]">Апеляції:</span>
                    <span className="font-semibold text-white">{appealsCount}</span>
                  </div>
                </>
              )}

              {/* Bottom unique fields depending on status/type */}
              {taskStatus === 'ready' && taskType !== 'bot' && (
                <div className="flex items-center justify-between">
                  <span className="text-[#8F94A8]">Повернуто за відписки:</span>
                  <span className="font-semibold text-white">4</span>
                </div>
              )}

              {taskType === 'bot' && (
                <div className="flex items-center justify-between">
                  <span className="text-[#8F94A8]">Бот:</span>
                  <span className="font-semibold text-white hover:text-[#87ADF0] cursor-pointer transition-colors">
                    {taskState.botName || '@WeatherAlertBot'}
                  </span>
                </div>
              )}

              {taskStatus === 'active' && taskType === 'reaction' && (
                <div className="flex items-center justify-between">
                  <span className="text-[#8F94A8]">Реакція:</span>
                  <span className="font-semibold text-[#87ADF0] cursor-pointer">PremiumAlertBot</span>
                </div>
              )}

            </div>
          </div>

          {/* Conditions Section (Only visible if explicitly set in state, default off for screenshot similarity) */}
          {/* {taskType === 'bot' && taskState.showConditions && ( */}
          <div
            className="rounded-xl p-4 flex flex-col gradient-border-card"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <div className="flex items-center gap-3 pb-3 border-b border-[#21243A]/60">
              <img src='/assets/images/svg/DocumentAdd.svg' alt='DocumentAdd' />
              <h3 className="text-xs font-medium tracking-wider text-white">УМОВИ:</h3>
            </div>

            <div className="flex flex-col gap-3 text-xs text-white/40 leading-relaxed">
              <p>1. Додайте бота @AI_Celestia_bot в вашу групу адміністратором</p>
              <p>2. В вашій групі написати команду settings - і відкрити модерацію</p>
              <p>3. Настроїти любу функцію модерації: привітання, авто-повідомлення, антиспам або інші потрібні вам функції.</p>
              <p>4. Оплата відбувається за чати з 200+ учасниками</p>
              <p>5. Відправте скріншот, на якому видно назву чата в який додали бот.</p>
            </div>
          </div>
          {/* )} */}

          {/* Action List Settings Card */}
          <div
            className="rounded-xl divide-y divide-[#21243A]/60 overflow-hidden gradient-border-card"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >

            {/* Active Only & Reaction Only: Show Reaction */}
            {taskStatus === 'active' && taskType === 'reaction' && (
              <div
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img src='/assets/images/svg/Flame-Blue.svg' alt='water' />
                  <span className="text-xs font-medium text-white">Показати реакцію</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Active Only & Reaction Only: Show Post */}
            {taskStatus === 'active' && taskType === 'reaction' && (
              <div
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1F273E] flex items-center justify-center text-[#87ADF0] flex-shrink-0">
                    <span className="text-sm">👁️</span>
                  </div>
                  <span className="text-xs font-medium text-white">Показати post</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Row 1: Add executions (Available in all statuses) */}
            <div
              onClick={() => navigate('/add-executions')}
              className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <img src='/assets/images/svg/AddSquare.svg' alt='AddSquare' />
                <span className="text-xs font-medium text-white">Додати виконання</span>
              </div>
              <ChevronRight size={16} className="text-[#8F94A8]" />
            </div>

            {/* Resume Task: Paused Status Only */}
            {taskStatus === 'paused' && (
              <div
                onClick={() => setTaskStatus('active')}
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img src='/assets/images/svg/CheckSquare.svg' alt='CheckSquare' />
                  <span className="text-xs font-medium text-white">Відновити завдання</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Pause Task: Active Status Only */}
            {taskStatus === 'active' && (
              <div
                onClick={() => setTaskStatus('paused')}
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img src='/assets/images/svg/Pause-blue.svg' alt='Pause-blue' />
                  <span className="text-xs font-medium text-white">Призупинити завдання</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Row 2: Change price (Available in all statuses) */}
            <div
              onClick={() => navigate('/change-price')}
              className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <img src='/assets/images/svg/Pen.svg' alt='Pen' />
                <span className="text-xs font-medium text-white">Змінити ціну</span>
              </div>
              <ChevronRight size={16} className="text-[#8F94A8]" />
            </div>

            {/* Verify Execution: Active Status Only (Except for Bot tasks to match screenshot) */}
            {taskStatus === 'active' && taskType !== 'bot' && (
              <div
                onClick={() => navigate('/verify-executions')}
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img src='/assets/images/svg/CheckSquare.svg' alt='CheckSquare' />
                  <span className="text-xs font-medium text-white">Перевірити виконання (3)</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Row 3: Account type (Not displayed on Active status UNLESS it is a Bot task) */}
            {(taskStatus !== 'active' || taskType === 'bot') && (
              <div
                onClick={() => navigate('/change-audience', { state: taskState })}
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img src='/assets/images/svg/User Check Rounded.svg' alt='User Check Rounded' />
                  <span className="text-xs font-medium text-white">Тип акаунту: Усі користувачі</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Row 4: Audience limit (Not displayed on Active status UNLESS it is a Bot task) */}
            {(taskStatus !== 'active' || taskType === 'bot') && (
              <div
                onClick={() => navigate('/edit-audience', { state: taskState })}
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img src='/assets/images/svg/global1.svg' alt='global1' />
                  <span className="text-xs font-medium text-white">Аудиторія: без обмежень</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Row 5: Refresh invite link (For ready and paused statuses OR if bot task is active) */}
            {((taskStatus === 'ready' || taskStatus === 'paused') || (taskType === 'bot' && taskStatus === 'active')) && (
              <div
                onClick={() => setIsUpdateModalOpen(true)}
                className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <img src='/assets/images/svg/refresh1.svg' alt='refresh1' />
                  <span className="text-xs font-medium text-white">Оновити запрошувальне посилання</span>
                </div>
                <ChevronRight size={16} className="text-[#8F94A8]" />
              </div>
            )}

            {/* Row 6: Delete task (Available in all statuses) */}
            <div
              onClick={() => {
                if (underReviewCount > 0) {
                  setIsDeleteWarningModalOpen(true);
                } else {
                  setIsDeleteModalOpen(true);
                }
              }}
              className="flex items-center justify-between p-[14px_12px] cursor-pointer hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-center gap-3.5">
                <img src='/assets/images/svg/TrashBin.svg' alt='trash1' />
                <span className="text-xs font-medium text-white">Видалити завдання</span>
              </div>
              <ChevronRight size={16} className="text-[#8F94A8]" />
            </div>

          </div>

        </div>
      </div>

      {/* Modals */}
      <UpdateInviteModal
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        onConfirm={() => {
          setIsUpdateModalOpen(false);
          alert('Посилання успішно оновлено!');
        }}
        taskId={taskId.replace(/[^0-9]/g, '') || '804300'}
      />

      <DeleteTaskModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => {
          setIsDeleteModalOpen(false);
          alert('Завдання успішно видалено!');
          navigate(-1);
        }}
        taskId={taskId.replace(/[^0-9]/g, '') || '804300'}
        refundAmount="2 600"
      />

      <DeleteWarningModal
        isOpen={isDeleteWarningModalOpen}
        onClose={() => setIsDeleteWarningModalOpen(false)}
        underReviewCount={underReviewCount}
      />
    </Layout>
  );
};

export default TaskDetail;
