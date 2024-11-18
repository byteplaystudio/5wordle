import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6 text-sm text-gray-600">
          <Link 
            href="/terms" 
            target="_blank"
            className="hover:text-gray-900 transition-colors"
          >
            Terms of Service
          </Link>
          <Link 
            href="/privacy" 
            target="_blank"
            className="hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="text-center mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Today Unlimited Wordle Today. All rights reserved.
        </div>
      </div>
    </footer>
  );
}