import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  homeImprovementItems,
  filterOptions,
  mainNavItems,
} from '@/api/secondaryNav';

const SecondaryNavbar = () => {
  return (
    <div className='flex justify-between p-4 bg-white'>
      <div className='flex items-center space-x-4'>
        <p className='font-bold text-2xl'>Auctions</p>
        <Select>
          <SelectTrigger className='w-[120px]'>
            <SelectValue placeholder='Filter 1' />
          </SelectTrigger>
          <SelectContent>
            {filterOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <NavigationMenu className='z-0 hidden lg:block'>
        <NavigationMenuList className='flex space-x-4'>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='text-base font-normal'>
              Home Improvements
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-[200px] gap-2 p-4'>
                {homeImprovementItems.map((item) => (
                  <li key={item}>
                    <NavigationMenuLink
                      href={`/home-improvements/${item
                        .toLowerCase()
                        .replace(/ /g, '-')}`}
                      className='block select-none rounded-md p-1 text-base leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                    >
                      {item}
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {mainNavItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.href}
                className='text-base font-normal'
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default SecondaryNavbar;
