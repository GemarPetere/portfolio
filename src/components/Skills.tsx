import { skills } from '../data/skills'
import type { Skill } from '../types'

const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools',
  other: 'Other',
}

const categoryOrder: Skill['category'][] = ['frontend', 'backend', 'database', 'tools', 'other']

// Logo mapping for skills
const skillLogos: Record<string, string> = {
  'React': '/react-logo.png',
  'JavaScript': '/javascript-logo.png',
  'Tailwind CSS': '/tailwind-logo.png',
  'Next.js': '/nextJs-logo.jpg',
  'Expo': '/expo-logo.png',
  'Node.js': '/nodejs-logo.png',
  'Python': '/python-logo.webp',
  'MongoDB': '/mongoDb-logo.png',
  'PostgreSQL': '/PostgreSql-logo.png',
  'MySQL': '/MySql-logo.png',
  'Docker': '/docker-logo.png',
  'AWS': '/aws-logo.png',
}

export default function Skills() {
  // Filter skills to only include those with logos
  const skillsWithLogos = skills.filter(skill => skillLogos[skill.name])
  
  const skillsByCategory = categoryOrder.map(category => ({
    category,
    label: categoryLabels[category],
    skills: skillsWithLogos.filter(skill => skill.category === category),
  })).filter(group => group.skills.length > 0)

  return (
    <section id="skills" className="py-32 sm:py-40 bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up delay-100">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 text-center">
            Skills
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white text-center leading-tight">
            Technologies I work with
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto space-y-16">
          {skillsByCategory.map(({ category, label, skills: categorySkills }, categoryIndex) => (
            <div key={category} className="animate-fade-in-up" style={{ animationDelay: `${(categoryIndex + 1) * 0.1}s` }}>
              {/* Category Label */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {label}
                </h3>
              </div>
              
              {/* Skills List with Logos */}
              <div className="flex flex-wrap gap-4">
                {categorySkills.map((skill, skillIdx) => {
                  const logoPath = skillLogos[skill.name]
                  return (
                    <div
                      key={skill.id}
                      className="flex items-center gap-3 px-4 py-3 border border-gray-700 hover:border-gray-600 transition-colors duration-200 group animate-fade-in-up"
                      style={{ animationDelay: `${(categoryIndex + 1) * 0.1 + (skillIdx + 1) * 0.05}s` }}
                    >
                      {logoPath && (
                        <img 
                          src={logoPath} 
                          alt={skill.name} 
                          className="w-6 h-6 object-contain"
                        />
                      )}
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

