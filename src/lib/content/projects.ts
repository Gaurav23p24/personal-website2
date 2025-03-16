import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'check out my articles on medium',
  projects: [
    {
      id: getId(),
      name: 'The Brain Paradox: When 10 Tasks Aren’t Enough, So You Add 59 More',
      url: 'https://medium.com/@gauravpatel42/the-brain-paradox-when-10-tasks-arent-enough-so-you-add-59-more-645150f11179',
      img: 'https://i.postimg.cc/3RppYqJS/article1-1.jpg',
    },
    {
      id: getId(),
      name: 'The Dumb Question: What’s The Meaning of Life',
      url: 'https://medium.com/@gauravpatel42/the-dumb-question-whats-the-meaning-of-life-b70eccbb63f1',
      img: 'https://i.postimg.cc/RVb0pRvN/peakpx.jpg',
    },
    {
      id: getId(),
      name: 'The Book That Got Me Into The READING HABIT',
      url: 'https://medium.com/@gauravpatel42/the-book-that-got-me-into-the-reading-habit-1e11c33113cc',
      img: 'https://i.postimg.cc/vBzYr7P8/wp3311871-leonardo-da-vinci-wallpapers.jpg',
    },
    {
      id: getId(),
      name: 'How Accurate is The Debate: AI The Death of Human Creativity',
      url: 'https://medium.com/@gauravpatel42/how-accurate-is-the-debate-ai-the-death-of-human-creativity-66171139250e',
      img: 'https://i.postimg.cc/c46x3nfZ/wallhaven-42olm9.jpg',
    },
    {
      id: getId(),
      name: 'So Much To Do And Your Struggle With Motivation',
      url: 'https://medium.com/@gauravpatel42/so-much-to-do-and-your-struggle-with-motivation-633f4079c358',
      img: 'https://i.postimg.cc/Z5dJ7zfM/priscilla-du-preez-Vzq-Eav-UGnss-unsplash.jpg',
    },
  ],
};
