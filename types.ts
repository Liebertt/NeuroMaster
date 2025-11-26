export enum ModuleType {
  NLP = 'NLP & Embeddings',
  NN_BASICS = 'Redes Neurais Básicas',
  RNN = 'Redes Recorrentes (RNN)',
  CNN = 'Redes Convolucionais (CNN)',
  ADVANCED = 'Kohonen, ART & RBF'
}

export interface FlashcardItem {
  id: string;
  front: string;
  back: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIdx: number;
  explanation: string;
}

export interface LearningModule {
  id: string;
  title: string;
  type: ModuleType;
  description: string;
  summary: string; // Novo campo para o resumo teórico
  icon: string;
  flashcards: FlashcardItem[];
  quiz: QuizQuestion[];
}

export interface UserProgress {
  xp: number;
  level: number;
  completedModules: string[];
}