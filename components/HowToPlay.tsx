export default function HowToPlay() {
  return (
    <section className="max-w-3xl mx-auto mt-16 px-4">
      {/* Basic Instructions */}
      <h2 className="text-2xl font-bold mb-6">How to Play</h2>
      <div className="space-y-4 mb-12">
        <p>
          Guess the word in 6 tries or less. Each guess must be a valid 5-letter word.
        </p>
        <div className="space-y-2">
          <p className="font-semibold">After each guess, the color of the tiles will change to show how close your guess was:</p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-500 flex items-center justify-center text-white font-bold rounded">
              W
            </div>
            <p>The letter is in the word and in the correct spot.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center text-white font-bold rounded">
              I
            </div>
            <p>The letter is in the word but in the wrong spot.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-400 flex items-center justify-center text-white font-bold rounded">
              U
            </div>
            <p>The letter is not in the word.</p>
          </div>
        </div>
      </div>

      {/* Comprehensive Guide */}
      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold mb-6">From Basics to Advanced Strategies</h2>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Introduction</h3>
          <p>
            Wordle is a daily word puzzle game where players have six attempts to guess a five-letter word. 
            The game provides feedback after each guess using colored tiles, making it both challenging and engaging. 
            This guide will walk you through everything you need to know to become a skilled player.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Basic Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>You have 6 attempts to guess the correct 5-letter word</li>
            <li>Each guess must be a valid English word</li>
            <li>Letters can be repeated in a word (like "SWEET")</li>
            <li>All answers are common English words (no abbreviations or proper nouns)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <p className="font-medium">Start with a strong opening word that contains common letters</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Good examples: STARE, CRANE, AUDIO, RAISE</li>
                <li>These words contain frequently used letters in English</li>
                <li>Using vowels in your first guess is particularly helpful</li>
              </ul>
            </li>
            <li>
              <p className="font-medium">Make your second guess based on the feedback</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the colored tiles to inform your next guess</li>
                <li>Avoid reusing gray letters</li>
                <li>Try to reposition yellow letters</li>
                <li>Keep green letters in their correct positions</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Intermediate Strategies</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Letter Frequency</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Most common consonants: R, S, T, L, N</li>
                <li>Most common vowels: E, A, I, O, U</li>
                <li>Use this knowledge when making educated guesses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Word Patterns</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Common prefixes: RE-, UN-, IN-</li>
                <li>Common suffixes: -ED, -ING, -ER, -EST</li>
                <li>Common letter pairs: TH, CH, SH</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Advanced Techniques</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Information Maximization</h4>
              <p>If your first guess reveals little information, use a completely different set of letters in your second guess</p>
              <p className="mt-2">Example: If STARE gives all grays, try CLOUD to test five new letters</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Pattern Recognition</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Learn common word structures</li>
                <li>Recognize when a word might end in -IGHT or -OUND</li>
                <li>Be aware of common consonant clusters (ST-, SP-, TR-)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">3. Double Letter Strategy</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>If you suspect double letters, test them strategically</li>
                <li>Common doubles: EE, OO, LL, SS, TT</li>
                <li>Consider double letters after eliminating other possibilities</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Expert Tips</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">1. Time Management</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Don't rush your guesses</li>
                <li>Take time to analyze all possibilities</li>
                <li>Use the full width of possibilities before making specific guesses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">2. Common Traps to Avoid</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Don't fixate on one word pattern</li>
                <li>Avoid using too many uncommon letters early</li>
                <li>Don't forget that letters can be repeated</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Practice Makes Perfect</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Play daily to develop pattern recognition</li>
            <li>Analyze your solving process after each game</li>
            <li>Learn from situations where you needed all six guesses</li>
            <li>Keep track of words that were particularly challenging</li>
          </ul>
          <p className="mt-4 italic">
            Remember, Wordle is meant to be both challenging and enjoyable. While these strategies will help improve your game, don't forget to have fun with the daily puzzle!
          </p>
        </section>
      </div>
    </section>
  );
}