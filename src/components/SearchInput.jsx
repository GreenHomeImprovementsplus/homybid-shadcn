import { SearchIcon } from 'lucide-react';
import { Input } from './ui/input';
import { useState } from 'react';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='relative'>
      <SearchIcon
        className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'
        size={14}
      />
      <Input
        type='search'
        placeholder='Search Auctions'
        className='pl-10'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
export default SearchInput;
