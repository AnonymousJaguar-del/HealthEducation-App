import { useState, useEffect } from 'react';
import { topicsData } from './data/topicsData';
import { UserProfile, TopicContent, UserProgress } from './types';
import { PhoneFrame } from './components/PhoneFrame';
import { ProfileView } from './components/ProfileView';
import { TopicSelection } from './components/TopicSelection';
import { ModuleSlides } from './components/ModuleSlides';
import { PrePostTest } from './components/PrePostTest';
import { Shield, BookOpen, Clock, HeartPulse, Sparkles, User, Flame } from 'lucide-react';

// v3: tests now use the PDF question sets, so scores saved under v2 no longer apply
const LOCAL_STORAGE_KEY = 'lifesaver_academy_profile_v3';

const DEFAULT_PROFILE: UserProfile = {
  name: 'First Aid Rookie',
  avatar: 'hero-dr',
  streak: 1,
  lastActiveDate: new Date().toDateString(),
  progress: {},
};

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [activeTab, setActiveTab] = useState<'courses' | 'profile'>('courses');
  
  // Navigation Flow State
  const [selectedTopic, setSelectedTopic] = useState<TopicContent | null>(null);
  const [mode, setMode] = useState<'selection' | 'pre-test' | 'module' | 'post-test'>('selection');

  // Load profile from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as UserProfile;
        
        // Handle streak check on load
        const todayStr = new Date().toDateString();
        if (parsed.lastActiveDate && parsed.lastActiveDate !== todayStr) {
          const lastActive = new Date(parsed.lastActiveDate);
          const today = new Date(todayStr);
          const diffTime = Math.abs(today.getTime() - lastActive.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          
          if (diffDays === 1) {
            // Consecutive day! Bumps streak
            parsed.streak += 1;
          } else if (diffDays > 1) {
            // Streak broken, reset to 1
            parsed.streak = 1;
          }
          parsed.lastActiveDate = todayStr;
        }
        
        setProfile(parsed);
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_PROFILE));
      }
    } catch (e) {
      console.error('Error reading localStorage', e);
    }
  }, []);

  // Sync profile edits to localStorage
  const saveProfile = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedProfile));
    } catch (e) {
      console.error('Error writing to localStorage', e);
    }
  };

  const handleUpdateName = (newName: string) => {
    saveProfile({
      ...profile,
      name: newName,
    });
  };

  const handleUpdateAvatar = (newAvatar: string) => {
    saveProfile({
      ...profile,
      avatar: newAvatar,
    });
  };

  const handleResetProgress = () => {
    saveProfile(DEFAULT_PROFILE);
    setSelectedTopic(null);
    setMode('selection');
    setActiveTab('courses');
  };

  // Stepper Progression Logic
  const handleCompletePreTest = (score: number) => {
    if (!selectedTopic) return;
    
    const existingProg = profile.progress[selectedTopic.id] || {
      topicId: selectedTopic.id,
      preTestCompleted: false,
      moduleCompleted: false,
      postTestCompleted: false,
    };

    const updatedProgress = {
      ...profile.progress,
      [selectedTopic.id]: {
        ...existingProg,
        preTestCompleted: true,
        preTestScore: Math.max(score, existingProg.preTestScore || 0),
      },
    };

    saveProfile({
      ...profile,
      progress: updatedProgress,
    });

    // Advance to show the Topic pathway so Module is unlocked
    setMode('selection');
  };

  const handleCompleteModule = () => {
    if (!selectedTopic) return;

    const existingProg = profile.progress[selectedTopic.id] || {
      topicId: selectedTopic.id,
      preTestCompleted: false,
      moduleCompleted: false,
      postTestCompleted: false,
    };

    const updatedProgress = {
      ...profile.progress,
      [selectedTopic.id]: {
        ...existingProg,
        moduleCompleted: true,
        // A topic with no pre/post test (Module 10) is complete once its lesson is read
        ...(selectedTopic.questions.length === 0 && { postTestCompleted: true }),
      },
    };

    saveProfile({
      ...profile,
      progress: updatedProgress,
    });

    setMode('selection');
  };

  const handleCompletePostTest = (score: number) => {
    if (!selectedTopic) return;

    const existingProg = profile.progress[selectedTopic.id] || {
      topicId: selectedTopic.id,
      preTestCompleted: false,
      moduleCompleted: false,
      postTestCompleted: false,
    };

    // Increment streak if completing a test successfully
    let newStreak = profile.streak;
    const todayStr = new Date().toDateString();
    if (profile.lastActiveDate !== todayStr) {
      newStreak += 1;
    }

    const updatedProgress = {
      ...profile.progress,
      [selectedTopic.id]: {
        ...existingProg,
        postTestCompleted: true,
        postTestScore: Math.max(score, existingProg.postTestScore || 0),
      },
    };

    saveProfile({
      ...profile,
      streak: newStreak,
      lastActiveDate: todayStr,
      progress: updatedProgress,
    });

    setMode('selection');
  };

  const masteredCount = Object.values(profile.progress).filter((p) => (p as UserProgress).postTestCompleted).length;
  const progressPercentage = Math.round((masteredCount / topicsData.length) * 100);

  return (
    <PhoneFrame>
      <div className="flex h-full w-full bg-slate-100 overflow-hidden font-sans">
        
        {/* Desktop Left Sidebar Navigation */}
        <aside className="hidden sm:flex w-20 bg-white border-r border-slate-200 flex-col items-center py-6 gap-8 shrink-0 select-none">
          {/* Brand Logo box based on sleek theme */}
          <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-100/80">
            <HeartPulse className="w-6 h-6 text-white animate-pulse" />
          </div>
          
          {/* Menu icons */}
          <div className="flex flex-col gap-6">
            <button
              onClick={() => { setSelectedTopic(null); setMode('selection'); setActiveTab('courses'); }}
              className={`p-3 rounded-xl transition-all ${
                activeTab === 'courses' && !selectedTopic
                  ? 'text-teal-600 bg-teal-50 shadow-sm border border-teal-100/30'
                  : 'text-slate-400 hover:text-teal-600 hover:bg-slate-50'
              }`}
              title="Academy Courses"
            >
              <BookOpen className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => { setSelectedTopic(null); setMode('selection'); setActiveTab('profile'); }}
              className={`p-3 rounded-xl transition-all ${
                activeTab === 'profile'
                  ? 'text-teal-600 bg-teal-50 shadow-sm border border-teal-100/30'
                  : 'text-slate-400 hover:text-teal-600 hover:bg-slate-50'
              }`}
              title="My Profile Stats"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom user summary tag shortcut */}
          <button
            onClick={() => { setSelectedTopic(null); setMode('selection'); setActiveTab('profile'); }}
            className="mt-auto group focus:outline-none"
            title="View Profile Stats"
          >
            <div className="w-10 h-10 rounded-full bg-slate-50 border-2 border-teal-500 overflow-hidden text-teal-600 font-extrabold text-xs flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95 shadow-sm">
              {profile.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
            </div>
          </button>
        </aside>

        {/* Main Workspace Frame */}
        <div className="flex-1 flex flex-col overflow-hidden relative min-w-0">
          
          {/* Main Dashboard Header - Shown only in normal list views */}
          {mode === 'selection' && (
            <header className="bg-white border-b border-slate-200/50 p-5 md:p-6 shrink-0 flex justify-between items-center z-10 select-none">
              <div>
                <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight flex items-center gap-1.5 leading-none">
                  HeartRescue
                  <span className="text-teal-600 font-extrabold text-[10px] uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100 ml-1.5">
                    School Program
                  </span>
                </h1>
                <p className="text-xs text-slate-500 mt-1 max-w-md font-medium">
                  Ramaiah Medical College & Medtronic Foundation cardiovascular emergency training.
                </p>
              </div>
              
              {/* Progress metrics exactly from Sleek Theme */}
              <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/60 p-3 rounded-2xl shadow-sm hover:shadow transition-all">
                <div className="text-right hidden md:block">
                  <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest leading-none">Progress</p>
                  <p className="text-xs font-semibold text-slate-700 mt-1">
                    {masteredCount}/{topicsData.length} Modules Mastered
                  </p>
                </div>
                
                {/* Round progress percentage widget */}
                <div className="w-11 h-11 rounded-full border-4 border-teal-100 flex items-center justify-center shrink-0 text-teal-600 font-bold text-xs select-none">
                  {progressPercentage}%
                </div>
                
                {/* Streak tag */}
                <div className="flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1.5 rounded-xl border border-orange-100">
                  <Flame className="w-4 h-4 fill-orange-500 text-orange-500" />
                  <span className="text-[11px] font-black">{profile.streak} Days</span>
                </div>
              </div>
            </header>
          )}

          {/* Mobile Status Header */}
          {mode === 'selection' && (
            <div className="sm:hidden bg-teal-800 text-white px-4 py-3 flex items-center justify-between shrink-0 select-none shadow">
              <span className="text-xs font-black tracking-widest text-teal-100 uppercase">Vitals</span>
              <div className="flex items-center gap-1 text-xs font-bold text-orange-400 bg-teal-950/40 px-2.5 py-0.5 rounded-full">
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                <span>{profile.streak} Days</span>
              </div>
            </div>
          )}

          {/* Main Content Layout Container */}
          <div className="flex-1 overflow-hidden flex flex-col min-h-0 bg-slate-100">
            {selectedTopic && mode !== 'selection' ? (
              // Quiz or Study module Slides occupy full central panel to support learner focus
              <div className="flex-1 flex flex-col overflow-hidden min-h-0">
                {mode === 'pre-test' && (
                  <PrePostTest
                    type="pre"
                    questions={selectedTopic.questions}
                    onBack={() => setMode('selection')}
                    onComplete={handleCompletePreTest}
                    topicTitle={selectedTopic.title}
                  />
                )}
                {mode === 'module' && (
                  <ModuleSlides
                    topic={selectedTopic}
                    onBack={() => setMode('selection')}
                    onCompleteModule={handleCompleteModule}
                  />
                )}
                {mode === 'post-test' && (
                  <PrePostTest
                    type="post"
                    questions={selectedTopic.questions}
                    onBack={() => setMode('selection')}
                    onComplete={handleCompletePostTest}
                    topicTitle={selectedTopic.title}
                  />
                )}
              </div>
            ) : (
              // Select modules column grid or profile views
              <div className="flex-grow overflow-y-auto h-full">
                {activeTab === 'courses' ? (
                  <TopicSelection
                    topics={topicsData}
                    profile={profile}
                    selectedTopic={selectedTopic}
                    onSelectTopic={setSelectedTopic}
                    onStartPreTest={() => setMode('pre-test')}
                    onStartModule={() => setMode('module')}
                    onStartPostTest={() => setMode('post-test')}
                  />
                ) : (
                  <ProfileView
                    profile={profile}
                    onUpdateName={handleUpdateName}
                    onUpdateAvatar={handleUpdateAvatar}
                    onResetProgress={handleResetProgress}
                    totalModulesCount={topicsData.length}
                  />
                )}
              </div>
            )}
          </div>

          {/* Mobile-only Bottom Tab elements (hidden sm and up) */}
          {mode === 'selection' && !selectedTopic && (
            <div className="sm:hidden h-16 bg-white border-t border-slate-200 flex items-center justify-around shrink-0 relative z-30 shadow-lg">
              <button
                onClick={() => setActiveTab('courses')}
                className={`flex-1 flex flex-col items-center justify-center gap-1 h-full py-1 text-xs font-bold transition-all ${
                  activeTab === 'courses' ? 'text-teal-700 font-extrabold' : 'text-slate-400 hover:text-slate-600'
                }`}
                id="tab-btn-courses"
              >
                <BookOpen className="w-5 h-5" />
                <span className="text-[10px]">Courses</span>
              </button>
              
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-1 flex flex-col items-center justify-center gap-1 h-full py-1 text-xs font-bold transition-all ${
                  activeTab === 'profile' ? 'text-teal-700 font-extrabold' : 'text-slate-400 hover:text-slate-600'
                }`}
                id="tab-btn-profile"
              >
                <User className="w-5 h-5" />
                <span className="text-[10px]">Profile</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </PhoneFrame>
  );
}
