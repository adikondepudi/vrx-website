import Footer from '@/components/sections/Footer';

export default function ContactPage() {
  return (
    <>
      <main className="section-padding bg-black flex items-center justify-center min-h-[70vh]">
        <div className="container-premium text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-headline font-extralight text-white mb-8">
              Partner With <span className="gradient-text font-light">Us</span><span className="text-gray-500">.</span>
            </h1>
            <p className="text-body-large text-gray-400 leading-relaxed mb-12">
              We are building the future of objective TBI assessment, and we believe collaboration is key. We are actively seeking clinical partners, advisors, and pilot programs to help us refine our technology and expand our impact. If you are a clinician, athletic trainer, or researcher interested in learning more about VRx or exploring a potential partnership, please get in touch.
            </p>
            <div className="glass rounded-2xl p-8 border border-gray-800/50 space-y-6">
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Email</h3>
                <a href="mailto:info@recovr-diagnostics.com" className="text-xl text-primary-400 hover:text-primary-300 transition-colors">
                  info@recovr-diagnostics.com
                </a>
              </div>
              <div>
                <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Follow Our Journey</h3>
                <a 
                  href="YOUR_LINKEDIN_PAGE_URL_HERE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl text-primary-400 hover:text-primary-300 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}