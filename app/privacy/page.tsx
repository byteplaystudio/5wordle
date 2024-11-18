import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Today Unlimited Wordle Today',
  description: 'Privacy Policy for Today Unlimited Wordle Today - Learn how we protect your privacy.',
};

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-slate max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including game statistics and preferences. We also automatically collect certain information about your device when you use our games.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to operate and improve our website, track game statistics, and provide customer support.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as described in this privacy policy. We may share anonymous or aggregated information about our users for analytical purposes.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
          <p>We use cookies and similar technologies to track game progress and maintain user preferences. You can control cookies through your browser settings.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>
        </section>
      </div>
    </div>
  );
}