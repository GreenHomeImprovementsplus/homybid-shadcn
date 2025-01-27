import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft } from 'lucide-react';

const SearchInput = ({ isMobile = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (isMobile) {
    return (
      <>
        {!isSearchOpen ? (
          <Button
            variant='ghost'
            size='sm'
            onClick={() => setIsSearchOpen(true)}
            className='p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-110'
          >
            <Search className='h-5 w-5' />
          </Button>
        ) : (
          <div
            className={`lg:hidden fixed inset-y-0 right-0 w-full bg-white z-50 transform ${
              isSearchOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out shadow-lg`}
          >
            <div className='flex items-center p-4 h-16'>
              <Button
                onClick={() => setIsSearchOpen(false)}
                className='p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset transition duration-300 ease-in-out'
              >
                <ChevronLeft className='h-6 w-6' />
              </Button>

              {/* Mobile Input */}
              <Input
                type='text'
                placeholder='Search Auctions'
                value={searchTerm}
                onChange={handleInputChange}
                className='flex-grow ml-4 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500 transition duration-200 ease-in-out'
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className='relative hidden lg:flex lg:items-center lg:justify-end lg:flex-1 lg:space-x-4'>
      {/* Desktop Input */}
      <Input
        type='text'
        placeholder='Search Auctions'
        value={searchTerm}
        onChange={handleInputChange}
        className='w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500 transition duration-200 ease-in-out'
      />
      <Search className='absolute right-3 top-2.5 h-5 w-5 text-gray-400 transition duration-200 ease-in-out' />
    </div>
  );
};

export default SearchInput;
