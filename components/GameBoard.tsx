"use client";

import { useState, useEffect, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import Keyboard from './Keyboard';
import { getRandomWord, validateWord } from '@/lib/dictionary';

const WORD_LENGTH = 5;
const MAX_ATTEMPTS = 6;

export default function GameBoard() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [targetWord, setTargetWord] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial word
    const word = getRandomWord();
    setTargetWord(word.toUpperCase());
  }, []);

  const handleKeyPress = useCallback(async (key: string) => {
    if (gameStatus !== 'playing' || isLoading) return;

    if (key === 'Enter') {
      if (currentGuess.length !== WORD_LENGTH) {
        toast({
          title: "Word too short",
          description: `Guess must be ${WORD_LENGTH} letters long`,
          variant: "destructive",
        });
        return;
      }

      setIsLoading(true);
      try {
        const validation = validateWord(currentGuess);

        if (!validation.valid) {
          toast({
            title: "Invalid word",
            description: validation.error || "Word not found in dictionary",
            variant: "destructive",
          });
          return;
        }

        const newGuesses = [...guesses, currentGuess.toUpperCase()];
        setGuesses(newGuesses);
        setCurrentGuess('');

        if (currentGuess.toUpperCase() === targetWord) {
          setGameStatus('won');
          toast({
            title: "Congratulations!",
            description: "You won! 🎉",
          });
        } else if (newGuesses.length >= MAX_ATTEMPTS) {
          setGameStatus('lost');
          toast({
            title: "Game Over",
            description: `The word was: ${targetWord}`,
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error('Game error:', error);
        toast({
          title: "Error",
          description: error instanceof Error ? error.message : "An error occurred",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    } else if (key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (/^[A-Za-z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
      setCurrentGuess(prev => (prev + key).toUpperCase());
    }
  }, [currentGuess, guesses, gameStatus, targetWord, toast, isLoading]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      handleKeyPress(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div className="grid gap-2">
        {Array.from({ length: MAX_ATTEMPTS }).map((_, i) => (
          <div key={i} className="flex justify-center gap-2">
            {Array.from({ length: WORD_LENGTH }).map((_, j) => {
              const letter = i === guesses.length 
                ? currentGuess[j] 
                : guesses[i]?.[j] || '';
              
              let status = '';
              if (guesses[i] && targetWord) {
                if (guesses[i][j]?.toUpperCase() === targetWord[j]) {
                  status = 'bg-green-500 text-white border-green-500';
                } else if (targetWord.includes(guesses[i][j]?.toUpperCase() || '')) {
                  status = 'bg-yellow-500 text-white border-yellow-500';
                } else if (guesses[i]?.[j]) {
                  status = 'bg-gray-400 text-white border-gray-400';
                }
              }

              return (
                <div
                  key={j}
                  className={`w-14 h-14 border-2 flex items-center justify-center text-2xl font-bold rounded
                    ${!letter ? 'border-gray-300' : status || 'border-gray-600 bg-gray-100'}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <Keyboard
        onKeyPress={handleKeyPress}
        guesses={guesses}
        targetWord={targetWord}
        isLoading={isLoading}
      />
    </div>
  );
}