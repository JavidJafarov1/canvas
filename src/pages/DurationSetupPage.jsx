import React, { useState } from 'react';
import { ChevronLeft, Zap, Calendar } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

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

const DurationSetupPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const incomingState = location.state || {};
  const [duration, setDuration] = useState(30); // 7 | 30

  const handleContinue = () => {
    navigate('/channel-audience-setup', {
      state: {
        ...incomingState,
        duration,
      }
    });
  };

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">
        {/* Header Navigation */}
        <div className="flex items-center justify-center mb-4 relative h-[50px]">
          <button
            onClick={() => navigate(-1)}
            className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-0"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Lightning Bolt Icon Container with Glow */}
          <div className="w-[50px] h-[50px] rounded-full bg-[#182347] border border-[#3C64BA]/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(58,100,186,0.3)]">
            <Zap className="w-5 h-5 text-[#87ADF0] fill-[#87ADF0]/20" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold text-white text-center mb-3">Тривалість</h1>

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
          {/* Option 1: 7 days */}
          <button
            onClick={() => setDuration(7)}
            className="w-full flex items-center justify-between rounded-[14px] p-4 transition-all cursor-pointer text-left"
            style={{
              background: duration === 7
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${duration === 7 ? 'rgba(135,173,240,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#87ADF0]/10 flex items-center justify-center border border-[#87ADF0]/20">
                <Calendar className="w-5 h-5 text-[#87ADF0]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">7 днів</p>
                <p className="text-[11px] text-white/40 mt-0.5">21 000 GRAM</p>
              </div>
            </div>
            {/* Custom Radio Button */}
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${duration === 7 ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {duration === 7 && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>

          {/* Option 2: 30 days */}
          <button
            onClick={() => setDuration(30)}
            className="w-full flex items-center justify-between rounded-[14px] p-4 transition-all cursor-pointer text-left"
            style={{
              background: duration === 30
                ? 'linear-gradient(135deg, rgba(135,173,240,0.12) 0%, rgba(135,173,240,0.06) 100%)'
                : 'rgba(255,255,255,0.03)',
              border: `1px solid ${duration === 30 ? 'rgba(135,173,240,0.3)' : 'rgba(255,255,255,0.06)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#87ADF0]/10 flex items-center justify-center border border-[#87ADF0]/20">
                <Calendar className="w-5 h-5 text-[#87ADF0]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">30 днів</p>
                <p className="text-[11px] text-white/40 mt-0.5">42 000 GRAM</p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${duration === 30 ? 'border-[#87ADF0] bg-[#87ADF0]' : 'border-white/20'}`}>
              {duration === 30 && <div className="w-2 h-2 rounded-full bg-[#0B0E21]" />}
            </div>
          </button>
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

export default DurationSetupPage;
