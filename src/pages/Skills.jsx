import { motion } from 'framer-motion';
import SkillContainer from '../components/SkillContainer';
//Import Images
import skills from '../img/skills.png';

const Skills = () => {
  return (
    <motion.div
      className='container section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SkillContainer />
      <div className='landingImg'>
        <img src={skills} alt='Web Development Skills' />
      </div>
    </motion.div>
  );
};

export default Skills;
