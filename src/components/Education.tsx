import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-32 sm:py-40 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up delay-100">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 text-center">
            Education
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white text-center leading-tight">
            Academic background
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                {/* Minimal divider line */}
                {index > 0 && (
                  <div className="mb-20 border-t border-gray-700"></div>
                )}
                
                <div className="space-y-6">
                  {/* Header Info */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-white mb-1 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.1}s` }}>
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-gray-400 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.2}s` }}>
                        {edu.field}
                      </p>
                      <p className="text-sm text-gray-500 mt-1 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.3}s` }}>
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 mt-1 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.4}s` }}>
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.2}s` }}>
                      {edu.startDate} — {edu.endDate}
                    </div>
                  </div>
                  
                  {/* Description */}
                  {edu.description && (
                    <p className="text-gray-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.5}s` }}>
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

