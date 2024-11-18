import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Today Unlimited Wordle Today',
  description: 'Terms of Service for Today Unlimited Wordle Today - Read our terms and conditions.',
  alternates: {
    canonical: 'https://5wordle.com/terms',
  }
};

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using Today Unlimited Wordle Today (5wordle.com), you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p>Permission is granted to temporarily access the materials (information or software) on Today Unlimited Wordle Today for personal, non-commercial transitory viewing only.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p>The materials on Today Unlimited Wordle Today are provided on an 'as is' basis. Today Unlimited Wordle Today makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
          <p>In no event shall Today Unlimited Wordle Today or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Today Unlimited Wordle Today.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Revisions and Errata</h2>
          <p>The materials appearing on Today Unlimited Wordle Today could include technical, typographical, or photographic errors. Today Unlimited Wordle Today does not warrant that any of the materials on its website are accurate, complete or current.</p>
        </section>
      </div>
    </div>
  );
}