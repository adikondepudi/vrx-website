import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <main className="relative w-full overflow-x-hidden">
        {/* Hero Section */}
        <section className="section-padding flex items-center justify-center text-center bg-black min-h-[70vh]">
          <div className="container-premium">
            <h1 className="text-display font-extralight text-white mb-8">
              Clarity in Concussion Recovery<span className="text-gray-500">.</span>
            </h1>
            <p className="text-body-large text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              RecoVR is pioneering a new standard in Traumatic Brain Injury (TBI) assessment. Our platform, RecoVR, provides objective, data-driven insights to help clinicians make safer return-to-play decisions.
            </p>
            <a href="/our-solution" className="btn-primary shadow-premium">
              Learn More About Our Solution
            </a>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="section-padding bg-gray-950 border-t border-gray-800/50">
          <div className="container-premium text-center max-w-4xl mx-auto">
            <h2 className="text-headline font-extralight text-white mb-8">
              The Guesswork in Concussion Recovery is <span className="gradient-accent-text font-light">Over</span><span className="text-gray-500">.</span>
            </h2>
            <p className="text-body-large text-gray-400 leading-relaxed">
              For too long, assessing an athlete's recovery from a concussion has relied on subjective feedback and tests that can be influenced by an athlete's desire to get back in the game. This ambiguity creates risk for players, teams, and clinicians. The current methods are often incomplete, inconsistent, and vulnerable to "sandbagging," leaving a critical gap in player safety.
            </p>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="section-padding bg-black border-t border-gray-800/50">
          <div className="container-premium text-center max-w-5xl mx-auto">
            <h2 className="text-headline font-extralight text-white mb-8">
              Introducing RecoVR: A New Era of <span className="gradient-text font-light">Neuromonitoring</span><span className="text-gray-500">.</span>
            </h2>
            <p className="text-body-large text-gray-400 leading-relaxed mb-12">
              RecoVR is a non-invasive software platform that transforms a standard VR headset into a powerful and objective clinical tool. Through a series of engaging, game-like assessments, RecoVR precisely measures key neurological biomarkers that are critical indicators of brain health and recovery.
            </p>
            <div className="glass rounded-2xl p-8 lg:p-10 border border-gray-800/50 text-left max-w-3xl mx-auto">
              <h3 className="text-title font-medium text-white mb-6">We capture quantitative data on:</h3>
              <ul className="space-y-3 text-body-large text-gray-300">
                <li className="flex items-start"><span className="text-primary-400 mr-3 mt-1">●</span>Saccadic Eye Movements</li>
                <li className="flex items-start"><span className="text-primary-400 mr-3 mt-1">●</span>Smooth Pursuit Tracking</li>
                <li className="flex items-start"><span className="text-primary-400 mr-3 mt-1">●</span>Fixation Stability</li>
                <li className="flex items-start"><span className="text-primary-400 mr-3 mt-1">●</span>Vestibulo-Ocular Reflex (VOR)</li>
                <li className="flex items-start"><span className="text-primary-400 mr-3 mt-1">●</span>Balance and Posture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="section-padding bg-gray-950 border-t border-gray-800/50">
          <div className="container-premium text-center max-w-4xl mx-auto">
            <h2 className="text-headline font-extralight text-white mb-8">
              See <span className="gradient-text font-light">RecoVR</span> in Action<span className="text-gray-500">.</span>
            </h2>
            <p className="text-body-large text-gray-400 leading-relaxed mb-12">
              Watch our brief demo to see how the RecoVR platform guides an athlete through key assessments, capturing critical neurological data in just minutes. See how we turn complex eye movements into clear, actionable insights for clinicians.
            </p>
            {/* YouTube Embed */}
            <div className="relative overflow-hidden w-full pt-[56.25%] glass rounded-2xl shadow-premium border border-gray-800/50">
              <iframe 
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                src="https://www.youtube.com/embed/GaKoeFerzo0"
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}