export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  status: 'active' | 'upcoming';
}

export const internshipJourney: JourneyStep[] = [
  {
    step: '01',
    title: 'Selected',
    description: 'Selected for the Software Development Internship at TEN through their application process.',
    status: 'active',
  },
  {
    step: '02',
    title: 'Onboarding',
    description: 'Completed onboarding, familiarized with the organization, workflows, and expectations.',
    status: 'active',
  },
  {
    step: '03',
    title: 'Building Projects',
    description: 'Working on practical development tasks and building real projects as part of the internship.',
    status: 'active',
  },
  {
    step: '04',
    title: 'Learning & Improving',
    description: 'Continuously learning new technologies and improving problem-solving and development skills.',
    status: 'upcoming',
  },
  {
    step: '05',
    title: 'Performance & Growth',
    description: 'Performance-based growth opportunities based on the quality and consistency of work delivered.',
    status: 'upcoming',
  },
];
