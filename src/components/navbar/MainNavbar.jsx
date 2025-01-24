import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Fixed header for mobile */}
        <div className='lg:hidden fixed top-0 left-0 right-0 bg-white z-50 shadow-md'>
          <div className='flex items-center justify-between h-16 px-4 sm:px-6'>
            <div className='flex items-center'>
              <Button
                onClick={toggleMenu}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset'
              >
                <span className='sr-only'>
                  {isOpen ? 'Close menu' : 'Open menu'}
                </span>
                {isOpen ? (
                  <X className='block h-6 w-6' aria-hidden='true' />
                ) : (
                  <Menu className='block h-6 w-6' aria-hidden='true' />
                )}
              </Button>
              <div className='flex-shrink-0 flex items-center ml-4'>
                <Link href='/' className='text-2xl font-bold'>
                  Homybid
                </Link>
              </div>
            </div>
            <div className='flex items-center'>
              <Button
                variant='outline'
                className='ml-2 px-4 py-2 border border-transparent text-sm font-medium rounded text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 '
              >
                Sign Up
              </Button>
              <Button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className='p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset'
              >
                <Search className='h-6 w-6' />
              </Button>
            </div>
          </div>
        </div>

        <div className='flex justify-between h-16'>
          <div className='hidden lg:flex items-center'>
            <div className='flex-shrink-0 flex items-center mr-6'>
              <Link href='/' className='text-2xl font-bold'>
                Homybid
              </Link>
            </div>
            <NavigationMenu>
              <NavigationMenuList className='space-x-4'>
                <NavigationMenuItem>
                  <NavigationMenuLink href='/about' className='text-gray-700'>
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href='/how-it-works'
                    className='text-gray-700'
                  >
                    How It Works
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href='/winners' className='text-gray-700'>
                    Winners
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href='/bidders' className='text-gray-700'>
                    Bidders
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href='/contractors'
                    className='text-gray-700'
                  >
                    Contractors
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className='hidden lg:flex lg:items-center lg:justify-end lg:flex-1 lg:space-x-4'>
            <div className='relative'>
              <Input
                type='text'
                placeholder='Search Auctions'
                className='w-64 px-4 py-2 border border-gray-300 rounded-md'
              />
              <Search className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
            </div>
            <Button className='px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black focus:outline-none focus:ring-2 focus:ring-offset-2 '>
              Login
            </Button>
            <Button
              variant='outline'
              className='px-4 py-2 border border-transparent text-sm font-medium rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2'
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-y-0 left-0 w-full bg-white z-40 transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out pt-16`}
        >
          <div className='mt-4 pt-4 pb-3 space-y-1'>
            <Link
              href='/about'
              className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
            >
              About
            </Link>
            <Link
              href='/how-it-works'
              className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
            >
              How It Works
            </Link>
            <Link
              href='/winners'
              className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
            >
              Winners
            </Link>
            <Link
              href='/bidders'
              className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
            >
              Bidders
            </Link>
            <Link
              href='/contractors'
              className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
            >
              Contractors
            </Link>
            <Link
              href='/login'
              className='block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50'
            >
              Login
            </Link>
          </div>
        </div>

        {/* Mobile search input */}
        <div
          className={`lg:hidden fixed inset-y-0 right-0 w-full bg-white z-50 transform ${
            isSearchOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out shadow-lg`}
        >
          <div className='flex items-center p-4 h-16'>
            <Button
              onClick={() => setIsSearchOpen(false)}
              className='p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset'
            >
              <ChevronLeft className='h-6 w-6' />
            </Button>
            <input
              type='text'
              placeholder='Search Auctions'
              className='flex-1 ml-4 px-4 py-2 border border-gray-300 rounded-md'
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
