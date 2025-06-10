export default function Footer() {
  return (
    <footer className="py-16 bg-[#111111] text-center border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-white">Connect with VRx.</h3>
        <p className="mt-4 text-gray-400">Ready to bring a new standard of care to your organization?</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="mailto:contact@vrx.health"
            className="text-lg text-blue-400 hover:underline"
          >
            contact@vrx.health
          </a>
          <a
            href="/vrx-pitch-deck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-black transition-colors duration-300"
          >
            Download Pitch Deck
          </a>
        </div>
        <p className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} VRx Technologies Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}