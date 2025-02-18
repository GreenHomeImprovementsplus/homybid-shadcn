import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  homeImprovementItems,
  filterOptions,
  mainNavItems,
  homeStores,
} from "@/api/secondaryNav";

const SecondaryNavbar = () => {
  return (
    <div className="flex justify-between p-4 ">
      <div className="flex items-center space-x-4">
        <p className="font-bold text-2xl">Auctions</p>
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Filter 1" />
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

      <div className="flex items-center space-x-4">
        <Select>
          <SelectTrigger className="w-auto border-none">
            <SelectValue placeholder="Home Improvements" />
          </SelectTrigger>
          <SelectContent>
            {homeImprovementItems.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-auto border-none">
            <SelectValue placeholder="Home Stores" />
          </SelectTrigger>
          <SelectContent>
            {homeStores.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {mainNavItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-base font-normal"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SecondaryNavbar;
