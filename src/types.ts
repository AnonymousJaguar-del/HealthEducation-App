export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ModuleSection {
  title: string;
  subtitle: string;
  type: 'mnemonic' | 'stepByStep' | 'comparison' | 'facts';
  items: {
    label: string;
    description: string;
    highlight?: boolean;
    iconName?: string;
  }[];
  notes?: string[];
}

export interface TopicContent {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  bgColor: string; // Tailwind bg color class
  textColor: string; // Tailwind text color class
  identification: ModuleSection;
  firstAid: ModuleSection;
  preTestQuestions: Question[];
  postTestQuestions: Question[];
  questions?: Question[];
}

export interface UserProgress {
  topicId: string;
  preTestCompleted: boolean;
  preTestScore?: number;
  moduleCompleted: boolean;
  postTestCompleted: boolean;
  postTestScore?: number;
}

export interface UserProfile {
  name: string;
  avatar: string; // Key of avatar
  streak: number;
  lastActiveDate?: string;
  progress: Record<string, UserProgress>; // topicId -> progress
}
