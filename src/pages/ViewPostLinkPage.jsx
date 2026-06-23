import React, { useState } from 'react';
import { ChevronLeft, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const StepDot = ({ stepNum, status }) => {
  if (status === 'done') {
    return (
      <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

const ViewPostLinkPage = () => {
  const navigate = useNavigate();
  const [postLink, setPostLink] = useState('');

  const handleContinue = () => {
    navigate('/view-audience-setup', { state: { taskType: 'view_posts', postLink } });
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col font-sans text-white relative min-h-screen">
        <div className='p-[10px_15px_22px_15px] border-b border-b-white/10'>
          {/* Header */}
          <div className="flex items-center justify-center mb-4 relative h-[50px]">
            <button
              onClick={() => navigate(-1)}
              className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer absolute left-0"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Eye Icon Container */}
            <div className="w-[50px] h-[50px] rounded-full bg-[#182347] border border-[#3C64BA]/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(58,100,186,0.3)]">
              <Eye className="w-5 h-5 text-[#87ADF0]" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-lg font-bold text-white text-center mb-3">Посилання на пост</h1>

          {/* Step Progress */}
          <div className="w-full mx-auto mb-6">
            <div className="flex items-center justify-center gap-[5px] max-w-[160px] mx-auto">
              <StepDot stepNum={1} status="active" />
              <div className="h-[1px] flex-1 bg-white/10 rounded-full" />
              <StepDot stepNum={2} status="inactive" />
              <div className="h-[1px] flex-1 bg-white/10 rounded-full" />
              <StepDot stepNum={3} status="inactive" />
            </div>
          </div>
        </div>

        {/* Link Input Card */}
        <div className="flex-1 flex flex-col my-auto p-4">
          <div
            className="gradient-border-card rounded-xl p-3 flex flex-col gap-4"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            <div>
              <p className="text-base font-semibold text-white mb-1">Посилання на пост</p>
              <p className="text-xs text-[#8A8D9F] leading-normal">
                Вставте посилання на пост, який потрібно переглянути
              </p>
            </div>

            <div
              className="flex items-center rounded-full px-4 h-[48px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                type="url"
                placeholder="https://t.me/channel/123"
                value={postLink}
                onChange={(e) => setPostLink(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-white/25 w-full focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-auto pt-4 px-4">
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

export default ViewPostLinkPage;
