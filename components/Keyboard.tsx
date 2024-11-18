"use client";

import { useMemo } from 'react';

const KEYBOARD_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Backspace'],
];

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  guesses: string[];
  targetWord: string;
  isLoading?: boolean;
}

export default function Keyboard({ onKeyPress, guesses, targetWord, isLoading }: KeyboardProps) {
  const letterStatuses = useMemo(() => {
    const statuses: Record<string, 'correct' | 'present' | 'absent'> = {};
    
    guesses.forEach(guess => {
      guess.split('').forEach((letter, index) => {
        const upperLetter = letter.toUpperCase();
        
        if (upperLetter === targetWord[index]) {
          statuses[upperLetter] = 'correct';
        } else if (targetWord.includes(upperLetter) && statuses[upperLetter] !== 'correct') {
          statuses[upperLetter] = 'present';
        } else if (!statuses[upperLetter]) {
          statuses[upperLetter] = 'absent';
        }
      });
    });
    
    return statuses;
  }, [guesses, targetWord]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {KEYBOARD_LAYOUT.map((row, i) => (
        <div key={i} className="flex justify-center gap-1 my-1">
          {row.map((key) => {
            const isSpecialKey = key === 'Enter' || key === 'Backspace';
            const letterStatus = letterStatuses[key];
            
            return (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                disabled={isLoading}
                className={`
                  ${isSpecialKey ? 'px-4' : 'px-3'} 
                  py-4 
                  rounded 
                  font-semibold 
                  text-sm 
                  transition-colors
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                  ${letterStatus === 'correct' ? 'bg-green-500 text-white' :
                    letterStatus === 'present' ? 'bg-yellow-500 text-white' :
                    letterStatus === 'absent' ? 'bg-gray-400 text-white' :
                    'bg-gray-200 hover:bg-gray-300'}
                `}
              >
                {key === 'Backspace' ? '←' : key}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}