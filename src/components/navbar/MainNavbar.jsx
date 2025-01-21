import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu';

const MainNavbar = () => {
  return (
    <header
      className='flex items-center justify-between p-4 bg-white shadow-md'
      style={{ backgroundColor: '#f12022' }}
    >
      <div className='flex items-center'>Homybid</div>
      <NavigationMenu>
        <NavigationMenuList className='flex space-x-4'>
          {['How it Works', 'Home', 'Auctions', 'My Bids', 'Contact'].map(
            (item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  href={`${item.toLowerCase().replace(/ /g, '-')}`}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default MainNavbar;
