export default function Contact() {
  return (
    <section id="contact" className="py-32 sm:py-40 bg-gray-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 animate-fade-in-up delay-100">
              Contact
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white mb-6 leading-tight animate-fade-in-up delay-200">
              Get in touch
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-300">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left delay-400">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-transparent border border-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full border border-gray-700 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-gray-300 px-6 py-3 font-medium hover:from-indigo-600/30 hover:to-purple-600/30 hover:border-indigo-500/50 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200 uppercase tracking-wider text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Social Links */}
            <div className="space-y-12 animate-fade-in-right delay-400">
              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider animate-fade-in-up delay-500" style={{ animationDelay: '0.5s' }}>
                  Contact
                </h3>
                <div className="space-y-6">
                  <div className="animate-fade-in-up delay-600" style={{ animationDelay: '0.6s' }}>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Email</p>
                    <a href="mailto:gemar.petereB@gmail.com" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                      gemar.petereB@gmail.com
                    </a>
                  </div>
                  
                  <div className="animate-fade-in-up delay-700" style={{ animationDelay: '0.7s' }}>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Location</p>
                    <p className="text-gray-300">Available for remote work</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider animate-fade-in-up delay-500" style={{ animationDelay: '0.8s' }}>
                  Social
                </h3>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://www.linkedin.com/in/gemar-petere-253a8b14a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors duration-200 uppercase tracking-wider text-sm animate-fade-in-up delay-600"
                    style={{ animationDelay: '0.9s' }}
                  >
                    <img 
                      src="/linkedIn-logo.png" 
                      alt="LinkedIn" 
                      className="w-5 h-5 object-contain"
                    />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a
                    href="https://github.com/GemarPetere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-200 uppercase tracking-wider text-sm animate-fade-in-up delay-700"
                    style={{ animationDelay: '1s' }}
                  >
                    <img 
                      src="/github-logo.png" 
                      alt="GitHub" 
                      className="w-5 h-5 object-contain"
                    />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

