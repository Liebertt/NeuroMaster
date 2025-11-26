import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import Button from './Button';
import ProgressBar from './ProgressBar';

interface QuizComponentProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQ = questions[currentIdx];

  const handleOptionClick = (idx: number) => {
    if (isConfirmed) return;
    setSelectedOption(idx);
  };

  const handleConfirm = () => {
    if (selectedOption === null) return;
    
    setIsConfirmed(true);
    if (selectedOption === currentQ.correctAnswerIdx) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsConfirmed(false);
    } else {
      setShowResult(true);
    }
  };

  const handleFinish = () => {
    onComplete(score);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <div className="mb-6">
          <span className="text-6xl block mb-2">🏆</span>
          <h2 className="text-2xl font-bold text-gray-800">Quiz Completado!</h2>
        </div>
        <div className="mb-8">
          <div className="text-5xl font-black text-brand-600 mb-2">{percentage}%</div>
          <p className="text-gray-600">Você acertou {score} de {questions.length} questões.</p>
        </div>
        <Button onClick={handleFinish} fullWidth>Voltar para Módulos</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <ProgressBar current={currentIdx + 1} total={questions.length} label={`Questão ${currentIdx + 1} de ${questions.length}`} />
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-xl font-bold text-gray-800 mb-6">{currentQ.question}</h3>

        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
            
            if (isConfirmed) {
              if (idx === currentQ.correctAnswerIdx) {
                btnClass += "bg-green-100 border-green-500 text-green-800";
              } else if (idx === selectedOption) {
                btnClass += "bg-red-100 border-red-500 text-red-800";
              } else {
                btnClass += "bg-gray-50 border-gray-200 text-gray-400";
              }
            } else {
              if (selectedOption === idx) {
                btnClass += "bg-brand-50 border-brand-500 text-brand-700 shadow-md scale-[1.01]";
              } else {
                btnClass += "bg-white border-gray-200 hover:border-brand-300 hover:bg-gray-50";
              }
            }

            return (
              <button 
                key={idx} 
                className={btnClass}
                onClick={() => handleOptionClick(idx)}
                disabled={isConfirmed}
              >
                <span className="inline-block w-6 font-bold opacity-50 mr-2">{String.fromCharCode(65 + idx)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {isConfirmed && (
          <div className={`mt-6 p-4 rounded-lg text-sm ${selectedOption === currentQ.correctAnswerIdx ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            <p className="font-bold mb-1">{selectedOption === currentQ.correctAnswerIdx ? 'Correto!' : 'Incorreto'}</p>
            <p>{currentQ.explanation}</p>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          {!isConfirmed ? (
            <Button onClick={handleConfirm} disabled={selectedOption === null}>Confirmar</Button>
          ) : (
            <Button onClick={handleNext}>
              {currentIdx === questions.length - 1 ? 'Ver Resultados' : 'Próxima Questão'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;