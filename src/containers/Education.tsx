'use client';
import { TabList } from '@/components';

import { educationSection } from '../lib/content/education';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';
import { EducationType } from '../lib/types/index';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{educationSection.title}</h2>
      <TabList variant="education" data={educationSection.educations as EducationType[]} />
    </motion.section>
  );
};

export default Education;