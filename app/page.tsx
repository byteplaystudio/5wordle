import GameBoard from '@/components/GameBoard';
import HowToPlay from '@/components/HowToPlay';
import FAQ from '@/components/FAQ';
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://5wordle.com',
  }
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <GameBoard />
      <HowToPlay />
      <FAQ />
    </div>
  );
}