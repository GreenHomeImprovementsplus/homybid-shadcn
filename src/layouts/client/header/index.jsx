import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <MobileHeader isOpen={isOpen} toggleMenu={toggleMenu} />
      <DesktopHeader />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
