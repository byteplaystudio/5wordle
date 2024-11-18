import { NextResponse } from 'next/server';
import dictionary from '@/data/dictionary.json';

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body || typeof body.guess !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request: guess must be a string', valid: false },
        { status: 400 }
      );
    }

    const guess = body.guess.trim().toUpperCase();
    
    if (guess.length !== 5) {
      return NextResponse.json(
        { error: 'Word must be 5 letters long', valid: false },
        { status: 400 }
      );
    }

    // Ensure the word only contains letters
    if (!/^[A-Z]{5}$/.test(guess)) {
      return NextResponse.json({
        error: 'Word must contain only letters',
        valid: false
      }, { status: 400 });
    }

    // Check if the word exists in our dictionary
    const isValidWord = dictionary.hasOwnProperty(guess);

    return NextResponse.json({ 
      valid: isValidWord,
      error: isValidWord ? undefined : 'Word not found in dictionary'
    });
  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json(
      { error: 'Server error during validation', valid: false },
      { status: 500 }
    );
  }
}