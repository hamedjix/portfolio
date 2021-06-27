import landingImg from '../img/landing.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      className='container section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='description'>
        <h1>Hamed Jafari</h1>
        <h3>Frontend Web Developer</h3>
        <p>
          Hi, I was an engineer, but always loved to be a programmer, finally I
          decided to change my career and I did it ! Now I'm a frontend
          developer highly skilled at html, css and javascript for responsive
          design, worked on some personal project based on react, and
          successfully worked for two companies. I'm happy because now I'm in
          the way of my dreams. look at my projects to see what I've done :)
        </p>
        <Link to='/contact'>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            Hire Me
          </motion.button>
        </Link>
      </div>
      <div className='landingImg'>
        <img src={landingImg} alt='landingImage' />
      </div>
    </motion.div>
  );
};

export default Home;
