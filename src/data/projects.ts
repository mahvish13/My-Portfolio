export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: {
    problem: string;
    solution: string;
    learned: string;
  };
  technologies: string[];
  github: string;
  liveDemo?: string;
  featured: boolean;
  icon: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Invoke — AI Chat Assistant',
    shortDescription:
      'An AI-powered conversational assistant that generates responses and can use web search capabilities to provide useful information.',
    longDescription: {
      problem:
        'Users need quick, intelligent responses to questions with up-to-date information from the web, but most chat assistants lack real-time data access.',
      solution:
        'Built a conversational assistant using the Groq API for fast LLM responses and integrated the Tavily API for web search, allowing the assistant to retrieve current information and provide richer answers.',
      learned:
        'Integrated multiple APIs, handled async conversations, managed context, and built a responsive chat interface with Node.js and Express.',
    },
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'Groq API', 'Tavily API'],
    github: 'https://github.com/mahvish13/invoke',
    featured: true,
    icon: 'MessageSquare',
    accent: 'blue',
  },
  {
    id: 2,
    title: 'Virtual Painter',
    shortDescription:
      'A computer vision application that allows users to draw virtually using hand gestures detected through a webcam.',
    longDescription: {
      problem:
        'Traditional digital drawing requires a mouse or stylus. A gesture-based approach makes drawing more natural and interactive.',
      solution:
        'Used OpenCV for video capture and image processing, combined with MediaPipe for real-time hand landmark detection. Tracked index finger position to draw on screen, with gesture-based color switching and erasing.',
      learned:
        'Computer vision pipeline design, hand landmark tracking, real-time image processing, and gesture recognition with MediaPipe.',
    },
    technologies: ['Python', 'OpenCV', 'MediaPipe'],
    github: 'https://github.com/mahvish13/virtualPainter',
    featured: false,
    icon: 'Brush',
    accent: 'purple',
  },
];

export const projectTechnologies = [
  'All',
  'JavaScript',
  'Python',
  'Node.js',
  'Express.js',
  'OpenCV',
  'MediaPipe',
  'Groq API',
  'Tavily API',
];
