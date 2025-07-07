import React from 'react';
import { FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiExpress, SiMongodb, SiVite } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GrTechnology } from "react-icons/gr";
import { RiTailwindCssLine } from "react-icons/ri";
import {animate, motion } from 'framer-motion';

const Skills = () => {

  const floatVariants = (duration) => ({
    initial: {y:0},
    animate: {
      y:[-10,10],
      transition: {
        repeat : Infinity,
        duration: duration,
        repeatType: 'reverse',
        ease: 'linear'
      },
    },
  });

  const iconClasses = 'text-7xl'; 

  const iconContainerClasses = 'rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center transition duration-300 hover:scale-105';


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
      <div className='flex-wrap flex items-center justify-center gap-7'>

        <motion.div  animate="animate" initial="initial" variants={floatVariants(2.5)}
        className={`${iconContainerClasses} hover:border-amber-300`}>
        <FaPython
            className={`
              ${iconClasses}
              text-blue-300             
              [text-shadow:0_0_8px_#93C5FD,0_0_16px_#60A5FA] 
            `}
          />
          </motion.div>

        <motion.div  animate="animate" initial="initial" variants={floatVariants(3)}
         className={`${iconContainerClasses} hover:border-cyan-500`}>
          <FaReact className={`text-cyan-400 ${iconClasses}`} />
        </motion.div>

        <motion.div animate="animate" variants={floatVariants(2)} initial="initial" className={`${iconContainerClasses} hover:border-orange-400`}>
          <FaHtml5 className={`text-orange-600 ${iconClasses}`} />
        </motion.div>

        <motion.div animate="animate" variants={floatVariants(3.5)} initial="initial" className={`${iconContainerClasses} hover:border-blue-500`}>
          <FaCss3Alt className={`text-blue-500 ${iconClasses}`} />
        </motion.div>

        <motion.div animate="animate" variants={floatVariants(5)} initial="initial" className={`${iconContainerClasses} hover:border-yellow-200`}>
          <DiJavascript className={`text-yellow-400 ${iconClasses}`} />
        </motion.div>

        <motion.div animate="animate" variants={floatVariants(3.6)} initial="initial" className={`${iconContainerClasses} hover:border-white`}>
          <SiExpress className={`text-neutral-500 ${iconClasses}`} />
        </motion.div>

        <motion.div animate="animate" variants={floatVariants(4.3)} initial="initial" className={`${iconContainerClasses} hover:border-green-400`}>
          <SiMongodb className={`text-green-500 ${iconClasses}`} />
        </motion.div>

        <motion.div animate="animate" variants={floatVariants(3.8)} initial="initial" className={`${iconContainerClasses} hover:border-purple-500`}>
          <SiVite className={`text-purple-500 ${iconClasses}`} />
        </motion.div>

        <motion.div animate="animate" variants={floatVariants(2.4)} initial="initial" className={`${iconContainerClasses} hover:border-blue-700`}>
        <RiTailwindCssLine
            className={`
              text-cyan-700       
              ${iconClasses} 
            `}
          />        
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;