import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
    longDescription: 'Built a complete e-commerce platform with user authentication, product management, shopping cart, and payment processing. Features include real-time inventory tracking, order management, and comprehensive admin dashboard.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'Developed a task management application that allows teams to collaborate in real-time. Features include drag-and-drop task organization, team chat, file attachments, and progress tracking.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://your-task-manager-demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts and interactive maps.',
    longDescription: 'Created a weather dashboard that provides detailed forecasts, weather maps, and location-based predictions. Features include search functionality, favorite locations, and weather alerts.',
    technologies: ['React', 'JavaScript', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-demo.com',
    featured: false,
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media performance and engagement metrics.',
    longDescription: 'Built an analytics dashboard that aggregates data from multiple social media platforms. Provides insights into engagement rates, follower growth, content performance, and scheduling capabilities.',
    technologies: ['React', 'TypeScript', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
    githubUrl: 'https://github.com/yourusername/social-analytics',
    featured: false,
  },
];

