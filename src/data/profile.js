const profile = {
  name: 'Mohamed Jaris',
  role: 'Software Developement Engineer',
  location: 'Chennai, Tamil Nadu, India',
  bio: 'Passionate full-stack developer with a love for clean code, open-source, and building things that matter. I thrive in terminal environments and believe in keyboard-first workflows.',

  skills: {
    languages: ['Java','JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'Bash'],
    frameworks: ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'Spring Boot', 'Tailwind CSS'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
    tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'Nginx', 'CI/CD', 'Vim'],
  },

  projects: [
    {
      title: 'DevSync',
      stack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      description: [
        'Real-time collaborative code editor with live cursor tracking',
        'Supports 50+ concurrent users with sub-100ms latency',
        'Integrated terminal and file tree navigation',
      ],
      live: 'https://devsync.example.com',
      repo: 'https://github.com/sirajudeen/devsync',
    },
    {
      title: 'CloudDeploy',
      stack: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
      description: [
        'One-click deployment platform for containerized applications',
        'Auto-scaling with custom metrics and health checks',
        'Built-in CI/CD pipeline with GitHub Actions integration',
      ],
      live: 'https://clouddeploy.example.com',
      repo: 'https://github.com/sirajudeen/clouddeploy',
    },
    {
      title: 'TermFolio',
      stack: ['React', 'Vite', 'CSS'],
      description: [
        'Linux-style terminal portfolio (this website!)',
        'Modular command system with 20+ commands',
        'Full keyboard navigation with history and tab-complete',
      ],
      live: 'https://sirajudeen.dev',
      repo: 'https://github.com/sirajudeen/termfolio',
    },
    {
      title: 'QueryForge',
      stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      description: [
        'Natural language to SQL query converter powered by LLMs',
        'Schema-aware query generation with validation',
        'Query history, caching, and performance analytics',
      ],
      live: 'https://queryforge.example.com',
      repo: 'https://github.com/sirajudeen/queryforge',
    },
  ],

  experience: [
    {
      company: 'Millenia Global',
      role: 'Senior Software Engineer',
      period: 'Jan 2024 \u2013 Present',
      description: [
        'Led migration of monolithic architecture to microservices',
        'Reduced API response times by 40% through caching strategies',
        'Mentored 5 junior developers and conducted code reviews',
      ],
    },
    {
      company: 'StartupXYZ',
      role: 'Full Stack Developer',
      period: 'Jun 2022 \u2013 Dec 2023',
      description: [
        'Built customer-facing dashboard serving 10K+ daily users',
        'Implemented real-time notification system using WebSockets',
        'Optimized database queries reducing load times by 60%',
      ],
    },
    {
      company: 'CodeLabs',
      role: 'Software Engineering Intern',
      period: 'Jan 2022 \u2013 May 2022',
      description: [
        'Developed REST APIs for internal tooling platform',
        'Wrote unit and integration tests achieving 90% coverage',
        'Participated in agile sprints and daily standups',
      ],
    },
  ],

  education: [
    {
      degree: 'B.E in Computer Science & Engineering',
      institution: 'Chennai Institute of Technology',
      year: '2023 \u2013 2027',
      gpa: '8.81 / 10.0',
    },
  ],

  achievements: [
    { title: 'Coding Competitions', description: 'Won 3 Code-A-Thon Competition in various college symposium Events.' },
    { title: 'Sustainable Developement Goals Hackathon', description: 'Participated in CITIL Intra college SDG hackathon and moved into the final round with most sustainable solution in 2025.' },
    { title: 'Cleared Adobe GenAI Hackathon', description: 'Moved to 2nd subsequent Round in Adobe GenAI Hackathon India 2025.' },
    { title: 'VIT Nexathon 2024 Runner', description: 'Participated in VIT NEXATHON and was the Runner up of the event. (2024)' },
  ],

  contact: {
    github: 'https://github.com/MohamedJaris',
    linkedin: 'https://www.linkedin.com/in/mohamed-jaris-0799502b2/',
    email: 'jarismohamed41@gmail.com',
    resume: 'https://drive.google.com/file/d/1Dmu-yw70jQZXKXptTiSy-JuFE_bk3-8i/view?usp=sharinge.pdf',
  },
};

export default profile;
