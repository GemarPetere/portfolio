import { projects } from '../data/projects'

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 sm:py-40 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up delay-100">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 text-center">
            Projects
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white text-center leading-tight">
            Featured work
          </h2>
        </div>
        
        {/* Featured Projects */}
        <div className="max-w-6xl mx-auto space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="mb-6">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-800 border border-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Project Image</span>
                  </div>
                )}
              </div>
              
              {/* Project Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-white mb-2 animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.1}s` }}>
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.1 + 0.2}s` }}>
                    {project.description}
                  </p>
                </div>
                
                {/* Technologies - Minimal */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-500 uppercase tracking-wider animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 0.1 + 0.3 + techIdx * 0.05}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links - Minimal */}
                <div className="flex gap-6 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 0.1 + 0.4}s` }}
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 0.1 + 0.5}s` }}
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-32 max-w-6xl mx-auto">
            <div className="mb-12 animate-fade-in-up delay-300">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
                Other Projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="space-y-4 animate-fade-in-up"
                  style={{ animationDelay: `${(index + featuredProjects.length + 4) * 0.1}s` }}
                >
                  <h3 className="text-xl font-light text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-gray-500 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6 pt-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-400 hover:text-white transition-colors duration-200 uppercase tracking-wider"
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

