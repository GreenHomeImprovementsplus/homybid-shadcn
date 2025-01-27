import { Link } from 'react-router-dom';
import getNavConfig from './config';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const navLinks = getNavConfig();

  return (
    <div
      className={`lg:hidden fixed inset-y-0 left-0 w-full bg-white z-40 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out pt-16`}
    >
      <div className='mt-4 pt-4 pb-3 space-y-1'>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={toggleMenu}
            className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
          >
            {link.title}
          </Link>
        ))}
        <Link
          to='/login'
          onClick={toggleMenu}
          className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
