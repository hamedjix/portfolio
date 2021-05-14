import skillsData from '../data/skillsData';
import { motion } from 'framer-motion';

const Skill = () => {
  return (
    <div className='skills'>
      {skillsData.map((skill) => (
        <motion.div
          className='skill'
          key={skill.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img className='skill-img' src={skill.img} alt={skill.name} />
          <div className='skill-description'>
            <h3>{skill.name}</h3>
            <p className=''>{skill.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skill;
