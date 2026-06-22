import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const PostLinkPage = () => {
  const navigate = useNavigate();
  const [postLink, setPostLink] = useState('');

  return (
    <Layout showNavbar={false}>
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">

        {/* Header + Icon — same as other steps */}
        <div className='flex items-center justify-center mb-4'>
          <div className="flex items-center justify-between absolute left-5">
            <button
              onClick={() => navigate(-1)}
              className="text-[#8A8D9F] hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="w-6" />
          </div>
          <img src="/assets/images/vector31.png" alt="vector31" className="w-[60px] h-[60px]" />
        </div>

        {/* Title */}
        <h1 className="text-lg font-bold text-white text-center mb-3">
          Посилання на пост
        </h1>

        {/* Step Progress */}
        <div className="flex items-center justify-center gap-[5px] mb-6 w-full max-w-[200px] mx-auto">
          {/* Step 1 — active */}
          <div
            className="w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0"
            style={{ boxShadow: '0 0 8px rgba(135,173,240,0.3)' }}
          >
            1
          </div>
          {/* Connector */}
          <div className="h-[1px] flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          {/* Step 2 — inactive dot */}
          <div
            className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>
          {/* Connector */}
          <div className="h-[1px] flex-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          {/* Step 3 — inactive dot */}
          <div
            className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          </div>
        </div>

        {/* Link Input Card */}
        <div
          className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
        >
          <div>
            <p className="text-sm font-semibold text-white mb-1">Посилання на пост</p>
            <p className="text-xs text-[#8A8D9F]">Вставте посилання на пост, який потрібно переглянути</p>
          </div>

          <div
            className="flex items-center rounded-full px-4 h-[44px]"
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

        {/* Continue Button */}
        <div className="mt-auto pt-4">
          <button
            onClick={() => navigate('/audience-setup')}
            className="w-full h-[48px] font-bold text-sm rounded-full flex items-center justify-center transition-all cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)',
              color: '#0B0E21',
              boxShadow: '0 4px 16px rgba(135,173,240,0.25)',
            }}
          >
            Продовжити
          </button>
        </div>

      </div>
    </Layout>
  );
};

export default PostLinkPage;
