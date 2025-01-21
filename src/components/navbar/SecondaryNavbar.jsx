import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '../ui/navigation-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const SecondaryNavbar = () => {
  return (
    <header className='flex justify-between p-4 bg-white'>
      <div className='flex items-center space-x-4'>
        <p className='font-bold text-2xl'>Auctions</p>
        <Select>
          <SelectTrigger className='w-[120px]'>
            <SelectValue placeholder='Filter 1' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[120px]'>
            <SelectValue placeholder='Filter 2' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[120px]'>
            <SelectValue placeholder='Filter 3' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <NavigationMenu>
        <NavigationMenuList className='flex space-x-4'>
          {[
            'Windows/Doors',
            'Home Improvements',
            'Home Services',
            'Home Stores',
            'Subscriptions',
          ].map((item) => (
            <NavigationMenuItem key={item}>
              <NavigationMenuLink
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              >
                {item}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default SecondaryNavbar;
