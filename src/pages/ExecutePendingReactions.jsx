import { useState } from 'react';
import { ChevronLeft, ChevronRight, AlertTriangle, Clock, MoreVertical, EyeOff, Flag, Gavel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const PENDING_ITEMS = [
  {
    id: 'pending_1',
    channelName: '@promo_channel',
    reward: 1750,
    timeLeft: '22 год 0 хв',
    warningText: 'Реакція не відповідає вимогам. Потрібна реакція 🔥 , а ви поставили 👍',
    isUrgent: false
  },
  {
    id: 'pending_2',
    channelName: '@promo_channel',
    reward: 1750,
    timeLeft: '22 год 0 хв',
    warningText: 'Скриншот не читабельний. Зробіть новий скриншот у кращій якості.',
    isUrgent: false
  },
  {
    id: 'pending_3',
    channelName: '@promo_channel',
    reward: 1750,
    timeLeft: '22 год 0 хв',
    warningText: 'На скриншоті не видно поставлену реакцію. Зробіть скриншот де чітко видно вашу....',
    isUrgent: true
  }
];

const ExecutePendingReactions = () => {
  const navigate = useNavigate();
  const [viewState, setViewState] = useState('list'); // 'list' | 'detail'
  const [selectedItem, setSelectedItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState('hide');
  const [reportText, setReportText] = useState('');
  const [appealModalOpen, setAppealModalOpen] = useState(false);
  const [appealText, setAppealText] = useState('');

  const handleBack = () => {
    if (viewState === 'detail') {
      setViewState('list');
      setMenuOpen(false);
    } else {
      navigate('/execute-tasks');
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setViewState('detail');
  };

  return (
    <Layout showNavbar={false}>
      <div
        className="flex flex-col font-sans text-white relative min-h-screen bg-[#090B19] select-none"
        onClick={() => setMenuOpen(false)}
      >

        {/* Header */}
        <div className="flex flex-col items-center pt-8 pb-5 px-5 relative border-b border-white/10 shrink-0">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-5 top-8"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Three-dots menu for detail view */}
          {viewState === 'detail' && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen(!menuOpen);
              }}
              className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute right-5 top-8 p-1"
            >
              <MoreVertical size={20} />
            </button>
          )}

          {/* Dropdown Menu Overlay */}
          {viewState === 'detail' && menuOpen && (
            <div
              className="absolute right-4 top-[56px] w-[180px] rounded-[18px] border border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.6)] p-3 z-50 flex flex-col gap-0.5 mt-1"
              style={{ background: 'linear-gradient(180deg, #24273E 0%, #131421 100%)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => {
                  alert(`Завдання ${selectedItem?.channelName} пропущено`);
                  handleBack();
                }}
                className="flex items-center gap-2.5 py-1.5 px-2 w-full text-left hover:bg-white/[0.03] rounded-xl text-sm font-semibold text-white transition-all cursor-pointer"
              >
                <EyeOff size={18} className="text-white/40" />
                <span>Пропустити</span>
              </button>
              <div className="h-[1px] w-full bg-white/[0.06] my-1" />
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setReportModalOpen(true);
                }}
                className="flex items-center gap-2.5 py-1.5 px-2 w-full text-left hover:bg-[#FF4973]/5 rounded-xl text-sm font-semibold text-[#FF4973] transition-all cursor-pointer"
              >
                <Flag size={18} className="text-[#FF4973]" />
                <span>Скаржитись</span>
              </button>
            </div>
          )}

          {/* View Specific Header Icons & Titles */}
          {viewState === 'list' && (
            <>
              {/* Clock Circle Icon */}
              <img src='/assets/images/vector54.png' alt='vector54' className='mb-3' />

              <h1 className="text-base font-medium text-white leading-tight text-center">
                У Реакцій <span className="text-white/40">(84)</span>
              </h1>
              <p className="text-xs text-white/40 mt-1.5 text-center leading-normal">
                Ці завдання були відхилені автором. Перегляньте причину та надішліть новий скриншот.
              </p>
            </>
          )}

          {viewState === 'detail' && (
            <>
              {/* Large Heart Icon Circle */}
              <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-[#111427] border border-[#2B3356] shadow-[0_0_24px_rgba(131,168,240,0.2)] relative mb-3">
                <div className="absolute inset-[-4px] rounded-full border border-white/[0.04]" />
                <svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.75555 15.2056C4.41548 13.4026 1.66699 11.285 1.66699 7.61413C1.66699 3.56168 6.25046 0.687765 10.0003 4.58374V17.0832C9.16699 17.0832 8.33366 16.441 7.46844 15.7589C7.23758 15.577 6.99877 15.393 6.75555 15.2056Z" fill="#87ADF0" />
                  <path d="M12.5319 15.7589C14.9838 13.8261 18.3333 11.6666 18.3333 7.61413C18.3333 3.56168 13.7499 0.687765 10 4.58374V17.0832C10.8333 17.0832 11.6667 16.441 12.5319 15.7589Z" fill="#87ADF0" />
                </svg>
              </div>
              <h1 className="text-[17px] font-bold text-white text-center leading-tight">
                {selectedItem?.channelName}
              </h1>
              <div className="flex items-center gap-1.5 mt-1.5 justify-center">
                <span className="text-[12px] text-white/40 font-medium leading-none">Винагорода:</span>
                <img src="/assets/images/vector.png" alt="coin" className="w-[18px] h-[18px] object-contain" />
                <span className="text-[#FFC000] text-[13px] font-bold leading-none">
                  {selectedItem?.reward}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-4 py-5">

          {/* 1. LIST VIEW */}
          {viewState === 'list' && (
            <div className="flex flex-col gap-3">
              {PENDING_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className="gradient-border-card w-full rounded-[12px] p-3 flex flex-col gap-[13px] text-left cursor-pointer active:scale-[0.99] transition-all"
                  style={{
                    background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)',
                  }}
                >
                  {/* Card Header Info */}
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      {/* Heart Icon */}
                      <img src='/assets/images/vector49.png' alt='heart' className="w-11" />

                      {/* Name and Meta */}
                      <div>
                        <h3 className="font-semibold text-[15px] text-white leading-tight">
                          {item.channelName}
                        </h3>
                        <div className="flex items-center gap-3 mt-1.5">
                          {/* Reward */}
                          <div className="flex items-center gap-1">
                            <img src="/assets/images/vector.png" alt="coin" className="w-4 h-4" />
                            <span className="text-[#FFC000] text-xs font-semibold leading-none">
                              {item.reward}
                            </span>
                          </div>

                          {/* Time Left */}
                          <div className="flex items-center gap-1">
                            {item.isUrgent ? (
                              <img src='/assets/images/svg/clock-yellow.svg' alt='clock' />
                            ) : (
                              <img src='/assets/images/svg/clock.svg' alt='clock' />
                            )}
                            <span className={`text-xs font-medium leading-none ${item.isUrgent ? 'text-[#FFC000]' : 'text-[#87ADF0]'}`}>
                              {item.timeLeft}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Chevron */}
                    <ChevronRight size={18} className="text-[#5A5D72] shrink-0" />
                  </div>

                  {/* Red/Purple Warning Panel */}
                  <div className="rounded-xl border p-[10px_12px] flex items-start gap-3 bg-[#FF4973]/10 border-[#FF4973]/5 w-full">
                    <img src='/assets/images/svg/danger.svg' alt='danger' className='min-w-5' />
                    <p className="text-xs text-[#FFB7C8] leading-normal font-medium">
                      {item.warningText}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* 2. DETAIL VIEW */}
          {viewState === 'detail' && selectedItem && (
            <div className="px-1.5">
              <div
                className="gradient-border-card rounded-xl p-4 flex flex-col gap-3"
                style={{
                  background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)'
                }}
              >
                {/* Red/Purple Warning Panel: Reason for Rejection */}
                <div
                  className="rounded-xl border border-[#FF4973]/15 p-[10px_12px] flex flex-col gap-2 text-left bg-[#FF4973]/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src='/assets/images/svg/danger.svg' alt='danger' className='w-5' />
                      <span className="text-[#FF4973] text-[11px] font-bold tracking-wider uppercase leading-none">
                        ПРИЧИНА ВІДХИЛЕННЯ
                      </span>
                    </div>
                    {/* Time remaining */}
                    <div className="flex items-center gap-1 text-white/40">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0">
                        <path opacity="0.4" d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" fill="currentColor" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.83337C8.27614 4.83337 8.5 5.05723 8.5 5.33337V7.79293L10.0202 9.31315C10.2155 9.50842 10.2155 9.825 10.0202 10.0203C9.82496 10.2155 9.50838 10.2155 9.31311 10.0203L7.64645 8.35359C7.55268 8.25983 7.5 8.13265 7.5 8.00004V5.33337C7.5 5.05723 7.72386 4.83337 8 4.83337Z" fill="currentColor" />
                      </svg>
                      <span className="text-[11px] font-medium leading-none">
                        {selectedItem.timeLeft}
                      </span>
                    </div>
                  </div>
                  <p className="text-[13px] text-[#FFB7C8] leading-normal font-medium">
                    {selectedItem.warningText}
                  </p>
                </div>

                {/* Divider Line */}
                <div className="h-[1px] w-full border-t border-dashed border-white/10 my-0.5" />

                {/* Previous Screenshot Space */}
                <div className="flex flex-col gap-2.5 text-left w-full">
                  <span className="text-[13px] text-white/40 font-medium">Попередній скриншот:</span>
                  <div className="w-full h-[160px] rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#090B19]/40 backdrop-blur-[2px]" />
                    <span className="px-6 py-2.5 rounded-full bg-[#FF4973] text-white font-bold text-sm relative z-10 shadow-[0_4px_16px_rgba(255,73,115,0.45)] cursor-pointer">
                      Відхилено
                    </span>
                  </div>
                </div>

                {/* Required Reaction details */}
                <div className="flex items-center gap-1.5 text-left mt-1.5 mb-0.5">
                  <span className="text-[13px] text-white/40 font-medium">Потрібно поставити:</span>
                  <span className="text-lg leading-none">🔥</span>
                </div>

                {/* Divider Line */}
                <div className="h-[1px] w-full border-t border-dashed border-white/10 my-0.5" />

                {/* Action Buttons: Перейти до поста */}
                <button
                  onClick={() => alert(`Перехід до поста ${selectedItem.channelName}...`)}
                  className="w-full h-12 rounded-[30px] font-bold text-[15px] flex items-center justify-center gap-2 text-[#0B0E21] bg-[#82A7F9] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_16px_rgba(130,167,249,0.2)]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M6.75555 15.2056C4.41548 13.4026 1.66699 11.285 1.66699 7.61413C1.66699 3.56168 6.25046 0.687765 10.0003 4.58374V17.0832C9.16699 17.0832 8.33366 16.441 7.46844 15.7589C7.23758 15.577 6.99877 15.393 6.75555 15.2056Z" fill="#0B0E21" />
                    <path d="M12.5319 15.7589C14.9838 13.8261 18.3333 11.6666 18.3333 7.61413C18.3333 3.56168 13.7499 0.687765 10 4.58374V17.0832C10.8333 17.0832 11.6667 16.441 12.5319 15.7589Z" fill="#0B0E21" />
                  </svg>
                  <span>Перейти до поста</span>
                </button>

                {/* Paste and Choose Sub Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => alert('Вставити новий скриншот...')}
                    className="flex-1 h-12 rounded-[30px] font-semibold text-sm flex items-center justify-center gap-2 text-[#87ADF0] border border-[#87ADF0]/25 hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer"
                    style={{
                      background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
                    }}
                  >
                    <img src='/assets/images/svg/Notes.svg' alt='Notes' className='w-5 h-5 shrink-0' />
                    <span>Вставити</span>
                  </button>

                  <button
                    onClick={() => alert('Обрати новий скриншот...')}
                    className="flex-1 h-12 rounded-[30px] font-semibold text-sm flex items-center justify-center gap-2 text-[#87ADF0] border border-[#87ADF0]/25 hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer"
                    style={{
                      background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
                    }}
                  >
                    <img src='/assets/images/svg/GalleryMinimalistic.svg' alt='GalleryMinimalistic' className='w-5 h-5 shrink-0' />
                    <span>Обрати</span>
                  </button>
                </div>

                {/* Divider Line */}
                <div className="h-[1px] w-full border-t border-dashed border-white/10 my-0.5" />

                {/* Appeal Panel */}
                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={() => setAppealModalOpen(true)}
                    className="w-full h-11 rounded-[30px] font-semibold text-sm flex items-center justify-center gap-2 text-[#FF4973] cursor-pointer gradient-border-card"
                    style={{
                      background: 'linear-gradient(128.85deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 53.26%, rgba(255, 73, 115, 0.2) 100%)'
                    }}
                  >
                    <img src='/assets/images/svg/legal-01.svg' alt='legal-01' />
                    <span>Подати апеляцію</span>
                  </button>
                  <span className="text-[12px] text-white/30 text-center font-medium leading-none">
                    Не згодні з рішенням? Оскаржте відхилення
                  </span>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Report Modal Dialog Overlay */}
        {reportModalOpen && (
          <div className="absolute inset-0 bg-[#090B19]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setReportModalOpen(false)}>
            <div
              className="w-full max-w-[327px] rounded-[12px] border border-white/10 p-6 flex flex-col items-center gap-4 animate-scale-up"
              style={{
                background: 'linear-gradient(155.83deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 32.55%, rgba(255, 73, 115, 0.02) 61.12%), #0B0E21'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Flag Header Icon & Titles */}
              <div className="flex flex-col items-center mt-1">
                <img src='/assets/images/vector51.png' alt='vector51' className='mb-4' />
                <h2 className="text-[17px] font-bold text-white text-center leading-tight mb-1">
                  Оберіть причину скарги
                </h2>
                <p className="text-[11px] text-white/40 text-center leading-normal font-medium">
                  Оберіть або напишіть скаргу
                </p>
              </div>

              {/* Reasons List */}
              <div className="flex flex-col gap-2">
                {[
                  { id: 'hide', label: 'Приховати завдання для мене', icon: '/assets/images/svg/eye-slash3.svg' },
                  { id: 'inappropriate', label: 'Неприйнятний контент', icon: '/assets/images/svg/Forbidden Circle.svg' },
                  { id: 'no_screenshot', label: 'Заборонено робити скріншот', icon: '/assets/images/svg/Volume Cross.svg' },
                  { id: 'broken_link', label: 'Непрацююче посилання', icon: '/assets/images/svg/link.svg' },
                  { id: 'paid_reactions', label: 'Платні реакції', icon: '/assets/images/svg/star.svg' },
                  { id: 'other', label: 'Інша причина', icon: '/assets/images/svg/edit.svg' },
                ].map((reason) => {
                  const isSelected = selectedReason === reason.id;
                  return (
                    <button
                      key={reason.id}
                      onClick={() => setSelectedReason(reason.id)}
                      className="w-full h-11 rounded-full px-4 flex items-center justify-between gap-3 text-left transition-all cursor-pointer gradient-border-card p-[12px_16px]"
                    >
                      <div className="flex items-center gap-3">
                        <img src={reason.icon} alt={reason.id} className="w-[18px] h-[18px] object-contain" />
                        <span className="text-[13px] font-semibold text-white/90">
                          {reason.label}
                        </span>
                      </div>

                      {/* Concentric Radio button */}
                      <div className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 transition-all ${isSelected ? 'border-[#FF4973] bg-transparent' : 'border-white/20 bg-transparent'
                        }`}>
                        {isSelected ? (
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF4973]" />
                        ) : (
                          <div className="w-2.5 h-2.5 rounded-full border border-white/5 bg-[#090B19]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Textarea for Other reason */}
              {selectedReason === 'other' && (
                <textarea
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder="Опишіть причину..."
                  rows={3}
                  className="w-full rounded-2xl bg-[#090B19]/60 border border-white/10 p-4 text-[13px] text-white placeholder-white/30 focus:outline-none focus:border-[#FF4973]/30 resize-none font-medium mt-1 leading-normal"
                />
              )}

              {/* Action buttons */}
              <div className="flex gap-3 mt-1.5">
                <button
                  onClick={() => setReportModalOpen(false)}
                  className="flex-1 h-11 rounded-full font-semibold text-sm flex items-center justify-center gap-2 text-[#8E9AC6] border border-white/10 hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer"
                  style={{
                    background: 'linear-gradient(180deg, rgba(36, 39, 62, 0.8) 0%, rgba(19, 20, 33, 0.8) 100%)'
                  }}
                >
                  Скасувати
                </button>

                <button
                  onClick={() => {
                    alert(`Скаргу надіслано. Дякуємо за відгук!`);
                    setReportModalOpen(false);
                    handleBack();
                  }}
                  className="flex-1 h-11 rounded-full font-semibold text-sm flex items-center justify-center gap-2 text-white bg-[#FF4973] hover:bg-[#FF5C82] active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_16px_rgba(255,73,115,0.25)]"
                >
                  Поскаржитись
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Appeal Modal Dialog Overlay */}
        {appealModalOpen && (
          <div className="absolute inset-0 bg-[#090B19]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setAppealModalOpen(false)}>
            <div
              className="w-full max-w-[327px] rounded-xl border border-white/10 p-[32px_24px] flex flex-col items-center gap-4 animate-scale-up"
              style={{
                background: 'linear-gradient(155.83deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 32.55%, rgba(255, 73, 115, 0.02) 61.12%), #0B0E21'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Gavel Header Icon & Titles */}
              <div className="flex flex-col items-center mt-1">
                <img src='/assets/images/vector55.png' alt='vector55' className='mb-4' />
                <h2 className="text-base font-medium text-white text-center leading-tight mb-1">
                  Подати апеляцію
                </h2>
                <p className="text-xs text-white/50 text-center leading-normal">
                  Якщо ви вважаєте, що завдання було відхилено помилково - опишіть причину. Апеляцію розгляне адміністрація.
                </p>
              </div>

              {/* Textarea for Appeal reason */}
              <textarea
                value={appealText}
                onChange={(e) => setAppealText(e.target.value)}
                placeholder="Поясніть, чому ви не згодні з відхиленням..."
                rows={4}
                className="w-full rounded-xl bg-[#090B19]/60 border border-white/10 py-2.5 px-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF4973]/30 resize-none mt-1 leading-normal"
              />

              {/* Action buttons */}
              <div className="flex gap-3 mt-1.5 w-full">
                <button
                  onClick={() => setAppealModalOpen(false)}
                  className="flex-1 h-11 rounded-full font-semibold text-sm flex items-center justify-center gap-2 text-[#8E9AC6] border border-white/10 hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer"
                  style={{
                    background: 'linear-gradient(180deg, rgba(36, 39, 62, 0.8) 0%, rgba(19, 20, 33, 0.8) 100%)'
                  }}
                >
                  Скасувати
                </button>

                <button
                  onClick={() => {
                    alert(`Апеляцію надіслано!`);
                    setAppealModalOpen(false);
                    setAppealText('');
                    handleBack();
                  }}
                  className="flex-1 h-11 rounded-full font-bold text-sm flex items-center justify-center gap-2 text-white bg-[#FF4973] hover:bg-[#FF5C82] active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_16px_rgba(255,73,115,0.25)]"
                >
                  Надіслати
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default ExecutePendingReactions;
