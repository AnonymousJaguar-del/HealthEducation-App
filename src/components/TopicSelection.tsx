import { TopicContent, UserProfile } from '../types';
import * as LucideIcons from 'lucide-react';
import { HelpCircle, CheckCircle, Lock, Play, ArrowLeft, ChevronRight, Info, ShieldAlert } from 'lucide-react';

interface TopicSelectionProps {
  topics: TopicContent[];
  profile: UserProfile;
  selectedTopic: TopicContent | null;
  onSelectTopic: (topic: TopicContent | null) => void;
  onStartPreTest: () => void;
  onStartModule: () => void;
  onStartPostTest: () => void;
}

// safe Lucide icon renderer
function TopicIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.Heart className={className} />;
  return <IconComponent className={className} />;
}

export function TopicSelection({
  topics,
  profile,
  selectedTopic,
  onSelectTopic,
  onStartPreTest,
  onStartModule,
  onStartPostTest,
}: TopicSelectionProps) {

  // Fetch the current progress of a specific course topic
  const getTopicProgress = (topicId: string) => {
    return profile.progress[topicId] || {
      topicId,
      preTestCompleted: false,
      moduleCompleted: false,
      postTestCompleted: false,
    };
  };

  // Fallback to the first topic on desktop so that the dual-pane columns are always fully populated!
  const activeTopic = selectedTopic || topics[0];
  const prog = getTopicProgress(activeTopic?.id || topics[0].id);

  // Topics without a pre/post test (Module 10) go straight to the lesson
  const hasTests = activeTopic.questions.length > 0;
  const moduleUnlocked = !hasTests || prog.preTestCompleted;

  // Completed modules count
  const completedCount = Object.values(profile.progress).filter(p => p.postTestCompleted).length;

  return (
    <div className="h-full flex flex-col font-sans select-none" id="courses-view-wrapper">
      
      {/* ────────────────────────────────────────────────────────────────────────
          DESKTOP WORKSPACE LAYOUT: Elegant Dual-Pane Columns (Grid)
          ──────────────────────────────────────────────────────────────────────── */}
      <div className="hidden sm:grid grid-cols-12 gap-8 h-full p-6 md:p-8" id="desktop-dual-pane-layout">
        
        {/* LEFT COLUMN: Course Module Selector Card Selection */}
        <section className="col-span-12 lg:col-span-5 flex flex-col gap-4 overflow-hidden h-full">
          <div className="text-left shrink-0">
            <h2 className="text-sm font-black text-slate-450 uppercase tracking-widest block mb-1">Select emergency Topic</h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">Choose an academy track to begin your clinical progress checkpoints.</p>
          </div>

          <div className="space-y-3 overflow-y-auto pr-1 flex-grow pb-12" id="desktop-modules-scroll-container">
            {topics.map((topic) => {
              const topicProg = getTopicProgress(topic.id);
              const isActive = activeTopic.id === topic.id;
              
              // Calculate status tags
              let statusLabel = 'Start Pathway';
              let progressPercentage = 0;
              if (topicProg.postTestCompleted) {
                statusLabel = 'Completed! 🏆';
                progressPercentage = 100;
              } else if (topicProg.moduleCompleted) {
                statusLabel = 'Post-Test Unlocked';
                progressPercentage = 66;
              } else if (topicProg.preTestCompleted) {
                statusLabel = 'Module Active';
                progressPercentage = 33;
              }

              return (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic)}
                  className={`relative p-4 rounded-2xl cursor-pointer text-left transition-all duration-200 select-none group flex items-start gap-3.5 border ${
                    isActive
                      ? 'bg-white border-teal-500 border-2 shadow-md hover:shadow-lg'
                      : 'bg-white border-slate-200 hover:border-teal-300 hover:shadow shadow-sm'
                  }`}
                  id={`desktop-card-${topic.id}`}
                >
                  {/* Dynamic side accent */}
                  {isActive && <div className="absolute top-0 bottom-0 left-0 w-1 bg-teal-500 rounded-l-2xl" />}

                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 transition-transform group-hover:scale-105 shadow-sm ${
                    isActive ? 'bg-teal-50 text-teal-600' : 'bg-slate-50 text-slate-500'
                  }`}>
                    <TopicIcon name={topic.iconName} className="w-5.5 h-5.5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-extrabold text-slate-800 text-sm leading-tight mb-1 group-hover:text-teal-700 transition">
                      {topic.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                      {topic.shortDescription}
                    </p>

                    {/* Compact progress status microbar */}
                    <div className="flex items-center gap-2 mt-2.5">
                      <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 rounded-full ${
                            progressPercentage === 100 ? 'bg-emerald-500' : 'bg-teal-505 bg-teal-500'
                          }`}
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                      <span className={`text-[8.5px] font-black tracking-wider uppercase ${
                        progressPercentage === 100 ? 'text-emerald-600 font-extrabold' : 'text-slate-400'
                      }`}>
                        {statusLabel}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* RIGHT COLUMN: Duolingo Stepper Pathway for Selected Topic */}
        <section className="col-span-12 lg:col-span-7 flex flex-col h-full overflow-hidden">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-xl flex flex-col h-full overflow-y-auto">
            
            {/* Header Area */}
            <div className="flex items-center justify-between mb-8 shrink-0 text-left">
              <div>
                <h2 className="text-xl font-extrabold text-slate-800 leading-none tracking-tight flex items-center gap-2">
                  <TopicIcon name={activeTopic.iconName} className="w-6 h-6 text-teal-600" />
                  {activeTopic.title} Roadmap
                </h2>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mt-1">Clinical learning checkpoints</p>
              </div>
              <span className={`px-3 py-1 text-[10px] font-black rounded-full select-none ${
                prog.postTestCompleted 
                  ? 'bg-emerald-100 text-emerald-800' 
                  : prog.preTestCompleted 
                  ? 'bg-teal-100 text-teal-700' 
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {prog.postTestCompleted ? 'MASTERED 🎓' : prog.preTestCompleted ? 'PHASE 2 ACTIVE' : 'PHASE 1 ACTIVE'}
              </span>
            </div>

            {/* Steps Timeline (Left-aligned as in requested design HTML) */}
            <div className="relative flex flex-col gap-6 text-left flex-grow">
              
              {/* Vertical connecting line */}
              <div className="absolute left-[21px] top-6 bottom-6 w-1 bg-slate-100 rounded-full" />
              
              {/* STEP 1: PRE-TEST */}
              {hasTests && (
              <div className="relative flex items-start gap-5">
                {/* Node circle icon display */}
                {prog.preTestCompleted ? (
                  <div className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 z-10 shadow-md shadow-green-100">
                    <CheckCircle className="w-5.5 h-5.5" />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-teal-600 border-4 border-teal-100 text-white flex items-center justify-center shrink-0 z-10 animate-pulse shadow">
                    <span className="text-xs font-black">1</span>
                  </div>
                )}

                {/* Node detail block panel */}
                <div className={`flex-1 p-5 rounded-2xl border transition-all ${
                  prog.preTestCompleted
                    ? 'bg-green-50/50 border-green-200 opacity-80'
                    : 'bg-white border-teal-600 border-2 shadow-lg'
                }`}>
                  <div className="flex justify-between items-start">
                    <h4 className={`font-black text-sm ${prog.preTestCompleted ? 'text-green-900' : 'text-slate-800'}`}>1. Pre-Test Assessment</h4>
                    {prog.preTestCompleted && (
                      <span className="text-[9px] font-black bg-green-200 text-green-700 px-2 py-0.5 rounded uppercase">
                        Score: {prog.preTestScore || 0}/{activeTopic.questions.length}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-1 leading-snug ${prog.preTestCompleted ? 'text-green-700' : 'text-slate-500'}`}>
                    {activeTopic.questions.length} MCQs to understand your active triage instincts before studying guidelines.
                  </p>
                  
                  {/* Action trigger button */}
                  {!prog.preTestCompleted && (
                    <button
                      onClick={onStartPreTest}
                      className="mt-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black rounded-xl shadow-md transition-all active:scale-95"
                      id="btn-desktop-start-pretest"
                    >
                      TAKE PRE-TEST
                    </button>
                  )}
                  {prog.preTestCompleted && (
                    <button
                      onClick={onStartPreTest}
                      className="mt-3 text-xs font-bold text-green-700 hover:underline inline-flex items-center gap-0.5"
                    >
                      Re-attempt pre-test &rarr;
                    </button>
                  )}
                </div>
              </div>
              )}

              {/* STEP 2: LESSON GUIDELINE SLIDES */}
              <div className="relative flex items-start gap-5">
                {prog.moduleCompleted ? (
                  <div className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 z-10 shadow-md shadow-green-100">
                    <CheckCircle className="w-5.5 h-5.5" />
                  </div>
                ) : moduleUnlocked ? (
                  <div className="w-11 h-11 rounded-full bg-teal-600 border-4 border-teal-100 text-white flex items-center justify-center shrink-0 z-10 shadow">
                    <span className="text-xs font-black">{hasTests ? 2 : 1}</span>
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-slate-150 border border-slate-200 text-slate-400 flex items-center justify-center shrink-0 z-10">
                    <Lock className="w-4.5 h-4.5" />
                  </div>
                )}

                <div className={`flex-grow p-5 rounded-2xl border transition-all ${
                  prog.moduleCompleted
                    ? 'bg-green-50/50 border-green-200 opacity-80'
                    : moduleUnlocked
                    ? 'bg-white border-teal-600 border-2 shadow-lg'
                    : 'bg-slate-50 border-slate-200/80'
                }`}>
                  <h4 className={`font-black text-sm ${
                    prog.moduleCompleted ? 'text-green-900' : moduleUnlocked ? 'text-slate-800' : 'text-slate-400'
                  }`}>{hasTests ? '2. ' : ''}Diagnostic Guidelines Case-Study</h4>
                  <p className={`text-xs mt-1 leading-snug ${
                    prog.moduleCompleted ? 'text-green-700' : moduleUnlocked ? 'text-slate-500' : 'text-slate-450'
                  }`}>
                    Interactive diagnostic mnemonics and clinical warning rules approved by emergency physicians.
                  </p>

                  {moduleUnlocked && !prog.moduleCompleted && (
                    <button
                      onClick={onStartModule}
                      className="mt-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black rounded-xl shadow-md transition-all active:scale-95"
                      id="btn-desktop-start-module"
                    >
                      START LESSON
                    </button>
                  )}
                  {prog.moduleCompleted && (
                    <button
                      onClick={onStartModule}
                      className="mt-3 text-xs font-bold text-green-700 hover:underline inline-flex items-center gap-0.5"
                    >
                      Review training slides &rarr;
                    </button>
                  )}
                  {!moduleUnlocked && (
                    <span className="text-[9.5px] italic text-slate-400 font-bold block mt-3 uppercase tracking-wider">Locked: Complete Pre-Test to unlock</span>
                  )}
                </div>
              </div>

              {/* STEP 3: POST-TEST EVALUATION */}
              {hasTests && (
              <div className="relative flex items-start gap-5">
                {prog.postTestCompleted ? (
                  <div className="w-11 h-11 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 z-10 shadow-md shadow-green-100">
                    <CheckCircle className="w-5.5 h-5.5" />
                  </div>
                ) : prog.moduleCompleted ? (
                  <div className="w-11 h-11 rounded-full bg-teal-600 border-4 border-teal-100 text-white flex items-center justify-center shrink-0 z-10 shadow animate-pulse">
                    <span className="text-xs font-black">3</span>
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-slate-150 border border-slate-200 text-slate-400 flex items-center justify-center shrink-0 z-10">
                    <Lock className="w-4.5 h-4.5" />
                  </div>
                )}

                <div className={`flex-grow p-5 rounded-2xl border transition-all ${
                  prog.postTestCompleted
                    ? 'bg-green-50/50 border-green-200 opacity-80'
                    : prog.moduleCompleted
                    ? 'bg-white border-teal-600 border-2 shadow-lg'
                    : 'bg-slate-50 border-slate-200/80'
                }`}>
                  <div className="flex justify-between items-start">
                    <h4 className={`font-black text-sm ${
                      prog.postTestCompleted ? 'text-green-900' : prog.moduleCompleted ? 'text-slate-800' : 'text-slate-400'
                    }`}>3. Post-Test Evaluation</h4>
                    {prog.postTestCompleted && (
                      <span className="text-[9px] font-black bg-green-200 text-green-700 px-2 py-0.5 rounded uppercase">
                        Mastery: {prog.postTestScore || 0}/{activeTopic.questions.length}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-1 leading-snug ${
                    prog.postTestCompleted ? 'text-green-700' : prog.moduleCompleted ? 'text-slate-500' : 'text-slate-450'
                  }`}>
                    Demonstrate 80%+ response accuracy to master this learning track!
                  </p>

                  {prog.moduleCompleted && !prog.postTestCompleted && (
                    <button
                      onClick={onStartPostTest}
                      className="mt-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black rounded-xl shadow-md transition-all active:scale-95"
                      id="btn-desktop-start-posttest"
                    >
                      TAKE POST-TEST
                    </button>
                  )}
                  {prog.postTestCompleted && (
                    <button
                      onClick={onStartPostTest}
                      className="mt-4 px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-black rounded-xl shadow-md transition-all active:scale-95"
                      id="btn-desktop-retry-posttest"
                    >
                      RETRY POST-TEST
                    </button>
                  )}
                  {!prog.moduleCompleted && (
                    <span className="text-[9.5px] italic text-slate-400 font-bold block mt-3 uppercase tracking-wider">Locked: Complete Lesson to unlock</span>
                  )}
                </div>
              </div>
              )}

            </div>

            {/* Bottom Research disclaimer widget */}
            <div className="mt-8 pt-4 border-t border-slate-100 shrink-0 select-none">
              <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-start gap-3 text-left">
                <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed text-amber-800">
                  <span className="font-bold">Important Academic Disclaimer:</span> Please be advised that the results of the pre-test and post-test assessments are anonymized and may be used for clinical research and quality improvement purposes to enhance medical education efficacy.
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>


      {/* ────────────────────────────────────────────────────────────────────────
          MOBILE PORTABLE LAYOUT: Selective Single-Pane Stack View (Fluid Scroll)
          ──────────────────────────────────────────────────────────────────────── */}
      <div className="sm:hidden flex flex-col flex-1" id="mobile-single-panel-layout">
        
        {selectedTopic ? (
          // Drill Down Detail Pathway Checkpoints
          <div className="flex-grow flex flex-col bg-slate-100" id="mobile-stepper-panel">
            {/* Header navigational header */}
            <div className="px-4 py-3 bg-white border-b border-slate-200/50 flex items-center justify-between text-left sticky top-0 z-30">
              <button
                onClick={() => onSelectTopic(null)}
                className="flex items-center gap-1 text-xs font-extrabold text-teal-600 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-100/30"
                id="btn-mobile-back"
              >
                <ArrowLeft className="w-4 h-4" /> Courses
              </button>
              <div className="text-right">
                <h3 className="text-xs font-black text-slate-800 truncate max-w-[140px] leading-tight flex items-center gap-1">
                  {selectedTopic.title}
                </h3>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Learning Path</span>
              </div>
            </div>

            {/* Stepper nodes checklist scroll */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-6" id="mobile-timeline-stepper">
              <div className="text-center max-w-xs mx-auto mb-2 select-none">
                <span className="bg-teal-100 text-teal-800 text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Checkpoints Roadmap
                </span>
                <p className="text-[11px] text-slate-500 mt-2 font-medium">
                  Complete each clinical evaluation checkpoint to unlock the subsequent clinical step.
                </p>
              </div>

              <div className="relative flex flex-col gap-5 text-left w-full max-w-md mx-auto">
                {/* Connection line thread */}
                <div className="absolute left-[20px] top-6 bottom-6 w-1 bg-slate-200 rounded-full" />

                {/* Step 1 pretest */}
                {hasTests && (
                <div className="relative flex items-start gap-4">
                  {prog.preTestCompleted ? (
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm shadow-green-100">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-teal-600 border-4 border-teal-100 text-white flex items-center justify-center shrink-0 z-10 font-bold text-xs shadow">
                      1
                    </div>
                  )}

                  <div className={`flex-1 p-4 rounded-xl border ${
                    prog.preTestCompleted ? 'bg-green-50/50 border-green-100' : 'bg-white border-teal-600 border-2 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-xs text-slate-850">1. Pre-Test Assessment</h4>
                      {prog.preTestCompleted && (
                        <span className="text-[8.5px] font-black bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                          {prog.preTestScore || 0}/{activeTopic.questions.length}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-sans leading-snug">
                      Assess your pre-hospital diagnostic first aid triage instincts.
                    </p>
                    {!prog.preTestCompleted && (
                      <button
                        onClick={onStartPreTest}
                        className="mt-3 bg-teal-600 hover:bg-teal-700 text-white text-[10.5px] font-black px-4 py-1.5 rounded-lg transition active:scale-95"
                        id="btn-mobile-pre-test"
                      >
                        TAKE PRE-TEST
                      </button>
                    )}
                  </div>
                </div>
                )}

                {/* Step 2 slideshow */}
                <div className="relative flex items-start gap-4">
                  {prog.moduleCompleted ? (
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm shadow-green-100">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  ) : moduleUnlocked ? (
                    <div className="w-10 h-10 rounded-full bg-teal-600 border-4 border-teal-100 text-white flex items-center justify-center shrink-0 z-10 font-bold text-xs shadow">
                      {hasTests ? 2 : 1}
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-150 border border-slate-200 text-slate-400 flex items-center justify-center shrink-0 z-10">
                      <Lock className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`flex-grow p-4 rounded-xl border ${
                    prog.moduleCompleted
                      ? 'bg-green-50/50 border-green-100'
                      : moduleUnlocked
                      ? 'bg-white border-teal-600 border-2 shadow-sm'
                      : 'bg-slate-50 border-slate-200/80 text-slate-400'
                  }`}>
                    <h4 className="font-extrabold text-xs">{hasTests ? '2. ' : ''}Study Modules</h4>
                    <p className="text-[11px] text-slate-450 mt-0.5 leading-snug">
                      Learn guidelines, clinical triggers, and diagnostic aides.
                    </p>
                    {moduleUnlocked && !prog.moduleCompleted && (
                      <button
                        onClick={onStartModule}
                        className="mt-3 bg-teal-600 hover:bg-teal-700 text-white text-[10.5px] font-black px-4 py-1.5 rounded-lg transition active:scale-95"
                        id="btn-mobile-start-module"
                      >
                        START MODULE
                      </button>
                    )}
                  </div>
                </div>

                {/* Step 3 Post-Test */}
                {hasTests && (
                <div className="relative flex items-start gap-4">
                  {prog.postTestCompleted ? (
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 z-10 shadow-sm shadow-green-100">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  ) : prog.moduleCompleted ? (
                    <div className="w-10 h-10 rounded-full bg-teal-600 border-4 border-teal-100 text-white flex items-center justify-center shrink-0 z-10 font-bold text-xs shadow">
                      3
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-slate-150 border border-slate-200 text-slate-400 flex items-center justify-center shrink-0 z-10">
                      <Lock className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`flex-grow p-4 rounded-xl border ${
                    prog.postTestCompleted
                      ? 'bg-green-50/50 border-green-100'
                      : prog.moduleCompleted
                      ? 'bg-white border-teal-600 border-2 shadow-sm'
                      : 'bg-slate-50 border-slate-200/80 text-slate-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <h4 className="font-extrabold text-xs">3. Post-Test Evaluation</h4>
                      {prog.postTestCompleted && (
                        <span className="text-[8.5px] font-black bg-green-100 text-green-700 px-1.5 py-0.5 rounded">
                          {prog.postTestScore || 0}/{activeTopic.questions.length}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-450 mt-0.5 leading-snug">
                      Score 80%+ accuracy to successfully master this topic track.
                    </p>
                    {prog.moduleCompleted && !prog.postTestCompleted && (
                      <button
                        onClick={onStartPostTest}
                        className="mt-3 bg-teal-600 hover:bg-teal-700 text-white text-[10.5px] font-black px-4 py-1.5 rounded-lg"
                        id="btn-mobile-start-posttest"
                      >
                        TAKE POST-TEST
                      </button>
                    )}
                    {prog.postTestCompleted && (
                      <button
                        onClick={onStartPostTest}
                        className="mt-3 bg-teal-600 hover:bg-teal-700 text-white text-[10.5px] font-black px-4 py-1.5 rounded-lg"
                        id="btn-mobile-retry-posttest"
                      >
                        RETRY POST-TEST
                      </button>
                    )}
                  </div>
                </div>
                )}

              </div>

              {/* Research disclaimer */}
              <div className="bg-amber-50 border border-amber-100 p-3.5 rounded-xl text-left flex gap-2 w-full mt-4 shrink-0 select-none">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[10px] text-amber-800 leading-normal font-medium">
                  Result data are gathered completely anonymously to assist clinical research and education improvements.
                </p>
              </div>
            </div>
          </div>
        ) : (
          // Topics selection list page (Normal Home tab)
          <div className="flex-grow p-4.5 flex flex-col gap-4 overflow-y-auto pb-24">
            <div className="text-left select-none">
              <span className="text-[9.5px] font-black text-slate-400 uppercase tracking-widest">Active tracks</span>
              <h3 className="text-base font-black text-slate-800 mt-0.5">Choose an emergency track</h3>
            </div>

            <div className="flex flex-col gap-3">
              {topics.map((topic) => {
                const topicProg = getTopicProgress(topic.id);
                
                let activeStepLabel = 'Not Started';
                let valuePercent = 0;
                if (topicProg.postTestCompleted) {
                  activeStepLabel = 'Completed! 🏆';
                  valuePercent = 100;
                } else if (topicProg.moduleCompleted) {
                  activeStepLabel = 'Post-Test Unlocked';
                  valuePercent = 66;
                } else if (topicProg.preTestCompleted) {
                  activeStepLabel = 'Module Unlocked';
                  valuePercent = 33;
                }

                return (
                  <button
                    key={topic.id}
                    onClick={() => onSelectTopic(topic)}
                    className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs text-left hover:border-teal-300 hover:shadow transition-all flex items-center justify-between"
                    id={`mobile-card-${topic.id}`}
                  >
                    <div className="flex items-center gap-3.5 flex-grow min-w-0 pr-1.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 ${topic.bgColor} ${topic.textColor}`}>
                        <TopicIcon name={topic.iconName} className="w-5.5 h-5.5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-extrabold text-slate-800 text-xs truncate">
                          {topic.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">
                          {topic.shortDescription}
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="bg-teal-500 h-full rounded-full"
                              style={{ width: `${valuePercent}%` }}
                            />
                          </div>
                          <span className="text-[8px] font-black text-slate-400 tracking-wider">
                            {activeStepLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <ChevronRight className="w-4.5 h-4.5 text-slate-400 shrink-0 ml-1.5" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
