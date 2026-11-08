import { useState } from 'react';
import { TopicContent } from '../types';
import { ArrowLeft, ArrowRight, BookOpen, AlertCircle, HelpCircle, CheckCircle, Flame, Check } from 'lucide-react';

interface ModuleSlidesProps {
  topic: TopicContent;
  onBack: () => void;
  onCompleteModule: () => void;
}

export function ModuleSlides({ topic, onBack, onCompleteModule }: ModuleSlidesProps) {
  const [slideIndex, setSlideIndex] = useState(0); // 0 = Intro/Overview, 1 = Symptoms (Identification), 2 = First Aid

  const slidesCount = 3;

  const nextSlide = () => {
    if (slideIndex < slidesCount - 1) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50" id="module-slides-container">
      {/* Header Info */}
      <div className="bg-white px-4 py-3 border-b border-slate-100 flex items-center justify-between shadow-xs sticky top-0 z-20">
        <button
          onClick={onBack}
          className="p-1 px-2.5 bg-slate-100 rounded-lg hover:bg-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1 transition"
          id="btn-module-slide-back"
        >
          <ArrowLeft className="w-4 h-4" /> Exit
        </button>
        <div className="text-center">
          <span className="text-[10px] font-extrabold text-teal-600 uppercase tracking-widest block">Active Module</span>
          <span className="text-xs font-extrabold text-slate-800 line-clamp-1">{topic.title}</span>
        </div>
        <div className="text-xs font-bold text-slate-400">
          Slide {slideIndex + 1} / {slidesCount}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-slate-100 h-1.5 w-full overflow-hidden shrink-0">
        <div
          className="bg-teal-500 h-full transition-all duration-300"
          style={{ width: `${((slideIndex + 1) / slidesCount) * 100}%` }}
        />
      </div>

      {/* Slide Body */}
      <div className="flex-1 overflow-y-auto p-5 pb-8 flex flex-col">
        {slideIndex === 0 && (
          <div className="flex flex-col gap-5 animate-fade-in">
            {/* Slide 1: Welcome & Overview Card */}
            <div className="p-5 bg-white border border-slate-100 rounded-2xl shadow-xs text-center flex flex-col items-center justify-center gap-4 mt-2">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shadow-inner text-3xl">
                📖
              </div>
              <div>
                <h4 className="font-extrabold text-lg text-slate-800">Welcome to training!</h4>
                <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed">
                  In this module, you will learn the exact physical indicators of <span className="font-bold text-slate-700">{topic.title}</span> and the immediate first-aid actions required to save a human life.
                </p>
              </div>
            </div>

            {/* Quick Summary / Statistics warning */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 flex flex-col gap-3">
              <h5 className="font-extrabold text-xs text-teal-800 flex items-center gap-1.5 uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-teal-600" /> Critical Academy Facts
              </h5>
              <ul className="text-xs text-teal-700 flex flex-col gap-2 leading-relaxed">
                {topic.identification.notes?.map((n, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="mt-1 font-bold">•</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Graphic Illustration */}
            <div className="border border-slate-100 bg-white p-4 rounded-2xl text-center shadow-xs flex flex-col items-center gap-3">
              <p className="text-[10px] uppercase font-bold text-slate-400">Survival Goal Visualization</p>
              <div className="w-32 h-32 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center relative shadow-inner">
                {/* Visual circle animation represent active guard */}
                <div className="absolute inset-2 bg-teal-100/50 rounded-full animate-pulse" />
                <div className="absolute inset-5 bg-teal-200/50 rounded-full" />
                <span className="text-4xl text-teal-700 z-10 select-none">🛡️</span>
              </div>
              <p className="text-xs font-bold text-teal-800">Prevent further damage. Triage with precision.</p>
            </div>
          </div>
        )}

        {slideIndex === 1 && (
          <div className="flex flex-col gap-5 animate-fade-in">
            {/* Slide 2: Symptoms & Identification using Mnemonics */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-xs">
              <span className="text-[9px] font-extrabold text-teal-500 uppercase tracking-widest block mb-1">
                Clinical Diagnosis
              </span>
              <h4 className="font-black text-lg text-slate-800 leading-snug">
                {topic.identification.title}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 mb-4">
                {topic.identification.subtitle}
              </p>

              {/* Interactive mnemonic block */}
              <div className="flex flex-col gap-3.5">
                {topic.identification.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex items-start gap-3 transition-colors ${
                      item.highlight 
                        ? 'bg-rose-50/50 border-rose-100/70' 
                        : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    {/* Visual Aid Color badge */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shrink-0 select-none ${
                      item.highlight 
                        ? 'bg-rose-600 text-white shadow-xs' 
                        : 'bg-teal-600 text-white'
                    }`}>
                      {item.label[0]}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h5 className={`font-extrabold text-xs ${item.highlight ? 'text-rose-800' : 'text-slate-700'}`}>
                        {item.label}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {slideIndex === 2 && (
          <div className="flex flex-col gap-5 animate-fade-in">
            {/* Slide 3: First Aid Actions Step by Step */}
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-xs">
              <span className="text-[9px] font-extrabold text-teal-500 uppercase tracking-widest block mb-1">
                Emergency Care System
              </span>
              <h4 className="font-black text-lg text-slate-800 leading-snug">
                {topic.firstAid.title}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 mb-4">
                {topic.firstAid.subtitle}
              </p>

              {/* Step checklist */}
              <div className="flex flex-col gap-3">
                {topic.firstAid.items.map((step, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border flex gap-3 transition-colors ${
                      step.highlight 
                        ? 'bg-teal-50 border-teal-200/50' 
                        : 'bg-slate-50 border-slate-100'
                    }`}
                  >
                    <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 select-none shadow-xs text-teal-800 border border-slate-100">
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-extrabold text-xs text-slate-800 leading-tight">
                        {step.label}
                      </h5>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key points. These mix warnings ("DO NOT...") with correct advice
                ("Continue compressions..."), so use a neutral bullet, not ❌ */}
            {topic.firstAid.notes && topic.firstAid.notes.length > 0 && (
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex flex-col gap-3">
                <h5 className="font-extrabold text-xs text-amber-800 flex items-center gap-1.5 uppercase tracking-wide">
                  ⚠️ Important Points
                </h5>
                <ul className="text-xs text-amber-900 flex flex-col gap-2.5 leading-relaxed font-sans">
                  {topic.firstAid.notes.map((note, key) => (
                    <li key={key} className="flex gap-2 items-start text-xs font-medium">
                      <span className="text-amber-600 font-bold shrink-0">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Slide Navigation Footer Bar */}
      <div className="bg-white p-4 border-t border-slate-100 shrink-0 flex items-center justify-between gap-4 sticky bottom-0 z-20">
        <button
          onClick={prevSlide}
          disabled={slideIndex === 0}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
            slideIndex === 0
              ? 'bg-slate-100 text-slate-300 cursor-not-allowed border-transparent'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
          id="btn-slide-prev"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        {slideIndex < slidesCount - 1 ? (
          <button
            onClick={nextSlide}
            className="flex-1 py-2.5 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            id="btn-slide-next"
          >
            Continue <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onCompleteModule}
            className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 animate-pulse"
            id="btn-slide-finalize"
          >
            Mark Read & Unlock Post-Test <Check className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
