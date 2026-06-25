import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Lightbulb, FileText, Check, RotateCw, X, Clock } from 'lucide-react';
import Layout from '../components/Layout';
import ReasonModal from '../components/modals/ReasonModal';

const VerifyTaskReview = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state or use default bot name
  const taskState = location.state || {};
  const taskName = taskState.name || 'Al_Celestia_bot';
  const taskType = taskState.type || 'bot'; // 'bot' vs 'reaction'

  // Modals open states
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('rework'); // 'rework' or 'reject'
  const [selectedSubId, setSelectedSubId] = useState(null);

  // Submissions list matching the screenshot
  const [submissions, setSubmissions] = useState([
    { id: 1, number: '№1', timeLeft: '3 г 24хв' },
    { id: 2, number: '№2', timeLeft: '3 г 24хв' }
  ]);

  const handleOpenModal = (subId, type) => {
    setSelectedSubId(subId);
    setModalType(type);
    setModalOpen(true);
  };

  const handleConfirmDecision = (reason) => {
    setModalOpen(false);
    if (modalType === 'rework') {
      alert(`Субмішн №${selectedSubId} відправлено на доопрацювання з причиною:\n"${reason}"`);
    } else {
      alert(`Субмішн №${selectedSubId} відхилено з причиною:\n"${reason}"`);
    }
    // Animate removal of submission to make page reactive and alive
    setSubmissions(prev => prev.filter(sub => sub.id !== selectedSubId));
  };

  const handleApprove = (subId) => {
    alert(`Субмішн №${subId} успішно оплачено!`);
    setSubmissions(prev => prev.filter(sub => sub.id !== subId));
  };

  const handleApproveAll = () => {
    alert('Усі виконання успішно оплачено!');
    setSubmissions([]);
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-8 bg-[#090B19]">

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#1C1F37]/30 p-[16px_20px] mb-4 relative">
          <button
            onClick={() => navigate(-1)}
            className="text-[#5A5D72] hover:text-white transition-colors absolute left-5 top-1/2 -translate-y-1/2"
            id="btn-back-verify"
          >
            <ChevronLeft size={22} className="stroke-[2.5]" />
          </button>

          <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="text-[17px] font-bold text-white tracking-wide leading-tight">
              {taskName}
            </h1>
            <span className="text-[12px] text-[#8A8D9F] font-medium mt-0.5">
              На перевірці: {submissions.length}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 flex-1 flex flex-col gap-4">

          {submissions.length === 0 ? (
            /* Success / Empty State */
            <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 text-center">
              <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#22C55E] mb-4 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                <Check size={32} className="stroke-[3]" />
              </div>
              <h2 className="text-[18px] font-bold text-white mb-2">
                Всі завдання перевірено!
              </h2>
              <p className="text-[13px] text-[#8A8D9F] max-w-[240px] leading-relaxed mb-6">
                Немає нових звітів для перевірки по цьому завданню.
              </p>
              <button
                onClick={() => navigate(-1)}
                className="px-6 h-[44px] rounded-full border border-[#2F3249]/60 text-[#87ADF0] font-semibold text-[14px] flex items-center justify-center hover:bg-white/[0.02] transition-colors"
              >
                Назад до списку
              </button>
            </div>
          ) : (
            <>
              {/* Warning Amber Alert Box */}
              <div className="rounded-[12px] p-[12px_14px] flex gap-3 border border-[#F1A80A]/20 bg-gradient-to-r from-[rgba(241,168,10,0.08)] to-[rgba(241,168,10,0.02)]">
                <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' />
                <p className="text-[11.5px] leading-relaxed text-[#FFE4B3] font-medium flex-1">
                  На перевірку виконання дається 48 годин. Якщо не перевірити за цей час — завдання оплатиться автоматично.
                </p>
              </div>

              {/* Conditions Card / "УМОВИ" */}
              <div className="gradient-border-card rounded-[12px] p-4 flex flex-col gap-3.5 bg-[#161829]">
                {taskType === 'bot' ? (
                  <>
                    <div className="flex items-center gap-2 border-b border-[#2A2D40]/60 pb-3">
                      <span className="text-[16px]">
                        <img src='/assets/images/svg/DocumentAdd.svg' alt='DocumentAdd' />
                      </span>
                      <h3 className="text-[14px] font-bold tracking-wider text-white">УМОВИ:</h3>
                    </div>

                    <div className="flex flex-col gap-2.5 text-[12px] text-[#8A8D9F] leading-normal font-medium">
                      <p>1. Додайте бота @AI_Celestia_bot в вашу групу адміністратором</p>
                      <p>2. В вашій групі написати команду settings - і відкрити модерацію</p>
                      <p>3. Настроїти любу функцію модерації: привітання, авто-повідомлення, антиспам або інші потрібні вам функції.</p>
                      <p>4. Оплата відбувається за чати з 200+ учасниками</p>
                      <p>5. Відправте скріншот, на якому видно назву чата в який додали бот.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between border-b border-[#2A2D40]/60 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">💧</span>
                        <span className="text-[13px] font-bold text-[#8A8D9F]">ОЧІКУВАНА РЕАКЦІЯ:</span>
                      </div>
                      <span className="text-[12px] font-bold text-[#87ADF0] tracking-wide">
                        {taskName === 'Memes_ua' ? 'БУДЬ-ЯКА' : 'НАТИСНІТЬ ДЛЯ ПЕРЕГЛЯДУ'}
                      </span>
                    </div>

                    {/* Redirect Link Input Box */}
                    <div
                      className="w-full h-[44px] rounded-[12px] bg-[#0E101F] border border-[#2A2D40]/80 px-3.5 flex items-center gap-2.5 cursor-pointer hover:border-[#87ADF0] transition-colors"
                      onClick={() => window.open('https://t.me/memes_ua/1234', '_blank')}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#87ADF0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      <span className="text-[12px] text-[#87ADF0] font-semibold truncate">
                        https://t.me/memes_ua/1234
                      </span>
                    </div>
                  </>
                )}

                {/* Pay All Button */}
                <button
                  onClick={handleApproveAll}
                  className="w-full h-[44px] rounded-[22px] bg-[#87ADF0] text-[#090B19] font-bold text-[14px] flex items-center justify-center hover:opacity-95 active:scale-[0.99] transition-all mt-1"
                >
                  Оплатити усі ({submissions.length})
                </button>
              </div>

              {/* Submissions Section */}
              <div className="flex flex-col gap-4">
                {submissions.map((sub, index) => (
                  <div
                    key={sub.id}
                    className="gradient-border-card rounded-[12px] p-4 flex flex-col gap-3.5 bg-[#161829]"
                  >
                    {/* Header of submission card */}
                    <div className={`flex items-center gap-1.5 ${sub.id !== 1 ? 'justify-between' : ''}`}>
                      <div className="flex items-center gap-2">
                        <img src='/assets/images/svg/Plate.svg' alt='Plate' />
                        <span className="text-[14px] font-bold text-white">{sub.number}</span>
                      </div>

                      {/* Timer Pill */}
                      <div className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full ${sub.id === 1
                        ? 'bg-[#FF4973]/10 border border-[#FF4973]/20 text-[#FF4973]'
                        : 'bg-[#87ADF0]/10 border border-[#87ADF0]/20 text-[#87ADF0]'
                        }`}>
                        {sub.id === 1 ? (
                          <img src='/assets/images/svg/Clock-red.svg' alt='Clock-red' />
                        ) : (
                          <img src='/assets/images/svg/clock.svg' alt='Clock-red' />
                        )}
                        <span className="text-[11px] font-bold tracking-wide">{sub.timeLeft}</span>
                      </div>
                    </div>

                    {/* Screenshot Placeholder */}
                    <div className="w-full h-[220px] rounded-[12px] bg-white/5 flex items-center justify-center">
                    </div>

                    {/* Bottom Action Row (Approve / Rework / Reject) */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {/* Approve (Green) */}
                      <button
                        onClick={() => handleApprove(sub.id)}
                        className="flex flex-col items-center justify-center gap-2.5 h-[69px] w-[99px] rounded-[12px] text-[#00FF95] active:scale-[0.98] transition-all mx-auto cursor-pointer"
                        style={{
                          background: 'linear-gradient(128.85deg, rgba(0, 255, 149, 0.2) 0%, rgba(0, 255, 149, 0.04) 53.26%, rgba(0, 255, 149, 0.2) 100%)'
                        }}
                      >
                        <img src='/assets/images/svg/Check Square.svg' alt='Check Square' />
                        <span className="text-[11px] font-bold tracking-wide">Оплатити</span>
                      </button>

                      {/* Rework (Yellow) */}
                      <button
                        onClick={() => handleOpenModal(sub.id, 'rework')}
                        className="flex flex-col items-center justify-center gap-2.5 h-[69px] w-[99px] rounded-[12px] text-[#FFC000] active:scale-[0.98] transition-all mx-auto cursor-pointer"
                        style={{
                          background: 'linear-gradient(128.85deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0.04) 53.26%, rgba(255, 192, 0, 0.2) 100%)'
                        }}
                      >
                        <img src='/assets/images/svg/Refresh Square.svg' alt='Refresh Square' />
                        {/* Render "Доопрацюв..." for card Nº1, "Доопрацювати" for card Nº2 */}
                        <span className="text-[11px] font-bold tracking-wide truncate px-1">
                          {index === 0 ? 'Доопрацюв...' : 'Доопрацювати'}
                        </span>
                      </button>

                      {/* Reject (Red) */}
                      <button
                        onClick={() => handleOpenModal(sub.id, 'reject')}
                        className="flex flex-col items-center justify-center gap-2.5 h-[69px] w-[99px] rounded-[12px] border border-[#FF4973]/20 text-[#FF4973] active:scale-[0.98] transition-all mx-auto cursor-pointer"
                        style={{
                          background: 'linear-gradient(128.85deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 53.26%, rgba(255, 73, 115, 0.2) 100%)'
                        }}
                      >
                        <img src='/assets/images/svg/Close Square.svg' alt='Close Square' />
                        <span className="text-[11px] font-bold tracking-wide">Відмовити</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>

      {/* Dynamic Reason Modal */}
      <ReasonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmDecision}
        type={modalType}
      />
    </Layout>
  );
};

export default VerifyTaskReview;

