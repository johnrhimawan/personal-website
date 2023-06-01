import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250 px] w-40 h-40">
      <motion.div
        className='w-40 h-40 green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className="bg-tertiary rounded-[20px] w-40 h-40 py-5 px-5 min-h-[40px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>        
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What technologies have I used</p>
        <h2 className={styles.sectionHeadText}>Tech.</h2>
      </motion.div>
      <div className='mt-5 flex flex-wrap gap-5'>
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
