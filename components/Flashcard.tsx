import React, { useState } from 'react';
import { FlashcardItem } from '../types';

interface FlashcardProps {
  data: FlashcardItem;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}

const Flashcard: React.FC<FlashcardProps> = ({ data, onNext, onPrev, currentIndex, total }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setTimeout(onNext, 150); // Wait slightly for flip reset visually
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(false);
    setTimeout(onPrev, 150);
  };

  return (
    <div className="w-full max-w-xl mx-auto h-96 perspective-1000">
      <div className="mb-4 flex justify-between items-center text-gray-500 dark:text-slate-400 text-sm">
        <span>Card {currentIndex + 1} de {total}</span>
        <span className="text-xs bg-gray-200 dark:bg-slate-700 px-2 py-1 rounded-full">Clique para virar</span>
      </div>
      
      <div 
        className={`relative w-full h-full cursor-pointer transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleFlip}
        style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-slate-800 border-2 border-brand-100 dark:border-slate-700 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center hover:border-brand-300 dark:hover:border-brand-700 transition-colors"
             style={{ backfaceVisibility: 'hidden' }}>
          <div className="text-sm uppercase tracking-widest text-brand-500 dark:text-brand-400 font-bold mb-4">Conceito</div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{data.front}</h3>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-brand-600 to-brand-800 dark:from-brand-800 dark:to-brand-900 rounded-2xl shadow-xl flex flex-col items-center justify-center p-8 text-center text-white"
             style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          <div className="text-sm uppercase tracking-widest text-brand-200 font-bold mb-4">Definição</div>
          <p className="text-xl leading-relaxed">{data.back}</p>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="px-6 py-2 rounded-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700 disabled:opacity-50 font-medium shadow-sm transition-colors"
        >
          Anterior
        </button>
        <button 
          onClick={handleNext}
          className="px-6 py-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 dark:bg-brand-600 dark:hover:bg-brand-500 font-medium shadow-md transition-colors"
        >
          {currentIndex === total - 1 ? 'Finalizar' : 'Próximo'}
        </button>
      </div>
    </div>
  );
};

export default Flashcard;