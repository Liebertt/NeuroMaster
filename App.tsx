
import React, { useState, useEffect } from 'react';
import { modules } from './data';
import { LearningModule, UserProgress } from './types';
import Flashcard from './components/Flashcard';
import QuizComponent from './components/QuizComponent';
import Button from './components/Button';
import { Brain, Trophy, BookOpen, ArrowLeft, Zap, Star, FileText, Moon, Sun } from 'lucide-react';

// --- Icon Helper ---
const IconMap: Record<string, React.ElementType> = {
  'Type': BookOpen,
  'Network': Brain,
  'Activity': Zap,
  'Image': Star,
  'Cpu': Brain
};

const App: React.FC = () => {
  // --- State ---
  const [view, setView] = useState<'home' | 'flashcards' | 'quiz' | 'summary'>('home');
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  
  // Theme state initialized from local storage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  const [userProgress, setUserProgress] = useState<UserProgress>({
    xp: 0,
    level: 1,
    completedModules: []
  });

  const activeModule = modules.find(m => m.id === activeModuleId);

  // --- Effects ---
  
  // Theme effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Progress persistence effect
  useEffect(() => {
    const saved = localStorage.getItem('neuroMasterProgress');
    if (saved) {
      setUserProgress(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('neuroMasterProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  // --- Handlers ---
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const startModule = (id: string, mode: 'flashcards' | 'quiz' | 'summary') => {
    setActiveModuleId(id);
    setView(mode);
    setActiveCardIdx(0);
  };

  const goHome = () => {
    setView('home');
    setActiveModuleId(null);
  };

  const handleQuizComplete = (score: number) => {
    // Gamification Logic
    const xpGain = score * 20 + 50; // 50 base + 20 per correct answer
    const newXp = userProgress.xp + xpGain;
    const newLevel = Math.floor(newXp / 500) + 1;
    
    const isNewCompletion = activeModuleId && !userProgress.completedModules.includes(activeModuleId);
    const newCompleted = isNewCompletion 
      ? [...userProgress.completedModules, activeModuleId!] 
      : userProgress.completedModules;

    setUserProgress({
      xp: newXp,
      level: newLevel,
      completedModules: newCompleted
    });

    alert(`Parabéns! Você ganhou ${xpGain} XP!`);
    goHome();
  };

  const handleFlashcardsComplete = () => {
    const xpGain = 30;
    setUserProgress(prev => ({ ...prev, xp: prev.xp + xpGain }));
    alert(`Sessão de estudo concluída! +${xpGain} XP`);
    goHome();
  };

  // --- Renders ---

  const renderHome = () => (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Stats */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-brand-100 dark:bg-brand-900/50 p-3 rounded-full">
            <Brain className="w-8 h-8 text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">NeuroMaster</h1>
            <p className="text-gray-500 dark:text-slate-400 text-sm">Domine o Aprendizado de Máquina</p>
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase font-bold tracking-wider">Nível</p>
            <p className="text-2xl font-black text-brand-600 dark:text-brand-400">{userProgress.level}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase font-bold tracking-wider">XP Total</p>
            <p className="text-2xl font-black text-teal-500 dark:text-teal-400">{userProgress.xp}</p>
          </div>
          <div className="text-center border-r border-gray-200 dark:border-slate-700 pr-6">
            <p className="text-xs text-gray-400 dark:text-slate-500 uppercase font-bold tracking-wider">Concluídos</p>
            <p className="text-2xl font-black text-indigo-500 dark:text-indigo-400">{userProgress.completedModules.length}/{modules.length}</p>
          </div>
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>

      {/* Modules Grid */}
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Módulos de Estudo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map(module => {
          const Icon = IconMap[module.icon] || Brain;
          const isDone = userProgress.completedModules.includes(module.id);

          return (
            <div key={module.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:border-brand-200 dark:hover:border-brand-800 transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${isDone ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-brand-50 dark:bg-slate-700 text-brand-600 dark:text-brand-400'}`}>
                    <Icon size={24} />
                  </div>
                  {isDone && <Trophy className="text-yellow-400 w-6 h-6" />}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{module.title}</h3>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-4">{module.description}</p>
                <div className="text-xs font-semibold text-brand-400 dark:text-brand-300 uppercase tracking-wide">{module.type}</div>
              </div>
              <div className="bg-gray-50 dark:bg-slate-800/50 p-4 flex flex-col gap-2 border-t border-gray-100 dark:border-slate-700">
                <Button 
                  variant="ghost"
                  className="w-full text-sm flex items-center justify-center gap-2 bg-brand-50 dark:bg-slate-700 text-brand-700 dark:text-brand-300 hover:bg-brand-100 dark:hover:bg-slate-600"
                  onClick={() => startModule(module.id, 'summary')}
                >
                  <FileText size={16} /> Ler Resumo
                </Button>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 text-sm py-2"
                    onClick={() => startModule(module.id, 'flashcards')}
                  >
                    Estudar
                  </Button>
                  <Button 
                    className="flex-1 text-sm py-2"
                    onClick={() => startModule(module.id, 'quiz')}
                  >
                    Quiz
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderSummary = () => {
    if (!activeModule) return null;
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        <div className="mb-6 flex justify-between items-start">
          <div>
            <button 
              onClick={goHome}
              className="flex items-center text-gray-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Dashboard
            </button>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{activeModule.title}</h2>
            <p className="text-brand-600 dark:text-brand-400 font-medium">Resumo Teórico</p>
          </div>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 prose prose-blue dark:prose-invert max-w-none">
          <div dangerouslySetInnerHTML={{ __html: activeModule.summary }} />
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button 
            variant="outline"
            onClick={() => startModule(activeModule.id, 'flashcards')}
          >
            Ir para Flashcards
          </Button>
          <Button 
            onClick={() => startModule(activeModule.id, 'quiz')}
          >
            Ir para o Quiz
          </Button>
        </div>
      </div>
    );
  };

  const renderFlashcards = () => {
    if (!activeModule) return null;
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen flex flex-col">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <button 
              onClick={goHome}
              className="flex items-center text-gray-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Dashboard
            </button>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{activeModule.title}</h2>
            <p className="text-brand-600 dark:text-brand-400 font-medium">Modo Flashcards</p>
          </div>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Flashcard 
            data={activeModule.flashcards[activeCardIdx]} 
            currentIndex={activeCardIdx}
            total={activeModule.flashcards.length}
            onNext={() => {
              if (activeCardIdx < activeModule.flashcards.length - 1) {
                setActiveCardIdx(prev => prev + 1);
              } else {
                handleFlashcardsComplete();
              }
            }}
            onPrev={() => {
              if (activeCardIdx > 0) setActiveCardIdx(prev => prev - 1);
            }}
          />
        </div>
      </div>
    );
  };

  const renderQuiz = () => {
    if (!activeModule) return null;
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <button 
              onClick={goHome}
              className="flex items-center text-gray-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Desistir e Voltar
            </button>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{activeModule.title}</h2>
            <p className="text-gray-500 dark:text-slate-400">Teste seus conhecimentos</p>
          </div>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <QuizComponent 
          questions={activeModule.quiz}
          onComplete={handleQuizComplete}
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-gray-900 dark:text-slate-100 font-sans selection:bg-brand-200 dark:selection:bg-brand-900/50 selection:text-brand-900 dark:selection:text-brand-100 transition-colors duration-300">
      {view === 'home' && renderHome()}
      {view === 'summary' && renderSummary()}
      {view === 'flashcards' && renderFlashcards()}
      {view === 'quiz' && renderQuiz()}
    </div>
  );
};

export default App;
