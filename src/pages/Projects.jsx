import { motion } from 'framer-motion';
import projectData from '../data/projectsData';
const Projects = () => {
  return (
    <motion.div
      className='section container'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {projectData.map((project) => (
        <a
          href={project.link}
          target='a_blank'
          key={project.name}
          className='card'
        >
          <img src={project.img} alt='project' />
          <div className='project-description'>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </a>
      ))}
    </motion.div>
  );
};

export default Projects;
