import landingImg from '../img/contact.png';
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <motion.div
      className='container section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className='contact-form'>
        <h2 className='contact-title'>Contact Me</h2>
        <label htmlFor='name'></label>
        <input type='text' placeholder='Your Name' />
        <label htmlFor='email'></label>
        <input type='email' placeholder='Your Email' />
        <label htmlFor='message'></label>
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='5'
          placeholder='Your Message'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
      <div className='landingImg'>
        <img src={landingImg} alt='landingImage' />
      </div>
    </motion.div>
  );
};

export default Contact;
