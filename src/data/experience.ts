import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Solutions Inc.',
    position: 'Senior Software Developer',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: null,
    description: [
      'Led development of microservices architecture, improving system scalability by 40%',
      'Mentored a team of 5 junior developers and conducted code reviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with cross-functional teams to deliver high-quality software products',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: '2',
    company: 'Digital Innovations LLC',
    position: 'Full Stack Developer',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Developed and maintained web applications using React and Node.js',
      'Optimized database queries resulting in 50% faster page load times',
      'Integrated third-party APIs and payment gateways',
      'Participated in agile development processes and sprint planning',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Express'],
  },
  {
    id: '3',
    company: 'StartupXYZ',
    position: 'Frontend Developer',
    location: 'New York, NY',
    startDate: '2019-03',
    endDate: '2020-05',
    description: [
      'Built responsive user interfaces using React and modern CSS frameworks',
      'Collaborated with designers to implement pixel-perfect designs',
      'Improved application performance through code optimization and lazy loading',
      'Contributed to open-source projects and internal component libraries',
    ],
    technologies: ['React', 'JavaScript', 'CSS', 'Sass', 'Webpack'],
  },
];

