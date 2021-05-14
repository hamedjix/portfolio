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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aliquid est quas mollitia, temporibus esse, officia ut incidunt id
          itaque animi quam, voluptatem nam voluptas eligendi nemo quia
          asperiores laudantium!
        </p>
        <Link to='/portfolio/contact'>
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
