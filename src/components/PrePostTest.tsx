import { useState } from 'react';
import { Question } from '../types';
import { ArrowLeft, CheckCircle, XCircle, AlertCircle, Sparkles, ChevronRight, Award, HelpCircle } from 'lucide-react';

interface PrePostTestProps {
  type: 'pre' | 'post';
  questions: Question[];
  onBack: () => void;
  onComplete: (score: number) => void;
  topicTitle: string;
}

export function PrePostTest({ type, questions, onBack, onComplete, topicTitle }: PrePostTestProps) {
  // Disclaimer consent stage
  const [consentAccepted, setConsentAccepted] = useState(false);
  
  // Quiz states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({}); // question index -> selected option index
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionIdx: number) => {
    if (isAnswered) return;
    
    const newSelected = { ...selectedAnswers, [currentIndex]: optionIdx };
    setSelectedAnswers(newSelected);
    setIsAnswered(true);

    if (optionIdx === currentQuestion.correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleFinish = () => {
    onComplete(score);
  };

  // Welcome / Disclaimer page
  if (!consentAccepted) {
    return (
      <div className="flex-1 p-6 flex flex-col justify-between bg-slate-50" id="test-disclaimer">
        {/* Top bar info */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-1 px-2.5 bg-slate-100 rounded-lg hover:bg-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1 transition"
          >
            <ArrowLeft className="w-4 h-4" /> Exit
          </button>
          <span className="text-xs font-bold text-slate-400 capitalize">{type}-Test Triage</span>
        </div>

        {/* Big visual banner */}
        <div className="flex-1 flex flex-col items-center justify-center gap-5 text-center my-6">
          <div className="w-20 h-20 bg-teal-50 border-2 border-teal-100 rounded-3xl flex items-center justify-center text-4xl shadow-md select-none">
            {type === 'pre' ? '📋' : '🎓'}
          </div>

          <div className="max-w-xs">
            <span className="bg-teal-100 text-teal-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              {type === 'pre' ? 'Diagnostic Benchmark' : 'Post-Test Assessment'}
            </span>
            <h3 className="font-extrabold text-xl text-slate-800 mt-3 leading-snug">
              {type === 'pre' ? 'Pre-Test' : 'Post-Test'}: {topicTitle}
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Answer <span className="font-bold text-teal-700">{questions.length} multiple choice questions</span> to check what you know about this topic.
            </p>
          </div>

          {/* Core Disclaimer requested by user */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4.5 max-w-sm text-left flex gap-3 shadow-xs">
            <AlertCircle className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
            <div className="flex-1">
              <h5 className="font-black text-indigo-900 text-xs uppercase tracking-wider mb-1">Research Use Disclaimer</h5>
              <p className="text-[11px] text-indigo-700 leading-relaxed font-medium">
                Please note that results and scores of this test can be anonymously collected and utilized for clinical and academic research purposes in order to improve emergency first aid literacy in India.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 shrink-0">
          <button
            onClick={() => setConsentAccepted(true)}
            className="w-full py-3 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            id="btn-accept-consent"
          >
            I Accept & Begin Test <ChevronRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={onBack}
            className="w-full py-2.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 font-extrabold text-xs rounded-xl transition"
            id="btn-decline-consent"
          >
            Decline & Go Back
          </button>
        </div>
      </div>
    );
  }

  // Quiz End / Scorecard displays
  if (quizFinished) {
    const passingScore = Math.ceil(questions.length * 0.8);
    const passed = score >= passingScore;
    
    return (
      <div className="flex-1 p-6 flex flex-col justify-between bg-slate-50" id="test-results">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-400 capitalize">{type}-Test Completed</span>
        </div>

        {/* Graduation / Evaluation Circle Card */}
        <div className="flex-1 flex flex-col items-center justify-center py-6 gap-5">
          <div className="relative">
            {/* Round dynamic ring indicator */}
            <svg className="w-32 h-32" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" stroke="#f1f5f9" strokeWidth="8" fill="none" />
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke={passed ? '#10b981' : '#14b8a6'}
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 44}`}
                strokeDashoffset={`${2 * Math.PI * 44 * (1 - score / (questions.length || 1))}`}
                strokeLinecap="round"
                className="transition-all duration-1000 transform -rotate-90 origin-center"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-slate-800">{score}</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Score / {questions.length}</span>
            </div>
          </div>

          <div className="text-center max-w-xs">
            <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
              passed ? 'bg-emerald-100 text-emerald-800' : 'bg-teal-100 text-teal-800'
            }`}>
              {score === questions.length ? '🥇 Master Clinician' : score >= passingScore ? '🥈 Lifesaver Master' : '🥉 Apprentice Trainee'}
            </span>
            
            <h3 className="font-extrabold text-lg text-slate-800 mt-3 leading-tight">
              {score === questions.length
                ? 'Absolute Perfect Triage!'
                : score >= passingScore
                ? 'Great Job Officer!'
                : 'Nice Try Academy Cadet!'}
            </h3>
            
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              {type === 'pre'
                ? 'Your pre-test benchmark records your baseline. Read the module next to learn diagnostic details.'
                : 'Your post-test indicates your mastery. Feel free to retry anytime to hit a perfect score!'}
            </p>
          </div>

          {/* Reward Badges visual aid indicator */}
          <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-xs w-full max-w-sm flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center select-none text-xl ${
              passed ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400'
            }`}>
              {passed ? '🏆' : '📁'}
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="font-extrabold text-xs text-slate-800">
                {type === 'pre' ? 'Diagnostic Pathway Cleared' : 'Post-Test Mastery Record'}
              </h5>
              <p className="text-[11px] text-slate-400 truncate">
                {type === 'pre' ? 'Module unlocked successfully!' : `Mastery Record for ${topicTitle}`}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom confirmation action */}
        <button
          onClick={handleFinish}
          className="w-full py-3 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
          id="btn-return-from-results"
        >
          {type === 'pre' ? 'Unlock Learning Module' : 'Lock in Progress & Finish'}
        </button>
      </div>
    );
  }

  // Active question state values
  const userSelectedOption = selectedAnswers[currentIndex];
  const isCorrect = userSelectedOption === currentQuestion.correctAnswerIndex;

  return (
    <div className="flex-1 flex flex-col bg-slate-50 justify-between" id="active-test-container">
      {/* Top Header progress section */}
      <div className="bg-white px-4 py-3 border-b border-slate-100 flex items-center justify-between gap-3 sticky top-0 z-20">
        <button
          onClick={onBack}
          className="p-1 px-2.5 bg-slate-100 rounded-lg hover:bg-slate-200 text-slate-600 font-bold text-xs flex items-center gap-1 transition"
          id="btn-test-exit"
        >
          <ArrowLeft className="w-4 h-4" /> Quit
        </button>
        <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wide truncate max-w-[150px]">
          {type === 'pre' ? 'Pre-Test' : 'Post-Test'}
        </span>
        <span className="text-xs font-bold text-slate-400">
          Q {currentIndex + 1} / {questions.length}
        </span>
      </div>

      {/* Dynamic Line Progress Indicator bar */}
      <div className="bg-slate-100 h-1.5 w-full shrink-0">
        <div
          className="bg-teal-500 h-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Main MCQ Question and details block */}
      <div className="flex-1 overflow-y-auto p-5 pb-8 flex flex-col">
        {/* MCQ Question text bubble */}
        <div className="bg-white border border-slate-100 p-4.5 rounded-2xl shadow-xs mb-5 relative overflow-hidden flex items-start gap-3">
          {/* Question Icon */}
          <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold shrink-0 text-sm select-none">
            ?
          </div>
          <div className="flex-1">
            <span className="text-[9px] font-extrabold text-teal-500 tracking-wider uppercase block mb-0.5">Clinical Case Scenario</span>
            <p className="font-extrabold text-sm text-slate-800 leading-snug">{currentQuestion.question}</p>
          </div>
        </div>

        {/* Interactive MCQ Option List */}
        <div className="flex flex-col gap-2.5">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = userSelectedOption === idx;
            const isCorrectOption = idx === currentQuestion.correctAnswerIndex;

            // Decide border and background styling based on state
            let optionStyle = 'bg-white border-slate-100 hover:border-teal-300 hover:bg-teal-50/20';
            let checkBadge = null;

            if (isAnswered) {
              if (isCorrectOption) {
                optionStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                checkBadge = <CheckCircle className="w-4.5 h-4.5 text-emerald-600 shrink-0" />;
              } else if (isSelected) {
                optionStyle = 'bg-rose-50 border-rose-300 text-rose-900 font-bold';
                checkBadge = <XCircle className="w-4.5 h-4.5 text-rose-600 shrink-0" />;
              } else {
                optionStyle = 'bg-white border-slate-100 opacity-60';
              }
            } else if (isSelected) {
              optionStyle = 'bg-teal-50 border-teal-500 text-teal-900 font-bold scale-[1.01]';
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={isAnswered}
                className={`p-3.5 rounded-xl border text-left text-xs leading-relaxed transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                id={`mcq-option-button-${idx}`}
              >
                <div className="flex items-start gap-2.5">
                  {/* Option letter label */}
                  <span className={`w-5.5 h-5.5 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0 select-none ${
                    isSelected ? 'bg-teal-600 text-white shadow-xs' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>
                {checkBadge}
              </button>
            );
          })}
        </div>
      </div>

      {/* Instant review check pop-up and Explanation drawers */}
      {isAnswered && (
        <div className={`p-4 border-t border-slate-100 shrink-0 ${
          isCorrect ? 'bg-emerald-50' : 'bg-rose-50'
        } animate-slide-up`}>
          <div className="flex gap-2.5 items-start">
            <div className="mt-0.5">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
              )}
            </div>
            <div className="flex-1">
              <h5 className={`font-black text-xs uppercase tracking-wider ${
                isCorrect ? 'text-emerald-800' : 'text-rose-800'
              }`}>
                {isCorrect ? 'Correct Answer! 🎉' : 'Incorrect Response 🔴'}
              </h5>
              
              {!isCorrect && (
                <p className="text-xs text-rose-900 font-bold mt-0.5">
                  Correct Option: {String.fromCharCode(65 + currentQuestion.correctAnswerIndex)}. {currentQuestion.options[currentQuestion.correctAnswerIndex]}
                </p>
              )}
              
              <div className="mt-1.5 p-2 bg-white/75 backdrop-blur-xs rounded-lg border text-[11px] leading-relaxed text-slate-600 border-slate-100 font-sans">
                <span className="font-bold text-slate-700 block mb-0.5">Clinical Explanation:</span>
                {currentQuestion.explanation}
              </div>
            </div>
          </div>

          <button
            onClick={handleNext}
            className={`w-full py-2.5 mt-3 text-white text-xs font-black rounded-xl shadow-xs transition-transform transform active:scale-95 flex items-center justify-center gap-1 ${
              isCorrect ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-rose-600 hover:bg-rose-700'
            }`}
            id="btn-test-continue"
          >
            Continue Triage <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
