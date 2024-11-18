export default function FAQ() {
  return (
    <section className="max-w-2xl mx-auto mt-16 px-4 mb-16">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">How is this different from the original Wordle?</h3>
          <p>Unlike the original Wordle which offers one puzzle per day, Today Unlimited Wordle Today allows you to play as many times as you want, with a new word each time.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Are the words random?</h3>
          <p>Yes, each game features a randomly selected 5-letter word from our curated dictionary of common English words.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">How are my statistics saved?</h3>
          <p>Your game statistics are automatically saved to our servers when you're signed in, allowing you to track your progress across devices.</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">What happens if I refresh the page?</h3>
          <p>Your current game progress will be saved, allowing you to continue where you left off even after refreshing the page.</p>
        </div>
      </div>
    </section>
  );
}