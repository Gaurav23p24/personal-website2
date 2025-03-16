'use client';
import { TabList } from '@/components';
import { experienceSection } from '../lib/content/experience';
import { getSectionAnimation } from '../styles/animations';
import { motion } from 'framer-motion';
import { ExperienceType } from '@/lib/types/index';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="max-w-3xl py-32 mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <TabList variant="experience" data={experienceSection.experiences as ExperienceType[]} />
    </motion.section>
  );
};

export default Experience;