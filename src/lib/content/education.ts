import { EducationSectionType } from '@/lib/types/sections';

export const educationSection: EducationSectionType = {
  title: 'education',
  educations: [
    {
      institution: 'University of North Carolina at Charlotte',
      institutionUrl: 'https://www.charlotte.edu/',
      degree: 'Master of Science in Information Technology, concentration in IT Management',
      started: 'August 2024',
      upto: 'May 2026',
      tasks: [
        'Coursework: Software Systems Design & Implementation, Network Based Application Development, Human Centered Design, Big Data Analytics.',
        'Active member of the Product Management Club and Tech Talk Series.',
        'Working as a Maintenance Assistant for Housing & Residence Life',
      ],
    },
    {
      institution: 'Uka Tarsadia University',
      institutionUrl: 'https://utu.ac.in/',
      degree: 'Bachelor of Technology in Information Technology',
      started: 'August 2020',
      upto: 'May 2024',
      tasks: [],
    },
    {
      institution: 'Saraswati International School',
      institutionUrl: 'https://www.sisvalsad.edu.in/',
      degree: 'Schooling',
      started: 'June 2008',
      upto: 'April 2020',
      tasks: [],
    },
  ],
};
