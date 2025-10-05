import Footer from '@/components/sections/Footer';

const features = [
  {
    title: "Objective Data, Not Opinions",
    description: "VRx replaces subjective symptom reporting with precise, quantitative metrics on eye movement and balance. Our system is designed to be resistant to 'sandbagging,' ensuring the data is a true reflection of an athlete's neurological state."
  },
  {
    title: "Comprehensive Neurological Profile",
    description: "Instead of using multiple tools for different tests, VRx provides a unified assessment of key biomarkers in one seamless experience. This holistic view allows for a more complete understanding of an athlete's recovery trajectory."
  },
  {
    title: "Accessible & Hardware-Agnostic",
    description: "We are a software and data company, not a hardware company. VRx is built to run on commercially available VR headsets, eliminating the need for expensive, proprietary equipment. Our subscription-based model lowers the barrier to adoption for organizations of all sizes, from professional leagues to collegiate teams."
  },
  {
    title: "Clinically Validated",
    description: "Our technology is built on a foundation of rigorous scientific research and an extensive clinical validation plan. We are committed to building a tool that is not only innovative but also trusted and relied upon by the medical community."
  },
];

export default function SolutionPage() {
  return (
    <>
      <main className="section-padding bg-black">
        <div className="container-premium text-center">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-20">
            <h1 className="text-headline font-extralight text-white mb-8">
              The VRx Advantage: <span className="gradient-text font-light">Objective, Comprehensive, Accessible</span><span className="text-gray-500">.</span>
            </h1>
            <p className="text-body-large text-gray-400 leading-relaxed">
              Our mission is to equip every team and clinic with the tools they need to protect their athletes. VRx was designed from the ground up to overcome the limitations of traditional TBI assessment.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature) => (
              <div key={feature.title} className="glass rounded-2xl p-8 text-left shadow-premium border border-gray-800/50">
                <h3 className="text-title font-medium text-white mb-4">{feature.title}</h3>
                <p className="text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}