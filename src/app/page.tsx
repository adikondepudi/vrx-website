import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import ValidationSection from '@/components/sections/ValidationSection';
import TeamSection from '@/components/sections/TeamSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        <HeroSection />
      </div>
      
      {/* Problem Section */}
      <div className="relative w-full">
        <ProblemSection />
      </div>
      
      {/* Solution Section with Pinned Scroll */}
      <div className="relative w-full">
        <SolutionSection />
      </div>
      
      {/* How It Works Section with Horizontal Scroll */}
      <div className="relative w-full">
        <HowItWorksSection />
      </div>
      
      {/* Validation Section */}
      <div className="relative w-full">
        <ValidationSection />
      </div>
      
      {/* Team Section */}
      <div className="relative w-full">
        <TeamSection />
      </div>
      
      {/* Footer */}
      <div className="relative w-full">
        <Footer />
      </div>
    </main>
  );
}
