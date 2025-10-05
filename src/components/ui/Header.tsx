'use client';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-black/50 backdrop-blur-lg">
      <div className="container-premium flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-light text-white">
          Reco<span className="gradient-text font-normal">VR</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/our-solution" className="text-gray-300 hover:text-white transition-colors">
            Our Solution
          </Link>
          <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
            Our Team
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}