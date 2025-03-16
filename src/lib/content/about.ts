import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few areas and tools I’ve been working with recently:',
    items: [
      'Product Designing',
      'Data Science',
      'AI/ML',
      'SQL',
      'PowerBI',
      'Market Research',
    ],
  },
  img: '/gaurav-patel.jpg',
};
