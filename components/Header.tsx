"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { BarChart3 } from 'lucide-react';

export default function Header() {
  const [stats, setStats] = useState({
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    guessDistribution: [0, 0, 0, 0, 0, 0],
  });

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Today Unlimited Wordle Today</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <BarChart3 className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Statistics</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-4 gap-4 text-center my-4">
              <div>
                <div className="text-2xl font-bold">{stats.gamesPlayed}</div>
                <div className="text-xs text-gray-500">Played</div>
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {stats.gamesPlayed > 0 
                    ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100) 
                    : 0}%
                </div>
                <div className="text-xs text-gray-500">Win %</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.currentStreak}</div>
                <div className="text-xs text-gray-500">Current Streak</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.maxStreak}</div>
                <div className="text-xs text-gray-500">Max Streak</div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Guess Distribution</h3>
              {stats.guessDistribution.map((count, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-4">{index + 1}</div>
                  <div 
                    className="bg-gray-200 h-5 rounded"
                    style={{ 
                      width: `${count > 0 
                        ? (count / Math.max(...stats.guessDistribution)) * 100 
                        : 0}%`,
                      minWidth: '20px'
                    }}
                  >
                    <div className="px-2 text-sm">{count}</div>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}