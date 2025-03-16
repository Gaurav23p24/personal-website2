'use client';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth, getId } from '@/lib/utils/helper';
import { Link, ListItem } from '@/components';
import { useState } from 'react';

type ExperienceType = {
  company: string;
  companyUrl: string;
  role: string;
  started: string;
  upto: string;
  tasks: string[];
};

type EducationType = {
  institution: string;
  institutionUrl: string;
  degree: string;
  started: string;
  upto: string;
  tasks: string[];
};

// Union type for Props
type Props =
  | { variant: 'experience'; data: ExperienceType[] }
  | { variant: 'education'; data: EducationType[] };

const TabList = ({ variant, data }: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const windowWidth = useWindowWidth();
  const sm = getBreakpointsWidth('sm');

  if (!data || data.length === 0) return null;

  const activeItem = data[activeTab];
  const sliderStyle =
    windowWidth <= sm
      ? { left: `calc(${activeTab} * 120px)` }
      : { top: `calc(${activeTab} * 2.5rem)` };

  const isExperience = variant === 'experience';
  const isEducation = variant === 'education';

  return (
    <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
      {/* Sidebar buttons */}
      <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px]">
        {data.map((item, i) => (
          <button
            // key={i}  // Use index or a stable property like company or institution name as key
            key={isExperience ? (item as ExperienceType).company : (item as EducationType).institution}  // More stable key
            className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
              i === activeTab ? 'text-accent' : ''
            }`}
            onClick={() => setActiveTab(i)}
          >
            {isExperience
              ? (item as ExperienceType).company
              : (item as EducationType).institution}
          </button>
        ))}

        <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
        <div
          style={sliderStyle}
          className="absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
        ></div>
      </div>

      {/* Content */}
      <div className="p-1 space-y-5">
        <div className="space-y-1">
          <h3 className="text-lg font-medium capitalize text-dark-2">
            {isExperience
              ? (activeItem as ExperienceType).role
              : (activeItem as EducationType).degree}{' '}
            <Link
              href={
                isExperience
                  ? (activeItem as ExperienceType).companyUrl
                  : (activeItem as EducationType).institutionUrl
              }
              target="_blank"
              className="text-accent"
            >
              @{isExperience
                ? (activeItem as ExperienceType).company
                : (activeItem as EducationType).institution}
            </Link>
          </h3>
          <p className="font-mono text-xs capitalize">
            {isExperience
              ? `${(activeItem as ExperienceType).started} - ${(activeItem as ExperienceType).upto}`
              : `${(activeItem as EducationType).started} - ${(activeItem as EducationType).upto}`}
          </p>
        </div>

        <ul className="space-y-2">
          {(activeItem as ExperienceType | EducationType).tasks?.map(
            (task, index) => (
              <ListItem key={index}>{task}</ListItem>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default TabList;




// 'use client';
// import useWindowWidth from '@/lib/hooks/use-window-width';
// import { getBreakpointsWidth, getId } from '@/lib/utils/helper';

// import { Link, ListItem } from '@/components';

// import { useState } from 'react';

// type ExperienceType = {
//   company: string;
//   companyUrl: string;
//   role: string;
//   started: string;
//   upto: string;
//   tasks: string[];
// };

// type EducationType = {
//   institution: string;
//   institutionUrl: string;
//   degree: string;
//   started: string;
//   upto: string;
//   tasks: string[];
// };

// // type Props = {
// //   variant: 'experience' | 'education';
// //   data: ExperienceType[] | EducationType[];
// // };

// type Props = 
//   | { variant: 'experience'; data: ExperienceType[] }
//   | { variant: 'education'; data: EducationType[] };


// const TabList = ({ variant, data }: Props) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const windowWidth = useWindowWidth();
//   const sm = getBreakpointsWidth('sm');

//   if (!data || data.length === 0) return null;

//   const activeItem = data[activeTab];
//   const sliderStyle =
//     windowWidth <= sm
//       ? { left: `calc(${activeTab} * 120px)` }
//       : { top: `calc(${activeTab} * 2.5rem)` };

//   const isExperience = variant === 'experience';
//   const isEducation = variant === 'education';

//   return (
//     <div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
//       {/* Sidebar buttons */}
//       <div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px]">
//         {data.map((item, i) => (
//           <button
//             key={getId()}
//             className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
//               i === activeTab ? 'text-accent' : ''
//             }`}
//             onClick={() => setActiveTab(i)}
//           >
//             {isExperience
//               ? (item as ExperienceType).company
//               : (item as EducationType).institution}
//           </button>
//         ))}

//         <div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3"></div>
//         <div
//           style={sliderStyle}
//           className="absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
//         ></div>
//       </div>

//       {/* Content */}
//       <div key={getId()} className="p-1 space-y-5">
//         <div className="space-y-1">
//           <h3 className="text-lg font-medium capitalize text-dark-2">
//             {isExperience
//               ? (activeItem as ExperienceType).role
//               : (activeItem as EducationType).degree}{' '}
//             <Link
//               href={
//                 isExperience
//                   ? (activeItem as ExperienceType).companyUrl
//                   : (activeItem as EducationType).institutionUrl
//               }
//               target="_blank"
//               className="text-accent"
//             >
//               @{isExperience
//                 ? (activeItem as ExperienceType).company
//                 : (activeItem as EducationType).institution}
//             </Link>
//           </h3>
//           <p className="font-mono text-xs capitalize">
//             {isExperience
//               ? `${(activeItem as ExperienceType).started} - ${(activeItem as ExperienceType).upto}`
//               : `${(activeItem as EducationType).started} - ${(activeItem as EducationType).upto}`}
//           </p>
//         </div>

//         <ul className="space-y-2">
//           {(activeItem as ExperienceType | EducationType).tasks?.map(
//             (task, index) => (
//               <ListItem key={index}>{task}</ListItem>
//             )
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TabList;


