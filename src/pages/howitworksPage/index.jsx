import HowItWorks from '@/components/how-it-works/HowItWorks';
import SideNav from '@/components/how-it-works/SideNav';
import { useState, useEffect } from 'react';

const HowItWorksPage = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActiveSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 100 &&
          window.scrollY < sectionTop + sectionHeight - 100
        ) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex min-h-screen flex-col lg:flex-row container mx-auto'>
      <SideNav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <main className='flex-1'>
        <HowItWorks />
      </main>
    </div>
  );
};
export default HowItWorksPage;
