import { NextResponse } from 'next/server';
import dictionary from '@/data/dictionary.json';

const WORD_LIST = Object.keys(dictionary);

export const runtime = "edge";

export async function GET() {
  try {
    if (!WORD_LIST.length) {
      throw new Error('Dictionary is empty');
    }

    // Randomly select a word from the dictionary
    const word = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    
    if (!word) {
      throw new Error('Failed to select word');
    }

    return NextResponse.json({ word });
  } catch (error) {
    console.error('Error getting word:', error);
    return NextResponse.json(
      { error: 'Failed to get word' },
      { status: 500 }
    );
  }
}