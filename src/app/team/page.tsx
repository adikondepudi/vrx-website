import Footer from '@/components/sections/Footer';
import TeamMemberCard from '@/components/ui/TeamMemberCard';
import Image from 'next/image';

const coreTeam = [
  { name: 'Betania', title: 'Clinical Lead', imageUrl: '/images/team/betania.jpg' },
  { name: 'Adi', title: 'Technical Co-Lead', imageUrl: '/images/team/adi.jpg' },
  { name: 'Pratibha', title: 'Research Lead', imageUrl: '/images/team/pratibha.jpg' },
  { name: 'Edmund', title: 'Developer', imageUrl: '/images/team/edmund.jpg' },
  { name: 'Arya', title: 'Developer', imageUrl: '/images/team/arya.jpg' },
  { name: 'Isaac', title: 'Developer', imageUrl: '/images/team/isaac.jpg' },
  // NOTE: Update titles and ensure image filenames in /public/images/team/ match exactly.
];

export default function TeamPage() {
  return (
    <>
      <main className="section-padding bg-black">
        <div className="container-premium text-center">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-20">
            <h1 className="text-headline font-extralight text-white mb-8">
              Meet the Minds Behind <span className="gradient-text font-light">RecoVR</span><span className="text-gray-500">.</span>
            </h1>
            {/* Team Photo Placeholder */}
            <div className="w-full max-w-4xl h-96 bg-gray-900 rounded-2xl flex items-center justify-center text-gray-500 italic mx-auto mb-12 border border-gray-800/50">
              [PLACEHOLDER FOR A PROFESSIONAL TEAM PHOTO HERE]
            </div>
            <h2 className="text-title font-medium text-white mb-4">Our Mission</h2>
            <p className="text-body-large text-gray-400 leading-relaxed">
              We are a dedicated, multidisciplinary team of engineers, developers, and researchers from Johns Hopkins University united by a single mission: to enhance athlete safety through technological innovation. Frustrated by the shortcomings of current concussion management tools, we set out to create a solution that provides the objective clarity that athletes and clinicians deserve. Our team combines expertise in biomedical engineering, software development, and clinical research to drive the future of TBI assessment.
            </p>
          </div>

          {/* Core Team Members */}
          <div className="mb-24">
            <h2 className="text-title font-medium text-white mb-12">Our Core Team</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
              {coreTeam.map(member => <TeamMemberCard key={member.name} {...member} />)}
            </div>
          </div>

          {/* Community Engagement Section */}
          <div>
            <h2 className="text-title font-medium text-white mb-12">Engaging with the Neurological Community</h2>
            <div className="max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-6 md:p-8 shadow-premium border border-gray-800/50">
                <Image
                  src="/images/events/ana-conference-2025.jpg" // NOTE: Ensure this filename is correct
                  alt="The RecoVR team at the ANA 2025 Annual Meeting"
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-glow"
                />
              </div>
              <p className="text-gray-400 mt-6 leading-relaxed max-w-3xl mx-auto">
                The RecoVR team was proud to present our research and the progress of the VRx platform at the American Neurological Association (ANA) Annual Meeting in September 2025. We are committed to collaborating with leading clinicians and researchers to advance the science of TBI recovery.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}