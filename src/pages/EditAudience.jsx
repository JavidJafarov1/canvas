import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, Lightbulb, Check } from 'lucide-react';
import Layout from '../components/Layout';

const LANGUAGES = [
  { code: 'en', label: 'English', flagSrc: 'https://flagcdn.com/w80/gb.png' },
  { code: 'uk', label: 'Українська', flagSrc: 'https://flagcdn.com/w80/ua.png' },
  { code: 'ru', label: 'Русский', flagSrc: 'https://flagcdn.com/w80/ru.png' },
  { code: 'ar', label: 'العربية', flagSrc: 'https://flagcdn.com/w80/sa.png' },
  { code: 'fa', label: 'فарсі', flagSrc: 'https://flagcdn.com/w80/ir.png' },
  { code: 'es', label: 'Español', flagSrc: 'https://flagcdn.com/w80/es.png' },
  { code: 'id', label: 'Indonesia', flagSrc: 'https://flagcdn.com/w80/id.png' },
  { code: 'hi', label: 'Hindi', flagSrc: 'https://flagcdn.com/w80/in.png' },
  { code: 'uz', label: "O'zbekcha", flagSrc: 'https://flagcdn.com/w80/uz.png' },
  { code: 'tr', label: 'Türkçe', flagSrc: 'https://flagcdn.com/w80/tr.png' },
  { code: 'kk', label: 'Казакша', flagSrc: 'https://flagcdn.com/w80/kz.png' },
  { code: 'fr', label: 'Français', flagSrc: 'https://flagcdn.com/w80/fr.png' },
  { code: 'de', label: 'Germani', flagSrc: 'https://flagcdn.com/w80/de.png' },
  { code: 'pt', label: 'Português', flagSrc: 'https://flagcdn.com/w80/pt.png' },
];

const EditAudience = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve state parameters if navigated from TaskDetail
  const taskState = location.state || {};

  // Initially selected languages match the screenshot (English, Казахша, العربية)
  const [selectedLangs, setSelectedLangs] = useState(['en', 'kk', 'ar']);

  const toggleLang = (code) => {
    setSelectedLangs((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const handleAllowAll = () => {
    setSelectedLangs([]);
    alert('Дозволено всім аудиторіям!');
    navigate(-1);
  };

  const handleSave = () => {
    alert(`Збережено вибір: ${selectedLangs.length} мов(и).`);
    navigate(-1);
  };

  // Get labels for chosen languages to show in preview
  const getSelectedLangsText = () => {
    if (selectedLangs.length === 0) return 'Усім користувачам';
    const names = selectedLangs.map(code => {
      const lang = LANGUAGES.find(l => l.code === code);
      return lang ? lang.label : '';
    });
    const joined = names.join(', ');
    return joined.length > 25 ? joined.substring(0, 25) + '...' : joined;
  };

  return (
    <Layout showNavbar={false}>
      <div className="flex flex-col min-h-screen text-white pb-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-b-[#232637] p-[22px_15px] mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="text-[#545664] hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <h1 className="text-base font-medium text-white flex-1 text-center mr-5">
            Аудиторія
          </h1>
        </div>

        {/* Content Container */}
        <div className="px-5 flex-1 flex flex-col gap-4">
          
          {/* Selected Preview Card */}
          <div 
            className="gradient-border-card rounded-[12px] p-4 flex items-center justify-between"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <span className="text-[12px] text-[#ffffff]/40 font-medium">Вибрана аудиторія:</span>
            <span className="text-[12px] font-medium text-[#ffffff]">{getSelectedLangsText()}</span>
          </div>

          {/* Main Card (Form Grid) */}
          <div 
            className="gradient-border-card rounded-[12px] p-4 flex flex-col gap-5"
            style={{ background: 'linear-gradient(86.96deg, rgba(255, 255, 255, 0.055) 2.67%, rgba(255, 255, 255, 0.077) 98%)' }}
          >
            <div>
              <h3 className="text-[12px] font-medium  text-white leading-snug">
                Оберіть одну або декілька мов, натискаючи на кнопки нижче:
              </h3>
            </div>

            {/* Languages Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {LANGUAGES.map((lang) => {
                const isSelected = selectedLangs.includes(lang.code);
                return (
                  <button
                    key={lang.code}
                    onClick={() => toggleLang(lang.code)}
                    className={`flex items-center justify-between rounded-full p-[10px_14px] transition-all cursor-pointer gradient-border-card ${
                      isSelected 
                        ? 'border-[#87ADF0] bg-[#87ADF0]/10' 
                        : 'bg-[#ffffff0d]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={lang.flagSrc} 
                        alt={lang.label} 
                        className="w-[20px] h-[20px] object-cover rounded-sm" 
                      />
                      <span className="text-[12px] font-medium text-white">{lang.label}</span>
                    </div>

                    {/* Checkbox indicator */}
                    <div 
                      className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'border-[#87ADF0] bg-[#87ADF0] text-[#ffffff]' 
                          : 'border-white/20'
                      }`}
                    >
                      {isSelected && <Check size={11} strokeWidth={4} />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Info Banner */}
            <div 
              className="flex items-center gap-2 p-2.5 rounded-full"
              style={{ 
                background: 'rgba(255, 192, 0, 0.1)', 
              }}
            >
              <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                <img src="/assets/images/svg/lightbulb-simple.svg" alt="Lightbulb" />
              </div>
              <p className="text-[12px] font-medium text-[#FFF0C4]">
                +100 GRAM до мін. ціни за 1 виконання при застосуванні фільтра
              </p>
            </div>

          </div>

          {/* Sticky Bottom Actions */}
          <div className="mt-auto flex flex-col gap-3 pt-4">
            <button
              onClick={handleAllowAll}
              className="w-full h-[50px] gradient-border-card text-[#87ADF0] font-medium text-[14px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all"
              style={{
                background: 'linear-gradient(128.85deg, rgba(135, 173, 240, 0.2) 0%, rgba(135, 173, 240, 0.04) 53.26%, rgba(135, 173, 240, 0.2) 100%)'
              }}
            >
              Дозволити усім
            </button>
            
            <button
              onClick={handleSave}
              className="w-full h-[50px] text-[#0B0E21] font-medium text-[14px] rounded-full flex items-center justify-center cursor-pointer active:scale-95 transition-all bg-[#87ADF0]"
            >
              Зберегти ({selectedLangs.length} мов)
            </button>
          </div>

        </div>

      </div>
    </Layout>
  );
};

export default EditAudience;
