import React, { useState } from 'react';
import { ChevronLeft, ChevronUp, ChevronDown, Zap } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';

const QUICK_AMOUNTS = [10, 50, 100, 500];
const MIN_PRICE = 750;
const COMMISSION_RATE = 0.15;
const TOP30_RECOMMENDED = 1270;

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

const ChannelTaskPricePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [price, setPrice] = useState('100');
  const [executions, setExecutions] = useState('100');

  const priceNum = parseInt(price) || 0;
  const execNum = parseInt(executions) || 0;

  const subtotal = priceNum * execNum;
  const commission = Math.round(subtotal * COMMISSION_RATE);
  const total = subtotal + commission;

  const isPriceError = priceNum > 0 && priceNum < MIN_PRICE;

  const handlePriceStep = (dir) => {
    setPrice((prev) => {
      const n = (parseInt(prev) || 0) + dir * 50;
      return String(Math.max(0, n));
    });
  };

  const handleExecStep = (dir) => {
    setExecutions((prev) => {
      const n = (parseInt(prev) || 0) + dir * 10;
      return String(Math.max(0, n));
    });
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col font-sans text-white relative min-h-screen">
        <div className='p-[10px_15px_22px_15px] border-b border-b-white/10'>
          {/* Header + Icon */}
          <div className='flex items-center justify-center mb-4 relative h-[50px]'>
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
          <h1 className="text-lg font-bold text-white text-center mb-3">
            Ціна та кількість
          </h1>

          {/* Step Progress - 4 steps total: step 4 active */}
          <div className="w-full mx-auto">
            <div className="flex items-center justify-center gap-[5px] max-w-[220px] mx-auto">
              <StepDot stepNum={1} status="done" />
              <div className="h-[2px] flex-1 bg-[#87ADF0]/40 rounded-full" />
              <StepDot stepNum={2} status="done" />
              <div className="h-[2px] flex-1 bg-[#87ADF0]/40 rounded-full" />
              <StepDot stepNum={3} status="done" />
              <div className="h-[2px] flex-1 bg-[#87ADF0]/40 rounded-full" />
              <StepDot stepNum={4} status="active" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-4 pb-0">

          {/* Price Card */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            {/* Label row */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#8A8D9F]">Ціна за одне виконання</p>
              <p className="text-xs text-white">мін. {MIN_PRICE} 🗲</p>
            </div>

            {/* Price Input */}
            <div
              className="flex items-center justify-between rounded-full px-4 h-[44px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-white/20 w-[120px] focus:outline-none font-bold"
              />
              <div className="flex items-center gap-3">
                <span className="text-[#8A8D9F] text-xs font-semibold">GRAM</span>
                <div className="flex flex-col justify-center h-full">
                  <button onClick={() => handlePriceStep(1)} className="text-[#8A8D9F] hover:text-white p-0.5"><ChevronUp size={14} /></button>
                  <button onClick={() => handlePriceStep(-1)} className="text-[#8A8D9F] hover:text-white p-0.5"><ChevronDown size={14} /></button>
                </div>
              </div>
            </div>

            {/* Minimum price warning */}
            {isPriceError && (
              <div
                className="flex items-center gap-2 rounded-full px-4 py-2.5"
                style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.1)' }}
              >
                <div className="w-4 h-4 rounded-full bg-[#EF4444] flex items-center justify-center text-[10px] font-bold text-white">!</div>
                <p className="text-[11px] text-[#EF4444]">Мінімум {MIN_PRICE} 🗲</p>
              </div>
            )}

            {/* Recommendation banner */}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5"
              style={{ background: 'rgba(255,192,0,0.08)', border: '1px solid rgba(255,192,0,0.1)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' />
              <p className="text-[11px] text-[#EAB308]">Для розміщення завдання у топ-30 рекомендована ціна {TOP30_RECOMMENDED} G</p>
            </div>
          </div>

          {/* Execution Card */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            {/* Label row */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#8A8D9F]">Кількість виконань</p>
            </div>

            {/* Execution Input */}
            <div
              className="flex items-center justify-between rounded-full px-4 h-[44px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                type="number"
                value={executions}
                onChange={(e) => setExecutions(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-white/20 w-[120px] focus:outline-none font-bold"
              />
              <div className="flex items-center gap-3">
                <div className="flex flex-col justify-center h-full">
                  <button onClick={() => handleExecStep(1)} className="text-[#8A8D9F] hover:text-white p-0.5"><ChevronUp size={14} /></button>
                  <button onClick={() => handleExecStep(-1)} className="text-[#8A8D9F] hover:text-white p-0.5"><ChevronDown size={14} /></button>
                </div>
              </div>
            </div>

            {/* Quick Pills */}
            <div className="flex items-center justify-between gap-2 mt-1">
              {QUICK_AMOUNTS.map((val) => (
                <button
                  key={val}
                  onClick={() => setExecutions(String(val))}
                  className="flex-1 h-[32px] rounded-full text-xs font-semibold transition-all hover:bg-white/10"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {val}
                </button>
              ))}
              <button
                className="flex-1 h-[32px] rounded-full text-xs font-semibold transition-all hover:bg-white/10"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                Макс
              </button>
            </div>

            {/* Information Banner */}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5"
              style={{ background: 'rgba(255,192,0,0.08)', border: '1px solid rgba(255,192,0,0.1)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' />
              <p className="text-[11px] text-[#EAB308]">Мінімум 100 виконань. Чим більше - тим швидше завдання буде виконане</p>
            </div>
          </div>

          {/* Subtotal Calculation */}
          <div className="px-1 flex flex-col gap-2 mt-1">
            <div className="flex items-center justify-between text-xs font-semibold text-white">
              <span className="text-[#8A8D9F]">{priceNum} × {execNum}</span>
              <span>{subtotal.toLocaleString()} 🗲</span>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#87ADF0]">
              <span>Комісія 15%</span>
              <span>+{commission.toLocaleString()} 🗲</span>
            </div>
            <div className="border-t border-dashed border-white/10 my-1"></div>
            <div className="flex items-center justify-between text-sm font-bold text-white">
              <span>Разом</span>
              <span>{total.toLocaleString()} G</span>
            </div>

            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2 mt-1"
              style={{ background: 'rgba(255,192,0,0.08)', border: '1px solid rgba(255,192,0,0.06)' }}
            >
              <p className="text-[11px] text-[#FFF0C4]">Комісія 15% при оплаті GRAM. Донат від 50 зірок вимикає комісію на 24г.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 mt-1">
            <button
              onClick={() => navigate('/channel-task-success', { state: { ...location.state, price: priceNum, executions: execNum, total } })}
              className="w-full h-[44px] rounded-full font-bold text-sm flex items-center justify-center transition-all cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)',
                color: '#0B0E21',
                boxShadow: '0 4px 16px rgba(135,173,240,0.3)',
              }}
            >
              {total.toLocaleString()} G
            </button>

            <button
              onClick={() => navigate('/channel-task-success', { state: { ...location.state, price: priceNum, executions: execNum, total, payWithStars: true } })}
              className="w-full h-[44px] rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              style={{
                background: 'linear-gradient(128.85deg, rgba(255, 192, 0, 0.2) 0%, rgba(255, 192, 0, 0.04) 53.26%, rgba(255, 192, 0, 0.2) 100%)',
                border: '1px solid rgba(255,192,0,0.3)',
                color: '#FFC000',
              }}
            >
              <img src='/assets/images/svg/yellow-star.svg' alt='yellow-star' className='w-5' />
              5 Stars (Без комісії)
            </button>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ChannelTaskPricePage;
