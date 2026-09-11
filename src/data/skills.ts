export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'Code2',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    category: 'Database',
    icon: 'Database',
    skills: ['SQL', 'MongoDB'],
  },
  {
    category: 'Web / Development',
    icon: 'Globe',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
  },
  {
    category: 'AI / ML',
    icon: 'BrainCircuit',
    skills: ['Machine Learning', 'TensorFlow', 'Keras', 'OpenCV'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub'],
  },
];
