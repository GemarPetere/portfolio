import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-32 sm:py-40 bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up delay-100">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 text-center">
            Experience
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white text-center leading-tight">
            Work history
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {experience.map((exp, index) => (
              <div 
                key={exp.id} 
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
                      <h3 className="text-2xl sm:text-3xl font-light text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-gray-400">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">
                      {exp.startDate} — {exp.endDate || 'Present'}
                    </div>
                  </div>
                  
                  {/* Description - Clean list */}
                  <ul className="space-y-3">
                    {exp.description.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="text-gray-400 leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: `${(index + 1) * 0.1 + (idx + 1) * 0.05}s` }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Technologies - Minimal */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={tech}
                          className="text-xs text-gray-500 uppercase tracking-wider animate-fade-in-up"
                          style={{ animationDelay: `${(index + 1) * 0.1 + (exp.description.length + techIdx + 1) * 0.05}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

