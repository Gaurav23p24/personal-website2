import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';


import { FaReact, FaNode } from 'react-icons/fa';  // Example for React & Node.js icons
// import { SiReact, SiNodeDotJs } from 'simple-icons-react';  // Example for React & Node.js icons

// import { SiTrello, SiJira, SiAsana, SiAgile, SiGithub, SiProductHunt, SiKanban } from 'simple-icons-react';


export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'Product Management',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Streamlining project workflows using Trello, Jira, and Asana, ensuring efficient task tracking and sprint planning',
        'Collaborating with cross-functional teams',
        'Conducting user research and testing product concepts with Miro',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official'},
        { name: 'sql', icon: 'vscode-icons:file-type-sql' },
        { name: 'java', icon: 'vscode-icons:file-type-java' },
        { name: 'excel', icon: 'vscode-icons:file-type-excel' },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'Trello', icon: 'logos:trello'},
        { name: 'Jira', icon: 'logos:jira'},
        { name: 'Asana', icon: 'logos:asana'},
        { name: 'Miro', icon: 'logos:miro'},
        { name: 'GitHub', icon: 'logos:github' },
        { name: 'Product Hunt', icon: 'logos:producthunt' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with Figma',
        'Transforming ideas into pixel-perfect designs with Photoshop',
        'Delivering visually engaging and functional design solutions with Photoshop, elevating brand presence',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
        { name: 'sketch', icon: 'logos:sketch' },
        { name: 'framer', icon: 'logos:framer' },
      ],
    },
  ],
};