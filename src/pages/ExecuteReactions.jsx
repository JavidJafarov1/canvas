import { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreVertical, EyeOff, Flag, Ban, Smartphone, Unlink, Star, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const CATEGORIES = [
  {
    id: 'arbitrary',
    name: 'Довільні реакції',
    description: 'Будь-які реакції - можна ставити на свій вибір',
    count: 64,
    icon: '/assets/images/vector49.png',
  },
  {
    id: 'predefined',
    name: 'Встановлені реакції',
    description: 'Потрібно поставити вказану реакцію',
    count: 20,
    icon: '/assets/images/vector50.png',
  }
];

const CHANNELS_BY_CATEGORY = {
  arbitrary: [
    { id: 'react_ar_1', name: '@promo_channel', reward: 1750, reaction: 'any' },
    { id: 'react_ar_2', name: '@game_earn_bot', reward: 1000, reaction: 'any' },
    { id: 'react_ar_3', name: '@wallet_app_bot', reward: 750, reaction: 'any' },
  ],
  predefined: [
    { id: 'react_pr_1', name: '@crypto_signals', reward: 1200, reaction: '🔥' },
    { id: 'react_pr_2', name: '@tech_news_ua', reward: 1100, reaction: '👍' },
    { id: 'react_pr_3', name: '@trading_hub', reward: 950, reaction: '❤️' },
  ]
};

const ExecuteReactions = () => {
  const navigate = useNavigate();
  const [viewState, setViewState] = useState('categories'); // 'categories' | 'list' | 'detail'
  const [selectedCatId, setSelectedCatId] = useState('arbitrary');
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState('hide');
  const [reportText, setReportText] = useState('');

  // Get current category data
  const currentCategory = CATEGORIES.find(c => c.id === selectedCatId);
  const currentChannelsList = CHANNELS_BY_CATEGORY[selectedCatId] || [];

  const handleBack = () => {
    if (viewState === 'detail') {
      setViewState('list');
      setMenuOpen(false);
    } else if (viewState === 'list') {
      setViewState('categories');
    } else {
      navigate('/execute-tasks');
    }
  };

  const handleCategoryClick = (catId) => {
    setSelectedCatId(catId);
    setViewState('list');
  };

  const handleChannelClick = (ch) => {
    setSelectedChannel(ch);
    setViewState('detail');
  };

  const handleActionClick = () => {
    if (selectedChannel) {
      alert(`Перехід до поста ${selectedChannel.name}...`);
    }
  };

  const handleSecondaryAction = (actionType) => {
    alert(`Дія "${actionType}" активована для ${selectedChannel?.name}`);
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
                  alert(`Завдання ${selectedChannel?.name} пропущено`);
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

          {/* View Specific Header Icon & Title */}
          {viewState === 'categories' && (
            <>
              <img src="/assets/images/fireLine.png" alt="fireLine" className="mb-3" />
              <h1 className="text-[22px] font-bold text-white leading-tight text-center">
                Поставити реакції
              </h1>
              <p className="text-sm text-white/40 mt-1 text-center font-medium">
                (84)
              </p>
            </>
          )}

          {viewState === 'list' && (
            <>
              <img src={currentCategory?.icon} alt="category icon" className="mb-3" />
              <h1 className="text-[22px] font-bold text-white leading-tight text-center">
                {currentCategory?.name} <span className="text-white/40">({currentCategory?.count})</span>
              </h1>
              <p className="text-xs text-white/40 mt-1 text-center font-medium max-w-[280px] leading-normal">
                {currentCategory?.description}
              </p>
            </>
          )}

          {viewState === 'detail' && (
            <>
              <img src={currentCategory?.icon} alt="category icon" className="mb-3" />
              <h1 className="text-base font-bold text-white text-center">
                {selectedChannel?.name}
              </h1>
              <div className="flex items-center gap-1 mt-1.5 justify-center">
                <span className="text-xs text-white/40 font-medium leading-none">Винагорода:</span>
                <img src="/assets/images/vector.png" alt="coin" className="w-4 h-4" />
                <span className="text-[#FFC000] text-xs font-semibold leading-none">
                  {selectedChannel?.reward}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto px-4 py-5">

          {/* 1. CATEGORIES VIEW */}
          {viewState === 'categories' && (
            <div className="flex flex-col gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className="gradient-border-card w-full rounded-xl p-3.5 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all text-left border border-white/5"
                  style={{
                    background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.04) 2.67%, rgba(255, 255, 255, 0.05) 98%)',
                  }}
                >
                  <div className="flex items-center gap-3.5 pr-2 flex-1">
                    <img src={cat.icon} alt={cat.name} />
                    <div>
                      <h3 className="font-semibold text-[15px] text-white leading-tight">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-white/40 mt-1 font-medium leading-normal">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-sm font-semibold text-white/60">{cat.count}</span>
                    <ChevronRight size={18} className="text-[#5A5D72]" />
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* 2. REACTIONS LIST VIEW */}
          {viewState === 'list' && (
            <div className="flex flex-col gap-3">
              {currentChannelsList.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => handleChannelClick(ch)}
                  className="gradient-border-card w-full rounded-xl p-3.5 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all text-left"
                  style={{
                    background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.04) 2.67%, rgba(255, 255, 255, 0.05) 98%)',
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <img src={currentCategory?.icon} alt="channel avatar" className="w-11" />
                    <div>
                      <h3 className="font-semibold text-[15px] text-white leading-tight">
                        {ch.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1.5">
                        <img src="/assets/images/vector.png" alt="coin" className="w-4 h-4" />
                        <span className="text-[#FFC000] text-xs font-semibold leading-none">
                          {ch.reward}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-[#5A5D72] shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* 3. REACTION DETAIL VIEW */}
          {viewState === 'detail' && (
            <div className="px-1">
              <div
                className="gradient-border-card rounded-[20px] p-5 flex flex-col gap-3 border border-white/5"
                style={{
                  background: 'linear-gradient(155.83deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.02) 100%), #0B0E21'
                }}
              >
                {/* Conditions Header */}
                <div className="flex items-center gap-2">
                  <img src="/assets/images/svg/DocumentAdd.svg" alt="DocumentAdd" className="w-5" />
                  <span className="text-xs font-medium text-white tracking-wider leading-none uppercase">
                    УМОВИ:
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-white/40 leading-snug font-normal">
                  Перейдіть до поста та поставте вказану реакцію. Зробіть скриншот для підтвердження виконання та надішліть його.
                </p>

                {/* Divider Line */}
                <div className="h-[1px] w-full border-t border-dashed border-white/10 my-2" />

                {/* Target Reaction detail */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[11px] text-white/30 font-medium">Потрібна реакція:</span>
                  <div className="flex items-center gap-2">
                    {selectedChannel?.reaction === 'any' ? (
                      <div className="flex gap-2">
                        {['👍', '🔥', '❤️', '🎉', '👏'].map((emoji, idx) => (
                          <div key={idx} className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-base">
                            {emoji}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-[#82A7F9]/10 border border-[#82A7F9]/20 flex items-center justify-center text-lg shadow-[0_0_12px_rgba(130,167,249,0.15)] animate-pulse">
                        {selectedChannel?.reaction}
                      </div>
                    )}
                  </div>
                </div>

                {/* Main Action Button */}
                <button
                  onClick={handleActionClick}
                  className="w-full h-11 rounded-[30px] font-semibold text-sm flex items-center justify-center gap-2 text-[#0B0E21] bg-[#82A7F9] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer shadow-[0_4px_16px_rgba(130,167,249,0.2)] mt-2"
                >
                  <img src="/assets/images/svg/Heart.svg" alt="heart icon" className="w-5" />
                  <span>Перейти до поста</span>
                </button>

                {/* Sub Action Buttons */}
                <div className="flex gap-3 mt-1">
                  <button
                    onClick={() => handleSecondaryAction('Вставити')}
                    className="flex-1 h-11 rounded-[30px] font-semibold text-sm flex items-center justify-center gap-2 text-[#87ADF0] border border-[#87ADF0]/25 hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer"
                    style={{
                      background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
                    }}
                  >
                    <img src='/assets/images/svg/Notes.svg' alt='Notes' className='w-5' />
                    <span>Вставити</span>
                  </button>

                  <button
                    onClick={() => handleSecondaryAction('Обрати')}
                    className="flex-1 h-11 rounded-[30px] font-semibold text-sm flex items-center justify-center gap-2 text-[#87ADF0] border border-[#87ADF0]/25 hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer"
                    style={{
                      background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
                    }}
                  >
                    <img src='/assets/images/svg/GalleryMinimalistic.svg' alt='GalleryMinimalistic' className='w-5' />
                    <span>Обрати</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Report Modal Dialog Overlay */}
        {reportModalOpen && (
          <div className="absolute inset-0 bg-[#090B19]/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setReportModalOpen(false)}>
            <div
              className="w-full max-w-[344px] rounded-[12px] border border-white/10 py-8 px-6 flex flex-col gap-4 animate-scale-up"
              style={{
                background: 'linear-gradient(155.83deg, rgba(255, 73, 115, 0.2) 0%, rgba(255, 73, 115, 0.04) 32.55%, rgba(255, 73, 115, 0.02) 61.12%), #0B0E21'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Flag Header Icon & Titles */}
              <div className="flex flex-col items-center gap-2 mt-1">
                <div className="w-[54px] h-[54px] rounded-full flex items-center justify-center bg-[#25152B] border border-[#FF4973]/30 shadow-[0_0_15px_rgba(255,73,115,0.15)]">
                  <Flag size={20} className="text-[#FF4973] fill-[#FF4973]" />
                </div>
                <h2 className="text-[17px] font-bold text-white text-center leading-tight">
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
      </div>
    </Layout>
  );
};

export default ExecuteReactions;
