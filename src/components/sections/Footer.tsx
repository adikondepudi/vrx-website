import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-8">
      <div className="container-premium flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} RecoVR. All Rights Reserved.</p>
        <div className="flex items-center space-x-6">
          <a 
            href="YOUR_LINKEDIN_PAGE_URL_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="mailto:info@recovr-diagnostics.com"
            className="hover:text-gray-300 transition-colors"
          >
            info@recovr-diagnostics.com
          </a>
        </div>
      </div>
    </footer>
  );
}