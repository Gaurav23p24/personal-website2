import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'MedBot',
      description: 'An AI Chatbot for Smarter Healthcare Communication',
      tasks:
        "For my Master's capstone project, I led a team of 4 developers in a Scrum environment to create an AI-powered medical chatbot. Recognizing the need for immediate medical guidance, we designed a solution that uses AI trained on PDF files of medical textbooks to provide real-time, accurate information.",
      url: '',
      img: 'https://i.postimg.cc/htP5vLmb/ezgif-com-webp-to-png-converter-2.png',
      tags: [
        'Python',
        'LangChain',
        'HuggingFace',
        'Pinecone'
      ],
    },
    {
      id: getId(),
      name: 'FinanceTracker',
      description: 'A Personal Finance Tracker to help users manage expenses, set goals, and track financial progress.',
      tasks:
        'During my internship at 1Rivet as a Database Developer, I led a cross-functional team to develop a financial tracking tool. My collaboration with developers and designers resulted in enhanced user engagement, boosting efficiency and contributing to revenue growth.',
      url: '',
      img: 'https://i.postimg.cc/vTr3tXnS/unnamed.png',
      tags: ['SQL', '.NET', 'Angular', 'PowerBI', 'Figma', 'Azure'],
    },
  ],
};

export default featuredProjectsSection;
