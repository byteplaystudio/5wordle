import dictionary from '@/data/dictionary.json';

export const WORD_LIST = Object.keys(dictionary);

export function getRandomWord(): string {
  return WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
}

export function validateWord(word: string): { valid: boolean; error?: string } {
  if (!word || typeof word !== 'string') {
    return { valid: false, error: 'Invalid word: must be a string' };
  }

  const normalizedWord = word.trim().toUpperCase();
  
  if (normalizedWord.length !== 5) {
    return { valid: false, error: 'Word must be 5 letters long' };
  }

  if (!/^[A-Z]{5}$/.test(normalizedWord)) {
    return { valid: false, error: 'Word must contain only letters' };
  }

  const isValidWord = dictionary.hasOwnProperty(normalizedWord);
  return { 
    valid: isValidWord,
    error: isValidWord ? undefined : 'Word not found in dictionary'
  };
}