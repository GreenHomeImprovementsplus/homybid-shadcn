const SideNav = ({ activeSection, scrollToSection }) => {
  return (
    <aside className='w-full border-r lg:w-64'>
      <nav className='sticky top-0 space-y-1 p-4'>
        <div className='mb-8'>
          <button
            onClick={() => scrollToSection('about')}
            className={`text-lg ${
              activeSection === 'about'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            About Us
          </button>
        </div>
        <div className='mb-8'>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className={`text-lg ${
              activeSection === 'how-it-works'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            HOW IT WORKS
          </button>
        </div>
        <div className='space-y-4'>
          <button
            onClick={() => scrollToSection('buying')}
            className={`block ${
              activeSection === 'buying'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            Buying a Car
          </button>
          <button
            onClick={() => scrollToSection('selling')}
            className={`block ${
              activeSection === 'selling'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            Selling a Car
          </button>
          <button
            onClick={() => scrollToSection('finalizing')}
            className={`block ${
              activeSection === 'finalizing'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            Finalizing the Sale
          </button>
        </div>
        <div className='mt-8 space-y-4'>
          <div className='mb-4'>
            <button
              onClick={() => scrollToSection('faq')}
              className={`text-lg ${
                activeSection === 'faq'
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground'
              } hover:text-foreground`}
            >
              FAQ
            </button>
          </div>
          <button
            onClick={() => scrollToSection('buyer-faq')}
            className={`block ${
              activeSection === 'buyer-faq'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            Buyer FAQ
          </button>
          <button
            onClick={() => scrollToSection('seller-faq')}
            className={`block ${
              activeSection === 'seller-faq'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            Seller FAQ
          </button>
          <button
            onClick={() => scrollToSection('all-faq')}
            className={`block ${
              activeSection === 'all-faq'
                ? 'text-foreground font-semibold'
                : 'text-muted-foreground'
            } hover:text-foreground`}
          >
            All FAQ
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default SideNav;
