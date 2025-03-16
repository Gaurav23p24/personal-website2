import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for job opportunities in Product Management.',
    'Whether you have a project to discuss or want to critique my articles, \n my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};