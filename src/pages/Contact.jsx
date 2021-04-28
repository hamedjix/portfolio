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
        <label htmlFor='name'>Your Name</label>
        <input type='text' />
        <label htmlFor='email'>Your Email</label>
        <input type='email' />
        <label htmlFor='message'>Your Name</label>
        <textarea name='message' id='message' cols='30' rows='10'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </motion.div>
  );
};

export default Contact;
