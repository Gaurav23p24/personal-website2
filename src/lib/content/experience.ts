import { ExperienceSectionType } from '@/lib/types/sections';
// import { ExperienceType } from '@/lib/types';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: '1Rivet LLC',
      companyUrl: 'https://www.1rivet.com/',
      role: 'Database Developer - Internship',
      started: 'February 2024',
      upto: 'June 2024',
      tasks: [
        'Led 15 interns in Scrum environment, delivering the Personal Finance Tracker MVP 2 weeks early.',
        'Secured resources to gamify the savings goal interface.',
        'Guided data modeling with SQL in SSMS, reducing server load by 35% with optimized queries',
        'Automated reports, cutting manual work by 40% through market research.',
      ],
    },
    {
      company: 'Skyttus Private Limited',
      companyUrl: 'https://skyttus.com/',
      role: 'Product Management - Internship',
      started: 'May 2023',
      upto: 'July 2023',
      tasks: [
        'Led the development of a property comparison feature, increasing user engagement by 30%.',
        'Proposed a 3D Virtual Home Design Assistant, improving user retention.',
        'Drove platform adoption among clients, boosting property inquiry KPIs through an effective go-to-market strategy.',
      ],
    },
    {
      company: 'Umiya Social Trust',
      companyUrl: 'https://umiyasocialvalsad.org/',
      role: 'Program Manager',
      started: 'june 2022',
      upto: 'july 2024',
      tasks: [
        'Managed educational programs for underprivileged students, establishing partnerships with local organizations.',
        'Coordinated Gujarat’s largest blood donation camp, earning recognition from the Chief Minister for leadership.',
      ],
    },
  ],
};
