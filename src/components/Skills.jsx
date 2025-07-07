import React from 'react';
import { FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiVite } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GrTechnology } from "react-icons/gr";
import { RiTailwindCssLine } from "react-icons/ri";

const Skills = () => {

  const iconClasses = 'text-7xl'; // Keep icons large

  const iconContainerClasses = 'rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center';


  return (
    <div className='border-b border-neutral-800 pb-24'>
          <h1 className='text-6xl font-bold text-center font-serif mb-10'>
        <span
          className='
            bg-gradient-to-r
            from-cyan-400     /* Starting gradient color (bright blue/cyan) */
            to-purple-600     /* Ending gradient color (deep purple) */
            inline-block
            text-transparent
            bg-clip-text
            font-extrabold    /* Ensure text is thick enough for the effect */
            tracking-wider    /* Slight letter spacing for better look */
            [text-shadow:
                0_0_8px_#22d3ee,    
                0_0_16px_#7c3aed,   
                0_0_24px_#22d3ee,   
                0_0_32px_#7c3aed]'>
          <GrTechnology className="inline-block text-cyan-400 mr-4 text-6xl [text-shadow:0_0_8px_#22d3ee,0_0_16px_#7c3aed]" />
          My Tech-Stack
        </span>
      </h1>
      <div className='flex-wrap flex items-center justify-center gap-4'>

        <div className={iconContainerClasses}>
        <FaPython
  className={`
    ${iconClasses}
    text-yellow-400 
    [text-shadow:0_0_8px_#38BDF8]
  `}
/>
          </div>

        <div className={iconContainerClasses}>
          <FaReact className={`text-cyan-400 ${iconClasses}`} />
        </div>

        <div className={iconContainerClasses}>
          <FaHtml5 className={`text-orange-600 ${iconClasses}`} />
        </div>

        <div className={iconContainerClasses}>
          <FaCss3Alt className={`text-blue-500 ${iconClasses}`} />
        </div>

        <div className={iconContainerClasses}>
          <DiJavascript className={`text-yellow-400 ${iconClasses}`} />
        </div>

        <div className={iconContainerClasses}>
          <SiExpress className={`text-neutral-500 ${iconClasses}`} />
        </div>

        <div className={iconContainerClasses}>
          <SiMongodb className={`text-green-500 ${iconClasses}`} />
        </div>

        <div className={iconContainerClasses}>
          <SiVite className={`text-purple-500 ${iconClasses}`} />
        </div>

        <div className={iconContainerClasses}>
        <RiTailwindCssLine
            className={`
              text-cyan-700       
              ${iconClasses} 
            `}
          />        
        </div>

      </div>
    </div>
  );
};

export default Skills;