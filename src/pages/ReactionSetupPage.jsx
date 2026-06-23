import React, { useState, useRef } from 'react';
import { ChevronLeft, Flame, ArrowUp, Check, ImagePlus, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const EMOJIS = ['🥰', '😜', '😂', '💪', '🚀', '🔥', '💀', '🫡', '👍', '🤬', '🥳', '😍', '😘', '🥺'];

const StepDot = ({ stepNum, status }) => {
  if (status === 'done') {
    return (
      <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="#0B0E21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (status === 'active') {
    return (
      <div
        className="w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0"
        style={{ boxShadow: '0 0 8px rgba(135,173,240,0.3)' }}
      >
        {stepNum}
      </div>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
    </div>
  );
};

const ReactionSetupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fileInputRef = useRef(null);

  const incomingState = location.state || {};
  const [reactionType, setReactionType] = useState('specific'); // 'any' | 'specific'
  const [selectedEmoji, setSelectedEmoji] = useState('🔥');
  const [screenshotFile, setScreenshotFile] = useState(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setScreenshotFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setScreenshotFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleContinue = () => {
    navigate('/reaction-audience-setup', {
      state: {
        ...incomingState,
        reactionType,
        selectedEmoji: reactionType === 'specific' ? selectedEmoji : null,
        hasScreenshot: !!screenshotFile,
      }
    });
  };

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">
        {/* Header Navigation */}
        <div className="flex items-center justify-center mb-4 relative h-10">
          <button
            onClick={() => navigate(-1)}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-0"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Flame Icon Container with Glow */}
          <div className="w-[50px] h-[50px] rounded-full bg-[#182347] border border-[#3C64BA]/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(58,100,186,0.3)]">
            <Flame className="w-6 h-6 text-[#87ADF0] fill-[#87ADF0]/20" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold text-white text-center mb-3">Тип реакції</h1>

        {/* 4-Step Progress Bar */}
        <div className="flex items-center justify-center gap-[5px] mb-6 w-full max-w-[220px] mx-auto">
          <StepDot stepNum={1} status="done" />
          <div className="h-[2px] flex-1 bg-[#87ADF0]/40 rounded-full" />
          <StepDot stepNum={2} status="active" />
          <div className="h-[1px] flex-1 bg-white/10 rounded-full" />
          <StepDot stepNum={3} status="inactive" />
          <div className="h-[1px] flex-1 bg-white/10 rounded-full" />
          <StepDot stepNum={4} status="inactive" />
        </div>

        {/* Option Card Container */}
        <div
          className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3 mb-3"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
        >
          {/* Option 1: Any reaction */}
          <button
            onClick={() => setReactionType('any')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer"
            style={{
              background: reactionType === 'any'
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${reactionType === 'any' ? 'rgba(135,173,240,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <img src='/assets/images/vector36.png' alt='vector36' className='w-11' />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Довільна</p>
                <p className="text-[11px] text-white/40">будь-яка реакція</p>
              </div>
            </div>
            {/* Custom Radio Button */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${reactionType === 'any' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {reactionType === 'any' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>

          {/* Option 2: Specific reaction */}
          <button
            onClick={() => setReactionType('specific')}
            className="w-full flex items-center justify-between rounded-[14px] p-3 transition-all cursor-pointer"
            style={{
              background: reactionType === 'specific'
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${reactionType === 'specific' ? 'rgba(135,173,240,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <img src='/assets/images/vector37.png' alt='vvector37' className='w-11' />
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Конкретна</p>
                <p className="text-[11px] text-white/40">Виберіть реакцію зі списку</p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${reactionType === 'specific' ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {reactionType === 'specific' && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>

          {/* Emojis Grid - visible if specific selected */}
          {reactionType === 'specific' && (
            <div className="grid grid-cols-7 gap-x-1 gap-y-2 mt-2 w-full">
              {EMOJIS.map((emoji) => {
                const isSelected = selectedEmoji === emoji;
                return (
                  <button
                    key={emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    className="w-[42px] h-[32px] rounded-full flex items-center justify-center text-sm transition-all cursor-pointer gradient-border-card"
                    style={{
                      background: isSelected ? 'rgba(135,173,240,0.15)' : 'rgba(255,255,255,0.04)',
                      border: isSelected ? '1px solid #87ADF0' : '',
                      boxShadow: isSelected ? '0 0 8px rgba(135,173,240,0.2)' : 'none',
                    }}
                  >
                    {emoji}
                  </button>
                );
              })}
            </div>
          )}

          {/* Or upload screenshot section */}
          {reactionType === 'specific' && (
            <div className="flex flex-col gap-2">
              <p className="text-[11px] text-white/40">
                Або покажіть скриншотом яку реакцію поставити
              </p>

              <div
                onClick={handleUploadClick}
                className="w-full flex items-center justify-between rounded-[14px] p-3 gradient-border-card cursor-pointer transition-all"
                style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
              >
                <div className="flex items-center gap-3">
                  <img src='/assets/images/vector38.png' alt='vector38' className='w-11' />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">
                      {screenshotFile ? screenshotFile.name : 'Завантажити скриншот'}
                    </p>
                    <p className="text-[11px] text-white/40">
                      {screenshotFile
                        ? `${(screenshotFile.size / 1024 / 1024).toFixed(2)} MB`
                        : 'PNG, JPG до 5 МБ'}
                    </p>
                  </div>
                </div>
                {screenshotFile && (
                  <button
                    onClick={handleRemoveFile}
                    className="p-1 text-white/40 hover:text-white transition-colors cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          )}
        </div>

        {/* Continue Button */}
        <div className="mt-auto pt-4">
          <button
            onClick={handleContinue}
            className="w-full h-[48px] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer shadow-[0_4px_16px_rgba(135,173,240,0.25)]"
            style={{
              background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)',
              color: '#0B0E21',
            }}
          >
            Продовжити
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ReactionSetupPage;
