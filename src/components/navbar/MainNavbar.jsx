import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from '../ui/navigation-menu';
import { SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function MainNavbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className='flex justify-between items-center bg-neutral-100 p-4'>
      <div className='flex items-center space-x-4'>
        <p className='font-bold text-2xl'>Homybid</p>
        <div className='w-16' />
        <NavigationMenu>
          <NavigationMenuList className='space-x-6'>
            <NavigationMenuItem>
              <NavigationMenuLink href='#'>Auctions</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='#'>Winners</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='#'>
                How does it Work?
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href='/'>Dashboard</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className='flex items-center'>
        <Input type='search' placeholder='Search Auctions' />
        <Button>Log in</Button>
        <Button
          variant='outline'
          size='sm'
          className='rounded bg-black text-white'
        >
          Sign up
        </Button>
      </div>
    </nav>
  );
}

export default MainNavbar;
