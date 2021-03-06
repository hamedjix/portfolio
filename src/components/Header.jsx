import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../img/logo.png';
const Header = () => {
  return (
    <header className='container header'>
      <Link to='/'>
        <motion.img
          width='70px'
          src={logo}
          alt='logo'
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
        />
      </Link>
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link className='contact' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
