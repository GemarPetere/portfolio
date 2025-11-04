export default function About() {
  return (
    <section id="about" className="py-32 sm:py-40 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Section - Minimal */}
          <div className="order-2 lg:order-1 animate-fade-in-left delay-200">
            <div className="max-w-sm mx-auto lg:mx-0">
              {/* Clean image container */}
              <div className="relative">
                <img 
                  src="/profile-picture.png" 
                  alt="Gemar Petere" 
                  className="w-full h-auto object-cover"
                />
                {/* Minimal border accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gray-700 -z-10"></div>
              </div>
            </div>
          </div>

          {/* Text Content - Minimal */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Section label */}
            <div className="animate-fade-in-up delay-100">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                About
              </p>
            </div>
            
            {/* Heading */}
            <div className="animate-fade-in-up delay-200">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
                Building digital experiences with purpose
              </h2>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-up delay-300" style={{ animationDelay: '0.4s' }}>
                I'm a passionate software developer with a love for creating innovative solutions 
                and beautiful user experiences. With expertise in modern web technologies, I specialize 
                in building scalable, performant applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-up delay-400" style={{ animationDelay: '0.6s' }}>
                My journey in software development started with a curiosity about how things work, 
                and it has evolved into a career focused on continuous learning and improvement. 
                I enjoy working on challenging projects that push me to grow and adapt to new technologies.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-up delay-500" style={{ animationDelay: '0.8s' }}>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. I believe 
                in writing clean, maintainable code and following best practices to deliver high-quality software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

