import React, { useState } from 'react';
import { ChevronLeft, Check, ChevronUp, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const QUICK_AMOUNTS = [10, 50, 100, 500];
const MIN_PRICE = 750;
const MIN_EXECUTIONS = 100;
const COMMISSION_RATE = 0.15;
const TOP30_RECOMMENDED = 1270;

const TaskPricePage = () => {
  const navigate = useNavigate();
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
      <div className="px-5 pt-7 pb-8 flex flex-col font-sans text-white relative min-h-screen">

        {/* Header + Icon - same as step 2 */}
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
          Ціна та кількість
        </h1>

        {/* Step Progress */}
        <div className="flex items-center justify-center gap-[5px] mb-6 w-full max-w-[200px] mx-auto">
          {/* Step 1 - done */}
          <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center shrink-0">
            <Check size={11} className="text-white stroke-[3]" />
          </div>
          <div className="h-[2px] flex-1 rounded-full bg-[#87ADF0]/60" />
          {/* Step 2 - done */}
          <div className="w-5 h-5 rounded-full bg-[#87ADF0] flex items-center justify-center shrink-0">
            <Check size={11} className="text-white stroke-[3]" />
          </div>
          <div className="h-[2px] flex-1 rounded-full bg-[#87ADF0]/40" />
          {/* Step 3 - active */}
          <div
            className="w-5 h-5 rounded-full border border-[#87ADF0] flex items-center justify-center text-xs font-bold text-[#87ADF0] shrink-0"
            style={{ boxShadow: '0 0 8px rgba(135,173,240,0.3)' }}
          >
            3
          </div>
        </div>

        <div className="flex flex-col gap-3">

          {/* Price Card */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            {/* Label row */}
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#8A8D9F]">Ціна за одне виконання</p>
              <p className="text-xs text-white">мін. {MIN_PRICE} ₵</p>
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
                className="bg-transparent text-white text-sm font-medium w-full focus:outline-none"
                min="0"
              />
              <div className="flex flex-col ml-2">
                <button
                  onClick={() => handlePriceStep(1)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  onClick={() => handlePriceStep(-1)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* Error */}
            {isPriceError && (
              <div
                className="flex items-center gap-2 rounded-[12px] px-4 py-2.5 h-10 bg-[#FF4973]/10"
              >
                <img src='/assets/images/svg/xmark-octagon.svg' alt='xmark-octagon' className='w-5' />
                <p className="text-[11px] text-[#FF7070] font-medium">Мінімум {MIN_PRICE} ₵</p>
              </div>
            )}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5 mt-1"
              style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(255,192,0,5%)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' />
              <p className="text-[11px] text-[#FFF0C4]">Для розміщення завдання у топ-30 рекомендована ціна {TOP30_RECOMMENDED} G</p>
            </div>
          </div>

          {/* Executions Card */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-2"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            <p className="text-xs text-[#8A8D9F]">Кількість виконань</p>

            {/* Executions Input */}
            <div
              className="flex items-center justify-between rounded-full px-4 h-[40px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <input
                type="number"
                value={executions}
                onChange={(e) => setExecutions(e.target.value)}
                className="bg-transparent text-white text-sm font-medium w-full focus:outline-none"
                min="0"
              />
              <div className="flex flex-col gap-0.5 ml-2">
                <button
                  onClick={() => handleExecStep(1)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronUp size={14} />
                </button>
                <button
                  onClick={() => handleExecStep(-1)}
                  className="text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>

            {/* Quick amount pills */}
            <div className="flex items-center gap-2">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setExecutions(String(amt))}
                  className="h-8 px-4 rounded-full text-xs font-medium transition-all cursor-pointer"
                  style={{
                    background: parseInt(executions) === amt
                      ? 'rgba(135,173,240,0.15)'
                      : 'rgba(255,255,255,0.06)',
                    border: `1px solid ${parseInt(executions) === amt ? 'rgba(135,173,240,0.35)' : 'rgba(255,255,255,0.08)'}`,
                    color: parseInt(executions) === amt ? '#87ADF0' : 'rgba(255,255,255,0.6)',
                  }}
                >
                  {amt}
                </button>
              ))}
              <button
                onClick={() => setExecutions('10000')}
                className="h-8 px-4 rounded-full text-xs font-medium transition-all cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'rgba(255,255,255,0.6)',
                }}
              >
                Макс
              </button>
            </div>

            {/* Min executions tip */}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5 mt-1"
              style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(255,192,0,5%)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' />
              <p className="text-[11px] text-[#FFF0C4]">Мінімум {MIN_EXECUTIONS} виконань. Чим більше - тим швидше завдання буде виконане</p>
            </div>
          </div>

          {/* Summary Card */}
          <div
            className="gradient-border-card rounded-[20px] p-4 flex flex-col gap-2"
            style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)' }}
          >
            {/* Subtotal row */}
            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-[#8A8D9F]">
                {priceNum} × {execNum}
              </span>
              <span className="text-xs text-white">
                {subtotal.toLocaleString()} ₵
              </span>
            </div>

            {/* Commission row */}
            <div className="flex items-center justify-between py-1">
              <span className="text-xs text-[#87ADF0]">Комісія 15%</span>
              <span className="text-xs text-[#87ADF0]">+{commission.toLocaleString()} ₵</span>
            </div>

            {/* Divider */}
            <div className="border-t border-white/[0.06] my-1" />

            {/* Total row */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Разом</span>
              <span className="text-sm font-bold text-white">{total.toLocaleString()} G</span>
            </div>

            {/* Commission tip */}
            <div
              className="flex items-center gap-2 rounded-full px-4 py-2.5 mt-1"
              style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(255,192,0,5%)' }}
            >
              <img src='/assets/images/svg/lightbulb-simple.svg' alt='lightbulb-simple' />
              <p className="text-[11px] text-[#FFF0C4]">Комісія 15% при оплаті GRAM. Донат від 50 зірок вимикає комісію на 24г.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 mt-1">
            {/* Pay with GRAM */}
            <button
              onClick={() => navigate('/task-success')}
              className="w-full h-[44px] rounded-full font-bold text-sm flex items-center justify-center transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, #87ADF0 0%, #6B94E8 100%)',
                color: '#0B0E21',
                boxShadow: '0 4px 16px rgba(135,173,240,0.3)',
              }}
            >
              {total.toLocaleString()} G
            </button>

            {/* Pay with Stars */}
            <button
              onClick={() => navigate('/task-success')}
              className="w-full h-[44px] rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
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

export default TaskPricePage;
