import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '../ui/navigation-menu';
import ListItem from '../ListItem';

const MainNavbar = () => {
  return (
    <header
      className='flex justify-end p-4 bg-white shadow-md'
      style={{ backgroundColor: '#e0e0e0' }}
    >
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

export default MainNavbar;
