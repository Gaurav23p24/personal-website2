export type NavLinkType = {
  name: string;
  url: string;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

export type EducationType = {
  institution: string;
  institutionUrl: string;
  degree: string;
  started: string;
  upto: string;
  tasks: string[];
};
// env
export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: string;
  upto: string;
  tasks: string[];
};


export type ProjectType = {
  id: string;
  name: string;
  url: string;
  img: string;
};


export interface FeaturedProjectType
  extends Omit<ProjectType, 'year' | 'repo'> {
  description: string;
  repo?: string;
  tasks?: string;
  tags: string[];
}

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SoftwareSkillType = { name: string; icon: string };

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
