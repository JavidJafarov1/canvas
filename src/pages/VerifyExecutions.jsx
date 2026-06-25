import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Bot, Flame } from 'lucide-react';
import Layout from '../components/Layout';

const VerifyExecutions = () => {
  const navigate = useNavigate();

  // Mock list matching the screenshot
  const verificationsData = [
    {
      id: 1,
      name: 'AI_Celestia_bot',
      taskId: '#1 043 321',
      pendingCount: 3,
      type: 'bot',
      iconBg: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)',
      iconColor: '#34D399',
    },
    {
      id: 2,
      name: 'Memes_ua',
      taskId: '#1 043 321',
      pendingCount: 3,
      type: 'reaction',
      iconBg: 'linear-gradient(135deg, #701A75 0%, #4A044E 100%)',
      iconColor: '#F472B6',
    },
    {
      id: 3,
      name: 'AI_Celestia_bot',
      taskId: '#1 043 321',
      pendingCount: 3,
      type: 'bot',
      iconBg: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)',
      iconColor: '#34D399',
    },
    {
      id: 4,
      name: 'Memes_ua',
      taskId: '#1 043 321',
      pendingCount: 3,
      type: 'reaction',
      iconBg: 'linear-gradient(135deg, #701A75 0%, #4A044E 100%)',
      iconColor: '#F472B6',
    },
    {
      id: 5,
      name: 'AI_Celestia_bot',
      taskId: '#1 043 321',
      pendingCount: 3,
      type: 'bot',
      iconBg: 'linear-gradient(135deg, #065F46 0%, #064E3B 100%)',
      iconColor: '#34D399',
    },
  ];

  const getIcon = (type, color) => {
    if (type === 'bot') {
      return <img src='/assets/images/vector56.png' alt='vector56' />;
    }
    return <img src='/assets/images/vector57.png' alt='vector57' />;
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6 bg-[#090B19]">

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-[#545664] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-base font-semibold text-white tracking-wider flex-1 text-center mr-5">
            Перевірка виконань
          </h1>
        </div>

        {/* List Container */}
        <div className="px-5 flex flex-col gap-3">
          {verificationsData.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate('/verify-task-review', { state: item })}
              className="gradient-border-card rounded-[16px] p-4 flex items-center justify-between cursor-pointer hover:bg-white/[0.01] transition-all"
              style={{ background: '#161829' }}
            >
              <div className="flex items-center gap-3.5">
                {/* Circular Icon */}
                <div
                  className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: item.iconBg,
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: `0 0 12px ${item.iconColor}15`
                  }}
                >
                  {getIcon(item.type, item.iconColor)}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                  <h4 className="text-[15px] font-semibold text-white">
                    {item.name}
                  </h4>
                  <span className="text-[12px] text-[#5A5D72] font-medium mt-0.5">
                    {item.taskId}
                  </span>
                </div>
              </div>

              {/* Right Side: Count and Chevron */}
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-white">
                  {item.pendingCount}
                </span>
                <ChevronRight size={16} className="text-[#5A5D72]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default VerifyExecutions;
