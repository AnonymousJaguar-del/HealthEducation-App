import { useState } from 'react';
import { UserProfile } from '../types';
import { Award, Flame, RotateCcw, CheckCircle2, User, Check, Edit2 } from 'lucide-react';

const AVATARS = [
  { id: 'hero-dr', name: 'LifeSaver Hero', emoji: '🧑‍⚕️' },
  { id: 'hero-female-doc', name: 'Physician Responder', emoji: '👩‍⚕️' },
  { id: 'hero-female-smart', name: 'Emergency Specialist', emoji: '🦸‍♀️' },
  { id: 'cat-paramedic', name: 'Rescue Guardian', emoji: '🐱' },
  { id: 'shield', name: 'Sepsis Sentinel', emoji: '🛡️' },
  { id: 'brainy', name: 'First Aid Smarty', emoji: '🧠' },
  { id: 'healer', name: 'Heart Protector', emoji: '❤️' },
  { id: 'bot-aid', name: 'AId Companion', emoji: '🤖' },
];

export interface AcademyBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  check: (profile: UserProfile) => boolean;
}

export const ALL_BADGES: AcademyBadge[] = [
  {
    id: 'cardio-scholar',
    title: 'Cardio Scholar',
    description: 'Mastered Module 1: Heart Anatomy & Circulation',
    icon: '🫀',
    check: (p) => !!p.progress['heart-anatomy']?.postTestCompleted,
  },
  {
    id: 'chest-sentinel',
    title: 'Heart Attack Sentinel',
    description: 'Mastered Module 2: Chest Pain & 108 Emergency Action',
    icon: '🛡️',
    check: (p) => !!p.progress['chest-pain']?.postTestCompleted,
  },
  {
    id: 'cpr-hero',
    title: 'Hands-Only Lifesaver',
    description: 'Mastered Module 3: 4C Bystander CPR & AED',
    icon: '⚡',
    check: (p) => !!p.progress['cpr-aed']?.postTestCompleted,
  },
  {
    id: 'wellness-champ',
    title: 'Wellness Champion',
    description: 'Mastered Module 4: Nutrition & 30–60m Exercise',
    icon: '🥗',
    check: (p) => !!p.progress['nutrition-exercise']?.postTestCompleted,
  },
  {
    id: 'risk-assessor',
    title: 'Risk Assessor',
    description: 'Mastered Module 5: CVD Risk Factors & AHA Life’s Simple 7',
    icon: '📊',
    check: (p) => !!p.progress['risk-factors']?.postTestCompleted,
  },
  {
    id: 'fast-guardian',
    title: 'F-A-S-T Guardian',
    description: 'Mastered Module 6: Stroke Recognition & Pre-hospital Triage',
    icon: '🧠',
    check: (p) => !!p.progress['stroke-fast']?.postTestCompleted,
  },
  {
    id: 'community-ambassador',
    title: 'Community Ambassador',
    description: 'Mastered Module 7: Family Outreach & 7-Person Challenge',
    icon: '🤝',
    check: (p) => !!p.progress['community-outreach']?.postTestCompleted,
  },
  {
    id: 'master-clinician',
    title: 'Master Clinician',
    description: 'Scored 100% on any Post-Test Assessment',
    icon: '🥇',
    check: (p) => Object.values(p.progress).some((item) => (item.postTestScore ?? 0) >= 5),
  },
  {
    id: 'active-streak',
    title: 'Dedicated Cadet',
    description: 'Maintained a consecutive 3-day learning streak',
    icon: '🔥',
    check: (p) => p.streak >= 3,
  },
  {
    id: 'heartrescue-champion',
    title: 'HeartRescue Champion',
    description: 'Completed all 7 HeartRescue curriculum tracks',
    icon: '🏆',
    check: (p) => {
      const required = ['heart-anatomy', 'chest-pain', 'cpr-aed', 'nutrition-exercise', 'risk-factors', 'stroke-fast', 'community-outreach'];
      return required.every((id) => p.progress[id]?.postTestCompleted);
    },
  },
];

interface ProfileViewProps {
  profile: UserProfile;
  onUpdateName: (name: string) => void;
  onUpdateAvatar: (avatar: string) => void;
  onResetProgress: () => void;
  totalModulesCount: number;
}

export function ProfileView({
  profile,
  onUpdateName,
  onUpdateAvatar,
  onResetProgress,
  totalModulesCount,
}: ProfileViewProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(profile.name);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Calculate stats
  const progressEntries = Object.values(profile.progress);
  const preTestsCount = progressEntries.filter(p => p.preTestCompleted).length;
  const modulesCount = progressEntries.filter(p => p.moduleCompleted).length;
  const postTestsCount = progressEntries.filter(p => p.postTestCompleted).length;

  // Average post test score (normalized to percentage)
  const postTestPercentages = progressEntries
    .filter(p => p.postTestScore !== undefined)
    .map(p => {
      const s = p.postTestScore || 0;
      return s <= 5 ? Math.round((s / 5) * 100) : Math.round((s / 10) * 100);
    });
  const averageScore = postTestPercentages.length > 0 
    ? Math.round(postTestPercentages.reduce((a, b) => a + b, 0) / postTestPercentages.length) 
    : 0; // percentage

  const handleSaveName = () => {
    if (tempName.trim()) {
      onUpdateName(tempName.trim());
      setIsEditingName(false);
    }
  };

  const selectedAvatar = AVATARS.find(a => a.id === profile.avatar) || AVATARS[0];

  return (
    <div className="p-5 flex flex-col gap-6" id="profile-container">
      {/* Header Profile Section */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 relative">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-3xl shadow-inner select-none">
          {selectedAvatar.emoji}
        </div>
        <div className="flex-1 min-w-0">
          {isEditingName ? (
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                maxLength={20}
                className="bg-slate-100 border border-slate-200 rounded-lg px-2 py-1 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
                placeholder="Your Name"
                autoFocus
              />
              <button
                onClick={handleSaveName}
                className="p-1 px-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                id="btn-save-profile-name"
              >
                <Check className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-lg text-slate-800 truncate">{profile.name}</h3>
              <button
                onClick={() => setIsEditingName(true)}
                className="text-slate-400 hover:text-teal-600 p-1"
                id="btn-edit-profile-name"
              >
                <Edit2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
          <p className="text-xs text-slate-500 mt-0.5 font-medium flex items-center gap-1">
            <Award className="w-3.5 h-3.5 text-amber-500" /> First Responder Cadet
          </p>
        </div>
        
        {/* Streak indicator */}
        <div className="absolute top-4 right-4 bg-orange-50 text-orange-600 px-2.5 py-1 rounded-full flex items-center gap-1 border border-orange-100">
          <Flame className="w-4 h-4 fill-orange-500 text-orange-500 animate-pulse" />
          <span className="text-xs font-bold">{profile.streak} Days</span>
        </div>
      </div>

      {/* Choose Avatar Grid */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Choose Your Avatar</h4>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {AVATARS.map((av) => (
            <button
              key={av.id}
              onClick={() => onUpdateAvatar(av.id)}
              className={`text-2xl p-2 rounded-xl transition flex items-center justify-center border-2 ${
                profile.avatar === av.id
                  ? 'bg-teal-50 border-teal-500 scale-105 shadow-sm'
                  : 'bg-slate-50 border-transparent hover:bg-slate-100'
              }`}
              title={av.name}
              id={`avatar-selector-${av.id}`}
            >
              {av.emoji}
            </button>
          ))}
        </div>
      </div>

      {/* Statistics Section (Duolingo Style) */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Your Learning Stats</h4>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Modules Read</p>
              <p className="text-lg font-extrabold text-slate-700">{modulesCount}/{totalModulesCount}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Post Tests</p>
              <p className="text-lg font-extrabold text-slate-700">{postTestsCount}/{totalModulesCount}</p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center gap-3 col-span-2">
            <div className="w-9 h-9 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 fill-amber-500" />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Pre-test Triage Cleared</p>
              <p className="text-sm font-extrabold text-slate-700">{preTestsCount} Topics Attempted</p>
            </div>
          </div>

          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center gap-3 col-span-2">
            <div className="w-9 h-9 bg-rose-100 text-rose-600 rounded-lg flex items-center justify-center font-bold text-sm">
              %
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Average Post-Test Accuracy</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-extrabold text-slate-700">{postTestsCount > 0 ? `${averageScore}%` : 'N/A'}</p>
                {postTestsCount > 0 && (
                  <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div className="bg-teal-500 h-full" style={{ width: `${averageScore}%` }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Badges & Honors Showcase */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100" id="academy-badges-section">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-teal-600" />
            Academy Badges & Honors
          </h4>
          <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-100">
            {ALL_BADGES.filter((b) => b.check(profile)).length} / {ALL_BADGES.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {ALL_BADGES.map((badge) => {
            const isUnlocked = badge.check(profile);
            return (
              <div
                key={badge.id}
                className={`p-3 rounded-xl border flex items-center gap-3 transition ${
                  isUnlocked
                    ? 'bg-amber-50/50 border-amber-200/80 text-slate-800'
                    : 'bg-slate-50/60 border-slate-200/60 text-slate-400 opacity-60'
                }`}
                id={`badge-card-${badge.id}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 shadow-xs select-none ${
                    isUnlocked ? 'bg-white border border-amber-200' : 'bg-slate-200/50 grayscale'
                  }`}
                >
                  {badge.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h5 className={`font-bold text-xs truncate ${isUnlocked ? 'text-slate-800' : 'text-slate-500'}`}>
                      {badge.title}
                    </h5>
                    {isUnlocked && <span className="text-[9px] font-black text-amber-600">✓</span>}
                  </div>
                  <p className="text-[10px] text-slate-500 leading-tight line-clamp-1 mt-0.5">
                    {badge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dangerous Reset Progress option */}
      <div className="bg-rose-50 border border-rose-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2">
        <h4 className="font-bold text-rose-800 text-sm flex items-center gap-1.5">
          <RotateCcw className="w-4 h-4" /> Reset Your Progress
        </h4>
        <p className="text-xs text-rose-600 max-w-xs">
          This will wipe your streak, reading statistics, and diagnostic score reports. This is irreversible.
        </p>
        
        {showResetConfirm ? (
          <div className="flex gap-2 mt-2 w-full">
            <button
              onClick={() => {
                onResetProgress();
                setShowResetConfirm(false);
              }}
              className="flex-1 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-md transition"
              id="btn-confirm-reset-progress"
            >
              Yes, Reset!
            </button>
            <button
              onClick={() => setShowResetConfirm(false)}
              className="flex-1 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl text-xs font-bold transition"
              id="btn-cancel-reset-progress"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="mt-2 py-1.5 px-4 bg-white border border-rose-300 hover:bg-rose-100 hover:border-rose-400 text-rose-700 rounded-xl text-xs font-bold transition shadow-sm"
            id="btn-trigger-reset-progress"
          >
            Clear All Custom Data
          </button>
        )}
      </div>
    </div>
  );
}
